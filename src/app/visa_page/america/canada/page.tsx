"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import MyForm from '@/app/components/contactFormTwo/ContactFormTwo';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import { AmericaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';


export default function USA() {

    const [country, setCountry] = useState<CountryData | null>(null);

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('${country?.backgroundImgUrl}')`,
    width: '100%',
    height: '630px',
    margin: '0 auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  };

  useEffect(() => {
    const countryName = window.location.pathname.split('/').pop(); // Извлекаем название страны из URL
    console.log(countryName);
    
    if (countryName) {
      const countryData = [...AmericaCountries]
        .find((c) => c.nameof.toLowerCase() === countryName.toLowerCase());

      setCountry(countryData || null);
    }
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в Канаду</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в Америку и Канаду.</h2>
                        <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                    </div>
                    <p>
                        Нужно оформить визу в Америку? 
                        В визовом центре Visa-travels недорого готовы помочь вам с 
                        получением визы в Москве. Процедура получения шенгенской визы
                        для граждан РФ регламентируется законодательно и определяется
                        международными соглашениями.
                     </p>
                </div>
                <MyForm/>
            </div>
          </section >
          <section className={styles.section_two}>
          </section>
          <CountryCards/>
    </main>
  )
}