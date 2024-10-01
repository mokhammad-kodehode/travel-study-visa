"use client" 

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import useScrollLock from '../hooks/useScrollLock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


const Navbar: React.FC = () => {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isVisaMenuOpen, setVisaMenuOpen] = useState(false);
  const [isVnjOpen, setisVnjOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Состояние для отслеживания прокрутки

  

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  
    if (!isMobileNavOpen) {
    } else {

    }
  };


  
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setVisaMenuOpen(false);
    setServicesMenuOpen(false);
    setisVnjOpen(false)
    document.body.style.overflow = '';
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
    setVisaMenuOpen(false)
    setisVnjOpen(false);
    console.log("isServicesMenuOpen:", !isServicesMenuOpen); // Проверка
  };

  const toggleVisaMenu = () => {
    setVisaMenuOpen(!isVisaMenuOpen);
    setServicesMenuOpen(false)
    setisVnjOpen(false);
  };

  const toggleVnjMenu = () => {
    setisVnjOpen(!isVnjOpen);
    setServicesMenuOpen(false)
    setVisaMenuOpen(false)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
          <Link  className={styles.logo} href="/">
              <Image 
                src="/images/logo.svg" // Замените на путь к вашему логотипу
                alt="Visa Travels Logo" 
                width={isScrolled ? 40 : 65} // Меняем размер логотипа в зависимости от прокрутки
                height={isScrolled ? 40 : 65}
              />
          </Link> 
        <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
              <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''} ${isMobileNavOpen ? styles.bar1 : ''}`}></div>
              <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''} ${isMobileNavOpen ? styles.bar2 : ''}`}></div>
              <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''} ${isMobileNavOpen ? styles.bar3 : ''}`}></div>
        </div>
        <ul className={`${isScrolled ? styles.scrolled_items : styles.items} ${isMobileNavOpen ? styles.showMobileMenu : ''}`}>
          <li className={styles.nav_item}>
            <Link onClick={closeMobileNav} href="/About_page" >О компании</Link>
          </li>
          <li  className={styles.nav_item} >
            <div className={styles.nav_item_with_submenu}>
              <Link onClick={closeMobileNav} href="/services_page">
                <div>Наши услуги</div>
              </Link>
              <div onClick={toggleServicesMenu} className={styles.button_click} >
              <span 
                onClick={toggleServicesMenu} 
                className={`${styles.submenu_arrow} ${isServicesMenuOpen ? styles.rotate_up : ''}`}>
                &#9660;
              </span>
              </div>
            </div>
            {isServicesMenuOpen && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page">Визовые услуги
                  </Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/study_page">Образовательные программы
                  </Link>
                </li>
                 <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/umra">Умра и туры в Саудовскую Аравию
                  </Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/zagran_passport">Оформление загранпаспортов
                  </Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/booking_tickets">Бронирование авиа и отелей</Link>
                </li>
              </ul>
            )}
          </li>
          <li 
              className={styles.nav_item} >
            <div className={styles.nav_item_with_submenu}>
              <Link onClick={closeMobileNav} href="/visa_page">
                Визы
              </Link>
              <span 
                onClick={toggleVisaMenu}  
                className={`${styles.submenu_arrow} ${isVisaMenuOpen ? styles.rotate_up : ''}`}>
                &#9660;
              </span>
            </div>
            {isVisaMenuOpen && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page/europe">Европа</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page/america">Северная Америка</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page/united_kingdom">Великобритания</Link>
                </li>
                {/* <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page/japan">Япония</Link>
                </li> */}
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page/saudi_arabia">Саудовская Аравия</Link>
                </li>
              </ul>
            )}
          </li>
          <li 
              className={styles.nav_item} >
            <div className={styles.nav_item_with_submenu}>
              <Link onClick={closeMobileNav} href="/vnj_page">
                ВНЖ
              </Link>
              <span 
                onClick={toggleVnjMenu}  
                className={`${styles.submenu_arrow} ${isVnjOpen ? styles.rotate_up : ''}`}>
                &#9660;
              </span>
            </div>
            {isVnjOpen && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj_page/Bulgaria">Болгария</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj_page/Spain">Испания</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj_page/UAE">ОАЭ</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.nav_item}>
            <Link onClick={closeMobileNav} href="/grajdanstvo_ruminaya" >Гражданство Румынии</Link>
          </li>
          <li className={styles.nav_item}>
            <Link onClick={closeMobileNav} href="/contact_page" >Контакты</Link>
          </li>
        </ul>
             <Link 
              className={styles.adress}
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Presnenskaya+Naberezhnaya,+12,+Moskva,+Russland,+123317/@55.749882,37.5352886,17z/data=!3m1!4b1!4m6!3m5!1s0x46b54bdcbfd1b72d:0x433d48214f76b256!8m2!3d55.749882!4d37.5378635!16s%2Fg%2F11gbx8qy19?entry=ttu" 
              > 
              <FontAwesomeIcon className={styles.adress_icon} icon={faMapMarkerAlt}  />
              г.Москва, Пресненская набережная, д.12</Link>
      </nav>
    </header>
  );
};
export default Navbar;