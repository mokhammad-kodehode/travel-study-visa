"use client"

import React, { useState } from 'react';
import styles from './styles.module.css'; 
import Link from 'next/link';
import Logo from '../logo/logo';
import useScrollLock from '../hooks/useScrollLock';

const Navbar: React.FC = () => {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isVisaMenuOpen, setVisaMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useScrollLock(isMobileNavOpen)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    if (!isMobileNavOpen) {
      // При открытии мобильного меню - запретить прокрутку body
      document.body.style.overflow = 'hidden';
    } else {
      // При закрытии мобильного меню - разрешить прокрутку body
      document.body.style.overflow = 'auto';
    }
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
    setVisaMenuOpen(false);
  };

  const toggleVisaMenu = () => {
    setVisaMenuOpen(!isVisaMenuOpen);
    setServicesMenuOpen(false); // Закрываем другое меню при открытии этого
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <Link className={styles.logo} href="/">
            <Logo /> 
        </Link>
        <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
            <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''}`}></div>
            <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''}`}></div>
            <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''}`}></div>
        </div>
        <ul className={`${styles.items} ${isMobileNavOpen ? styles.showMobileMenu : ''}`}>
          <li className={styles.nav_item}>
            <Link href="/" className={styles.nav_item}>О компании</Link>
          </li>
          <li className={styles.nav_item} onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu}>
                <div className={styles.nav_item_with_submenu}>
                 <Link href="/services_page">
                     <div>Наши услуги</div>
                  </Link>
                  <span 
                    onClick={toggleServicesMenu} 
                    className={`${styles.submenu_arrow} ${isServicesMenuOpen ? styles.rotate_up : ''}`}>
                    &#9660;
                  </span>
                </div>
            {isServicesMenuOpen && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdown_item}>
                  <Link href="/service1">Оформление визы</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/service2">Оформление мультивиз</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/service2">Гражданство Румынии</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/service2">Оформление загранпаспорта</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/service2">Страхование</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/service2">Оформление мультивиз</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.nav_item} onMouseEnter={toggleVisaMenu} onMouseLeave={toggleVisaMenu}>
              <div className={styles.nav_item_with_submenu}>
              <Link href="/visa_page">
                <div>Визы</div>
              </Link>
                <span 
                  onClick={toggleVisaMenu}  
                  className={`${styles.submenu_arrow} ${isVisaMenuOpen ? styles.rotate_up : ''}`}>
                  &#9660;
                </span>
              </div>
            {isVisaMenuOpen && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page/europe">Европа</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page/america">Америка</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page/united_kingdom">Великобритания</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page/japan">Япония</Link>
                </li>
              </ul>
            )}
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

export default Navbar;