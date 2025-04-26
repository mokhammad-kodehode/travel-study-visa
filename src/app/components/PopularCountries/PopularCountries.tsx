"use client"

import React, {useState} from 'react';
import styles from './styles.module.css';
import ModalForm from '../ContactForm/ContactFor'; 
import Link from 'next/link';

type CountryCard = {
    id: number;
    continent: string;
    country: string;
    price: number;
    processingTime: string;
    imageUrl: string;
    continentUrl: string;
    pageUrl: string;
  };

const countrycards: CountryCard[] = [
    {
        id: 1,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        country: "Франция",
        pageUrl: '/visa/france',
        price: 27000,
        processingTime: "5 дней",
        imageUrl: "/images/countries/France.jpg"
      },
      {
        id: 2,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        country: "Германия",
        pageUrl: '/visa/germany',
        price: 27000,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Germany.jpg"
      },
      {
        id: 3,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        country: "Испания",
        pageUrl: '/visa/spain',
        price: 27000,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Spain.webp"
      },
      {
        id: 4,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        pageUrl: '/visa/italy',
        country: "Италия",
        price: 27000,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Rome.jpg"
      },
      {
        id: 5,
        continent: "Америка",
        continentUrl: "/visa_page/america",
        country: "США",
        pageUrl: '/visa_page/america/usa',
        price: 27000,
        processingTime: "5 дней",
        imageUrl: "/images/countries/New.webp"
      },
      {
        id: 6,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        pageUrl: '/visa_page/united_kingdom',
        country: "Великобритания",
        price: 27000,
        processingTime: "5 дней",
        imageUrl: "/images/countries/London.jpg"
      },
];

const CountryCards: React.FC = () => {

    return (
      <section className={styles.container}>
        <div data-aos="fade-top" className={styles.container_content}>
        <h2 className={styles.container_title}>Популярные страны</h2>
            <div className={styles.cards}>
              {countrycards.map((countrycard) => (
                <div 
                  key={countrycard.id} 
                  className={styles.card}
                  style={{ backgroundImage:  `url(${countrycard.imageUrl})` }} // Установка изображения фона
                >
                  <div className={styles.cardContent}> 
                  {/* Используйте cardContent для содержимого поверх фона */}
                  <div className={styles.cardHeader}>
                    <Link className={styles.country_link} href={countrycard.continentUrl}> <span>{countrycard.continent}</span> </Link>
                    <Link  href={countrycard.pageUrl}><h3 className={styles.country_link_two}>{countrycard.country}</h3></Link>
                  </div>
                  <div className={styles.cardBottom}>
                    <p>Срок выдачи от <strong>{countrycard.processingTime}</strong></p>
                    <p>Цена от <strong>{countrycard.price} руб.</strong></p>
                    <Link  href={countrycard.pageUrl}>
                      <button className={styles.button}>ПОДРОБНЕЕ</button>
                    </Link>
                  </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    );
  };

export default CountryCards;