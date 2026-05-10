"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { useState, useEffect } from "react";
import type { ReactNode } from 'react'
import CountryCards from './components/PopularCountries/PopularCountries'
import ServicesList from './components/OurServices/OurServices'
import Contact from './components/contact/Contact'
import ModalForm from './components/ContactForm/ContactFor'
import SloganSection from './components/slogan/Slogan'
import SearchBar from './components/search/SearchBar';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import {
  FaShieldAlt,
  FaFileSignature,
  FaGlobeEurope,
  FaGavel,
  FaGraduationCap,
  FaHandsHelping,
  FaStar,
  FaPassport,
} from 'react-icons/fa';
import CountryVisaSelect from './components/CountryVisaSelect/page';
import CountryList from './components/CountryListAll/CountryListAll';
import { europeCountries, AmericaCountries, asiaCountries } from "./data/CountryData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import 'fontsource-inter';

const phrases = [
  "ВНЖ",
  "гражданство",
  "визы любой страны мира",
  "находясь в любой точке планеты",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
      setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    }
  }, [charIndex, isDeleting, phraseIndex]); // ✅ Добавили phraseIndex в зависимости

  return (
    <h2 className={styles.title_text_desc}>
      Оформи <span className={styles.animated_text}>{text}</span>
      <span className={styles.cursor}>|</span> {/* Курсор */}
    </h2>
  );
};


export default function Home({
  advantagesSlot,
  valuesSlot,
}: {
  advantagesSlot?: ReactNode;
  valuesSlot?: ReactNode;
} = {}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const filterCountries = (countries: any[]) =>
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
      
        if (isModalVisible) {
          html.style.overflow = 'hidden';
          body.style.overflow = 'hidden';
        } else {
          html.style.overflow = '';
          body.style.overflow = '';
        }
      
        return () => {
          html.style.overflow = '';
          body.style.overflow = '';
        };
      }, [isModalVisible]);

  const openJivoChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
      window.jivo_api.open();
    } else {
      setIsModalVisible(true);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <section className={styles.banner}>
            <div className={styles.banner_title}>
              <h1 className={styles.title_text}>Стань гражданином мира <span className={styles.accent}>с нами!</span></h1>
              <TypingEffect />
              <button onClick={openJivoChat} className={styles.main_btn}>Оставить заявку</button>
              <div className={styles.additional_info}>
                <div className={styles.info_item}>
                  <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
                  <p>Более 10 лет опыта</p>
                </div>
                <div className={styles.info_item}>
                  <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
                  <p>Гарантия результата</p>
                </div>
                <div className={styles.info_item}>
                  <FontAwesomeIcon className={styles.icon} icon={faUsers} />
                  <p>1000 довольных клиентов</p>
                </div>
              </div>
            </div>
        </section>
            <SloganSection/>
            <BenefitsSection
              title="Почему именно мы?"
              subtitle="Один центр — все решения: путешествия, образование и юридическая поддержка без стресса."
              items={[
                {
                  title: 'Международный центр туризма, образования и права',
                  description:
                    'Станет вашим надёжным партнёром в мире путешествий, обучения и юридической поддержки.',
                },
                {
                  title: 'Профессиональные переводы, апостиль и сопровождение кейса',
                  description:
                    'Мы берём на себя весь процесс — от перевода и легализации документов до комплексного ведения вашего дела на всех этапах.',
                },
                {
                  title: 'Туризм и визовая поддержка',
                  description:
                    'Поможем со сбором документов, оформлением виз, ВНЖ и гражданства; бронированием отелей и авиабилетов.',
                },
                {
                  title: 'Юридическая помощь',
                  description:
                    'Миграционное, гражданское, семейное, трудовое и международное право — сопровождение и защита интересов.',
                },
                {
                  title: 'Образовательные программы',
                  description:
                    'Подберём обучение в России и за рубежом — от языковых курсов до поступления в ведущие университеты.',
                },
                {
                  title: 'Независимо от цели — учёба, отдых, эмиграция или правовые вопросы',
                  description: 'Мы обеспечим профессиональное сопровождение на каждом этапе.',
                },
                {
                  title: 'Комфорт. Безопасность. Экспертность.',
                  description: 'Всё в одном центре.',
                },
                {
                  title: 'Визовый центр',
                  description:
                    'Визы всех категорий, апелляции после отказов, контроль сроков и актуальные требования консульств.',
                },
              ]}
              icons={[
                FaShieldAlt,
                FaFileSignature,
                FaGlobeEurope,
                FaGavel,
                FaGraduationCap,
                FaHandsHelping,
                FaStar,
                FaPassport,
              ]}
            />
                      <section className={styles.section_two}>
              <div data-aos="fade-right" className={styles.images_wrapper}>
              <Image
                    src="/images/global.jpg"
                    alt="Pass"
                    width={520} 
                    height={350} 
                    className={styles.section_image}
                  />
              </div>
                  <div data-aos="fade-left" className={styles.section_two_title}>
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
           <section data-aos="fade-up" className={styles.section_search}>
                    <div className={styles.CountryVisaSelect}>
                        <h2 className={styles.selectCountryTitle}>Выберите направление</h2>
                        <CountryVisaSelect/>
                  </div>
                  <SearchBar onSearch={(query) => setSearchQuery(query)} />
                  <CountryList countries={filterCountries(europeCountries)} />
                  <CountryList countries={filterCountries(asiaCountries)} />
                  <CountryList countries={filterCountries(AmericaCountries)} />
            </section>
            <section className={styles.section_three}>
            </section>
            <CountryCards/>
            <section className={`${styles.section_Six} ${styles.mobileReverse}`}>
                  <div data-aos="fade-right" className={styles.section_Six_title}>
                    <h2 className={styles.section_Six_h2}>Умра и туры в Саудовскую Аравию</h2>
                    <p className={styles.section_Six_p}>
                    Мы обеспечим быстрое и простое оформление визы Умра, которая позволит вам совершить паломничество в любое время года. Наша команда поможет собрать все необходимые документы и проконсультирует по процессу получения визы, чтобы вы могли сосредоточиться на духовном аспекте поездки.
                    </p>
                    <Link href="/services_page/umra">
                      <button className={styles.section_Six_btn} >УЗНАТЬ БОЛЬШЕ</button>
                    </Link>
                    
                  </div>
                  <div data-aos="fade-left" className={styles.images_wrapper}>
                    <Image
                      src="/images/Umra.jpg" 
                      alt="Umra"
                      width={520} 
                      height={350} 
                      className={styles.section_image}
                    />
                    </div>
            </section>
                        {advantagesSlot}
            <section className={styles.section_Six}>
            <div data-aos="fade-right" className={styles.images_wrapper}>
                  <Image
                    src="/images/global_two.jpg" 
                    alt="Pass"
                    width={520} 
                    height={350}
                    className={styles.section_image}
                  />
                  </div>
                  <div data-aos="fade-left" className={styles.section_Six_title}>
                    <h2 className={styles.section_Six_h2}>Оформление ВНЖ</h2>
                    <p className={styles.section_Six_p}>Мы ежедневно упрощаем процесс получения вида на жительство, предлагая удобные и выгодные условия для наших клиентов. Наша команда с более чем десятилетним опытом помогает вам на всех этапах подготовки документов, гарантируя персональный подход и конкурентные цены. Станьте нашим партнёром и получите ВНЖ легко и быстро!
                    </p>
                    <Link href="/vnj_page">
                      <button className={styles.section_Six_btn} >УЗНАТЬ БОЛЬШЕ</button>
                    </Link>
                  </div>
            </section>
            <ServicesList/>
            {valuesSlot}
            <Contact/>
      </main>
      {isModalVisible && <ModalForm closeModal={() => setIsModalVisible(false)} />}
    </>
  )
}