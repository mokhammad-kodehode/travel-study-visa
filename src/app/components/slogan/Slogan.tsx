import React from 'react';
import styles from './styles.module.css';

const SloganSection = () => {
  return (
    <section className={styles.sloganSection}>
      <div className={styles.sloganContainer}>
        {/* Название фирмы */}
        <div className={styles.companyName}>
          <h1>Travel and Study</h1>
        </div>

        {/* Полоска */}
        <div className={styles.separator}></div>

        {/* Слоган */}
        <div className={styles.slogan}>
          <p>&quot;Не будь путешественником, стань <span>исследователем!</span>&quot;</p>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;