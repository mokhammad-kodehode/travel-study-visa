"use client";

import styles from "./styles.module.css";
import la from "./legalAreas.module.css";             // ⬅️ стили для аккордеона
import "fontsource-inter";
import { useState } from "react";
import {
  FaPassport,
  FaFileAlt,
  FaCalendarCheck,
  FaEnvelopeOpenText,
  FaGlobe,
  FaFileSignature,
  FaGraduationCap,
  FaBuilding,
  FaBalanceScale,
  FaChevronDown,
} from "react-icons/fa";
import Contact from "@/app/components/contact/Contact";
import ServicesList from "@/app/components/OurServices/OurServices";
import AdvantagesTwo from "@/app/components/Advantage/AdvantageCard/AdvantageCard";
import { PHONE_TEL } from "@/config/contacts";

const ZagranPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>("immigration"); // открыт первый блок

  const openOrCloseChat = () => {
    if (typeof window !== "undefined" && (window as any).jivo_api) {
      if (isChatOpen) {
        (window as any).jivo_api.close();
        setIsChatOpen(false);
      } else {
        (window as any).jivo_api.open();
        setIsChatOpen(true);
      }
    }
  };

  const areas = [
    {
      id: "immigration",
      title: "Иммиграционное право",
      icon: <FaGlobe />,
      bullets: [
        "Оформление ВНЖ и второго гражданства",
        "Разрешения на работу",
        "Сопровождение иммиграционных и натурализационных процедур",
      ],
    },
    {
      id: "visas",
      title: "Визовое сопровождение",
      icon: <FaPassport />,
      bullets: [
        "Подготовка документов для виз всех категорий",
        "Апелляции и работа со сложными случаями",
        "Консультации по требованиям разных стран",
      ],
    },
    {
      id: "legalization",
      title: "Документы и легализация",
      icon: <FaFileSignature />,
      bullets: [
        "Загранпаспорт и персональные документы в кратчайшие сроки",
        "Переводы с нотариальным заверением и присяжные переводы",
        "Апостиль и консульская легализация, доверенности и соглашения",
      ],
    },
    {
      id: "education",
      title: "Образовательное право и обучение",
      icon: <FaGraduationCap />,
      bullets: [
        "Договоры с зарубежными учебными заведениями",
        "Студенческие визы и пакет документов",
        "Нострификация дипломов",
      ],
    },
    {
      id: "business",
      title: "Бизнес и инвестиции",
      icon: <FaBuilding />,
      bullets: [
        "Открытие компаний в РФ и за рубежом",
        "Инвестиционные соглашения",
        "Проверка недвижимости и сделок",
      ],
    },
    {
      id: "domestic",
      title: "Правовая поддержка внутри страны",
      icon: <FaBalanceScale />,
      bullets: [
        "Регистрация и ликвидация организаций",
        "Договоры, жалобы и обращения",
        "Представление интересов в госорганах",
      ],
    },
  ];

  return (
    <main className={styles.main}>
      {/* ===== Баннер ===== */}
      <section className={styles.banner}>
        <div className={`${styles.banner_container} ${styles.mobileReverse}`}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>Юридическая поддержка</h1>
              <h2 className={styles.title_text_desc}>
                Мы предоставляем полный спектр юридических услуг для частных лиц и компаний — как
                внутри страны, так и при решении международных вопросов, связанных с переездом,
                обучением, инвестированием и ведением бизнеса за рубежом.
              </h2>
              <button onClick={openOrCloseChat} className={styles.order_btn}>
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Хлебные крошки ===== */}
      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt; <a href="/services_page">Наши услуги</a> &gt;{" "}
          <span>Юридическая поддержка</span>
        </div>
      </div>

      {/* ===== Описание + аккордеон ===== */}
      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Юридическая поддержка</div>

        <p className={styles.description}>
          Мы предоставляем полный спектр юридических услуг для частных лиц и компаний — как{" "}
          <strong>внутри страны</strong>, так и при решении <strong>международных вопросов</strong>,
          связанных с переездом, обучением, инвестированием и ведением бизнеса за рубежом. Наша
          команда юристов и консультантов помогает клиентам грамотно оформить документы, защитить
          свои интересы и реализовать личные и профессиональные цели в соответствии с
          законодательством России и других стран.
        </p>


        {/* ==== Продающий блок: Направления и услуги ==== */}
        <section className={la.wrap} aria-labelledby="legal-areas-title">
          <header className={la.head}>
            <h3 id="legal-areas-title" className={la.title}>
              Основные направления юридической поддержки
            </h3>
            <p className={la.sub}>Нажмите на раздел, чтобы раскрыть список услуг</p>
          </header>

          <div className={la.grid}>
            {areas.map((area) => {
              const isOpen = openId === area.id;
              const bodyId = `body-${area.id}`;
              const titleId = `title-${area.id}`;

              return (
                <article
                  key={area.id}
                  className={`${la.card} ${isOpen ? la.open : ""}`}
                  aria-labelledby={titleId}
                >
                  <button
                    className={la.cardHead}
                    onClick={() => setOpenId(isOpen ? null : area.id)}
                    aria-controls={bodyId}
                    aria-expanded={isOpen}
                    id={titleId}
                  >
                    <span className={la.icon}>{area.icon}</span>
                    <span className={la.cardTitle}>{area.title}</span>
                    <FaChevronDown className={`${la.chev} ${isOpen ? la.chevOpen : ""}`} />
                  </button>

                  <div
                    id={bodyId}
                    className={la.body}
                    hidden={!isOpen}
                    style={{ maxHeight: isOpen ? "420px" : "0px" }}
                  >
                    <ul className={la.list}>
                      {area.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={la.callout}>
            <div>
              <h4 className={la.calloutTitle}>🧩 Комплексный подход</h4>
              <p className={la.calloutText}>
                От первичной консультации и подготовки документов до представления ваших интересов в
                госорганах и международных структурах. Наша цель — юридическая точность и ваше
                спокойствие.
              </p>
            </div>
            <a href={`tel:${PHONE_TEL}`} className={la.cta}>
              Получить консультацию
            </a>
          </div>
        </section>
        {/* ==== /Направления и услуги ==== */}
      </section>

      {/* ===== Остальные блоки ===== */}
      <AdvantagesTwo />
      <Contact />
      <ServicesList />
    </main>
  );
};

export default ZagranPage;
