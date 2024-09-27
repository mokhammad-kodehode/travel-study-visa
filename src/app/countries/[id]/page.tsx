"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import Image from 'next/image';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import { europeCountries, AmericaCountries, asiaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling } from 'react-icons/fa';


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

const CountryPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const [country, setCountry] = useState<CountryData | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  useEffect(() => {
    const countryName = window.location.pathname.split('/').pop(); // Извлекаем название страны из URL
    console.log(countryName);
    
    if (countryName) {
      const countryData = [...europeCountries, ...AmericaCountries, ...asiaCountries]
        .find((c) => c.nameof.toLowerCase() === countryName.toLowerCase());

      setCountry(countryData || null);
    }
  }, []);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle}>
        <div className={styles.banner_container} >
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>Оформление визы в {country.name_two}</h1>
              <h2 className={styles.title_text_desc}>Оформим нужный тип визы в {country.name_two}.</h2>
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
                    <a href="/visa_page/europe">{country.name}</a> &gt;
                    <span>{country.name}</span>
                  </div>
        </div>
        <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Виза в {country.name_two}</div>
        <div className={styles.image_wrapper}>
          <Image
            src={country.backgroundImgUrl}
            alt="USA"
            width={600}
            height={400}
            layout="responsive"
            className={styles.section_image}
          />
        </div>
        <p className={styles.description}>
        <strong>{country.name}</strong> — страна с богатой культурой, потрясающей природой и идеальными условиями для отдыха. Чтобы сделать вашу поездку комфортной и избежать сложностей с получением визы, доверьте этот процесс профессионалам. Мы поможем вам быстро и без лишних хлопот оформить визу в {country.name_two}, гарантируя успешный результат.
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
        <p className={styles.description}>
        Каждый тип визы имеет свои требования и процесс подачи заявления, поэтому важно заранее изучить информацию, чтобы правильно подготовить документы.
        </p>
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
            description="С визой в {country.name_two} вы можете путешествовать по всей стране, посещая различные штаты и города без дополнительных ограничений."
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
        <p className={styles.description}>Этот список может немного отличаться в зависимости от страны подачи или типа визы, но в целом, это стандартные требования для шенгенских виз в Испанию, Францию, Италию и Грецию.</p>
        <h2 className={styles.title_two}>Процесс получения визы:</h2>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Определите тип визы</strong>
            <span>
            Выберите тип шенгенской визы в зависимости от целей вашей поездки (туризм, работа, учеба и т.д.). Обсудите с нашим специалистом свой кейс, детально ответив на все вопросы, чтобы мы смогли индивидуально подобрать необходимый список документов для подачи. 
            </span>
          </li>
          <li>
            <strong>Необходимо предварительно  записаться  на подачу документов. </strong>
            <span>
            Запишитесь на прием в консульство или визовый центр соответствующей страны. Начинайте процесс заранее, особенно если у вас есть конкретные даты поездки либо примерный диапазон желаемых дат для петешествия. Необходимо подать документы  минимум за месяц до поездки . Также учитывайте тот факт, что сейчас есть трудности с записью, поэтому обращайтесь к нам заблаговременно и мы с радостью запишем Вас на ближайшие доступные слоты для записи в ручную либо про помощи нашего бота.
            </span>
          </li>
          <li>
            <strong>Подача документов</strong>
            <span>
            На встрече в визовом центре предоставьте подготовленный нами пакет документов, также необходимо на месте оплатить  визовый сбор (обычно около 80 евро для взрослых, стоимость в эквиваленте российского рубля   может варьироваться в зависимости от курса).
            </span>
          </li>
          <li>
            <strong>Ожидание решения</strong>
            <span>
            После подачи документов запускается процесс рассмотрения. Сейчас срок рассмотрения документов в консульстве занимает от 2 недели до 45 дней  дней, но в некоторых случаях может занять больше времени.
            </span>
          </li>
          <li>
            <strong>Получение паспорта с вклеенной визой</strong>
            <span>
            Если по каким-то причинам консульство приняло решение отказать в выдаче визы, к паспорту прилагается лист отказа. 
            </span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default CountryPage;