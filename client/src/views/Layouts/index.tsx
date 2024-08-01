import React from "react";
import Navgation from "./components/Navigation";
import Footer from "./components/Footer";

interface layoutProps {
  children: React.ReactNode;
}
const Index: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navgation />
      {children}
      <Footer />
    </>
  );
};

export default Index;
