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
              <h1 className={styles.title_text}>Визовая поддержка</h1>
              <p>
                Travel&Study — часть международного центра туризма, образования и права, специализирующаяся на профессиональном оформлении виз во все страны мира.
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
    <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}> Визовая поддержка</div>
                <p className={styles.description}>
                Наш визовый отдел работает с частными клиентами, студентами, компаниями и инвесторами, обеспечивая полное сопровождение на каждом этапе — от подбора типа визы и подготовки документов до получения паспорта.
                Мы специализируемся на всех типах <strong>виз:</strong> туристические, деловые, студенческие, рабочие, иммиграционные, инвестиционные, медицинские и семейные.
                </p>
                <p className={styles.description}>Мы помогаем получить визы в <strong>Европу, Великобританию, Северную Америку, Азию, Ближний Восток и другие регионы,</strong>  включая страны с повышенными визовыми требованиями.
                </p>
                <p className={styles.description}>Каждое обращение рассматривается индивидуально. <br />Наши специалисты анализируют вашу ситуацию, подбирают оптимальную стратегию подачи и готовят документы с учётом всех нюансов законодательства и практики консульств.
                 <br />Мы отслеживаем актуальные изменения визовых правил, чтобы вы были уверены: ваши документы оформлены корректно и своевременно.
                </p>
                <p className={styles.description}> <strong>Travel&Study</strong> также оказывает помощь в сложных случаях — при прошлых отказах, срочных подачах, нестандартных ситуациях или необходимости апелляции.
                      <br />Благодаря профессиональной подготовке и системному подходу, мы <strong>минимизируем риски отказа и гарантируем прозрачность процесса.</strong>
                </p>
                  <p className={styles.description}> <strong>Travel&Study</strong> помогает оформить шенгенские визы во все 27 стран Евросоюза, включая Францию, Италию, Испанию, Германию, Чехию и другие направления.
                    Мы оказываем помощь в подготовке полного пакета документов, записываем клиентов на подачу в визовый центр и помогаем отслеживать выход паспорта после рассмотрения.
                </p>
        </section >
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
