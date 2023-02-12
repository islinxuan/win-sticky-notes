import { useState, useEffect } from "react";

export function useStorageState(key, init) {
  const storageItem = localStorage.getItem(key);
  const [value, setValue] = useState(storageItem ? JSON.parse(storageItem) : init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
