"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '@/app/components/contact/Contact';
import { useState } from 'react';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';



const visaDetails = [
  {
    title: 'Туристическая виза на 1 год',
    description:
      'Эта виза позволяет многократные поездки в страну на протяжении года. Идеально подходит для тех, кто хочет часто возвращаться в Саудовскую Аравию и исследовать её разнообразие.',
  },
  {
    title: 'Туристическая виза на 6 месяцев',
    description:
      'Если вы планируете провести несколько месяцев в стране, эта виза станет отличным решением. Она дает возможность насладиться всеми прелестями Саудовской Аравии и погрузиться в её культуру.',
  },
  {
    title: 'Бизнес-виза на 5 лет',
    description:
      'Для предпринимателей и профессионалов, которые планируют долгосрочные деловые отношения с партнерами в Саудовской Аравии, мы предлагаем бизнес-визу на 5 лет. Она позволяет многократные въезды и обеспечит вам возможность проводить бизнес-встречи и конференции без лишних формальностей.',
  },
];


export default function KSA() {
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
                        <h1 className={styles.title_text}>Оформление виз в Саудовскую Аравию</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в Саудовскую Аравию.</h2>
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
                  <span>Саудовская Аравия</span>
                </div>
            </div>
            <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Виза в Саудовскую Аравию</div>
        <p className={styles.description}>Мы предлагаем оформление туристических виз в Саудовскую Аравию, чтобы вы могли насладиться удивительными пейзажами и культурой этой страны.
        </p>
        <h2 className={styles.title_two}>У нас доступны следующие варианты виз:</h2>
        <ul className={styles.process_list}>
            {visaDetails.map((visa, index) => (
              <li key={index} className={styles.process_list_item}>
                <div className={styles.listItemHeader}>
                  <strong>{visa.title}</strong>
                  <button
                    className={`${styles.toggleButton} ${openIndex === index ? 'open' : ''}`}
                    onClick={() => toggleDescription(index)}
                  >
                    {openIndex === index ? '▲' : '▼'}
                  </button>
                </div>
                {/* Текст должен быть ниже кнопки и открываться по состоянию */}
                <div className={`${styles.description} ${openIndex === index ? styles.open : ''}`}>
                  {visa.description}
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.description}>Мы поможем вам собрать все необходимые документы и быстро оформить визу. Свяжитесь с нами для получения консультации и начните планировать своё путешествие или деловую поездку в Саудовскую Аравию!</p>
          <h3 className={styles.title_two}>Особенности виз:</h3>
          <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                        icon={FaPlane}
                        title="Многократный въезд"
                        description="Все визы предоставляют возможность многократного въезда в Саудовскую Аравию в течение срока их действия, что удобно для частых поездок."
                    />
                    <VisaFeatureCard
                        icon={FaCalendarAlt}
                        title="Продолжительное пребывание"
                        description="Визы позволяют находиться в Саудовской Аравии на протяжении длительного времени, будь то 6 месяцев, 1 год или даже 5 лет для бизнес-визы.."
                    />
                    <VisaFeatureCard
                        icon={FaBriefcase}
                        title="Доступ к мероприятиям"
                        description="Визы позволяют участвовать в деловых встречах и туристических мероприятиях, универсальны для работы и отдыха."
                    />
                    <VisaFeatureCard
                        icon={FaFileAlt}
                        title="Упрощенное оформление"
                        description="Процесс подачи заявки упрощен, и виза может быть оформлена удаленно, что делает её доступной для людей со всего мира."
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
                    <td className={styles.desc}>Срок действия паспорта должен быть не менее шести месяцев с момента въезда в Саудовскую Аравию.</td>
                  </tr>
                  <tr>
                    <td>Онлайн-заявка</td>
                    <td className={styles.desc}>
                      Заполняется на официальном сайте{' '}
                      <Link className={styles.link} href="https://visa.visitsaudi.com" target="_blank" rel="noopener noreferrer">
                        Saudi eVisa
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Оплата визового сбора</td>
                    <td className={styles.desc}>Обычно это около $160</td>
                  </tr>
                  <tr>
                    <td>Фотография</td>
                    <td className={styles.desc}>45*35 мм</td>
                  </tr>
                  <tr>
                    <td>Медицинская страховка</td>
                    <td className={styles.desc}>Включена в стоимость визы</td>
                  </tr>
                </tbody>
              </table>
              <h2 className={styles.title_two}>Процесс получения визы:</h2>
            <ul className={styles.process_list}>
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
                    <tr>
                      <td>Получение Emirates ID</td>
                      <td>3-5 дней</td>
                    </tr>
                  </tbody>
                </table>
           </section >
           <AdvantagesTwo/>
           <Contact/>
          <CountryCards/>
    </main>
  )
}