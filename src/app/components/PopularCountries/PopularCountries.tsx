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
        pageUrl: '/countries/france',
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/France.jpg"
      },
      {
        id: 2,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        country: "Германия",
        pageUrl: '/countries/germany',
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Germany.jpg"
      },
      {
        id: 3,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        country: "Испания",
        pageUrl: '/countries/spain',
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Spain.jpg"
      },
      {
        id: 4,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        pageUrl: '/countries/italy',
        country: "Италия",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Rome.jpg"
      },
      {
        id: 5,
        continent: "Америка",
        continentUrl: "/visa_page/america",
        country: "США",
        pageUrl: '/countries/usa',
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/New.jpg"
      },
      {
        id: 6,
        continent: "Европа",
        continentUrl: "/visa_page/europe",
        pageUrl: '/countries/united-kingdom',
        country: "Великобритания",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/London.jpg"
      },
];

const CountryCards: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleOpenModal = (id: number) => setActiveCardId(id);
  const handleCloseModal = () => setActiveCardId(null);

    return (
      <section className={styles.container}>
        <div className={styles.container_content}>
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
                    <Link href={countrycard.continentUrl}> <span>{countrycard.continent}</span> </Link>
                    <Link href={countrycard.pageUrl}><h3>{countrycard.country}</h3></Link>
                  </div>
                  <div className={styles.cardBottom}>
                    <p>Цена от <strong>{countrycard.price} руб.</strong></p>
                    <p>Срок выдачи от <strong>{countrycard.processingTime}</strong></p>
                    <button onClick={() => handleOpenModal(countrycard.id)} className={styles.button}>Оформить визу</button>
                    {activeCardId !== null && (
                      <ModalForm closeModal={handleCloseModal} />
                    )}
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