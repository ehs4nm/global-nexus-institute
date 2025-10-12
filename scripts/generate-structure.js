import fs from "fs-extra";
import path from "path";
import { glob } from "glob";
import * as babel from "@babel/parser";
import traverse from "@babel/traverse";

const projectRoot = "./src";
const outputFile = "PROJECT_STRUCTURE.md";

function analyzeFunction(node, code) {
  const flow = [];
  const calls = [];
  const dataFlow = {
    receives: [],
    returns: null,
    mutates: []
  };

  // Get parameters
  if (node.params) {
    dataFlow.receives = node.params.map(p => {
      if (p.type === 'Identifier') return `param_${p.name}`;
      if (p.type === 'ObjectPattern') return 'destructured_object';
      if (p.type === 'ArrayPattern') return 'destructured_array';
      return 'param';
    });
  }

  // Traverse function body
  traverse.default(node, {
    IfStatement() {
      flow.push('CONDITIONAL');
    },
    ForStatement() {
      flow.push('LOOP');
    },
    WhileStatement() {
      flow.push('LOOP');
    },
    CallExpression({ node: callNode }) {
      if (callNode.callee.type === 'Identifier') {
        calls.push(callNode.callee.name);
      } else if (callNode.callee.type === 'MemberExpression') {
        const obj = callNode.callee.object.name || 'object';
        const method = callNode.callee.property.name;
        calls.push(`${obj}.${method}`);
      }
    },
    ReturnStatement({ node: retNode }) {
      if (retNode.argument?.type === 'Identifier') {
        dataFlow.returns = retNode.argument.name;
      } else if (retNode.argument) {
        dataFlow.returns = retNode.argument.type.replace('Expression', '');
      }
    },
    AssignmentExpression({ node: assignNode }) {
      if (assignNode.left.type === 'Identifier') {
        dataFlow.mutates.push(assignNode.left.name);
      }
    }
  }, node);

  return { flow, calls, dataFlow };
}

function mapFile(code, filepath) {
  const map = {
    type: 'unknown',
    exports: [],
    functions: [],
    dataFlow: []
  };

  try {
    const ast = babel.parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    const traverseFn = traverse.default || traverse;

    traverseFn(ast, {
      ExportDefaultDeclaration({ node }) {
        const name = node.declaration?.id?.name || 'DefaultExport';
        map.exports.push(name);
      },

      ExportNamedDeclaration({ node }) {
        if (node.declaration?.declarations) {
          node.declaration.declarations.forEach(d => {
            if (d.id?.name) map.exports.push(d.id.name);
          });
        } else if (node.declaration?.id) {
          map.exports.push(node.declaration.id.name);
        }
        node.specifiers?.forEach(s => map.exports.push(s.exported.name));
      },

      FunctionDeclaration({ node }) {
        if (node.id?.name) {
          const analysis = analyzeFunction(node, code);
          map.functions.push({
            name: node.id.name,
            type: /^[A-Z]/.test(node.id.name) ? 'Component' : 'function',
            ...analysis
          });
        }
      },

      VariableDeclaration({ node }) {
        node.declarations.forEach(d => {
          if (d.id?.name && d.init) {
            const isFunc = d.init.type === 'ArrowFunctionExpression' || 
                          d.init.type === 'FunctionExpression';
            
            if (isFunc) {
              const analysis = analyzeFunction(d.init, code);
              const name = d.id.name;
              let type = 'function';
              
              if (/^[A-Z]/.test(name)) type = 'Component';
              else if (/^use[A-Z]/.test(name)) type = 'Hook';
              
              map.functions.push({
                name,
                type,
                ...analysis
              });
            }
          }
        });
      },

      ImportDeclaration({ node }) {
        const source = node.source.value;
        if (source.startsWith('.')) {
          map.dataFlow.push({
            action: 'IMPORTS_FROM',
            source: source
          });
        }
      }
    });

    // Determine file type
    if (map.functions.some(f => f.type === 'Component')) map.type = 'Component';
    else if (map.functions.some(f => f.type === 'Hook')) map.type = 'Hook';
    else if (map.exports.length > 0) map.type = 'Module';

  } catch (err) {
    map.error = err.message.split('\n')[0];
  }

  return map;
}

function generatePseudocode(fileMap, filepath) {
  let pseudo = `\n### ${filepath}\n`;
  pseudo += `Type: ${fileMap.type}\n`;
  
  if (fileMap.exports.length > 0) {
    pseudo += `Exports: ${fileMap.exports.join(', ')}\n`;
  }

  if (fileMap.functions.length > 0) {
    pseudo += `\n`;
    fileMap.functions.forEach(func => {
      pseudo += `${func.type} ${func.name}:\n`;
      
      if (func.dataFlow.receives.length > 0) {
        pseudo += `  INPUT: ${func.dataFlow.receives.join(', ')}\n`;
      }
      
      if (func.calls.length > 0) {
        const uniqueCalls = [...new Set(func.calls)];
        pseudo += `  CALLS: ${uniqueCalls.join(', ')}\n`;
      }
      
      if (func.flow.length > 0) {
        const flowSummary = func.flow.reduce((acc, item) => {
          acc[item] = (acc[item] || 0) + 1;
          return acc;
        }, {});
        const flowStr = Object.entries(flowSummary)
          .map(([k, v]) => v > 1 ? `${k}×${v}` : k)
          .join(', ');
        pseudo += `  LOGIC: ${flowStr}\n`;
      }
      
      if (func.dataFlow.returns) {
        pseudo += `  OUTPUT: ${func.dataFlow.returns}\n`;
      }
      
      pseudo += `\n`;
    });
  }

  return pseudo;
}

function buildFileTree(files) {
  const tree = {};
  
  files.forEach(file => {
    const parts = file.split('/');
    let current = tree;
    
    parts.forEach((part, idx) => {
      if (idx === parts.length - 1) {
        if (!current._files) current._files = [];
        current._files.push(part);
      } else {
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });
  
  return tree;
}

function printTree(tree, indent = '') {
  let output = '';
  const dirs = Object.keys(tree).filter(k => k !== '_files').sort();
  const files = tree._files || [];
  
  dirs.forEach((dir, idx) => {
    const isLast = idx === dirs.length - 1 && files.length === 0;
    output += `${indent}${isLast ? '└──' : '├──'} ${dir}/\n`;
    output += printTree(tree[dir], indent + (isLast ? '    ' : '│   '));
  });
  
  files.sort().forEach((file, idx) => {
    const isLast = idx === files.length - 1;
    output += `${indent}${isLast ? '└──' : '├──'} ${file}\n`;
  });
  
  return output;
}

(async () => {
  try {
    const files = await glob(`${projectRoot}/**/*.{js,jsx,ts,tsx}`);
    const fileMap = {};
    
    console.log("🔍 Analyzing project...");
    
    for (const file of files) {
      const code = fs.readFileSync(file, "utf-8");
      const relative = path.relative(projectRoot, file).replace(/\\/g, '/');
      fileMap[relative] = mapFile(code, relative);
    }

    // Generate markdown
    let markdown = `# PROJECT STRUCTURE\n\n`;
    markdown += `> Pseudocode representation of project architecture and data flow\n\n`;
    
    // File tree
    markdown += `## 📁 File Structure\n\n`;
    markdown += '```\n';
    markdown += 'src/\n';
    const relativeFiles = files.map(f => path.relative(projectRoot, f).replace(/\\/g, '/'));
    const tree = buildFileTree(relativeFiles);
    markdown += printTree(tree, '');
    markdown += '```\n';
    
    // Group by type
    const grouped = {
      Components: [],
      Hooks: [],
      Modules: [],
      Other: []
    };
    
    Object.entries(fileMap).forEach(([file, map]) => {
      if (map.type === 'Component') grouped.Components.push([file, map]);
      else if (map.type === 'Hook') grouped.Hooks.push([file, map]);
      else if (map.type === 'Module') grouped.Modules.push([file, map]);
      else grouped.Other.push([file, map]);
    });
    
    // Generate pseudocode sections
    ['Components', 'Hooks', 'Modules'].forEach(category => {
      if (grouped[category].length > 0) {
        markdown += `\n## 🔷 ${category}\n`;
        grouped[category].forEach(([file, map]) => {
          markdown += generatePseudocode(map, file);
        });
      }
    });
    
    // Data flow summary
    markdown += `\n## 🔄 Data Flow Summary\n\n`;
    
    const allCalls = {};
    Object.entries(fileMap).forEach(([file, map]) => {
      map.functions.forEach(func => {
        func.calls.forEach(call => {
          if (!allCalls[call]) allCalls[call] = [];
          allCalls[call].push(`${file}:${func.name}`);
        });
      });
    });
    
    const topCalls = Object.entries(allCalls)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 10);
    
    if (topCalls.length > 0) {
      markdown += `### Most Called Functions\n\n`;
      topCalls.forEach(([call, callers]) => {
        markdown += `- **${call}** (called ${callers.length} times)\n`;
      });
    }

    await fs.writeFile(outputFile, markdown);
    console.log(`✅ Generated ${outputFile}`);
    console.log(`📊 ${files.length} files analyzed`);
    console.log(`📄 ${Object.values(fileMap).reduce((sum, m) => sum + m.functions.length, 0)} functions mapped`);
    
  } catch (err) {
    console.error("❌", err.message);
    process.exit(1);
  }
})();