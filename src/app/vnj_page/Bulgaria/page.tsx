"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyFormThree from '@/app/components/ContactFormThree/ContactFormThree';
import Advantages from '@/app/components/AdvantageCard/AdvantageCard';


const CountryPage = () => {


  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/images/countries/Bulgaria.jpg)`,
    width: '100%',
    height: '630px',
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
              <h1 className={styles.title_text}>Оформление ВНЖ в Болгарию</h1>
            </div>
            <p>
              Нужно оформить ВНЖ в Болгарию? 
              В визовом центре Visa-travels недорого готовы помочь вам с 
              получением ВНЖ. 
            </p>
          </div>
          <MyFormThree/>
        </div>
      </section >
      <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a href="/vnj_page">Страны</a> &gt;
              <span>Болгария</span>
            </div>
          </div>
      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}> ВНЖ Болгарии</div>
        <p>Хотите обрести стабильность и новые перспективы в уютной атмосфере Болгарии? Наша компания предлагает профессиональное сопровождение по оформлению ВНЖ в Болгарии – вашему ключу к беззаботной жизни в этой прекрасной стране.

        С учетом наших богатых знаний и опыта в области визовых процедур, мы обеспечим вас всей необходимой информацией и поддержкой на каждом этапе процесса. Получите преимущества резидентства в Болгарии: доступ к бизнесу, образованию и здравоохранению.

        Предлагаемые нами услуги по оформлению ВНЖ в Болгарии позволят вам без лишних затрат времени и усилий освоиться в новой стране, оставаясь спокойным и уверенным в своем будущем. Доверьте нам вашу мечту о жизни в Болгарии – начните новую главу своей жизни прямо сейчас!</p>
          <h2>Документы для оформления:</h2>
            <ul>
              <li>Заявление на получение вида на жительство;</li>
              <li>Действительный загран паспорт, который будет использоваться при оформлении ВНЖ;</li>
              <li>Два цветных портретных фото на белом фоне (размеры 35 x 45мм);</li>
              <li>Документ, подтверждающий наличие медицинской страховки, покрывающей расходы на медицинское обслуживание в Болгарии;</li>
              <li>Справка о доходах, выписка из банка или другие документы, подтверждающие финансовую состоятельность;</li>
              <li>Два цветных портретных фото на белом фоне (размеры 35 x 45мм);</li>
            </ul>
           <h3>Что дает ВНЖ Болгарии?</h3>
           <ul>
              <li>ВНЖ в Болгарии дает право на легальное проживание и работу в стране;</li>
              <li>Обладатели ВНЖ могут свободно перемещаться по территории Шенгенской зоны без необходимости виз;</li>
              <li>Владельцы ВНЖ имеют доступ к медицинским услугам и образовательным учреждениям в Болгарии.;</li>
              <li>ВНЖ открывает возможности для ведения бизнеса, регистрации компаний и инвестирования в экономику страны;</li>
              <li>Резиденты Болгарии могут иметь право на налоговые льготы и преференции;</li>
              <li>Обладатели ВНЖ могут свободно приобретать недвижимость в Болгарии;</li>
              <li>После определенного периода проживания в стране, обладатели ВНЖ могут иметь право на получение болгарского гражданств;</li>
            </ul>
      </section >
      <Advantages/>
    </main>
  )
}

export default CountryPage;