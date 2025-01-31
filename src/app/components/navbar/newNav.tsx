"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { europeCountries } from "@/app/data/CountryData";
import { AmericaCountries } from "@/app/data/CountryData";
import { asiaCountries } from "@/app/data/CountryData";

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEuropeSubmenuOpen, setIsEuropeSubmenuOpen] = useState(false);
  const [isAmericaSubmenuOpen, setIsAmericaSubmenuOpen] = useState(false);
  const [isAsiaSubmenuOpen, setIsAsiaSubmenuOpen] = useState(false);

  // Обработчик скроллинга для изменения цвета навбара
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Меняем состояние, если прокрутили более 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Управление подменю для Европы и Америки
  const toggleSubmenu = (menu: "europe" | "america" | "asia") => {
    if (menu === "europe") {
      setIsEuropeSubmenuOpen(!isEuropeSubmenuOpen);
      setIsAmericaSubmenuOpen(false);
      setIsAsiaSubmenuOpen(false);
    } else if (menu === "america") {
      setIsAmericaSubmenuOpen(!isAmericaSubmenuOpen);
      setIsEuropeSubmenuOpen(false);
      setIsAsiaSubmenuOpen(false);
    } else if (menu === "asia") {
      setIsAsiaSubmenuOpen(!isAsiaSubmenuOpen);
      setIsEuropeSubmenuOpen(false);
      setIsAmericaSubmenuOpen(false);
    }
  };

  // Закрытие всех меню
  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMobileNavOpen(false); // Закрываем мобильное меню
    setIsEuropeSubmenuOpen(false); // Закрываем подменю
    setIsAmericaSubmenuOpen(false); // Закрываем подменю
    setIsAsiaSubmenuOpen(false); // Закрываем подменю
  };

  // Управление мобильным меню
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Управление выпадающим меню
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
        style={{
          background: isScrolled ? "linear-gradient(90deg, #742f8b, #000)" : "transparent",
        }}
      >
        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.svg" alt="Logo" width={65} height={65} />
        </Link>

        {/* Бургер-меню для мобильной версии */}
        <div className={styles.mobile_menu_icon} onClick={toggleMobileNav}>
          <div className={`${styles.bar} ${isMobileNavOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${isMobileNavOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${isMobileNavOpen ? styles.bar3 : ""}`}></div>
        </div>

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
            <div className={styles.nav_item_with_submenu}>
              <Link href="/services_page" onClick={closeAllMenus}>Наши услуги</Link>
              <span
                onClick={() => toggleDropdown("services")}
                className={`${styles.submenu_arrow} ${
                  activeDropdown === "services" ? styles.rotate_up : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {activeDropdown === "services" && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj_page" onClick={closeAllMenus}>Визовые услуги</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page" onClick={closeAllMenus}>Оформление ВНЖ</Link>
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
                  <Link href="/services_page/booking_tickets" onClick={closeAllMenus}>Бронирование авиа и отелей</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Визы */}
          <li className={styles.nav_item}>
            <div className={styles.nav_item_with_submenu}>
              <Link href="/visa_page" onClick={closeAllMenus}>Визы</Link>
              <span
                onClick={() => toggleDropdown("visa")}
                className={`${styles.submenu_arrow} ${
                  activeDropdown === "visa" ? styles.rotate_up : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {activeDropdown === "visa" && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <div className={styles.nav_item_with_submenu}>
                    <Link href="/visa_page/europe" onClick={closeAllMenus}>Европа</Link>
                    <span
                      onClick={() => toggleSubmenu("europe")}
                      className={`${styles.submenu_arrow} ${
                        isEuropeSubmenuOpen ? styles.rotate_right : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </div>
                  {isEuropeSubmenuOpen && (
                    <ul className={`${styles.nested_dropdown} ${styles.show}`}>
                      {europeCountries.map((country) => (
                        <li key={country.nameof} className={styles.nested_dropdown_item}>
                          <Link onClick={closeAllMenus} href={country.pageUrl}>
                            <Image src={country.flagUrl} alt={`${country.name} Flag`} width={20} height={15} />
                            {country.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className={styles.dropdown_item}>
                  <div className={styles.nav_item_with_submenu}>
                    <Link href="/visa_page/america" onClick={closeAllMenus}>Северная Америка</Link>
                    <span
                      onClick={() => toggleSubmenu("america")}
                      className={`${styles.submenu_arrow} ${
                        isAmericaSubmenuOpen ? styles.rotate_right : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </div>
                  {isAmericaSubmenuOpen && (
                    <ul className={`${styles.nested_dropdown} ${styles.show}`}>
                      {AmericaCountries.map((country) => (
                        <li key={country.nameof} className={styles.nested_dropdown_item}>
                          <Link onClick={closeAllMenus} href={country.pageUrl}>
                            <Image src={country.flagUrl} alt={`${country.name} Flag`} width={20} height={15} />
                            {country.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className={styles.dropdown_item}>
                  <div className={styles.nav_item_with_submenu}>
                    <Link href="/visa_page/asia" onClick={closeAllMenus}>Азия</Link>
                    <span
                      onClick={() => toggleSubmenu("asia")}
                      className={`${styles.submenu_arrow} ${
                        isAsiaSubmenuOpen ? styles.rotate_right : ""
                      }`}
                    >
                      &#9660;
                    </span>
                  </div>
                  {isAsiaSubmenuOpen && (
                    <ul className={`${styles.nested_dropdown} ${styles.show}`}>
                      {asiaCountries.map((country) => (
                        <li key={country.nameof} className={styles.nested_dropdown_item}>
                          <Link onClick={closeAllMenus} href={country.pageUrl}>
                            <Image src={country.flagUrl} alt={`${country.name} Flag`} width={20} height={15} />
                            {country.name}
                          </Link>
                        </li>
                      ))}
                      <li className={styles.nested_dropdown_item}>
                        <Link onClick={closeAllMenus} href="visa_page/saudi_arabia">
                              <Image src="/images/Flags/saudi.svg" alt="Флаг саудовской аравии"width={20} height={15} />
                              Саудовская Аравия
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page/united_kingdom" onClick={closeAllMenus}>Великобритания</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/visa_page/saudi_arabia" onClick={closeAllMenus}>Саудовская Аравия</Link>
                </li>
              </ul>
            )}
          </li>

          {/* ВНЖ */}
          <li className={styles.nav_item}>
            <div className={styles.nav_item_with_submenu}>
              <Link href="/vnj_page" onClick={closeAllMenus}>ВНЖ</Link>
              <span
                onClick={() => toggleDropdown("vnj")}
                className={`${styles.submenu_arrow} ${
                  activeDropdown === "vnj" ? styles.rotate_up : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {activeDropdown === "vnj" && (
              <ul className={`${styles.dropdown} ${styles.show}`}>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj/Bulgaria" onClick={closeAllMenus}>Болгария</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj/Spain" onClick={closeAllMenus}>Испания</Link>
                </li>
                <li className={styles.dropdown_item}>
                  <Link href="/vnj/France" onClick={closeAllMenus}>Франция</Link>
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
