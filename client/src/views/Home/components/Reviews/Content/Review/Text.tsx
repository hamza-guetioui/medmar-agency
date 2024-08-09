import React from "react";
import styles from './Styles.module.css'

interface TextProps {
    children: React.ReactNode;
}

const Text:React.FC<TextProps> = ({children}) => {
  return (
    <p className={styles.Text}>
     {children}
    </p>
  );
};

export default Text;
