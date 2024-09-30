"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import CountryVisaSelect from '../components/CountryVisaSelect/page'
import CountryList from '../components/CountryListAll/CountryListAll'
import { europeCountries } from '../data/CountryData'
import { AmericaCountries } from '../data/CountryData';
import CountryCards from '../components/PopularCountries/PopularCountries'

export default function Visa_page() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз</h1>
                        <p>
                       Наш визовый центр поможет вам быстро и без проблем оформить шенгенскую визу, открывающую доступ к 27 странам Европы. Независимо от цели поездки — туризм, деловая встреча или учеба — мы обеспечим полное сопровождение на всех этапах процесса, избавив вас от бумажной волокиты и рисков отказа.
                        </p>
                    </div>
                </div>
            </div>
          </section >
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
            <div className={styles.counties_wrapper}>
                <h2>Северная Америка</h2>
                <CountryList countries={AmericaCountries}/>
              </div>
              <div className={styles.counties_wrapper}>
                <h2>Шенгенские визы</h2>
                <CountryList countries={europeCountries}/>
              </div>
          </section>
          <CountryCards/>
    </main>
  )
}
