"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyFormThree from '@/app/components/ContactFormThree/ContactFormThree';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import { FaPlane, FaCalendarAlt, FaPassport, FaGlobe } from 'react-icons/fa';

const CountryPage = () => {


  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/images/countries/Spain.jpg)`,
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
          </div>
          <MyFormThree/>
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
        <h2>Особенности и требования:</h2>
          <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                        icon={FaPlane}
                        title="Срок действия"
                        description="Виза выдается на один год с возможностью продления."
                    />
                    <VisaFeatureCard
                        icon={FaCalendarAlt}
                        title="Рабочий статус"
                        description="Вы можете работать на свою компанию или быть фрилансером, при этом ваше рабочее место находится за пределами ОАЭ."
                    />
                    <VisaFeatureCard
                        icon={FaPassport}
                        title="Медицинское страхование"
                        description="Необходимо иметь действующую медицинскую страховку, покрывающую ваше пребывание в ОАЭ."
                    />
                    <VisaFeatureCard
                        icon={FaGlobe}
                        title="Минимальный доход"
                        description="Требуется подтверждение минимального ежемесячного дохода в размере не менее 5,000 долларов США или эквивалентной суммы в другой валюте."
                    />
                    <VisaFeatureCard
                        icon={FaGlobe}
                        title="Документы"
                        description="Включают паспорт, доказательства трудовой занятости, справку о доходах, а также документы, подтверждающие постоянное место жительства за пределами ОАЭ."
                    />
                      <VisaFeatureCard
                        icon={FaGlobe}
                        title="Проживание и льготы"
                        description="Виза дает право на проживание в ОАЭ и доступ к ряду льгот, таких как открытие банковского счета, аренда жилья, получение водительских прав и др."
                    />
                                          <VisaFeatureCard
                        icon={FaGlobe}
                        title="Цели визы"
                        description="Данная виза особенно актуальна для тех, кто хочет работать удаленно, наслаждаясь высоким уровнем жизни, безопасностью и развитой инфраструктурой ОАЭ."
                    />
           </div>
           <h3 className={styles.title_two}>Необходимые документы для подачи на ВНЖ с RemoteVisa:</h3>
              <table className={styles.document_table}>
                <thead>
                  <tr>
                    <th>Документ</th>
                    <th></th>
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
                    <td>Выписка с банковского счета На 1 год</td>
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
                    </section >
      <AdvantagesTwo/>
    </main>
  )
}

export default CountryPage;