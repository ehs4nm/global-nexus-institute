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
  
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]];
  }
  
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
