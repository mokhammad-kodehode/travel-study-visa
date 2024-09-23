"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import CountrySelect from './components/CountrySelect/countrySelect'
import PriceCard from './components/PriceCard/priceCard'
import Advantages from './components/Advantage/AdvantageCard/AdvantageCard'
import CountryCards from './components/PopularCountries/PopularCountries'
import ServicesList from './components/OurServices/OurServices'
import { useState } from 'react'
import ModalForm from './components/ContactForm/ContactFor'
import Contact from './components/contact/Contact'


import 'fontsource-inter';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_title}>
               <div className={styles.banner_title_text}>
                <h1 className={styles.title_text}>Путешествуйте без границ</h1>
                <h2 className={styles.title_text_desc}>Оформление виз и загранпаспортов в Москве и области.</h2>
                <h3 className={styles.title_text_desc}>Оформление гражданства и ВНЖ</h3>
               </div>
               <button onClick={handleOpenModal} className={styles.order_btn} > ЗАКАЗАТЬ</button>
                {isModalOpen && (
                  <ModalForm closeModal={handleCloseModal} />
                )}
            </div> 
            {/* <div className={styles.wrapper_country_select}>
                <h4>Выберите направление</h4>
                <CountryVisaSelect/>
            </div > */}
          </section >
          <section className={styles.section_three}>
              <PriceCard/>
          </section>
          <section className={styles.section_two}>
                  <Image
                  src="/images/global.jpg"
                  alt="Pass"
                  width={600} 
                  height={400} 
                  className={styles.section_image}
                />
                <div className={styles.section_two_title}>
                  <h2 className={styles.section_two_h2}>Оформляем визы</h2>
                  <p className={styles.section_two_p}>Каждый день мы совершенствуем процесс получения виз в любую страну.
                  Создаём выгодные условия сотрудничества для десятков клиентов по всей стране.
                  Сотрудники на протяжении десяти лет трудятся обеспечивая Вам комфортные условия в подготовке документов и 
                  получении виз в страны Шенгена по самым низким ценам и с индивидуальным подходом к каждому клиенту.
                  Убедитесь в этом сами, став нашим партнёром!
                  </p>
                  <Link href="/visa_page">
                    <button className={styles.section_Six_btn}>УЗНАТЬ БОЛЬШЕ</button>
                  </Link>
                </div>
          </section>
          <Advantages/>
          <section className={`${styles.section_Six} ${styles.mobileReverse}`}>
                <div className={styles.section_Six_title}>
                  <h2 className={styles.section_Six_h2}>Умра и туры в Саудовскую Аравию</h2>
                  <p className={styles.section_Six_p}>
                  Мы обеспечим быстрое и простое оформление визы Умра, которая позволит вам совершить паломничество в любое время года. Наша команда поможет собрать все необходимые документы и проконсультирует по процессу получения визы, чтобы вы могли сосредоточиться на духовном аспекте поездки.
                  </p>
                  <Link href="/services_page/umra">
                    <button className={styles.section_Six_btn} >УЗНАТЬ БОЛЬШЕ</button>
                  </Link>
                  
                </div>
                <Image
                  src="/images/Umra.jpg" 
                  alt="Romania"
                  width={600} 
                  height={400} 
                  className={styles.section_image}
                />
          </section>
          <CountryCards/>
          <section className={styles.section_four}>
               <Image
                  src="/images/global_two.jpg" 
                  alt="Pass"
                  width={600} 
                  height={400}
                  className={styles.section_image}
                />
                <div className={styles.section_four_title}>
                  <h2 className={styles.section_four_h2}>Оформление ВНЖ</h2>
                  <p className={styles.section_four_p}>Мы ежедневно упрощаем процесс получения вида на жительство, предлагая удобные и выгодные условия для наших клиентов. Наша команда с более чем десятилетним опытом помогает вам на всех этапах подготовки документов, гарантируя персональный подход и конкурентные цены. Станьте нашим партнёром и получите ВНЖ легко и быстро!
                  </p>
                  <Link href="/services_page/vnj_page">
                    <button className={styles.section_Six_btn} >УЗНАТЬ БОЛЬШЕ</button>
                  </Link>
                </div>
          </section>
          <ServicesList/>
          <section className={`${styles.section_four} ${styles.mobileReverse}`}>
                <div className={styles.section_four_title}>
                  <h2 className={styles.section_four_h2}>Почему именно мы ?</h2>
                  <p className={styles.section_four_p}>Многофункциональный визовый центр — одна из лидирующих компаний на Российском рынке по оказанию сервисно — туристических услуг. С нами работают тысячи клиентов, среди которых частные лица, туристические агентства и компании. Работая с большим потоком визовых документов, мы находимся в курсе всех обновлений, нюансов и правил, установленных консульствами всех стран. Подходим к каждому заявителю с индивидуальным подходом, избавляя от ненужной волокиты, экономя время и деньги наших клиентов. Мы стремимся быть признанным лидером, надежным партнером и просто другом, помогая Вам открывать новые страны и континенты.
                  </p>
                  <Link href="/services_page/romanian-citizenship">
                    <button className={styles.section_Six_btn} >О КОМПАНИИ</button>
                  </Link>
                </div>
                <Image
                  src="/images/Four.png" 
                  alt="Pass"
                  width={600} 
                  height={400}
                  className={styles.section_image}
                />
          </section>
          <Contact/>
    </main>
  )
}
