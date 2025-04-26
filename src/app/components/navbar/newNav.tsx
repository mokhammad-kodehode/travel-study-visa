"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { europeCountries } from "@/app/data/CountryData";
import { AmericaCountries } from "@/app/data/CountryData";
import { asiaCountries } from "@/app/data/CountryData";
import { faMapMarkerAlt, faComments, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"


const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<null | 'europe' | 'america' | 'asia'>(null); // ← новый
  
  
  const toggleChatPanel = () => setIsChatPanelOpen(!isChatPanelOpen);

  // Обработчик скроллинга для изменения цвета навбара
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  // Управление подменю для Европы и Америки
  const toggleSubmenu = (name: 'europe' | 'america' | 'asia') =>
    setOpenSubmenu(prev => (prev === name ? null : name));

  // Закрытие всех меню
  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMobileNavOpen(false); // Закрываем мобильное меню
  };

  // Управление мобильным меню
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Управление выпадающим меню
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isMobileNavOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [isMobileNavOpen]);


  return (
    <header>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
        style={{
          background: isScrolled ? "linear-gradient(90deg, #742f8b, #000)" : "transparent",
        }}
      >

      <div className={styles.chatIcon} onClick={toggleChatPanel}>
        <FontAwesomeIcon icon={faComments} />
      </div>

        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.svg" alt="Logo" width={89} height={89} />
        </Link>

        {/* Бургер-меню для мобильной версии */}
        <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
          <div className={`${styles.bar} ${isMobileNavOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${isMobileNavOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${isMobileNavOpen ? styles.bar3 : ""}`}></div>
        </div>

        {isChatPanelOpen && (
            <div className={styles.chatPanel}>
              <ul>
                <li>
                  <a href="tel:+7(985)779-15-55">
                    <FontAwesomeIcon className={styles.con_icon} icon={faPhone} />
                    +7(985)779-15-55
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/40756504079" aria-label="Перейти в Whatsapp" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className={styles.con_icon} icon={faWhatsapp} />
                     Написать в WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://t.me/travelandstudyru" aria-label="Перейти на Telegram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className={styles.con_icon} icon={faTelegram} />
                    Написать в Telegram
                  </a>
                </li>
              </ul>
            </div>
          )}

        {/* Основное меню */}
        <ul className={`${styles.items} ${isMobileNavOpen ? styles.showMobileMenu : ""}`}>
          <li className={styles.nav_item}>
            <Link href="/" onClick={closeAllMenus}>Главная</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/About_page" onClick={closeAllMenus}>О компании</Link>
          </li>
          
          {/* Наши услуги */}
          <li className={styles.nav_item}>
              <button
              type="button"
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('services')}
              aria-expanded={activeDropdown === 'services'}
              >
                <Link href="/services_page" onClick={closeAllMenus}>Наши услуги</Link>
                <span
                  onClick={() => toggleDropdown("services")}
                  className={`${styles.submenu_arrow} ${
                    activeDropdown === "services" ? styles.rotate_up : ""
                  }`}
                >
                  &#9660;
                </span>
              </button>
            {activeDropdown === "services" && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page" onClick={closeAllMenus}>Визовые услуги</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj_page" onClick={closeAllMenus}>Оформление ВНЖ</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/services_page/study_page" onClick={closeAllMenus}>Образовательные программы</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/services_page/umra" onClick={closeAllMenus}>Умра и туры в Саудовскую Аравию</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/services_page/zagran_passport" onClick={closeAllMenus}>Оформление загранпаспортов</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/services_page/booking_tickets" onClick={closeAllMenus}>Бронирование авиабилетов и отелей</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Визы */}
          <li className={styles.nav_item}>
                <button
                  type="button"
                  className={styles.dropdownToggle}
                  onClick={() => toggleDropdown('visa')}
                  aria-expanded={activeDropdown === 'visa'}
                >
                  <Link href="/visa_page" onClick={closeAllMenus}>Визы</Link>
                  <span
                    className={`${styles.submenu_arrow} ${
                      activeDropdown === 'visa' ? styles.rotate_up : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {activeDropdown === 'visa' && (
                  <ul className={styles.dropdown}>
                    {/* ---------- ЕВРОПА ---------- */}
                    <li className={styles.nav_item}>
                      <button
                        type="button"
                        className={styles.dropdownToggle}
                        onClick={() => toggleSubmenu('europe')}
                        aria-expanded={openSubmenu === 'europe'}
                      >
                        <Link href="/visa_page/europe" onClick={closeAllMenus}>Европа</Link>
                        <span
                          className={`${styles.submenu_arrow} ${
                            openSubmenu === 'europe' ? styles.rotate_right : ''
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {openSubmenu === 'europe' && (
                        <ul className={styles.nested_dropdown}>
                          {europeCountries.map(c => (
                            <li className={styles.nested_dropdown_item} key={c.nameof}>
                              <Link onClick={closeAllMenus} href={c.pageUrl}>
                                <Image src={c.flagUrl} alt={`${c.name} flag`} width={20} height={15}/>
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    {/* ---------- СЕВ. АМЕРИКА ---------- */}
                    <li  className={styles.nav_item}>
                      <button
                        type="button"
                        className={styles.dropdownToggle}
                        onClick={() => toggleSubmenu('america')}
                        aria-expanded={openSubmenu === 'america'}
                      >
                        <Link href="/visa_page/america" onClick={closeAllMenus}>Северная Америка</Link>
                        <span
                          className={`${styles.submenu_arrow} ${
                            openSubmenu === 'america' ? styles.rotate_right : ''
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {openSubmenu === 'america' && (
                        <ul className={styles.nested_dropdown}>
                          {AmericaCountries.map(c => (
                            <li className={styles.nested_dropdown_item} key={c.nameof}>
                              <Link onClick={closeAllMenus} href={c.pageUrl}>
                                <Image src={c.flagUrl} alt={`${c.name} flag`} width={20} height={15}/>
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    {/* ---------- АЗИЯ ---------- */}
                    <li  className={styles.nav_item}>
                      <button
                        type="button"
                        className={styles.dropdownToggle}
                        onClick={() => toggleSubmenu('asia')}
                        aria-expanded={openSubmenu === 'asia'}
                      >
                        <Link href="/visa_page/asia" onClick={closeAllMenus}>Азия</Link>
                        <span
                          className={`${styles.submenu_arrow} ${
                            openSubmenu === 'asia' ? styles.rotate_right : ''
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {openSubmenu === 'asia' && (
                        <ul className={styles.nested_dropdown}>
                          {asiaCountries.map(c => (
                            <li className={styles.nested_dropdown_item} key={c.nameof}>
                              <Link onClick={closeAllMenus} href={c.pageUrl}>
                                <Image src={c.flagUrl} alt={`${c.name} flag`} width={20} height={15}/>
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    {/* ---------- ВЕЛИКОБРИТАНИЯ ---------- */}
                    <li  className={styles.nav_item}>
                      <Link href="/visa_page/united_kingdom" onClick={closeAllMenus}>
                        Великобритания
                      </Link>
                    </li>
                  </ul>
                )}
              </li>


          {/* ВНЖ */}
          <li className={styles.nav_item}>
            <button
              type="button"
              className={styles.dropdownToggle}
              onClick={() => toggleDropdown('vnj')}
              aria-expanded={activeDropdown === 'vnj'}
            >
              <Link href="/vnj_page" onClick={closeAllMenus}>ВНЖ</Link>
              <span
                className={`${styles.submenu_arrow} ${
                  activeDropdown === 'vnj' ? styles.rotate_up : ''
                }`}
              >
                ▼
              </span>
            </button>

            {activeDropdown === 'vnj' && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj/bulgaria" onClick={closeAllMenus}>Болгария</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj/spain" onClick={closeAllMenus}>Испания</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj/france" onClick={closeAllMenus}>Франция</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj_page/UAE" onClick={closeAllMenus}>ОАЭ</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.nav_item}>
            <Link href="/grajdanstvo_ruminaya" onClick={closeAllMenus}>Гражданство Румынии</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/contact_page" onClick={closeAllMenus}>Контакты</Link>
          </li>
        </ul>

        {/* Адрес */}
        <Link href="https://www.google.com/maps" className={styles.adress}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          г.Москва, Пресненская набережная, 12
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
