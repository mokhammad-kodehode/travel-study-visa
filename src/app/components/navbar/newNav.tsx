'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import Link   from 'next/link';
import Image  from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faTimes,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

import {
  europeCountries,
  AmericaCountries,
  asiaCountries,
} from '@/app/data/CountryData';

type Region = 'europe' | 'america' | 'asia';

const Navbar: React.FC = () => {
  /* --------------------------- state --------------------------- */
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [isMobileOpen,    setIsMobileOpen]    = useState(false);
  const [isChatOpen,      setIsChatOpen]      = useState(false);
  const [activeMain,      setActiveMain]      =
        useState<null | 'services' | 'visa' | 'vnj'>(null);
  const [openRegion,      setOpenRegion]      = useState<null | Region>(null);

  /* ---------- цвет шапки при прокрутке ---------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* --------- блокируем body-scroll при открытом бургер-меню ---------- */
  useEffect(() => {
    document.body.style.overflow = (isMobileOpen || isChatOpen) ? 'hidden' : '';
  }, [isMobileOpen, isChatOpen]);

  /* ------------------------ helpers --------------------------- */
  const closeAll = () => {
    setActiveMain(null);
    setOpenRegion(null);
    setIsMobileOpen(false);
    setIsChatOpen(false);
  };

  // --- логика, чтобы нельзя было открыть бургер и чат одновременно ---
  const handleToggleChat = () => {
    if (isMobileOpen) setIsMobileOpen(false); // закрываем бургер, если он открыт
    setIsChatOpen(prev => !prev);
  };

  const handleToggleBurger = () => {
    if (isChatOpen) setIsChatOpen(false); // закрываем чат, если он открыт
    setIsMobileOpen(prev => !prev);
  };

  const toggleMain = (key: 'services' | 'visa' | 'vnj') =>
    setActiveMain(p => (p === key ? null : key));

  const toggleRegion = (reg: Region) =>
    setOpenRegion(p => (p === reg ? null : reg));

  const renderRegion = (list: typeof europeCountries) => (
    <ul className={styles.nested_dropdown}>
      {list.map(c => (
        <li key={c.nameof} className={styles.nested_dropdown_item}>
          <Link href={c.pageUrl} onClick={closeAll}>
            <Image src={c.flagUrl} alt={`${c.name} flag`} width={20} height={15} />
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  /* --------------------------- JSX ---------------------------- */
  return (
    <header>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        style={{ background: isScrolled
            ? 'linear-gradient(90deg,#742f8b,#000)' : 'transparent' }}
      >
        {/* chat icon (mobile) — показываем только если бургер не открыт */}
        {!isMobileOpen && (
          <button
            className={styles.chatIcon}
            onClick={handleToggleChat}
            aria-label='контакты'
          >
            <FontAwesomeIcon icon={isChatOpen ? faTimes : faComments}/>
          </button>
        )}

        {/* logo */}
        <Link href='/' className={styles.logo} onClick={closeAll}>
          <Image src='/images/logo.svg' alt='Logo' width={89} height={89}/>
        </Link>

        {/* burger — показываем только если чат не открыт */}
        {!isChatOpen && (
          <button
            className={styles.mobile_menu_icon}
            onClick={handleToggleBurger}
            aria-label='меню'
            aria-expanded={isMobileOpen}
          >
            <div className={`${styles.bar} ${isMobileOpen && styles.bar1}`}/>
            <div className={`${styles.bar} ${isMobileOpen && styles.bar2}`}/>
            <div className={`${styles.bar} ${isMobileOpen && styles.bar3}`}/>
          </button>
        )}

        {/* chat panel */}
        {isChatOpen && (
          <div className={styles.chatPanel}>
            <a href='tel:+79857791555'>
              <FontAwesomeIcon icon={faPhone}/> +7 985 779-15-55
            </a>
            <a href='https://wa.me/40756504079' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp}/> WhatsApp
            </a>
            <a href='https://t.me/travelandstudyru' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faTelegram}/> Telegram
            </a>
          </div>
        )}

        {/* ----------- MAIN MENU ----------- */}
        <ul className={`${styles.items} ${isMobileOpen && styles.showMobileMenu}`}>

          <li className={styles.nav_item}>
            <Link href='/' onClick={closeAll}>Главная</Link>
          </li>
          <li className={styles.nav_item}>
            <Link href='/About_page' onClick={closeAll}>О компании</Link>
          </li>

          {/* --- Наши услуги --- */}
          <li className={styles.nav_item}>
            <div className={styles.nav_item_wrapper}>
              <Link href='/services_page' onClick={closeAll}>Наши услуги</Link>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleMain('services')}
                aria-expanded={activeMain === 'services'}
              >
                <span className={`${styles.submenu_arrow} ${activeMain === 'services' && styles.rotate_up}`}>▼</span>
              </button>
            </div>
            {activeMain === 'services' && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li><Link href='/visa_page'                     onClick={closeAll}>Визовые услуги</Link></li>
                <li><Link href='/vnj_page'                      onClick={closeAll}>Оформление ВНЖ</Link></li>
                <li><Link href='/services_page/study_page'      onClick={closeAll}>Образовательные программы</Link></li>
                <li><Link href='/services_page/umra'            onClick={closeAll}>Умра и туры в Саудовскую Аравию</Link></li>
                <li><Link href='/services_page/zagran_passport' onClick={closeAll}>Юридическая поддержка</Link></li>
                <li><Link href='/services_page/booking_tickets' onClick={closeAll}>Билеты и отели</Link></li>
              </ul>
            )}
          </li>

          {/* --- Визы --- */}
          <li className={styles.nav_item}>
            <div className={styles.nav_item_wrapper}>
              <Link href='/visa_page' onClick={closeAll}>Визы</Link>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleMain('visa')}
                aria-expanded={activeMain === 'visa'}
              >
                <span className={`${styles.submenu_arrow} ${activeMain === 'visa' && styles.rotate_up}`}>▼</span>
              </button>
            </div>
            {activeMain === 'visa' && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                {/* Европа */}
                <li className={styles.nav_item}>
                  <button className={styles.dropdownToggle}
                          onClick={() => toggleRegion('europe')}
                          aria-expanded={openRegion === 'europe'}>
                    Европа
                    <span className={`${styles.submenu_arrow} ${openRegion === 'europe' && styles.rotate_right}`}>▼</span>
                  </button>
                  {openRegion === 'europe' && renderRegion(europeCountries)}
                </li>

                {/* Америка */}
                <li className={styles.nav_item}>
                  <button className={styles.dropdownToggle}
                          onClick={() => toggleRegion('america')}
                          aria-expanded={openRegion === 'america'}>
                    Северная Америка
                    <span className={`${styles.submenu_arrow} ${openRegion === 'america' && styles.rotate_right}`}>▼</span>
                  </button>
                  {openRegion === 'america' && renderRegion(AmericaCountries)}
                </li>

                {/* Азия */}
                <li className={styles.nav_item}>
                  <button className={styles.dropdownToggle}
                          onClick={() => toggleRegion('asia')}
                          aria-expanded={openRegion === 'asia'}>
                    Азия
                    <span className={`${styles.submenu_arrow} ${openRegion === 'asia' && styles.rotate_right}`}>▼</span>
                  </button>
                  {openRegion === 'asia' && renderRegion(asiaCountries)}
                </li>

                <li><Link href='/visa_page/united_kingdom' onClick={closeAll}>Великобритания</Link></li>
              </ul>
            )}
          </li>

          {/* --- ВНЖ --- */}
          <li className={styles.nav_item}>
            <div className={styles.nav_item_wrapper}>
            <Link href='/vnj_page' onClick={closeAll}>ВНЖ</Link>
              <button className={styles.dropdownToggle}
                      onClick={() => toggleMain('vnj')}
                      aria-expanded={activeMain === 'vnj'}>
                <span className={`${styles.submenu_arrow} ${activeMain === 'vnj' && styles.rotate_up}`}>▼</span>
              </button>
            </div>
            {activeMain === 'vnj' && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li><Link href='/vnj/bulgaria' onClick={closeAll}>Болгария</Link></li>
                <li><Link href='/vnj/spain'    onClick={closeAll}>Испания</Link></li>
                <li><Link href='/vnj/france'   onClick={closeAll}>Франция</Link></li>
                <li><Link href='/vnj_page/UAE' onClick={closeAll}>ОАЭ</Link></li>
              </ul>
            )}
          </li>

          <li className={styles.nav_item}><Link href='/grajdanstvo_ruminaya' onClick={closeAll}>Гражданство Румынии</Link></li>
          <li className={styles.nav_item}><Link href='/contact_page'         onClick={closeAll}>Контакты</Link></li>
        </ul>

        {/* адрес (desktop only) */}
        <Link href='https://www.google.com/maps' className={styles.adress}>
          <FontAwesomeIcon icon={faMapMarkerAlt}/> г. Москва, Пресненская наб., 12
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

