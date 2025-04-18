"use client"


import styles from './styles.module.css'
import Image from 'next/image';
import 'fontsource-inter';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import { useState } from 'react';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import Contact from '@/app/components/contact/Contact';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaGlobe} from 'react-icons/fa';

const visaDetails = [
  {
    title: 'Туристическая виза (Visitor Visa)',
    description:
      'Для краткосрочных поездок с целью туризма или посещения близких. Консульский сбор: 185 CAD (около 12000 руб.).',
  },
  {
    title: 'Бизнес-виза',
    description:
      'Для посещения деловых мероприятий, встреч и конференций в Канаде.Консульский сбор: 185 CAD (около 12000 руб.).',
  },
  {
    title: 'Учебная виза (Study Permit)',
    description:
      'Для студентов, которые поступают в канадские учебные заведения. Консульский сбор: 150 CAD (около 10000 руб.).',
  },
];


export default function CANADA() {
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


  const toggleDescription = (index: number) => {
    // Переключаем состояние: если открыт этот элемент, закрываем, иначе открываем
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <main className={styles.main}>
          <section className={styles.banner}>
              <div className={styles.banner_container} >
                  <div className={styles.banner_title}>
                          <div className={styles.banner_title_text}>
                              <h1 className={styles.title_text}>Оформление виз в Канаду</h1>
                              <h2 className={styles.title_text_desc}>Мы поможем вам быстро и без проблем оформить визу в Канаду! Путешествуйте с нами – надежно, удобно и безопасно.</h2>
                          </div>
                          <button onClick={ openOrCloseChat} className={styles.order_btn} >ЗАКАЗАТЬ</button>
                    </div>
              </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
                <div className={styles.breadcrumbs}>
                  <a href="/">Главная</a> &gt;
                  <a href="/visa_page">Оформление визы</a> &gt;
                  <a href="/visa_page/america">Северная Америка</a> &gt;
                  <span>Канада</span>
                </div>
            </div>
            <section className={styles.section_text_content}>
                  <div className={styles.section_text_content_title}>Виза в Канаду</div>
                  <div data-aos="fade-top" className={styles.image_wrapper}>
                    <Image
                    src="/images/countries/canada_two.jpg"
                    alt="Canada"
                    width={600} 
                    height={400} 
                    style={{ width: '100%', height: 'auto' }} // Для адаптивности
                    className={styles.section_image}
                    />
                  </div>
                  <p data-aos="fade-top" className={styles.description}> <strong>Планируете поездку в Канаду? </strong>Мы предлагаем профессиональную помощь в оформлении визы для любых целей – туризм, бизнес, учеба или посещение родственников. Наш визовый центр поможет вам избежать ошибок в подготовке документов и обеспечит оперативное получение визы в кратчайшие сроки.
                  </p>
                  <h2 className={styles.title_two}>Типы виз и стоимость консульского сбора</h2>
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
                  <p className={styles.description}>Время рассмотрения заявления: от 10 до 30 рабочих дней, в зависимости от типа визы и индивидуальных обстоятельств.</p>
                  <h3 className={styles.title_two}>Особенности визы</h3>
                  <div data-aos="fade-top" className={styles.special_wrapper}>
                            <VisaFeatureCard
                                icon={FaPlane}
                                title="Многократный въезд"
                                description="Канадская виза позволяет многократные въезды в страну на протяжении срока действия визы, что особенно удобно для частых поездок."
                            />
                            <VisaFeatureCard
                                icon={FaCalendarAlt}
                                title="Продолжительное пребывание"
                                description="В зависимости от типа визы, вы можете оставаться в Канаде на короткий срок для визитов или на длительный срок для работы или учебы."
                            />
                            <VisaFeatureCard
                                icon={FaBriefcase}
                                title="Деловые возможности"
                                description="Канадские визы позволяют участие в деловых встречах, конференциях и других профессиональных мероприятиях в стране."
                            />
                            <VisaFeatureCard
                                icon={FaGlobe}
                                title="Легкость путешествий"
                                description="Канадская виза может упростить посещение других стран, благодаря высоким стандартам безопасности и доверия к канадским визам.."
                            />
                  </div>
                  <h4 className={styles.title_two}>Необходимые документы для подачи на визу</h4>
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
                            <td className={styles.desc}>Действителен не менее 6 месяцев с момента предполагаемого въезда в Канаду.</td>
                          </tr>
                          <tr>
                            <td>Заполненная анкета (формы IMM 5257)</td>
                            <td className={styles.desc}>Наши специалисты помогут корректно заполнить заявление.</td>
                          </tr>
                          <tr>
                            <td>Фотография</td>
                            <td className={styles.desc}>Цветные фотографии с размером 45*35 мм.</td>
                          </tr>
                          <tr>
                            <td>Подтверждение финансовой состоятельности</td>
                            <td className={styles.desc}>Выписка с банковского счета, справка с работы, документы на имущество.</td>
                          </tr>
                          <tr>
                            <td>Билеты и маршрут поездки</td>
                            <td className={styles.desc}>Подтверждение даты въезда и выезда.</td>
                          </tr>
                          <tr>
                            <td>Бронь отеля или приглашение</td>
                            <td className={styles.desc}>Документы, подтверждающие место вашего проживания.</td>
                          </tr>
                          <tr>
                            <td>Медицинская страховка</td>
                            <td className={styles.desc}>Необходимая для всей продолжительности поездки.</td>
                          </tr>
                          <tr>
                            <td>Подтверждение цели поездки</td>
                            <td className={styles.desc}>Туристический маршрут, деловое приглашение или документы, подтверждающие зачисление в учебное заведение (в зависимости от типа визы).</td>
                          </tr>
                          <tr>
                            <td>Дополнительные документы</td>
                            <td className={styles.desc}>Могут потребоваться в зависимости от цели визита (например, справка с места учебы для студентов или приглашение от канадской стороны для бизнес-визы).</td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 className={styles.title_two}>Процесс получения визы</h2>
                    <ul data-aos="fade-top" className={styles.process_list_two}>
                    <li>
                        <strong>Заполнение формы онлайн</strong>
                        <span>
                          Заполните соответствующую форму заявки на официальном сайте иммиграционной службы Канады (например, форма IMM 5257 для временной визы).
                        </span>
                      </li>
                      <li>
                        <strong>Оплата визового сбора</strong>
                        <span>
                          Оплатите визовый сбор онлайн на сайте иммиграционной службы. Сумма сбора зависит от типа визы (обычно от 100 CAD).
                        </span>
                      </li>
                      <li>
                        <strong>Сдача биометрии</strong>
                        <span>
                          Запишитесь на сдачу биометрических данных (отпечатков пальцев и фотографии) в ближайшем визовом центре.
                        </span>
                      </li>
                      <li>
                        <strong>Ожидание рассмотрения</strong>
                        <span>
                          Ожидайте рассмотрения вашего заявления. Обычно это занимает несколько недель, но может варьироваться в зависимости от типа визы.
                        </span>
                      </li>
                      <li>
                        <strong>Получение визы</strong>
                        <span>
                          После одобрения заявления вы получите уведомление, и ваш паспорт с визой будет отправлен вам по почте либо вы сможете забрать его в визовом центре.
                        </span>
                      </li>
                      </ul>
            </section >
          <CountryCards/>
          <Contact/>
    </main>
  )
}