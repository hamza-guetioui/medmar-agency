"use client";
import React from "react";
import styles from "./Styles.module.css";
import { useTranslateContext } from "@/context/TranslationContext";

function Paragraph() {
  const { t } = useTranslateContext();
  return (
    <p className={styles.Paragraph}>
      {t(
        "Ready to see how we can transform your brand? Watch our video and get in touch to start your journey !"
      )}
    </p>
  );
}

export default Paragraph;
