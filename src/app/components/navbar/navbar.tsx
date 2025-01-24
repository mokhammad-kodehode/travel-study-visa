"use client";

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { europeCountries } from '@/app/data/CountryData';
import { AmericaCountries } from '@/app/data/CountryData';


const Navbar: React.FC = () => {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isVisaMenuOpen, setVisaMenuOpen] = useState(false);
  const [isVnjOpen, setisVnjOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [isEuropeSubmenuOpen, setIsEuropeSubmenuOpen] = useState(false);
  const [isAmericaSubmenuOpen, setIsAmericaSubmenuOpen] = useState(false);

  const toggleSubmenu = (menu: "europe" | "america") => {
    if (menu === "europe") {
      setIsEuropeSubmenuOpen(!isEuropeSubmenuOpen);
      setIsAmericaSubmenuOpen(false); // Закрываем другое подменю
    } else if (menu === "america") {
      setIsAmericaSubmenuOpen(!isAmericaSubmenuOpen);
      setIsEuropeSubmenuOpen(false); // Закрываем другое подменю
    }
  };

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  // Проверяем размер экрана и обновляем состояние мобильной версии
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px - брейкпоинт для мобильной версии
    };

    checkIfMobile(); // Проверяем размер экрана при загрузке

    window.addEventListener('resize', checkIfMobile); // Проверяем при изменении размера окна
    return () => window.removeEventListener('resize', checkIfMobile); // Убираем слушатель при размонтировании компонента
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);

    if (!isMobileNavOpen) {
      setVisaMenuOpen(false);
      setServicesMenuOpen(false);
      setisVnjOpen(false);
    }
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setVisaMenuOpen(false);
    setServicesMenuOpen(false);
    setisVnjOpen(false);
    document.body.style.overflow = '';
  };

  const toggleServicesMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Предотвращаем переход
    setServicesMenuOpen(!isServicesMenuOpen);
    setVisaMenuOpen(false);
    setisVnjOpen(false);
  };
  
  const toggleVisaMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Предотвращаем переход
    setVisaMenuOpen(!isVisaMenuOpen);
    setServicesMenuOpen(false);
    setisVnjOpen(false);
  };
  
  const toggleVnjMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Предотвращаем переход
    setisVnjOpen(!isVnjOpen);
    setServicesMenuOpen(false);
    setVisaMenuOpen(false);
  };

  // Добавляем обработчик прокрутки для эффекта изменения стилей при скролле
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
        <Link className={styles.logo} href="/">
          <Image
            src="/images/logo.svg" // Путь к логотипу
            alt="Visa Travels Logo"
            width={ 65} // Размер логотипа в зависимости от прокрутки
            height={ 65}
          />
        </Link>
        <div className={`${styles.contact_container} ${showContacts ? styles.show : ''}`}>
          <a href="tel:+7(900)555-42-77" className={styles.phone}>
            +7(900)555-42-77
          </a>
          <div className={styles.social_icons}>
            <a href="https://t.me/travelandstudyru" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.contact_burger}>
            <div className={styles.contact_button_container}>
              <button onClick={toggleContacts} className={styles.contact_button}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              </button>
            </div>
            <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
              <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''} ${isMobileNavOpen ? styles.bar1 : ''}`}></div>
              <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''} ${isMobileNavOpen ? styles.bar2 : ''}`}></div>
              <div className={`${styles.bar} ${isMobileNavOpen ? styles.openedBar : ''} ${isMobileNavOpen ? styles.bar3 : ''}`}></div>
            </div>
        </div>
        <ul className={`${isScrolled ? styles.scrolled_items : styles.items} ${isMobileNavOpen ? styles.showMobileMenu : ''}`}>
        <li className={styles.nav_item}>
            <Link onClick={closeMobileNav} href="/">Главная</Link>
          </li>
          <li className={styles.nav_item}>
            <Link  onMouseEnter={closeMobileNav} href="/About_page">О компании</Link>
          </li>
          <li className={styles.nav_item}>
            <div
              onClick={isMobile ? toggleServicesMenu : undefined}
              className={styles.nav_item_with_submenu}
            >
              <Link onMouseEnter={closeMobileNav} href="/services_page">
                <div>Наши услуги</div>
              </Link>
              <div onClick={toggleServicesMenu} className={styles.button_click}>
                <span className={`${styles.submenu_arrow} ${isServicesMenuOpen ? styles.rotate_up : ''}`}>&#9660;</span>
              </div>
            </div>
            {isServicesMenuOpen && (
              <ul onMouseLeave={closeMobileNav} className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/visa_page">Визовые услуги</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/study_page">Образовательные программы</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/umra">Умра и туры в Саудовскую Аравию</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/zagran_passport">Оформление загранпаспортов</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/services_page/booking_tickets">Бронирование авиа и отелей</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.nav_item}>
            <div
              onMouseEnter={!isMobile ? toggleVisaMenu : undefined}
              onClick={isMobile ? toggleVisaMenu : undefined}
              className={styles.nav_item_with_submenu}
            >
              <Link onClick={closeMobileNav} href="/visa_page">Визы</Link>
              <div onClick={toggleVisaMenu} className={styles.button_click}>
                <span className={`${styles.submenu_arrow} ${isVisaMenuOpen ? styles.rotate_up : ''}`}>&#9660;</span>
              </div>
            </div>
            {isVisaMenuOpen && (
              <ul onMouseLeave={closeMobileNav}  className={`${styles.dropdown} ${styles.show}`}>
               <li onMouseEnter={!isMobile ? () => toggleSubmenu("europe") : undefined} onClick={isMobile ? () => toggleSubmenu("europe") : undefined}  className={styles.dropdown_item}>
                  <div className={styles.nav_item_with_submenu}>
                    <Link onClick={closeMobileNav} href="/visa_page/europe">Европа</Link>
                    <span  className={`${styles.submenu_arrow} ${isEuropeSubmenuOpen ? styles.rotate_right : ''}`}>&#9660;</span>
                  </div>
                  {isEuropeSubmenuOpen && (
                    <ul onMouseLeave={() => setIsEuropeSubmenuOpen(false)} className={`${styles.nested_dropdown} ${styles.show}`}>
                      {europeCountries.map((country) => (
                        <li key={country.nameof} className={styles.nested_dropdown_item}>
                          <Link onClick={closeMobileNav} href={country.pageUrl}>
                            <Image src={country.flagUrl} alt={`${country.name} Flag`} width={20} height={15} />
                            {country.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li onMouseEnter={!isMobile ? () => toggleSubmenu("america") : undefined} onClick={isMobile ? () => toggleSubmenu("america") : undefined} className={styles.dropdown_item}>
                  <div className={styles.nav_item_with_submenu}>
                    <Link onClick={closeMobileNav} href="/visa_page/america">Северная Америка</Link>
                    <span className={`${styles.submenu_arrow} ${isAmericaSubmenuOpen ? styles.rotate_right : ''}`}>&#9660;</span>
                  </div>
                  {isAmericaSubmenuOpen && (
                    <ul onMouseLeave={() => setIsAmericaSubmenuOpen(false)} className={`${styles.nested_dropdown} ${styles.show}`}>
                      {AmericaCountries.map((country) => (
                        <li key={country.nameof} className={styles.nested_dropdown_item}>
                          <Link onClick={closeMobileNav} href={country.pageUrl}>
                            <Image src={country.flagUrl} alt={`${country.name} Flag`} width={20} height={15} />
                            {country.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className={styles.dropdown_item}
                  onMouseEnter={() => {
                    setIsEuropeSubmenuOpen(false);
                    setIsAmericaSubmenuOpen(false);
                  }}
                >
                  <Link onClick={closeMobileNav} href="/visa_page/united_kingdom">Великобритания</Link>
                </li>
                <li
                  className={styles.dropdown_item}
                  onMouseEnter={() => {
                    setIsEuropeSubmenuOpen(false);
                    setIsAmericaSubmenuOpen(false);
                  }}
                >
                  <Link onClick={closeMobileNav} href="/visa_page/saudi_arabia">Саудовская Аравия</Link>
                </li>
              </ul>
            )}
            
          </li>
          <li className={styles.nav_item}>
            <div
              onMouseEnter={!isMobile ? toggleVnjMenu : undefined}
              onClick={isMobile ? toggleVnjMenu : undefined}
              className={styles.nav_item_with_submenu}
            >
              <Link onClick={closeMobileNav} href="/vnj_page">ВНЖ</Link>
              <div onClick={toggleVnjMenu} className={styles.button_click}>
                <span className={`${styles.submenu_arrow} ${isVnjOpen ? styles.rotate_up : ''}`}>&#9660;</span>
              </div>
            </div>
            {isVnjOpen && (
              <ul onMouseLeave={closeMobileNav}  className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj/Bulgaria">Болгария</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj/Spain">Испания</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj/France">Франция</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link onClick={closeMobileNav} href="/vnj_page/UAE">ОАЭ</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.nav_item}>
            <Link onClick={closeMobileNav} href="/grajdanstvo_ruminaya">Гражданство Румынии</Link>
          </li>
          <li className={styles.nav_item}>
            <Link onClick={closeMobileNav} href="/contact_page">Контакты</Link>
          </li>
        </ul>
        <Link
          className={styles.adress}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/Presnenskaya+Naberezhnaya,+12,+Moskva,+Russland,+123317/@55.749882,37.5352886,17z/data=!3m1!4b1!4m6!3m5!1s0x46b54bdcbfd1b72d:0x433d48214f76b256!8m2!3d55.749882!4d37.5378635!16s%2Fg%2F11gbx8qy19?entry=ttu"
        >
          <FontAwesomeIcon className={styles.adress_icon} icon={faMapMarkerAlt} />
          г.Москва, Пресненская набережная, 12
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;