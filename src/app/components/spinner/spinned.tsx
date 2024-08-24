import React from 'react';
import styles from './styles.module.css'; // Создайте CSS-модуль с нужными стилями

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;