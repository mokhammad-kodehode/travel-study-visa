"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaCalendarAlt,  FaGlobe, FaBriefcase,
  FaHeartbeat,
  FaMoneyBillWave,
  FaFileAlt,
  FaHome, } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Vnj_UAE = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false); 

  const openOrCloseChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
        if (isChatOpen) {
            window.jivo_api.close();
            setIsChatOpen(false);
        } else {
            window.jivo_api.open();
            setIsChatOpen(true);
        }
    }
};

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/images/countries/UAE.jpg)`,
    width: '100%',
    margin: '0 auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  };


  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle}>
        <div className={styles.banner_container} >
          <div className={styles.banner_title}>
              <h1 className={styles.title_text}>Оформление ВНЖ с Remote Visa и Emirates ID</h1>
            <p>
            Remote Visa — аналог визы цифрового кочевника и позволяет удаленным работникам проживать в ОАЭ и работать на своих иностранных работодателей.
            </p>
            <button onClick={openOrCloseChat}className={styles.main_btn}>Оставить заявку</button>
          </div>
        </div>
      </section >
      <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a href="/vnj_page">Страны</a> &gt;
              <span>Объединённые Арабские Эмираты</span>
            </div>
          </div>
      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}> Виза Remote Work Visa (или Virtual Working Program)</div>
        <p className={styles.description}>Виза Remote Work Visa (или Virtual Working Program) в ОАЭ позволяет иностранным гражданам работать удаленно в стране, оставаясь при этом сотрудниками своих компаний за рубежом. Этот тип визы был введен в 2020 году, чтобы привлечь специалистов, работающих удаленно, и дать им возможность проживать и работать в ОАЭ.
        </p>
          <h2 className={styles.title_two}>Особенности и требования</h2>
          <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                        icon={FaCalendarAlt}
                        title="Срок действия"
                        description="Виза выдается на один год с возможностью продления."
                    />
                    <VisaFeatureCard
                        icon={FaBriefcase}
                        title="Рабочий статус"
                        description="Вы можете работать на свою компанию или быть фрилансером, при этом ваше рабочее место находится за пределами ОАЭ."
                    />
                    <VisaFeatureCard
                        icon={FaHeartbeat}
                        title="Медицинское страхование"
                        description="Необходимо иметь действующую медицинскую страховку, покрывающую ваше пребывание в ОАЭ."
                    />
                    <VisaFeatureCard
                        icon={FaMoneyBillWave}
                        title="Минимальный доход"
                        description="Требуется подтверждение минимального ежемесячного дохода в размере не менее 5,000 долларов США или эквивалентной суммы в другой валюте."
                    />
                    <VisaFeatureCard
                        icon={FaFileAlt}
                        title="Документы"
                        description="Включают паспорт, доказательства трудовой занятости, справку о доходах, а также документы, подтверждающие постоянное место жительства за пределами ОАЭ."
                    />
                      <VisaFeatureCard
                        icon={FaHome}
                        title="Проживание и льготы"
                        description="Виза дает право на проживание в ОАЭ и доступ к ряду льгот, таких как открытие банковского счета, аренда жилья, получение водительских прав и др."
                    />
                      <VisaFeatureCard
                        icon={FaGlobe}
                        title="Цели визы"
                        description="Данная виза особенно актуальна для тех, кто хочет работать удаленно, наслаждаясь высоким уровнем жизни, безопасностью и развитой инфраструктурой ОАЭ."
                    />
           </div>
           <h4 className={styles.title_two}>Необходимые документы для подачи на ВНЖ с RemoteVisa</h4>
              <table className={styles.document_table}>
                <thead>
                  <tr>
                    <th>Документ</th>
                    <th>Описание</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Подтверждение удаленной деятельности</td>
                    <td>Договор с работодателем</td>
                  </tr>
                  <tr>
                    <td>Справка о заработной плате</td>
                    <td>Документ, подтверждающий вашу зарплату</td>
                  </tr>
                  <tr>
                    <td>Выписка с банковского счета</td>
                    <td>За последние 3 месяца</td>
                  </tr>
                  <tr>
                    <td>Фотография</td>
                    <td>45*35 мм</td>
                  </tr>
                  <tr>
                    <td>Паспорт</td>
                    <td>Заграничный паспорт</td>
                  </tr>
                  <tr>
                    <td>Оплата пошлины</td>
                    <td>Платеж за оформление ВНЖ</td>
                  </tr>
                </tbody>
              </table>
              <h2 className={styles.title_two}>Этапы получения:</h2>
                <ul className={styles.process_list_two}>
                  <li>
                    <strong>Проверка соответствия требованиям</strong>
                    <span>
                      Убедитесь, что вы соответствуете критериям для получения удаленной рабочей визы в ОАЭ.
                    </span>
                  </li>
                  <li>
                    <strong>Сбор необходимых документов</strong>
                    <span>
                      Подготовьте все требуемые документы, включая действующий загранпаспорт, фотографии, подтверждение занятости и дохода.
                    </span>
                  </li>
                  <li>
                    <strong>Подача онлайн-заявки</strong>
                    <span>
                      Заполните и подайте онлайн-заявку на официальном сайте властей ОАЭ или через уполномоченные сервисы.
                    </span>
                  </li>
                  <li>
                    <strong>Оплата сборов</strong>
                    <span>
                      Оплатите необходимые визовые сборы и медицинскую страховку, если требуется.
                    </span>
                  </li>
                  <li>
                    <strong>Ожидание рассмотрения заявки</strong>
                    <span>
                      Дождитесь обработки вашей заявки; обычно это занимает от 5 до 15 рабочих дней.
                    </span>
                  </li>
                  <li>
                    <strong>Получение одобрения и въезд в ОАЭ</strong>
                    <span>
                      После одобрения получите въездное разрешение и прибывайте в ОАЭ.
                    </span>
                  </li>
                  <li>
                    <strong>Прохождение медицинского обследования и получение Emirates ID</strong>
                    <span>
                      По прибытии пройдите медицинское обследование и подайте заявку на получение Emirates ID.
                    </span>
                  </li>
                </ul>
        </section >
      {/* <AdvantagesTwo/> */}
    </main>
  )
}

export default Vnj_UAE;