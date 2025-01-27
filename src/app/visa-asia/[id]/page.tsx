"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import Image from 'next/image';
import { asiaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling } from 'react-icons/fa';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '@/app/components/contact/Contact';



const CountryPageAsia = () => {
  const [country, setCountry] = useState<CountryData | null>(null);
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
      const countryData = [...asiaCountries]
        .find((c) => c.nameof.toLowerCase() === countryName.toLowerCase());

      setCountry(countryData || null);
    }
  }, []);

  if (!country) {
    return <div className={styles.banner}>Loading...</div>;
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
            <button  className={styles.order_btn} >ЗАКАЗАТЬ</button>
          </div>
        </div>
      </section >
        <div className={styles.breadcrumbs_wrapper}>
                  <div className={styles.breadcrumbs}>
                    <a href="/">Главная</a> &gt;
                    <a href="/visa_page">Оформление визы</a> &gt;
                    <a href="/visa_page/europe">Европа</a> &gt;
                    <span>{country.name}</span>
                  </div>
        </div>
        <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Виза в {country.name_two}</div>
        <div data-aos="fade-top" className={styles.image_wrapper}>
          <Image
            src={country.backgroundImgUrl}
            alt="Фото страны"
            width={600}
            height={400}
            style={{ width: '100%', height: 'auto' }} 
            className={styles.section_image}
          />
        </div>
        <p data-aos="fade-top" className={styles.description}>
        <strong>{country.name}</strong> — страна с богатой культурой, потрясающей природой и идеальными условиями для отдыха. Чтобы сделать вашу поездку комфортной и избежать сложностей с получением визы, доверьте этот процесс профессионалам. Мы поможем вам быстро и без лишних хлопот оформить визу в {country.name_two}, гарантируя успешный результат.
        </p>
        <h3 className={styles.title_two}>Особенности визы:</h3>
        <div data-aos="fade-top" className={styles.special_wrapper}>
          <VisaFeatureCard
            icon={FaPlane}
            title="Многократный въезд"
            description="Виза с возможностью многократного въезда позволяет свободно пересекать границы страны столько раз, сколько нужно, без необходимости получения новой визы для каждого въезда."
          />
          <VisaFeatureCard
            icon={FaCalendarAlt}
            title="Продолжительное пребывание"
            description="Долгосрочные визы дают возможность находиться в стране на протяжении длительного периода, что идеально подходит для учебы, работы или длительных визитов."
          />
          <VisaFeatureCard
            icon={FaBriefcase}
            title="Доступ к мероприятиям"
            description="Специальные визы для посещения мероприятий предоставляют возможность участия в международных выставках, конференциях, культурных и спортивных событиях."
          />
          <VisaFeatureCard
            icon={FaSuitcaseRolling}
            title="Гибкие условия путешествий"
            description="Виза упрощают процесс пересечения границ, предлагая минимальные ограничения и максимальную свободу передвижения для туристов и бизнесменов."
          />
        </div>   
        <h4 className={styles.title_two}>Необходимые документы для подачи на визу:</h4>
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
        <ul data-aos="fade-top" className={styles.process_list}>
          <li className={styles.process_list_item}>
            <strong>Консульский сбор:</strong> {country.feature_two}
          </li>
          <li className={styles.process_list_item}>
            <strong>Срок рассмотрения:</strong> {country.feature_three}
          </li>
        </ul>
        <p className={styles.description}>Этот список может немного отличаться в зависимости от страны подачи или типа визы.</p>
        <h2 className={styles.title_two}>Процесс получения визы:</h2>
        <ul data-aos="fade-top" className={styles.process_list_two}>
          <li className={styles.process_list_two_item}>
          Консультация и проверка документов.
          </li>
          <li className={styles.process_list_two_item}>
            Подготовка и подача заявки.
          </li>
          <li className={styles.process_list_two_item}>
          Оплата консульского сбора.
          </li>
          <li className={styles.process_list_two_item}>
          Ожидание и получение готовой визы.
          </li>
        </ul>
      </section>
      <AdvantagesTwo/>
      <CountryCards/>
      <Contact/>
    </main>
  )
}

export default CountryPageAsia;