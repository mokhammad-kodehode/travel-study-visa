"use client";

import styles from './styles.module.css';
import 'fontsource-inter';
import Image from 'next/image';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '@/app/components/contact/Contact';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling } from 'react-icons/fa';
import { useState } from 'react';

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
      'Выдаётся сотрудникам компаний, которых переводят в американское подразделение компании. По L-1 можно работать в США до 3 лет, с возможностью продления еще на 2 года.',
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
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={styles.banner_container}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>Оформление виз в США</h1>
              <h2 className={styles.title_text_desc}>
                Оформление визы в США с нами — это ваш путь к успешной поездке без лишних хлопот и стресса. Доверьте процесс профессионалам и будьте уверены в результате!
              </h2>
            </div>
            <button onClick={handleOpenModal} className={styles.order_btn}>
              ЗАКАЗАТЬ
            </button>
            {isModalOpen && <ModalForm closeModal={handleCloseModal} />}
          </div>
        </div>
      </section>
      
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
            alt="USA"
            width={600}
            height={400}
            layout="responsive"
            className={styles.section_image}
          />
        </div>
        <p className={styles.description}>
          Получение визы в США — это сложный и многоступенчатый процесс, требующий внимания к деталям и знания всех нюансов. Мы предлагаем профессиональное сопровождение, чтобы сделать этот процесс простым и эффективным для вас. Доверьте оформление визы США нашим специалистам и забудьте о стрессе!
        </p>
        <h2 className={styles.title_two}>У нас доступны следующие варианты виз:</h2>
        <ul className={styles.process_list}>
          {visaDetails.map((visa, index) => (
            <li key={index} className={styles.process_list_item}>
              <button className={styles.toggleButton} onClick={() => toggleDescription(index)}>
                <strong>{visa.title}</strong>
                <span className={`${styles.toggleArrow} ${openIndex === index ? 'open' : ''}`}>
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
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
            icon={FaSuitcaseRolling}
            title="Гибкие условия путешествий"
            description="С визой в США вы можете путешествовать по всей стране, посещая различные штаты и города без дополнительных ограничений."
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
              <td>Заграничный паспорт</td>
              <td className={styles.desc}>
                Срок действия паспорта должен быть не менее шести месяцев с момента въезда в США.
              </td>
            </tr>
            <tr>
              <td>Заполненная форма DS-160</td>
              <td className={styles.desc}>
                Анкета для неиммиграционной визы. Заполняется онлайн, и после заполнения нужно распечатать подтверждение.
              </td>
            </tr>
            <tr>
              <td>Подтверждение оплаты визового сбора</td>
              <td className={styles.desc}>
                Квитанция об оплате консульского сбора (сумма может варьироваться в зависимости от типа визы).
              </td>
            </tr>
            <tr>
              <td>Фотография</td>
              <td className={styles.desc}>
                Фото должно соответствовать стандартам на визу (5х5 см, на белом фоне).
              </td>
            </tr>
            <tr>
              <td>Подтверждение записи на собеседование</td>
              <td className={styles.desc}>
                Документ, подтверждающий назначение собеседования через сайт консульства США.
              </td>
            </tr>
            <tr>
              <td>Документы, подтверждающие цель поездки</td>
              <td className={styles.desc}>
                Для туризма/гостевой визы (B1/B2): описание маршрута, бронирование отеля, письма-приглашения от друзей или родственников (если есть).
              </td>
            </tr>
            <tr>
              <td>Подтверждение финансовой состоятельности</td>
              <td className={styles.desc}>
                Выписка с банковского счета, справка о доходах, документы на имущество, подтверждающие наличие средств для поездки.
              </td>
            </tr>
            <tr>
              <td>Документы о трудовой деятельности</td>
              <td className={styles.desc}>
                Справка с работы, содержащая информацию о должности, стаже, заработной плате и сроках отпуска.
                <br />
                Для предпринимателей: свидетельство о регистрации бизнеса, налоговые декларации.
              </td>
            </tr>
            <tr>
              <td>Дополнительные документы</td>
              <td className={styles.desc}>
                Для студентов: справка с учебного заведения и подтверждение зачисления. 
                <br />
                Для пенсионеров: пенсионное удостоверение. 
                <br />
                Для несовершеннолетних: свидетельство о рождении, согласие на выезд от одного или обоих родителей (если ребенок едет без родителей).
              </td>
            </tr>
            <tr>
              <td>Документы, подтверждающие связь с родной страной</td>
              <td className={styles.desc}>
                Например, документы на недвижимость, справки с работы или учебы, чтобы показать, что вы планируете вернуться.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.title_two}>Процесс получения визы:</h2>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Заполнение формы DS-160</strong>
            <span>
              Все заявители на неиммиграционные визы должны заполнить онлайн-форму DS-160 на сайте консульской службы США.
            </span>
          </li>
          <li>
            <strong>Оплата сбора</strong>
            <span>
              После заполнения формы нужно оплатить визовый сбор (консульский сбор) онлайн или через банк.
            </span>
          </li>
          <li>
            <strong>Запись в консульстве</strong>
            <span>
              Зарегистрируйтесь на портале посольства США в вашей стране и выберите удобное время для собеседования.
            </span>
          </li>
          <li>
            <strong>Прохождение собеседования</strong>
            <span>
              Придите в консульство США на собеседование в назначенный день. Возьмите с собой все необходимые документы.
            </span>
          </li>
          <li>
            <strong>Ожидание результата</strong>
            <span>
              После собеседования консульский офицер примет решение по вашей визе. Вам сообщат сразу или через несколько дней, одобрена ли виза.
            </span>
          </li>
          <li>
            <strong>Получение паспорта с визой</strong>
            <span>
              Если виза одобрена, ваш паспорт с вклеенной визой будет отправлен вам по почте либо вы сможете забрать его в консульстве через несколько дней.
            </span>
          </li>
        </ul>
      </section>

      <AdvantagesTwo />
      <Contact />
      <CountryCards />
    </main>
  );
}