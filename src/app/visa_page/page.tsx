"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyForm from '../components/contactFormTwo/ContactFormTwo'
import CountryVisaSelect from '../components/CountryVisaSelect/page'
import CountryList from '../components/CountryListAll/CountryListAll'
import { europeCountries } from '../data/CountryData'
import CountryCards from '../components/PopularCountries/PopularCountries'

export default function Home() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в любую страну Мира.</h2>
                        <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                    </div>
                    <p>
                      Планируете поездку в Европу? Наш визовый центр поможет вам быстро и без проблем оформить шенгенскую визу, открывающую доступ к 27 странам Европы. Независимо от цели поездки — туризм, деловая встреча или учеба — мы обеспечим полное сопровождение на всех этапах процесса, избавив вас от бумажной волокиты и рисков отказа.
                    </p>
                </div>
                <MyForm/>
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
              <CountryList countries={europeCountries}/>
            </div>
          </section>
          <CountryCards/>
    </main>
  )
}
