"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import "fontsource-inter";
import SearchBar from "../components/search/SearchBar";
import CountryList from "../components/CountryListAll/CountryListAll";
import { europeCountries, AmericaCountries, asiaCountries } from "../data/CountryData";
import TariffSelectionPage from "../components/PriceCard/priceCard";
import CountryCards from "../components/PopularCountries/PopularCountries";
import CountryVisaSelect from "../components/CountryVisaSelect/page";
import Contact from "../components/contact/Contact";

const Visa_page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); 

  const openOrCloseChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
        if (isChatOpen) {
            window.jivo_api.close(); // Закрываем чат, если он открыт
            setIsChatOpen(false); // Обновляем состояние
        } else {
            window.jivo_api.open(); // Открываем чат, если он закрыт
            setIsChatOpen(true); // Обновляем состояние
        }
    }
};

  // Фильтруем страны по запросу
  const filterCountries = (countries: any[]) =>
    countries.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={`${styles.banner_container} ${styles.mobileReverse}`}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>Оформление виз</h1>
              <p>
                Наш визовый центр поможет вам быстро и без проблем оформить шенгенскую визу,
                открывающую доступ к 27 странам Европы. Независимо от цели поездки —
                туризм, деловая встреча или учеба — мы обеспечим полное сопровождение на всех
                этапах процесса, избавив вас от бумажной волокиты и рисков отказа.
              </p>
            </div>
            <button onClick={openOrCloseChat}className={styles.main_btn}>Оставить заявку</button>
          </div>
        </div>
      </section>
      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <span>Оформление визы</span>
        </div>
      </div>
      <section className={styles.section_two}>
        <div className={styles.section_two_top}>
          <div className={styles.CountryVisaSelect}>
                <h2 className={styles.selectCountryTitle}>Выберите направление</h2>
                <CountryVisaSelect/>
          </div>
        </div>
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <div className={styles.counties_wrapper}>
          <h2>Северная Америка</h2>
          <CountryList countries={filterCountries(AmericaCountries)} />
        </div>
        <div className={styles.counties_wrapper}>
          <h2>Шенгенские визы</h2>
          <CountryList countries={filterCountries(europeCountries)} />
        </div>
        <div className={styles.counties_wrapper}>
          <h2>Азия</h2>
          <CountryList countries={filterCountries(asiaCountries)} />
        </div>
      </section>
      <TariffSelectionPage />
      <CountryCards />
      <Contact />
    </main>
  );
}

export default Visa_page;
