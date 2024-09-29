"use client"

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'
import 'fontsource-inter';
import MyForm from '@/app/components/contactFormTwo/ContactFormTwo';
import CountryVisaSelect from '@/app/components/CountryVisaSelect/page'
import CountryCards from '@/app/components/PopularCountries/PopularCountries'
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import { AmericaCountries } from '@/app/data/CountryData';


export default function America() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в Америку и Канаду</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в Америку и Канаду.</h2>
                        <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                    </div>
                    <p>
                     </p>
                </div>
                <MyForm/>
            </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a href="/visa_page">Оформление визы</a> &gt;
              <span>Северная Америка</span>
            </div>
          </div>
          <section className={styles.section_two}>
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>СЕВЕРНАЯ АМЕРИКА</h2>
                <div className={styles.countryList}>
                    {AmericaCountries.map(country => (
                        <Link href={country.pageUrl} key={country.name}>
                        <div className={styles.countryItem}>
                            <Image src={country.flagUrl} alt={`Флаг ${country.name}`} width={54} height={35} />
                            <span>{country.name}</span>
                        </div>
                        </Link>
                    ))}
                    </div>
            </div>
          </section>
          <CountryCards/>
          <AdvantagesTwo/>
    </main>
  )
}
