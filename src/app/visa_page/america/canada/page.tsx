"use client"


import styles from './styles.module.css'
import Image from 'next/image';
import 'fontsource-inter';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import { AmericaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaGlobe} from 'react-icons/fa';

const visaDetails = [
  {
    title: 'Туристическая виза',
    description:
      'Позволяет посетить Канаду для туризма, посещения друзей или родственников, или других краткосрочных поездок.. Данная виза позволяет гостю находиться в США до 6 месяцев.',
  },
  {
    title: 'Студенческая виза',
    description:
      'Позволяет иностранным студентам учиться в учебных заведениях Канады (колледжах, университетах, языковых школах и т.д.).. Виза позволяет находится в стране на срок обучения, с возможностью продления. Может включать разрешение на работу во время учебы',
  },
  {
    title: 'Рабочая виза',
    description:
      'Позволяет иностранным гражданам работать в Канаде на определенный период времени. Продолжительность зависит от срока трудового контракта и может быть продлена.',
  },
  {
    title: 'Супервиза для родителей и бабушек/дедушек',
    description:
      'Специальная многократная виза для родителей и бабушек/дедушек канадских граждан или постоянных резидентов. Позволяет оставаться в Канаде до 2 лет за один въезд. Действует до 10 лет.',
  },
  {
    title: 'Иммиграционные визы',
    description:
      'Позволяют получить статус постоянного резидента Канады с возможностью постоянного проживания и работы.',
  },
  {
    title: 'Виза для бизнесменов и инвесторов',
    description:
      'Предназначена для предпринимателей, инвесторов и людей, желающих развивать бизнес в Канаде.',
  },
];


export default function CANADA() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    // Переключаем состояние: если открыт этот элемент, закрываем, иначе открываем
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
              <div className={styles.banner_container} >
                  <div className={styles.banner_title}>
                          <div className={styles.banner_title_text}>
                              <h1 className={styles.title_text}>Оформление виз в Канаду</h1>
                              <h2 className={styles.title_text_desc}>Оформим нужный тип визы в Канаду.</h2>
                              <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                          </div>
                          <button onClick={handleOpenModal} className={styles.order_btn} >ЗАКАЗАТЬ</button>
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
                  <a href="/visa_page/america">Северная Америка</a> &gt;
                  <span>Канада</span>
                </div>
            </div>
            <section className={styles.section_text_content}>
                  <div className={styles.section_text_content_title}>Виза в Канаду</div>
                  <div className={styles.image_wrapper}>
                    <Image
                    src="/images/countries/canada_two.jpg"
                    alt="Canada"
                    width={600} 
                    height={400} 
                    layout="responsive"
                    className={styles.section_image}
                    />
                  </div>
                  <p className={styles.description}>Получение визы в Канаду — это непростой и многоэтапный процесс, требующий тщательного подхода и знания всех тонкостей. Мы предлагаем профессиональное сопровождение, чтобы сделать этот процесс максимально простым и удобным для вас. Доверьте оформление канадской визы нашим специалистам и забудьте о сложностях и беспокойствах!
                  </p>
                  <h2 className={styles.title_two}>У нас доступны следующие варианты виз:</h2>
                  <ul className={styles.process_list}>
                      {visaDetails.map((visa, index) => (
                        <li key={index} className={styles.process_list_item}> 
                          <button className={styles.toggleButton} onClick={() => toggleDescription(index)}>  
                            <strong>{visa.title}</strong>
                            <span
                              className={`${styles.toggleArrow} ${openIndex === index ? 'open' : ''}`}
                            >
                              {openIndex === index ? '▲' : '▼'}
                            </span>
                          </button>
                          {/* Текст должен быть ниже кнопки и открываться по состоянию */}
                          <div className={`${styles.description} ${openIndex === index ? styles.open : ''}`}>
                            {visa.description}
                          </div>
                        </li>
                      ))}
                  </ul>
                  <h3 className={styles.title_two}>Особенности визы:</h3>
                  <div className={styles.special_wrapper}>
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
                  <h4 className={styles.title_two}>Необходимые документы для подачи на визу:</h4>
                      <table className={styles.document_table}>
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
                            <td>Справка с работы</td>
                            <td className={styles.desc}>С указанием зарплаты и должности</td>
                          </tr>
                          <tr>
                            <td>Фотография</td>
                            <td className={styles.desc}>Цветные фотографии с размером 45*35 мм</td>
                          </tr>
                          <tr>
                            <td>Справка из банка</td>
                            <td className={styles.desc}>Выписка с банковского счета за последние 3-6 месяцев</td>
                          </tr>
                          <tr>
                            <td>Медицинская страховка</td>
                            <td className={styles.desc}>Страховой полис, покрывающий все время пребывания в Канаде</td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 className={styles.title_two}>Процесс получения визы:</h2>
                    <ul className={styles.process_list_two}>
                        <li>
                          <strong>Заполнение онлайн-заявки</strong>
                          <span>Через официальный портал Саудовской Аравии</span>
                        </li>
                        <li>
                          <strong>Оплата сбора</strong>
                          <span>Виза оплачивается онлайн через систему</span>
                        </li>
                        <li>
                          <strong>Получение визы</strong>
                          <span>После обработки заявки виза приходит в электронном виде на указанный вами email.</span>
                        </li>
                      </ul>
                      <h3 className={styles.title_two}>Сроки и стоимость:</h3>
                        <table className={styles.document_table}>
                          <thead>
                            <tr>
                              <th>Наименование</th>
                              <th>Стоимость / Сроки</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Стоимость «под ключ»</td>
                              <td>$2 600</td>
                            </tr>
                            <tr>
                              <td>Стоимость продления</td>
                              <td>от $300</td>
                            </tr>
                            <tr>
                              <td>Срок получения</td>
                              <td>4 недели</td>
                            </tr>
                            <tr>
                              <td>Рассмотрение заявки</td>
                              <td>5-20 дней</td>
                            </tr>
                            <tr>
                              <td>Прохождение медицинского теста и биометрии</td>
                              <td>2-7 дней</td>
                            </tr>
                          </tbody>
                        </table>
            </section >
          <CountryCards/>
    </main>
  )
}