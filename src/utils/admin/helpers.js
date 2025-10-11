export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const updateNestedState = (state, path, value) => {
  const clonedState = deepClone(state);
  const keys = path.split('.');
  let current = clonedState;
  
  // Navigate through the nested structure, creating objects if they don't exist
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  
  // Set the final value
  current[keys[keys.length - 1]] = value;
  return clonedState;
};

export const safeJsonParse = (jsonString, fallback = null) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return fallback;
  }
};
