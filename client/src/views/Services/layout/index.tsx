import React from "react";
import Navigation from "./components/Navigation";
import Path from "./components/Path";
import styles from './Styles.module.css'

function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.Container}>
      <Navigation />
      <main className={styles.Content}>
        <Path />

        {children}
      </main>
    </div>
  );
}

export default Index;
