"use client";
import { useCallback, useState, useEffect } from "react";

type DefaultValueType = string | (() => string | undefined);

function initialValue(key: string, defaultValue: DefaultValueType) {
  const jsonValue = localStorage.getItem(key);
  if (jsonValue != null) return JSON.parse(jsonValue);
  if (typeof defaultValue === "function") {
    return (defaultValue as () => string | undefined)();
  } else {
    return defaultValue;
  }
}

const useLocalStorage = (
  key: string,
  defaultValue: string
): [string, (value: string) => void, () => void] => {
  const [value, setValue] = useState(() => initialValue(key, defaultValue));

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
