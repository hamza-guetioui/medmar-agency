"use client";
import { useCallback, useState, useEffect } from "react";


const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, (value: string) => void, () => void] => {

  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(key);
    if (jsonValue != null) {
        return JSON.parse(jsonValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return localStorage.removeItem(key);

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, [key]);

  return [value, setValue, remove];
};

export default useLocalStorage;
