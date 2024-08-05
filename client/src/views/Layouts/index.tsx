import React from "react";
import Navgation from "./components/Navigation";
import Footer from "./components/Footer";
import LanguageButton from "./components/languageButton";

interface layoutProps {
  children: React.ReactNode;
}
const Index: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
    {/* <LanguageButton /> */}
      <Navgation />
      {children}
      <Footer />
    </>
  );
};

export default Index;
