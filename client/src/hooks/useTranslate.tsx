"use client"
import translations from "./translations"
import useLocalStorage from './useLocalStorage'


type UseTranslateReturn = {
    language: string;
    setLanguage: (value: string) => void;
    t: (key: string) => string;
  };

const defaultLanguage = "";

const useTranslate = () : UseTranslateReturn => {
    const [language , setLanguage] = useLocalStorage("language" , defaultLanguage)
    

    function translate (key : string) : string{
        return getTranslation(key  , language) ?? key
    }

  return { language , setLanguage , t: translate}
}

export default useTranslate;


function getTranslation(key : string, language : string): string {
    const langTranslations = translations[language];
  
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }  
    return  key;
  }