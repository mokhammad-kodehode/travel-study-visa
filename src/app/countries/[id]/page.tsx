"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyForm from '@/app/components/contactFormTwo/ContactFormTwo';
import { europeCountries, AmericaCountries, asiaCountries } from '@/app/data/CountryData';
import { CountryData } from '@/app/data/CountryData';
import { useState, useEffect } from 'react';

const CountryPage = () => {
  const [country, setCountry] = useState<CountryData | null>(null);

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
            <p>
              Нужно оформить визу в {country.name_two}? 
              В визовом центре Visa-travels недорого готовы помочь вам с 
              получением визы в Москве. Процедура получения шенгенской визы
              для граждан РФ регламентируется законодательно и определяется
              международными соглашениями.
            </p>
          </div>
          <MyForm/>
        </div>
      </section >
      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}> {country.name} - ОФОРМЛЕНИЕ ШЕНГЕНСКОЙ ВИЗЫ В МОСКВЕ</div>
        <p>Для оформления шенгенской визы в Австрию кандидату нужно посетить австрийское консульство или консульский отдел при посольстве. 
          Чтобы сэкономить время и не стоять в очередях, проще выполнить подачу 
          документов через нашу компанию Visa-travels. Сроки действия полученного 
          разрешения на въезд – 180 дней. Но действует правило 90/180, 
          согласно которому вы сможете пребывать в Австрии или любой другой стране 
          Шенгена не более 90 дней из 180.</p>
          <h2>КАК И ГДЕ ПОЛУЧИТЬ ВИЗУ В АВСТРИЮ?</h2>
          <p>Такая шенгенская виза будет стоить 35 евро (обязательный консульский сбор),
             ее оформление занимает до 10 рабочих дней. Для некоторых видов визовых
              разрешений (тип C) срок въездного окна может быть продлен до 5 лет,
              но сохраняется правило 90/180.</p>
            <h3>Для успешной подачи документов вам потребуется учитывать такие правила:</h3>
            <ul>
              <li>соберите полный пакет документов перед обращением в Travel and Study;</li>
              <li>будьте готовы лично подать заявку, а также пройти сдачу биометрических данных (на определенные типы виз);
              </li>
              <li>проведите консультации со специалистом визового центра по всем неясным вопросам;</li>
              <li>правильно оплатите консульский сбор и подготовьте квитанцию о его оплате;</li>
            </ul>
            <h2>ПОМОЩЬ В ПОДГОТОВКЕ ДОКУМЕНТОВ</h2>
            <p>Travel and Study предлагает помощь в оформлении документов для туристических поездок, посещения родственников, заграничных деловых путешествий. Если страна вашего въезда Австрия, достаточно правильно подать все документы, чтобы получить положительный ответ.</p>
            <h3>Наиболее частые причины отказа:</h3>
            <ol>
              <li>Кандидат подал не полный пакет документов.</li>
              <li>Заявитель допустил ошибки при заполнении визовой заявки.</li>
              <li>Человек не явился в назначенное время в консульский отдел.</li>
              <li>Не был оплачен консульский сбор, или не была приложена квитанция.</li>
              <li>Раньше уже были неоднократные отказы по разным причинам.</li>
              <li>У заявителя нет достаточной суммы денег для пребывания в стране.
               .</li>
            </ol>
            <p>Практически все популярные причины отказов связаны с тем, что человек сам собирал документы и заполнял бланк заявки. Лучше обратиться к специалистам и получить желаемую визу в короткий срок.</p>
            <h4>ПОРЯДОК ПОЛУЧЕНИЯ АВСТРИЙСКОЙ ВИЗЫ ЧЕРЕЗ КОНСУЛЬСТВО</h4>
            <p>Сотрудники Visa-travels ежедневно работают со сложными ситуациями и успешно получают визы даже после неоднократных отказов. Если вы ищете, где лучше оформить шенгенскую визу через Австрию, обращайтесь к нам и получите квалифицированную визовую поддержку, консультации и помощь в сборе нужных документов. Специалист подготовит пакет бумаг, направит их в консульство и укажет, когда вам нужно прийти за визой.</p>
             
      </section >
    </main>
  )
}

export default CountryPage;