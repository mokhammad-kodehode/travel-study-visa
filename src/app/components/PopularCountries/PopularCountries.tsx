"use client"

import React, {useState} from 'react';
import styles from './styles.module.css';
import ModalForm from '../ContactForm/ContactFor'; 

type CountryCard = {
    id: number;
    continent: string;
    country: string;
    price: number;
    processingTime: string;
    imageUrl: string;
  };

const countrycards: CountryCard[] = [
    {
        id: 1,
        continent: "Европа",
        country: "Франция",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/France.jpg"
      },
      {
        id: 2,
        continent: "Европа",
        country: "Германия",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Germany.jpg"
      },
      {
        id: 3,
        continent: "Европа",
        country: "Испания",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Barcelona.jpg"
      },
      {
        id: 4,
        continent: "Европа",
        country: "Италия",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/Rome.jpg"
      },
      {
        id: 5,
        continent: "Америка",
        country: "США",
        price: 1400,
        processingTime: "5 дней",
        imageUrl: "/images/countries/New.jpg"
      },
      {
        id: 6,
        continent: "Европа",
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
                    <span>{countrycard.continent}</span>
                    <h3>{countrycard.country}</h3>
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