"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Advantages from './components/Advantage/AdvantageCard/AdvantageCard'
import CountryCards from './components/PopularCountries/PopularCountries'
import ServicesList from './components/OurServices/OurServices'
import Contact from './components/contact/Contact'
import SloganSection from './components/slogan/Slogan'
import PricingTable from './components/price/price'
import TariffSelectionPage from './components/PriceCard/priceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


import 'fontsource-inter';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false); 

  const openOrCloseChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
        if (isChatOpen) {
            window.jivo_api.close(); // Закрываем чат, если он открыт
            setIsChatOpen(false); // Обновляем состояние
        } else {
            window.jivo_api.open(); // Открываем чат, если он закрыт
            setIsChatOpen(true); // Обновляем состояние
        }
    }
};

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_title}>
                <h1 className={styles.title_text}>Стань гражданином мира с нами!</h1>
                <h2 className={styles.title_text_desc}>Оформи ВНЖ, гражданство, визы любой страны мира, находясь в любой точке планеты!</h2>
                  {/* <button onClick={openOrCloseChat} className={styles.order_btn}>ЗАКАЗАТЬ</button> */}
                  <div className={styles.additional_info}>
                      <div className={styles.info_item}>
                        <FontAwesomeIcon className={styles.icon} icon={faBriefcase} /> Более 10 лет опыта
                      </div>
                      <div className={styles.info_item}>
                        <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} /> Гарантия результата
                      </div>
                      <div className={styles.info_item}>
                        <FontAwesomeIcon className={styles.icon} icon={faUsers} /> 1000 довольных клиентов
                      </div>
                  </div>
            </div> 
            {/* <div className={styles.wrapper_country_select}>
                <h4>Выберите направление</h4>
                <CountryVisaSelect/>
            </div > */}
          </section >
          <SloganSection/>
          <section className={styles.section_three}>
          </section>
          <section className={styles.section_two}>
                  <Image
                  src="/images/global.jpg"
                  alt="Pass"
                  width={520} 
                  height={350} 
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
          <TariffSelectionPage/>
          <PricingTable/>
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
                  alt="Umra"
                  width={520} 
                  height={350} 
                  className={styles.section_image}
                />
          </section>
          <CountryCards/>
          <section className={styles.section_four}>
               <Image
                  src="/images/global_two.jpg" 
                  alt="Pass"
                  width={520} 
                  height={350}
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
                  width={520} 
                  height={350}
                  className={styles.section_image}
                />
          </section>
          <Contact/>
    </main>
  )
}
