import React from "react";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Button from "./components/Button";

import Styles from "./Styles.module.css";
import LanguageButton from "../languageButton";

function Index() {
  return (
    <div className={Styles.Wrapper}>
      <LanguageButton />
      <header className={Styles.Container}>
        <Logo />
        <Navigation />
        <Button />
      </header>
    </div>
  );
}

export default Index;
