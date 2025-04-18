"use client";

import styles from './styles.module.css';
import 'fontsource-inter';
import Image from 'next/image';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '@/app/components/contact/Contact';
import { useState } from 'react';


export default function Romania() {
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


  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={styles.banner_container}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>Гражданство Румынии</h1>
              <h2 className={styles.title_text_desc}>
              Получение румынского гражданства по программе репатриации — ваш путь к европейским возможностям!

              </h2>
            </div>
            <button onClick={openOrCloseChat} className={styles.order_btn}>
              ЗАКАЗАТЬ
            </button>
          </div>
        </div>
      </section>
      
      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <span>Гражданство Руминии</span>
        </div>
      </div>

      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>Гражданство Румынии по программе репатриации</div>
        <div className={styles.image_wrapper}>
          <Image
            src="/images/countries/Romania.jpg"
            alt="Romania"
            width={600}
            height={400}
            layout="responsive"
            className={styles.section_image}
          />
        </div>
        <p className={styles.description}>
        Хотите свободно передвигаться по странам Европейского Союза, жить и работать в любой точке Европы? Получение румынского паспорта по программе репатриации — это быстрый и доступный способ открыть для себя новые перспективы!
        </p>
        <h3 className={styles.title_two}>Почему стоит выбрать программу репатриации Румынии?</h3>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Легкость получения гражданства</strong>
            <span>
            Одной из ключевых особенностей является возможность получения гражданства без необходимости постоянного проживания в Румынии. Это делает процесс гораздо проще и удобнее по сравнению с другими программами.
            </span>
          </li>
          <li>
            <strong>Право на гражданство по происхождению</strong>
            <span>
            Программа репатриации предназначена для потомков граждан Румынии. Если ваши родители, бабушки или дедушки были гражданами Румынии, у вас есть право претендовать на гражданство по происхождению.
            </span>
          </li>
          <li>
            <strong>Возможность двойного гражданства</strong>
            <span>
            Программа позволяет сохранить ваше текущее гражданство, что важно для тех, кто не хочет терять гражданство своей страны. Это делает румынское гражданство привлекательным для бизнесменов, студентов и людей, часто путешествующих.
            </span>
          </li>
          <li>
            <strong>Доступ к правам граждан ЕС</strong>
            <span>
            С румынским гражданством вы становитесь гражданином Европейского Союза (ЕС), что дает возможность жить, работать и учиться в странах ЕС без дополнительных виз и разрешений.
            </span>
          </li>
          <li>
            <strong>Отсутствие обязательных экзаменов на знание языка:</strong>
            <span>
            Для получения гражданства по программе репатриации не требуется сдавать экзамены на знание румынского языка, что существенно упрощает процесс для заявителей.
            </span>
          </li>
          <li>
            <strong>Экономическая и социальная выгода</strong>
            <span>
            Получив румынский паспорт, вы получаете доступ к европейским образовательным, медицинским и социальным системам, а также возможность пользоваться льготами, предоставляемыми гражданам ЕС.
            </span>
          </li>
          <li>
            <strong>Быстрый процесс</strong>
            <span>
            В сравнении с программами натурализации других стран, программа репатриации в Румынии может занять значительно меньше времени — от одного до двух лет в зависимости от сложности вашего случая.
            </span>
          </li>
          <li>
            <strong>Низкие затраты</strong>
            <span>
            Программа считается одной из самых доступных с точки зрения финансовых затрат на юридическое сопровождение и сбор документов.
            </span>
          </li>
        </ul>
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
              <td>Свидетельство о рождении Ваше (Апостиль)</td>
              <td className={styles.desc}>
              В новом формате А4
              </td>
            </tr>
            <tr>
              <td>Свидетельство о рождении Ваших родителей (Апостиль)</td>
              <td className={styles.desc}>
              В новом формате А4
              </td>
            </tr>
            <tr>
              <td>Свидетельство о рождении Ваших детей (Апостиль)</td>
              <td className={styles.desc}>
              В новом формате А4
              </td>
            </tr>
            <tr>
              <td>Свидетельства о заключении всех браков Ваше и родителей или расторжения всех  браков</td>
              <td className={styles.desc}>
              Апостиль на все документы.
              </td>
            </tr>
            <tr>
              <td>Сканы паспортов</td>
              <td className={styles.desc}>
               Внутренний и загран (если есть).
              </td>
            </tr>
            <tr>
              <td>Паспорт загран Ваш</td>
              <td className={styles.desc}>
              Он будет все время на руках у Вас, летать можно везде и всегда ожидая выхода приказа.
              </td>
            </tr>
            <tr>
              <td>Сканы Паспорт</td>
              <td className={styles.desc}>
              Внутренний Ваш и Ваших родителей  (также будет у Вас на руках).
              </td>
            </tr>
            <tr>
              <td>Справка об отсутствии судимости (Апостиль)</td>
              <td className={styles.desc}>
               Заказывать через гос услуги заранее сразу с апостилем, готовят 1,5 мес.    
              </td>
            </tr>
          </tbody>
        </table>
        <p className={styles.description}> Если была перемена ФИО - свидетельство о смене имени апостиль 
        (отсутствующие документы можно собрать с помощью нас - заказав из архива за доплату). 
        Апостиль ставит ведомство выдавшее документы (ЗАГС на все свидетельства, МВД на справку об отсутствии судимости)
        </p>

        <h2 className={styles.title_two}>Этапы подготовки к получению румынского гражданства:</h2>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Анализ документов и консультация</strong>
            <span>
            Наши специалисты помогут вам проанализировать ваш родословный архив, определить возможность получения гражданства и подготовить индивидуальный план действий.
            </span>
          </li>
          <li>
            <strong>Сбор необходимых документов</strong>
            <span>
            Мы поможем собрать все нужные справки, свидетельства и архивные документы, подтверждающие гражданство ваших предков. Мы берем на себя перевод и нотариальное заверение документов, чтобы вы могли быть уверены в их правильности.

            </span>
          </li>
          <li>
            <strong>Подача заявления</strong>
            <span>
            Наши юристы сопровождают вас на всех этапах подготовки и подачи заявления в Министерство Юстиции в г.Бухарест, обеспечивая грамотное оформление всех формальностей.

            </span>
          </li>
          <li>
            <strong>Присяга и получение гражданства</strong>
            <span>
            После одобрения вашего дела вы примете присягу и получите свидетельство о румынском гражданстве. Сразу после этого мы подадим документы на оформление румынского паспорта в течении недели.
            </span>
          </li>
        </ul>
        <p className={styles.description}>Процесс от 1 до 2 лет при ускорении через суд с лучшими адвокатами в Бухаресте. 
        </p>
        <p className={styles.description}>
        Мы гарантируем профессиональный подход на всех этапах оформления гражданства. Позвольте себе и своей семье открыть двери в европейское будущее.
        </p>
      </section>
      <AdvantagesTwo />
      <CountryCards />
      <Contact />
    </main>
  );
}