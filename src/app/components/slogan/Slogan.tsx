import React, { useEffect } from 'react';
import styles from './styles.module.css';

const SloganSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const companyName = document.querySelector(`.${styles.companyName}`);
      const slogan = document.querySelector(`.${styles.slogan}`);
      const seperator = document.querySelector(`.${styles.seperator}`);

      // Проверяем, что элементы не равны null
      if (companyName && slogan) {
        const companyPosition = companyName.getBoundingClientRect().top;
        const sloganPosition = slogan.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (companyPosition < screenPosition) {
          companyName.classList.add(styles.visible);
        }
        if (sloganPosition < screenPosition) {
          slogan.classList.add(styles.visible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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