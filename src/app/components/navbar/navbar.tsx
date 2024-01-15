import React from 'react';
import styles from './styles.module.css'; 
import Link from 'next/link';
import Logo from '../logo/logo';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link className={styles.logo} href="/">
            <Logo /> 
        </Link>
        <ul className={styles.items}>
        <li className={styles.nav_item}>
                     <Link href="/" className={styles.nav_item}>О компании</Link>
              </li>
            <li className={styles.nav_item}>
                    <Link href="/services_page" legacyBehavior className={styles.nav_item}>
                      <a>Наши услуги</a>
                    </Link>
              </li>
              <li className={styles.nav_item}>
                     <Link href="/visa_page" className={styles.nav_item}>Визы</Link>
              </li>
              <li className={styles.nav_item}>
                     <Link href="/" className={styles.nav_item}>Страхование</Link>
              </li>
              <li className={styles.nav_item}>
                     <Link href="/" className={styles.nav_item}>Контакты</Link>
              </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar