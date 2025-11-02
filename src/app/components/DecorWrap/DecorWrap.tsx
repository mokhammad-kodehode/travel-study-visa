"use client";

import React from "react";
import styles from "./DecorWrap.module.css";

type ProseProps = {
  children: React.ReactNode;
  dropCap?: boolean;          // Включить большую первую букву в 1-м абзаце
  narrow?: boolean;           // Более узкая колонка (для совсем длинных текстов)
};

const Prose: React.FC<ProseProps> = ({ children, dropCap = true, narrow = false }) => {
  return (
    <section className={`${styles.prose} ${dropCap ? styles.dropcap : ""} ${narrow ? styles.narrow : ""}`}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};

export default Prose;