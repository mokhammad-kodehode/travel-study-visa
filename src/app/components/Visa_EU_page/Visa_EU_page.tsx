"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling } from 'react-icons/fa';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import ProcessTimelineSection from '@/app/components/ProcessTimelineSection/ProcessTimelineSection';
import type { ReactNode } from 'react';
import Contact from '@/app/components/contact/Contact';

const schengenProcessSteps = [
  {
    title: 'Определите тип визы',
    description:
      'Определите тип шенгенской визы в зависимости от цели вашей поездки (туризм, работа, учеба и т.д.). Обсудите с нашим специалистом свой кейс — детально ответив на все вопросы, мы индивидуально подберём список документов для подачи.',
  },
  {
    title: 'Запишитесь на подачу документов',
    description:
      'Запись в консульство или визовый центр оформляется заранее. Если у вас конкретные даты или примерный диапазон поездки — начинаем процесс заблаговременно: документы подаются минимум за месяц до поездки. Сейчас есть трудности с записью — поможем записать вручную или ботом.',
  },
  {
    title: 'Подача документов',
    description:
      'Подойдите ко времени записи в визовый центр (опаздывать нельзя — запись аннулируется). Передаёте подготовленный нами пакет, сдаёте биометрию и фото на визу. На месте оплачиваете сервисный и консульский сборы — около 80 евро для взрослых. Дети до 6 лет освобождены. Имейте при себе наличные — некоторые страны не принимают карты.',
  },
  {
    title: 'Ожидание решения',
    description:
      'Срок рассмотрения с 2023 года — от 1 недели до 45 дней, иногда дольше. SMS о статусе готовности приходит на ваш номер, потом уведомление о передаче паспорта курьеру.',
  },
  {
    title: 'Получение паспорта с визой',
    description:
      'Решение об одобрении и параметрах визы (срок, коридор пребывания, количество въездов) принимает консульство. С шенгенской визой можно посещать соседние страны Шенгенского соглашения в рамках срока и количества въездов. При отказе к паспорту прилагается лист отказа.',
  },
];

interface CountryPageProps {
    country: CountryData;
  }

const visaDetails = [
  {
    title: 'Тип A (Транзитная виза)',
    description:
      'Предназначена для транзита через международные зоны аэропортов. Не позволяет выходить за пределы аэропорта.',
  },
  {
    title: 'Тип B (Транзитная виза)',
    description:
      'Предназначена для транзита через территорию Шенгенской зоны. Действует до 5 дней и позволяет пересечение границ Шенгенских стран.',
  },
  {
    title: 'Тип C (Краткосрочная виза)',
    description:
      'Наиболее распространённый тип, позволяющий находиться в Шенгенской зоне до 90 дней в течение 180 дней. Может быть выдана для целей туризма, деловых поездок, посещения друзей или родственников.',
  },
  {
    title: 'Тип D (Долгосрочная виза)',
    description:
      'Выдается для пребывания в стране более 90 дней. Обычно используется для учебы, работы или воссоединения с семьей. После получения такого типа визы можно подать заявление на получение вида на жительство.',
  },
];


export default function CountryPage({ country, advantagesSlot }: { country: CountryData; advantagesSlot?: ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false); 

  const openOrCloseChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
        if (isChatOpen) {
            window.jivo_api.close(); 
            setIsChatOpen(false); 
        } else {
            window.jivo_api.open(); 
            setIsChatOpen(true);
        }
    }
};

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('${country?.backgroundImgUrl}')`,
    width: '100%',
    margin: '0 auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  };


  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle}>
        <div className={styles.banner_container} >
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>{country.bannerTitle || `Оформление визы в ${country.name_two}`}</h1>
              <p className={styles.title_text_desc} style={{ whiteSpace: 'pre-line' }}>
                {country.bannerSubtitle || `Оформим нужный тип визы в ${country.name_two}.\nСпециализируемся на визовых вопросах любой сложности`}
              </p>
            </div>
            <button onClick={openOrCloseChat}  className={styles.order_btn} >ЗАКАЗАТЬ</button>
          </div>
        </div>
      </section >
        <div className={styles.breadcrumbs_wrapper}>
                  <div className={styles.breadcrumbs}>
                    <a href="/" aria-label="Перейти на главную страницу">Главная</a> &gt;
                    <a href="/visa_page" aria-label="Перейти на страницу визы ">Оформление визы</a> &gt;
                    <a href="/visa_page/europe" aria-label="Перейти на страницу визы в Европу">Европа</a> &gt;
                    <span>{country.name}</span>
        </div>
        </div>
        <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Виза в {country.name_two}</div>
        <div data-aos="fade-top" className={styles.image_wrapper}>
          <Image
            src={country.heroImageUrl || country.backgroundImgUrl}
            alt={`Оформление визы в ${country.name_two}`}
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto' }}
            className={styles.section_image}
          />
        </div>
        <div data-aos="fade-top" className={styles.description}>
          {Array.isArray(country.description) ? (
            <PortableText value={country.description} />
          ) : (
            <p>{country.description || country.feature_seven}</p>
          )}
        </div>
        <h4 className={styles.title_two}>У нас доступны следующие варианты виз</h4>
        <p className={styles.section_subtitle}>
          Шенгенская виза — единый въездной документ для 27 стран Европы.
        </p>
        <ul data-aos="fade-top" className={styles.process_list}>
          {visaDetails.map((visa, index) => (
            <li key={index} className={`${styles.process_list_item} ${openIndex === index ? styles.open_item : ''}`}>
              <button className={styles.toggleButton} onClick={() => toggleDescription(index)}>
                {visa.title}
                <span className={`${styles.toggleIcon} ${openIndex === index ? styles.open : ''}`}>
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              <div className={`${styles.description} ${openIndex === index ? styles.open : ''}`}>
                {visa.description}
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.description_spec}>
        Каждый тип визы имеет свои требования и процесс подачи заявления, поэтому важно заранее изучить информацию, чтобы правильно подготовить документы.
        </p>
        <h5 className={styles.title_two}>Особенности визы</h5>
        <p className={styles.section_subtitle}>
          Что даёт шенгенская виза кроме самого права въезда.
        </p>
        <div data-aos="fade-top" className={styles.special_wrapper}>
          <VisaFeatureCard
            icon={FaPlane}
            title="Многократный въезд"
            description={country.feature_one}
          />
          <VisaFeatureCard
            icon={FaCalendarAlt}
            title="Продолжительное пребывание"
            description={country.feature_two}
          />
          <VisaFeatureCard
            icon={FaBriefcase}
            title="Доступ к мероприятиям"
            description={country.feature_three}
          />
          <VisaFeatureCard
            icon={FaSuitcaseRolling}
            title="Гибкие условия путешествий"
            description={country.feature_four}
          />
        </div>   
        <h6 className={styles.title_two}>Необходимые документы для подачи на визу:</h6>
        <p className={styles.section_subtitle}>
          Список может немного отличаться в зависимости от страны подачи или типа визы — это стандартные требования для шенгенских виз.
        </p>
        <table data-aos="fade-top" className={styles.document_table}>
          <thead>
            <tr>
              <th>Документ</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Заграничный паспорт</td>
              <td className={styles.desc}>
              Срок действия паспорта должен быть минимум 3 месяца после окончания планируемого пребывания в зоне Шенгена. <br />
              Паспорт должен иметь минимум 2 пустые страницы для визы. <br />
              Копии первой страницы с данными и всех предыдущих шенгенских виз.
              </td>
            </tr>
            <tr>
              <td>Заполненная анкета на визу</td>
              <td className={styles.desc}>
                 Анкета заполняется на сайте консульства страны назначения или визового центра. Она должна быть подписана лично заявителем.
              </td>
            </tr>
            <tr>
              <td>Медицинская страховка</td>
              <td className={styles.desc}>
                Страховой полис, покрывающий все дни пребывания в зоне Шенгена. <br />
                Минимальная сумма покрытия — 30 000 евро. <br />
                Полис должен включать экстренную медицинскую помощь и репатриацию.
              </td>
            </tr>
            <tr>
              <td>Фотография</td>
              <td className={styles.desc}>
                Фото должно соответствовать стандартам на визу (5х5 см, на белом фоне).
              </td>
            </tr>
            <tr>
              <td>Подтверждение финансовой состоятельности</td>
              <td className={styles.desc}>
              Выписка из банка за последние 3–6 месяцев. <br />
              Справка с работы с указанием должности и заработной платы, заверенная печатью и подписью работодателя. <br />
              Для предпринимателей — копия свидетельства о регистрации и налоговая декларация. <br />
              Для студентов — спонсорское письмо и финансовые документы спонсора (родителей, например).
              </td>
            </tr>
            <tr>
              <td>Подтверждение цели поездки</td>
              <td className={styles.desc}>
              Бронирование авиабилетов (туда и обратно). <br />
              Подтверждение бронирования гостиницы или иного жилья на все время пребывания. <br />
              Приглашение от принимающей стороны (если едете в гости) с подтверждением их финансовой состоятельности и копией их документов.
              </td>
            </tr>
            <tr>
              <td>Копии национального паспорт</td>
              <td className={styles.desc}>
              Первая страница с фото и данные о прописке. <br />
              Копии всех заполненных страниц.
              </td>
            </tr>
            <tr>
              <td>Маршрут поездки (для некоторых консульств)</td>
              <td className={styles.desc}>
              Подробное описание маршрута, если планируются перемещения между странами Шенгена.
              </td>
            </tr>
            <tr>
              <td>Дополнительные документы (при необходимости)</td>
              <td className={styles.desc}>
                Для несовершеннолетних — разрешение от родителей (заверенное у нотариуса) на поездку и копии их паспортов.
                Для пенсионеров — пенсионное удостоверение и спонсорское письмо с финансовыми документами спонсора.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <ProcessTimelineSection
        title="Процесс получения визы"
        subtitle="Пошаговый план — что делать после обращения в нашу команду."
        items={schengenProcessSteps}
      />
      {advantagesSlot}
      <CountryCards/>
      <Contact/>
    </main>
  )
}
