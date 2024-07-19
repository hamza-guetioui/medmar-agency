import React from "react";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Button from "./components/Button";

import Styles from "./Styles.module.css";

function Index() {
  return (
    <header className={Styles.Container}>
      <Logo />
      <Navigation />
      <Button />
    </header>
  );
}

export default Index;
