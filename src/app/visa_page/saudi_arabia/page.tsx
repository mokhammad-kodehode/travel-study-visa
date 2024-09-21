"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import { useState, useEffect } from 'react';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaPlane, FaCalendarAlt, FaPassport, FaGlobe } from 'react-icons/fa';


export default function KSA() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);



  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в Саудовскую Аравию</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в Саудовскую Аравию.</h2>
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
                  <span>Саудовская Аравия</span>
                </div>
            </div>
            <section className={styles.section_text_content}>
                <div className={styles.section_text_content_title}> Саудовская Аравия - ОФОРМЛЕНИЕ ВИЗЫ В МОСКВЕ</div>
                <p>Виза в Саудовскую Аравию на 5 лет — это новая возможность, которую Саудовская Аравия предложила с 2022 года. Она позволяет многократный въезд в страну с возможностью пребывания до 90 дней за каждую поездку. Этот тип визы предназначен для туристических целей и, в частности, удобен для частых путешественников.</p>
                <h2 className={styles.titles}>Основные особенности пятилетней туристической визы:</h2>
                <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                        icon={FaPlane}
                        title="Многократный въезд"
                        description="Виза позволяет неограниченное количество поездок в течение пяти лет."
                    />
                    <VisaFeatureCard
                        icon={FaCalendarAlt}
                        title="Срок пребывания"
                        description="За одну поездку можно находиться в стране до 90 дней. Общий срок пребывания за год не должен превышать 180 дней."
                    />
                    <VisaFeatureCard
                        icon={FaPassport}
                        title="Цель визита"
                        description="Основная цель визы — туризм, включая культурные, спортивные и развлекательные мероприятия."
                    />
                    <VisaFeatureCard
                        icon={FaGlobe}
                        title="Доступность"
                        description="Этот тип визы доступен для граждан стран, которые могут получать электронные визы."
                    />
                </div>
                    <h3 className={styles.titles}>Требования для получения пятилетней визы:</h3>
                    <ul>
                        <li><strong>Заграничный паспорт :</strong> Срок действия паспорта должен быть не менее шести месяцев с момента въезда в Саудовскую Аравию.</li>
                        <li>будьте готовы лично подать заявку, а также пройти сдачу биометрических данных (на определенные типы виз);
                        </li>
                        <li>проведите консультации со специалистом визового центра по всем неясным вопросам;</li>
                        <li>правильно оплатите консульский сбор и подготовьте квитанцию о его оплате;</li>
                    </ul>
                    <h2 className={styles.titles}>ПОМОЩЬ В ПОДГОТОВКЕ ДОКУМЕНТОВ</h2>
                    <p>Travel and Study предлагает помощь в оформлении документов для туристических поездок, посещения родственников, заграничных деловых путешествий. Если страна вашего въезда Австрия, достаточно правильно подать все документы, чтобы получить положительный ответ.</p>
                    <h3>Наиболее частые причины отказа:</h3>
                    <ol>
                        <li>Кандидат подал не полный пакет документов.</li>
                        <li>Заявитель допустил ошибки при заполнении визовой заявки.</li>
                        <li>Человек не явился в назначенное время в консульский отдел.</li>
                        <li>Не был оплачен консульский сбор, или не была приложена квитанция.</li>
                        <li>Раньше уже были неоднократные отказы по разным причинам.</li>
                        <li>У заявителя нет достаточной суммы денег для пребывания в стране.</li>
                    </ol>
                    <p>Практически все популярные причины отказов связаны с тем, что человек сам собирал документы и заполнял бланк заявки. Лучше обратиться к специалистам и получить желаемую визу в короткий срок.</p>
                    <h4 className={styles.titles}>ПОРЯДОК ПОЛУЧЕНИЯ АВСТРИЙСКОЙ ВИЗЫ ЧЕРЕЗ КОНСУЛЬСТВО</h4>
                    <p>Сотрудники Visa-travels ежедневно работают со сложными ситуациями и успешно получают визы даже после неоднократных отказов. Если вы ищете, где лучше оформить шенгенскую визу через Австрию, обращайтесь к нам и получите квалифицированную визовую поддержку, консультации и помощь в сборе нужных документов. Специалист подготовит пакет бумаг, направит их в консульство и укажет, когда вам нужно прийти за визой.</p>
                    
            </section >
          <CountryCards/>
    </main>
  )
}