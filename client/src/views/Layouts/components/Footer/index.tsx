import React from "react";
import Info from "./Info";
import Browser from "./Browser";
import Services from "./Services";
import Contact from "./Contact";

import styles from "./Styles.module.css"

function Index() {
  return (
    <div className="w-full  bg-slate-300">
      <footer className={styles.Container}>
      <Info />
      <Browser />
      <Services />
      <Contact />
    </footer>
    </div>
    
  );
}

export default Index;
