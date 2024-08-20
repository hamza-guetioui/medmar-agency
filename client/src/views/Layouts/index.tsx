"use client";
import React from "react";
import Navgation from "./components/Navigation";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

interface layoutProps {
  children: React.ReactNode;
}
const Index: React.FC<layoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>

      {!pathname.startsWith("/mm-admin") && <Navgation />}

      {children}
      <Footer />
    </>
  );
};

export default Index;
