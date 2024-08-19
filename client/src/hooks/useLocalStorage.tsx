"use client";
import { useCallback, useState, useEffect } from "react";

const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, (value: string) => void, () => void] => {
  const [value, setValue] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const jsonValue = window.localStorage.getItem(key);
      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const remove = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
    setValue(defaultValue);
  }, [key, defaultValue]);

  return [value, setValue, remove];
};

export default useLocalStorage;
