import { useEffect, useState } from 'react'

export const useLocalStorage = (key: string, defaultValue = '') => {
  const [value, setValue] = useState(getSavedValue(key, defaultValue));
  
  useEffect(() => { localStorage.setItem(key, value) }, [key, value]);

  return [value, setValue] as const; // Tells TypeScript the types will not change.
}

const getSavedValue = (key: string, value: string): string => {
  const savedValue = localStorage.getItem(key) || '';
  return savedValue ? savedValue : value;
}