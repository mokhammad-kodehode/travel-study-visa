"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { useState } from 'react'
import 'fontsource-inter';
import MyForm from '../components/contactFormTwo/ContactFormTwo'
import CountryVisaSelect from '../components/CountryVisaSelect/page'

export default function Home() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в любую страну Мира.</h2>
                        <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                    </div>
                    <p>
                        Нужно оформить шенгенскую визу? 
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
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>Выберите направление</h2>
              <CountryVisaSelect/>
            </div>
          </section>
    </main>
  )
}
