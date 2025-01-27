"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import CountryList from '../../components/CountryListAll/CountryListAll'
import { asiaCountries } from '../../data/CountryData'
import Contact from '@/app/components/contact/Contact';
import Image from 'next/image';
import Link from 'next/link';


export default function Asia() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в Азию</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в страны Азии. Оставьте заявку, и наш специалист ответит на все вопросы</h2>
                    </div>
                    <p>
                     </p>
                </div>
            </div>
          </section >
            <div className={styles.breadcrumbs_wrapper}>
              <div className={styles.breadcrumbs}>
                <a href="/">Главная</a> &gt;
                <a href="/visa_page">Оформление визы</a> &gt;
                <span>Азия</span>
              </div>
            </div>
          <section className={styles.section_two}>
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>АЗИЯ</h2>
            </div>
            <CountryList countries={asiaCountries}/>
            <div >
                <Link className={styles.countryItem}  href="visa_page/saudi_arabia">
                     <Image src="/images/Flags/saudi.svg" alt="Флаг саудовской аравии"width={54} height={35} />
                      Саудовская Аравия
                 </Link>
             </div>
          </section>
          <Contact/>
    </main>
  )
}
