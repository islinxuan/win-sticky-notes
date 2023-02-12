import { useState, useEffect } from "react";

export function useDebounceValue(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(id);
  }, [value]);

  return debounceValue;
}
