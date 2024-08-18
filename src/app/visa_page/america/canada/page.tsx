"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import { AmericaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';


export default function CANADA() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
              <div className={styles.banner_container} >
                  <div className={styles.banner_title}>
                          <div className={styles.banner_title_text}>
                              <h1 className={styles.title_text}>Оформление виз в Канаду</h1>
                              <h2 className={styles.title_text_desc}>Оформим нужный тип визы в Канаду.</h2>
                              <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                          </div>
                          <button onClick={handleOpenModal} className={styles.order_btn} >Заказать</button>
                              {isModalOpen && (
                                <ModalForm closeModal={handleCloseModal} />
                              )}
                    </div>
              </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
                <div className={styles.breadcrumbs}>
                  <a href="/">Главная</a> &gt;
                  <a href="/visa_page">Оформление визы</a> &gt;
                  <a href="/visa_page/america">Северная Америка</a> &gt;
                  <span>США</span>
                </div>
            </div>
          <section className={styles.section_two}>
          </section>
          <CountryCards/>
    </main>
  )
}