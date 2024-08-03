"use client";
import useTranslate from "@/hooks/useTranslate";
import React, { createContext, useContext } from "react";

type Props = {
  children: React.ReactNode;
};
type TContext = {
  language: string;
  setLanguage: (value: string) => void;
  t: (key: string) => string;
};

const TContext = createContext<TContext | undefined>(undefined);

const TranslationContext = ({ children }: Props) => {
  const { language, setLanguage, t } = useTranslate();
  return (
    <TContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TContext.Provider>
  );
};

export default TranslationContext;

export const useTranslateContext = () => {
  const context = useContext(TContext);
  if (!context) {
    throw new Error(
      "useTranslateContext must be used within a TranslationContext"
    );
  }
  return context;
};
