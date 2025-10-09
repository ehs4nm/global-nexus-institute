# 🤖 How to Onboard a New LLM Agent to This Project

## 🎯 Quick Answer

When you need a new LLM agent (like Claude, GPT-4, etc.) to work on this project, give them this exact prompt:

---

## 📋 **COPY THIS PROMPT** ⬇️

```
Hi! I need help with my TonyTony project (Global Nexus Institute website).

IMPORTANT: This project has a COMPLETE Brutalist Design System already built.

Before writing any code, please read these files:
1. cat /Users/ehsan/Desktop/TonyTony/BRUTALIST_CLASSES_CHEATSHEET.md
2. cat /Users/ehsan/Desktop/TonyTony/LLM_AGENT_ONBOARDING.md

Project Details:
- Location: /Users/ehsan/Desktop/TonyTony
- Framework: Gatsby (React + GraphQL)
- Styling: Tailwind CSS + 22 custom design system classes

KEY RULES:
✅ USE design system classes (brutalist-section, brutalist-card, brutalist-heading, etc.)
❌ DON'T write inline utility classes for common patterns
✅ CHECK existing sections for patterns (src/components/sections/)
❌ NEVER use "font-display" (use "font-title-bold" instead)
✅ ALWAYS add "group" manually in JSX (not in CSS @apply)

EXAMPLE PATTERN:
<section className="brutalist-section text-black dark:text-white">
  <div className="brutalist-container">
    <h2 className="brutalist-heading">Title</h2>
    <div className="brutalist-card group p-8">
      <h3 className="brutalist-card-title">Card Title</h3>
      <p className="brutalist-body">Content</p>
    </div>
  </div>
</section>

MY TASK:
[Describe what you want done]

Please confirm you've read the cheatsheet before proceeding.
```

---

## 📚 Available Documentation Files

Your project has these files for LLM agents:

### **For Quick Start**
1. **`BRUTALIST_CLASSES_CHEATSHEET.md`** ⭐
   - Quick reference of all 22 classes
   - Copy-paste examples
   - Common patterns
   - **Start here!**

2. **`LLM_AGENT_ONBOARDING.md`** ⭐
   - Complete onboarding guide
   - Project structure
   - Critical rules
   - Example workflows
   - **Read this second!**

### **For Deep Dives**
3. **`DESIGN_SYSTEM_GUIDE.md`**
   - Complete design system documentation
   - How to switch design systems
   - Migration guide

4. **`FONT_CONFIGURATION.md`**
   - Font class reference
   - Available fonts
   - Common mistakes

5. **`DARK_MODE_FIXES.md`**
   - Dark mode patterns
   - Color inversion rules
   - Troubleshooting

### **For Reference**
6. **`MIGRATION_COMPLETE.md`**
   - Migration history
   - Before/after examples
   - Impact analysis

7. **`MISSION_ACCOMPLISHED.md`**
   - Project completion summary
   - Final statistics

8. **`NEW_LLM_PROMPT.txt`**
   - Ready-to-copy prompt template

---

## 🎬 Step-by-Step Process

### **Step 1: Start a New Chat**
Open a new conversation with any LLM agent (Claude, GPT-4, etc.)

### **Step 2: Copy the Prompt**
Use the prompt template above (or from `NEW_LLM_PROMPT.txt`)

### **Step 3: Add Your Task**
Replace `[Describe what you want done]` with your actual task:

**Examples:**
```
MY TASK:
Add a new Testimonials section to the homepage
```

```
MY TASK:
Update the HeroSection to include a subtitle
```

```
MY TASK:
Create a new PricingSection with 3 pricing tiers
```

### **Step 4: Verify Understanding**
The LLM should respond with something like:
```
"Let me read the design system documentation first...
[reads files]
I see you have a Brutalist Design System with 22 classes.
I'll use brutalist-section, brutalist-card, etc."
```

If they don't mention the design system, **stop them** and say:
```
"Please read BRUTALIST_CLASSES_CHEATSHEET.md first before proceeding"
```

---

## ⚠️ Common Issues & Solutions

### **Issue 1: LLM Writes Inline Utilities**
**Problem:**
```jsx
<h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black...">
```

**Solution:**
```
"Stop! Please use the design system class instead:
<h2 className="brutalist-heading">
Check BRUTALIST_CLASSES_CHEATSHEET.md for the correct class."
```

### **Issue 2: LLM Uses `font-display`**
**Problem:**
```jsx
className="font-display ..."  // ❌ This doesn't exist!
```

**Solution:**
```
"font-display doesn't exist. Use font-title-bold instead.
See FONT_CONFIGURATION.md for details."
```

### **Issue 3: LLM Doesn't Add `group`**
**Problem:**
```jsx
<div className="brutalist-card p-8">  // ❌ Missing 'group'
  <div className="brutalist-accent-line"></div>
</div>
```

**Solution:**
```
"Please add 'group' manually to enable hover effects:
<div className='brutalist-card group p-8'>
See IMPORTANT_GROUP_CLASS_NOTE.md for why."
```

---

## 💡 Pro Tips

### **Tip 1: Be Specific**
Bad: "Add a new section"
Good: "Add a testimonials section using brutalist-card for each testimonial"

### **Tip 2: Reference Existing Sections**
```
"Create a new section similar to MissionSection but with 6 cards instead of 4"
```

### **Tip 3: Ask for Patterns First**
```
"Before coding, show me which design system classes you'll use"
```

### **Tip 4: Request Confirmation**
```
"Please confirm you've read BRUTALIST_CLASSES_CHEATSHEET.md before writing code"
```

---

## 🎯 Example Conversations

### **Good Example** ✅

**You:**
```
[Uses the prompt template above]
MY TASK: Add a pricing section with 3 tiers
```

**LLM:**
```
Let me check the design system first...
[reads BRUTALIST_CLASSES_CHEATSHEET.md and ModelSection.js]

Great! I'll create a PricingSection using:
- brutalist-section for layout
- brutalist-card for each pricing tier
- brutalist-card-inverted for the featured tier
- brutalist-heading for the title
- brutalist-label for the price labels

Here's the code...
```

### **Bad Example** ❌

**You:**
```
Add a pricing section
```

**LLM:**
```
Here's a pricing section:
<section className="min-h-screen py-20 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-6xl font-bold">Pricing</h2>
```
**Problem:** LLM doesn't know about design system!

**Your Response:**
```
"Stop! This project has a design system. Please read:
cat /Users/ehsan/Desktop/TonyTony/BRUTALIST_CLASSES_CHEATSHEET.md

Then use brutalist-section, brutalist-heading, etc."
```

---

## 📊 Success Checklist

A new LLM agent is properly onboarded when they:

- [ ] Read `BRUTALIST_CLASSES_CHEATSHEET.md`
- [ ] Mention the 22 design system classes
- [ ] Use `brutalist-*` classes instead of inline utilities
- [ ] Add `group` manually to cards with hover effects
- [ ] Use `font-title-bold` instead of `font-display`
- [ ] Check existing sections for patterns
- [ ] Set explicit text colors for dark mode
- [ ] Ask clarifying questions before coding

---

## 🚀 Quick Command Reference

### **For the LLM to Run:**
```bash
# Read documentation
cat /Users/ehsan/Desktop/TonyTony/BRUTALIST_CLASSES_CHEATSHEET.md
cat /Users/ehsan/Desktop/TonyTony/LLM_AGENT_ONBOARDING.md

# Check design system
cat /Users/ehsan/Desktop/TonyTony/src/styles/global.css

# See example sections
cat /Users/ehsan/Desktop/TonyTony/src/components/sections/ModelSection.js
cat /Users/ehsan/Desktop/TonyTony/src/components/sections/MissionSection.js

# Test build
cd /Users/ehsan/Desktop/TonyTony && npm run build
```

---

## 🎁 What This Gives You

When you properly onboard a new LLM:

✅ **They write code that matches your system**
✅ **No need to refactor their suggestions**
✅ **Consistent styling across all new components**
✅ **Faster development (they use semantic classes)**
✅ **Better understanding of your codebase**
✅ **Less back-and-forth corrections**

---

## 📝 Summary

**To onboard a new LLM agent:**

1. Copy the prompt template from this file
2. Add your specific task
3. Make sure they read the cheatsheet first
4. Verify they mention the design system
5. Proceed with confidence!

**Key Files:**
- `BRUTALIST_CLASSES_CHEATSHEET.md` - Start here
- `LLM_AGENT_ONBOARDING.md` - Complete guide
- `NEW_LLM_PROMPT.txt` - Ready-to-copy prompt

---

**🎉 Your project is now LLM-friendly! Any agent can jump in and contribute!** 🚀
