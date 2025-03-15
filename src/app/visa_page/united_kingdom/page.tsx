"use client"

;
import styles from './styles.module.css'
import 'fontsource-inter';
import CountryVisaSelect from '@/app/components/CountryVisaSelect/page'
import CountryCards from '@/app/components/PopularCountries/PopularCountries'
import Image from 'next/image';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling } from 'react-icons/fa';
import { useState } from 'react';



const visaDetails = [
  {
    title: 'Туристическая виза (Visitor Visa)',
    description:
      'Подходит для туризма, посещения друзей и родственников, краткосрочного обучения или деловых встреч. Срок рассмотрения: 3-4 недели. Консульский сбор: от 125 GBP',
  },
  {
    title: 'Бизнес-виза ',
    description:
      'Для деловых поездок, участия в конференциях, встреч и переговоров. Срок рассмотрения: 3-4 недели.Консульский сбор: от 125 GBP',
  },
  {
    title: 'Студенческая виза (Student Visa)',
    description:
      'Для обучения в Великобритании на длительный срок. Срок рассмотрения: 4-6 недель. Консульский сбор: от 363 GBP',
  },
  {
    title: 'Рабочая виза (Work Visa)',
    description:
      'Для трудоустройства или долгосрочного пребывания.Срок рассмотрения: 4-8 недель. Консульский сбор: от 625 GBP',
  },
];



export default function UnitedKingdom() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                        <h1 className={styles.title_text}>Оформление виз в Великобританию</h1>
                    <p>
                    Планируете поездку в Великобританию? Наш визовый центр поможет вам оформить визу легко и без стресса. Мы берем на себя все этапы подготовки документов, а также консультируем по всем вопросам.
                     </p>
                </div>
            </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <a href="/visa_page">Оформление визы</a> &gt;
          <span>Великобритания</span>
        </div>
      </div>
      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Виза в Великобританию</div>
        <div data-aos="fade-top" className={styles.image_wrapper}>
        <Image
          src="/images/LondonMain.jpg"
          alt="London"
          width={600}
          height={400}
          style={{ width: '100%', height: 'auto' }} // Для адаптивности
          className={styles.section_image}
        />
        </div>
        <p className={styles.description}>
        Виза в Великобританию — один из самых сложных и многоступенчатых документов для получения. Мы понимаем все тонкости процесса и готовы сделать его для вас максимально простым и эффективным. Обратившись к нам, вы получаете профессиональное сопровождение и гарантированное качество на каждом этапе.

        </p>
        <h2 className={styles.title_two}>У нас доступны следующие варианты виз</h2>
        <ul data-aos="fade-top" className={styles.process_list}>
          {visaDetails.map((visa, index) => (
            <li key={index} className={`${styles.process_list_item} ${openIndex === index ? styles.open_item : ''}`}>
              <button className={styles.toggleButton} onClick={() => toggleDescription(index)}>
                <strong>{visa.title}</strong>
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
        
        <h3 className={styles.title_two}>Особенности визы</h3>
        <div data-aos="fade-top" className={styles.special_wrapper}>
        <VisaFeatureCard
            icon={FaPlane}
            title="Многократный въезд"
            description="Британская виза позволяет совершать многократные въезды в страну в течение срока ее действия, что удобно для частых поездок."
          />
          <VisaFeatureCard
            icon={FaCalendarAlt}
            title="Длительный срок действия"
            description="В зависимости от типа визы, вы можете получить разрешение на пребывание в Великобритании от 6 месяцев до нескольких лет для работы или учебы."
          />
          <VisaFeatureCard
            icon={FaBriefcase}
            title="Образование и работа"
            description="Визы в Великобританию предоставляют возможность обучения в ведущих университетах и трудоустройства в международных компаниях."
          />
          <VisaFeatureCard
            icon={FaSuitcaseRolling}
            title="Свободное путешествие"
            description="С британской визой вы можете путешествовать по всей стране, исследуя ее культурное и историческое наследие без дополнительных ограничений."
          />
        </div>
        
        <h4 className={styles.title_two}>Необходимые документы для подачи на визу</h4>
        <p className={styles.description}>
          Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.
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
                Срок действия паспорта должен быть не менее шести месяцев с момента въезда в  Великобританию.
              </td>
            </tr>
            <tr>
              <td>Заполненная анкета</td>
              <td className={styles.desc}>
                Анкета для неиммиграционной визы. Заполняется онлайн, и после заполнения нужно распечатать подтверждение.
              </td>
            </tr>
            <tr>
              <td>Подтверждение оплаты консульского сбора</td>
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
              <td>Подтверждение бронирования авиабилетов и проживания</td>
              <td className={styles.desc}>
              Описание маршрута, бронирование отеля, письма-приглашения от друзей или родственников (если есть).
              </td>
            </tr>
            <tr>
              <td>Финансовые документы</td>
              <td className={styles.desc}>
              Для деловых поездок или посещения родственников
              </td>
            </tr>
            <tr>
              <td>Приглашение</td>
              <td className={styles.desc}>
                Выписка с банковского счета, справка о доходах, документы на имущество, подтверждающие наличие средств для поездки.
              </td>
            </tr>
            <tr>
              <td>Подтверждение зачисления в учебное заведение</td>
              <td className={styles.desc}>
                Для студентов
              </td>
            </tr>
            <tr>
              <td>Приглашение на работу или контракт</td>
              <td className={styles.desc}>
                Для работниковтелей.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.title_two}>Процесс получения визы</h2>
        <ul data-aos="fade-top" className={styles.process_list_two}>
          <li>
            <strong>Определите тип визы</strong>
            <span>
            Решите, какая виза вам необходима — туристическая, деловая, студенческая или рабочая.
            </span>
          </li>
          <li>
            <strong>Заполните онлайн-заявление</strong>
            <span>
              Наши специалисты заполнят вам нужный типа заявления.
            </span>
          </li>
          <li>
            <strong>Оплатите консульский сбор</strong>
            <span>
              После заполнения анкеты необходимо оплатить визовый сбор. Сумма зависит от типа и длительности визы.
            </span>
          </li>
          <li>
            <strong>Запишитесь на подачу биометрических данных</strong>
            <span>
             После оплаты вам будет предложено выбрать дату и время посещения визового центра для сдачи отпечатков пальцев и фотографии.
            </span>
          </li>
          <li>
            <strong>Соберите необходимые документы</strong>
            <span>
            Действующий заграничный паспорт. <br />
            Фотография установленного образца (если требуется). <br />
            Подтверждение финансовой состоятельности (выписка из банка, справка о доходах). <br />
            Подтверждение места проживания в Великобритании (бронь отеля, приглашение). <br />
            Документы, подтверждающие цель поездки (маршрут, приглашение от компании или учебного заведения). <br />
            Переводы всех документов на английский язык, заверенные сертифицированным переводчиком. <br />
            </span>
          </li>
          <li>
            <strong>Посетите визовый центр</strong>
            <span>
            В назначенное время посетите ближайший визовый центр VFS Global для сдачи биометрии и подачи документов
            </span>
          </li>
          <li>
            <strong>Ожидайте решения</strong>
            <span>
            Стандартный срок рассмотрения заявки составляет около 15 рабочих дней, но может варьироваться. Есть возможность ускоренного рассмотрения за дополнительную плату.
            </span>
          </li>
          <li>
            <strong>Получите паспорт с визой</strong>
            <span>
            После принятия решения вы получите уведомление о возможности забрать паспорт или о его доставке.
            </span>
          </li>
        </ul>
      </section>
          <CountryCards/>
    </main>
    )}
