"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyForm from '@/app/components/contactFormTwo/ContactFormTwo';
import { europeCountries, AmericaCountries, asiaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';

const CountryPage = () => {
  const [country, setCountry] = useState<CountryData | null>(null);

  useEffect(() => {
    const countryName = window.location.pathname.split('/').pop(); // Извлекаем название страны из URL
    console.log(countryName);
    
    if (countryName) {
      const countryData = [...europeCountries, ...AmericaCountries, ...asiaCountries]
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
              <h1 className={styles.title_text}>Оформление визы в {country.name}</h1>
              <h2 className={styles.title_text_desc}>Оформим нужный тип визы в {country.name}.</h2>
              <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
            </div>
            <p>
              Нужно оформить визу в {country.name}? 
              В визовом центре Visa-travels недорого готовы помочь вам с 
              получением визы в Москве. Процедура получения шенгенской визы
              для граждан РФ регламентируется законодательно и определяется
              международными соглашениями.
            </p>
          </div>
          <MyForm/>
        </div>
      </section >
    </main>
  )
}

export default CountryPage;