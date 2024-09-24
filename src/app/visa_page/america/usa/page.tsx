"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import Image from 'next/image';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaFileAlt } from 'react-icons/fa';
import { useState} from 'react';



const visaDetails = [
  {
    title: 'Туристическая виза B1/B2',
    description:
      'Комбинированная виза для коротких поездок, которая разрешает посещать США с различными целями, включая деловые и туристические. Данная виза позволяет гостю находиться в США до 6 месяцев.',
  },
  {
    title: 'Студенческая виза F-1',
    description:
      'Выдаётся людям с высшим образованием и определенной квалификацией, которые получили предложение работы от американского работодателя. Виза H-1B позволяет работать в США в течение 3 лет, с возможностью продления еще на 3 года.',
  },
  {
    title: 'Рабочая виза H-1B',
    description:
      'Для предпринимателей и профессионалов, которые планируют долгосрочные деловые отношения с партнерами в Саудовской Аравии, мы предлагаем бизнес-визу на 5 лет. Она позволяет многократные въезды и обеспечит вам возможность проводить бизнес-встречи и конференции без лишних формальностей.',
  },
  {
    title: 'Рабочая виза L-1',
    description:
      'Выдаётся сотрудникам компаний, которых переводят в американское подразделение компании. По L-1 можно работать в США до 3 лет, с возможностью продления еще на 2 года.',
  },
  {
    title: 'Виза жениха/невесты K-1',
    description:
      'Выдаётся иностранным гражданам решившим заключить брак с гражданином США. С данной визой можно подать заявку на получение Green Card.',
  },
  {
    title: 'Виза инвестора EB-5',
    description:
      'Выдаётся инвесторам, которые вложили в американскую экономику не менее $500 000 и создали новые рабочие места. Обладатели визы EB-5 получают статус постоянного жителя США (Green Card).',
  },
  {
    title: 'Виза талантов O-1',
    description:
      'Предназначена для иностранных граждан, обладающих выдающимися способностями в науке, искусстве, спорте, бизнесе и других областях.',
  },
];


export default function USA() {
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
                        <h1 className={styles.title_text}>Оформление виз в США</h1>
                        <h2 className={styles.title_text_desc}>Оформление визы в США с нами — это ваш путь к успешной поездке без лишних хлопот и стресса. Доверьте процесс профессионалам и будьте уверены в результате!
                        </h2>
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
                  <span>США</span>
                </div>
            </div>
            <section className={styles.section_text_content}>
                  <div className={styles.section_text_content_title}>Виза в США</div>
                  <div className={styles.image_wrapper}>
                    <Image
                    src="/images/countries/Usa_two.jpg"
                    alt="Pass"
                    width={600} 
                    height={400} 
                    layout="responsive"
                    className={styles.section_image}
                    />
                  </div>
                  <p className={styles.description}>Получение визы в США — это сложный и многоступенчатый процесс, требующий внимания к деталям и знания всех нюансов. Мы предлагаем профессиональное сопровождение, чтобы сделать этот процесс простым и эффективным для вас. Доверьте оформление визы США нашим специалистам и забудьте о стрессе!
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
                                description="Виза США позволяет многократные въезды в страну на протяжении срока действия визы, что удобно для частых поездок."
                            />
                            <VisaFeatureCard
                                icon={FaCalendarAlt}
                                title="Продолжительное пребывание"
                                description="В зависимости от типа визы, пребывание в США может быть как краткосрочным, так и долгосрочным для работы или учебы."
                            />
                            <VisaFeatureCard
                                icon={FaBriefcase}
                                title="Доступ к мероприятиям"
                                description="Визы США дают возможность участвовать в деловых встречах, конференциях и других профессиональных мероприятиях."
                            />
                            <VisaFeatureCard
                                icon={FaFileAlt}
                                title="Упрощенное оформление"
                                description="Процесс подачи заявки на визу в США можно начать онлайн, что упрощает подготовку документов."
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
                            <td className={styles.desc}>Срок действия паспорта должен быть не менее шести месяцев с момента въезда в США.</td>
                          </tr>
                          <tr>
                            <td>Справка с работы</td>
                            <td className={styles.desc}>С указанием зарплаты и должности</td>
                          </tr>
                          <tr>
                            <td>Фотография</td>
                            <td className={styles.desc}>45*35 мм</td>
                          </tr>
                          <tr>
                            <td>Справка из банка</td>
                            <td className={styles.desc}>На английском языке о доступном остатке на счетах</td>
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