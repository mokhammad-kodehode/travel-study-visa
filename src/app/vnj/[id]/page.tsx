"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import Image from 'next/image';
import { europeCountries } from '@/app/data/CountryDataVnj';
import { CountryDataVNJ } from '@/app/data/CountryDataVnj';
import { useState, useEffect } from 'react';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import {   FaMoneyBillWave,
    FaBuilding,
    FaPassport,
    FaHome,
    FaGlobeEurope,
    FaGraduationCap,
    FaBusinessTime, } from 'react-icons/fa';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '@/app/components/contact/Contact';



const CountryPage = () => {
  const [country, setCountry] = useState<CountryDataVNJ | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    height: '100vh',
  };

  useEffect(() => {
    const countryName = window.location.pathname.split('/').pop(); // Извлекаем название страны из URL
    console.log(countryName);
    
    if (countryName) {
      const countryData = [...europeCountries]
        .find((c) => c.nameof.toLowerCase() === countryName.toLowerCase());

      setCountry(countryData || null);
    }
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle} >
        <div className={styles.banner_container} >
          <div className={styles.banner_title}>
              <h1 className={styles.title_text}>Оформление ВНЖ в {country.name_two}</h1>
            <p>
             Ваш путь к европейскому ВНЖ начинается здесь — профессиональная помощь в оформлении документов
            </p>
          </div>
        </div>
      </section >
      <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a href="/vnj_page">Страны</a> &gt;
              <span>{country.name}</span>
            </div>
          </div>
          <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>ВНЖ {country.name_three} <br /> <p>На основании открытия торгового представительств. Выдается карта ВНЖ сроком на один год с последующим продлением.</p> </div>
        <div className={styles.image_wrapper}>
          <Image
            src={country?.backgroundImgUrl}
            alt="USA"
            width={600}
            height={400}
            layout="responsive"
            className={styles.section_image}
          />
        </div>
        <p className={styles.description}>
           Хотите обрести стабильность и новые перспективы в уютной атмосфере {country.name_three}? Наша компания предлагает профессиональное сопровождение по оформлению ВНЖ в {country.name_three} – вашему ключу к беззаботной жизни в этой прекрасной стране. С учетом наших богатых знаний и опыта в области визовых процедур, мы обеспечим вас всей необходимой информацией и поддержкой на каждом этапе процесса. Получите преимущества резидентства в {country.name_three}: доступ к бизнесу, образованию и здравоохранению. Предлагаемые нами услуги по оформлению ВНЖ в {country.name_three} позволят вам без лишних затрат времени и усилий освоиться в новой стране, оставаясь спокойным и уверенным в своем будущем. Доверьте нам вашу мечту о жизни в {country.name_three} – начните новую главу своей жизни прямо сейчас!
        </p>
        <h4 className={styles.title_two}>Основания для получения:</h4>
        <p className={styles.description}>
          Возможные варианты получения ВНЖ в Испании.
        </p>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Открытие торгового представительства</strong>
            <span>
              До 2 месяцев. Подходит для собственников ООО, действующего не менее 2 лет на территории России.
            </span>
          </li>
          <li>
            <strong>Трудоустройство в действующую компанию</strong>
            <span>
              Если у вас нет собственного ООО, вы можете быть оформлены наемным сотрудником в действующую организацию, которая уже имеет иностранное представительство на территории {country.name_three}.
            </span>
          </li>
        </ul>
        
        <h3 className={styles.title_two}>Что дает ВНЖ {country.name_three}?</h3>
        <div className={styles.special_wrapper}>
        <VisaFeatureCard
            icon={FaHome}
            title="Право на проживание и работу"
            description={country.feature_one}
          />
          <VisaFeatureCard
            icon={FaGlobeEurope}
            title="Путешествия по Европе"
            description={country.feature_two}
          />
          <VisaFeatureCard
            icon={FaGraduationCap}
            title="Доступ к медицине и образованию"
            description={country.feature_three}
          />
          <VisaFeatureCard
            icon={FaBusinessTime}
            title="Возможности для бизнеса и инвестиций"
            description={country.feature_four}
          />
          <VisaFeatureCard
            icon={FaMoneyBillWave}
            title="Налоговые льготы и преференции"
            description={country.feature_five}
          />
          <VisaFeatureCard
            icon={FaBuilding}
            title="Покупка недвижимости"
            description={country.feature_six}
          />
          <VisaFeatureCard
            icon={FaPassport}
            title="Путь к гражданству"
            description={country.feature_seven}
          />
        </div>
        
        <h4 className={styles.title_two}>Необходимые документы для подачи на визу:</h4>
        <p className={styles.description}>
          Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.
        </p>
        <table className={styles.document_table}>
          <thead>
            <tr>
              <th>Документ</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Заявление на получение вида на жительство</td>
              <td className={styles.desc}>
                Официальная форма заявления на ВНЖ в {country.name_three}.
              </td>
            </tr>
            <tr>
              <td>Заграничный паспорт</td>
              <td className={styles.desc}>
                Действующий загранпаспорт, который будет использоваться при оформлении ВНЖ.
              </td>
            </tr>
            <tr>
              <td>Две цветные фотографии</td>
              <td className={styles.desc}>
                Два цветных портретных фото на белом фоне (размеры 35 x 45мм).
              </td>
            </tr>
            <tr>
              <td>Медицинская страховка</td>
              <td className={styles.desc}>
                Документ, подтверждающий наличие медицинской страховки, покрывающей расходы на медицинское обслуживание в {country.name_three}.
              </td>
            </tr>
            <tr>
              <td>Справка о доходах</td>
              <td className={styles.desc}>
                Выписка из банка или другие документы, подтверждающие финансовую состоятельность.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.title_two}>Процесс получения визы:</h2>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Подготовка оснований для получения ВНЖ</strong>
            <span>
              Сбор необходимых документов и обоснований для получения вида на жительство. (срок — 15 рабочих дней)
            </span>
          </li>
          <li>
            <strong>Подготовка документов на визу «Д»</strong>
            <span>
              Открытие банковских счетов, оформление медицинской страховки, подтверждение адреса проживания. (срок — 7 рабочих дней)
            </span>
          </li>
          <li>
            <strong>Подача документов на визу «Д» в посольстве {country.name_three}</strong>
            <span>
              Подача заявления по предварительной записи; срок рассмотрения до 45 дней.
            </span>
          </li>
          <li>
            <strong>Подача документов на ВНЖ в миграционную службу по месту жительства</strong>
            <span>
              Подача документов в миграционную службу {country.name_three}; срок рассмотрения на выбор заявителя, от 14 дней до 2 месяцев.
            </span>
          </li>
          <li>
            <strong>Получение карты ВНЖ сроком на 1 год</strong>
            <span>
              После одобрения заявления вы получаете карту вида на жительство, действительную в течение одного года.
            </span>
          </li>
        </ul>
      </section>
      <AdvantagesTwo/>
      <Contact/>
    </main>
  )
}

export default CountryPage;