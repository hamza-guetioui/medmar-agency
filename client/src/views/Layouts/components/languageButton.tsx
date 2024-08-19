"use client";
import { useTranslateContext } from "@/context/TranslationContext";
import React from "react";

type Props = {};

const LanguageButton = (props: Props) => {
  const { language, setLanguage } = useTranslateContext();
  return (
    <select
      className="absolute top-1/2 -translate-y-1/2 right-1  rounded-md  border-2 border-slate-500/30 bg-slate-200/40 text-slate-400"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">en</option>
      <option value="fr">fr</option>
    </select>
  );
};

export default LanguageButton;
