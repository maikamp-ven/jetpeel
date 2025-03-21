import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const getStorageValue = () => {
    const saved = localStorage.getItem(key);
    if (saved === null) return initialValue;

    try {
      return JSON.parse(saved);
    } catch {
      return saved; // Если это строка (например, "dark" или "light"), просто вернуть её
    }
  };

  const [value, setValue] = useState(getStorageValue);

  useEffect(() => {
    localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}




// import { useState, useEffect } from 'react';

// function getStorageValue(key, defaultValue) {
// 	// getting stored value
// 	const saved = localStorage.getItem(key);
// 	const initial = JSON.parse(saved);
// 	return initial || defaultValue;
// }

// export const useLocalStorage = (key, defaultValue) => {
// 	const [value, setValue] = useState(() => {
// 		return getStorageValue(key, defaultValue);
// 	});

// 	useEffect(() => {
// 		// storing input name
// 		localStorage.setItem(key, JSON.stringify(value));
// 	}, [key, value]);

// 	return [value, setValue];
// };
