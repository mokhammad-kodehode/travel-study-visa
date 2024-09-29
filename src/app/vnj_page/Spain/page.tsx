"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '@/app/components/contact/Contact';
import {
  FaMoneyBillWave,
  FaBuilding,
  FaPassport,
  FaHome,
  FaGlobeEurope,
  FaGraduationCap,
  FaBusinessTime,
} from 'react-icons/fa';
import Image from 'next/image';

const Vnj_Spain = () => {

  return (
    <main className={styles.main}>
      <section className={styles.banner} >
        <div className={styles.banner_container} >
          <div className={styles.banner_title}>
              <h1 className={styles.title_text}>Оформление ВНЖ в Испанию</h1>
            <p>
             Ваш путь к европейскому ВНЖ начинается здесь — профессиональная помощь в оформлении документов
            </p>
          </div>
        </div>
      </section >
      <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a href="/vnj_page">Страны</a> &gt;
              <span>Испания</span>
            </div>
          </div>
          <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>ВНЖ Испании <br /> <p>На основании открытия торгового представительства. Выдается карта ВНЖ сроком на один год с последующим продлением.</p> </div>
        <div className={styles.image_wrapper}>
          <Image
            src="/images/countries/spain_two.jpg"
            alt="Spain"
            width={600}
            height={400}
            layout="responsive"
            className={styles.section_image}
          />
        </div>
        <p className={styles.description}>
           Хотите обрести стабильность и новые перспективы в уютной атмосфере Испании? Наша компания предлагает профессиональное сопровождение по оформлению ВНЖ в Испании – вашему ключу к беззаботной жизни в этой прекрасной стране. С учетом наших богатых знаний и опыта в области визовых процедур, мы обеспечим вас всей необходимой информацией и поддержкой на каждом этапе процесса. Получите преимущества резидентства в Испании: доступ к бизнесу, образованию и здравоохранению. Предлагаемые нами услуги по оформлению ВНЖ в Испании позволят вам без лишних затрат времени и усилий освоиться в новой стране, оставаясь спокойным и уверенным в своем будущем. Доверьте нам вашу мечту о жизни в Испании – начните новую главу своей жизни прямо сейчас!
        </p>
        
        <h3 className={styles.title_two}>Что дает ВНЖ Испании?</h3>
        <div className={styles.special_wrapper}>
        <VisaFeatureCard
            icon={FaHome}
            title="Право на проживание и работу"
            description="ВНЖ в Испании дает право на легальное проживание и работу в стране."
          />
          <VisaFeatureCard
            icon={FaGlobeEurope}
            title="Путешествия по Европе"
            description="Обладатели ВНЖ могут свободно перемещаться по территории Шенгенской зоны без необходимости виз."
          />
          <VisaFeatureCard
            icon={FaGraduationCap}
            title="Доступ к медицине и образованию"
            description="Владельцы ВНЖ имеют доступ к медицинским услугам и образовательным учреждениям в Испании."
          />
          <VisaFeatureCard
            icon={FaBusinessTime}
            title="Возможности для бизнеса и инвестиций"
            description="ВНЖ открывает возможности для ведения бизнеса, регистрации компаний и инвестирования в экономику страны."
          />
          <VisaFeatureCard
            icon={FaMoneyBillWave}
            title="Налоговые льготы и преференции"
            description="Резиденты Испании могут иметь право на налоговые льготы и преференции."
          />
          <VisaFeatureCard
            icon={FaBuilding}
            title="Покупка недвижимости"
            description="Обладатели ВНЖ могут свободно приобретать недвижимость в Испании."
          />
          <VisaFeatureCard
            icon={FaPassport}
            title="Путь к гражданству"
            description="После определенного периода проживания в стране, обладатели ВНЖ могут иметь право на получение испанского гражданства."
          />
        </div>
        
        <h4 className={styles.title_two}>Документы для оформления:</h4>
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
              <td>Заявление на получение вида на жительство</td>
              <td className={styles.desc}>
                Официальная форма заявления на ВНЖ в Испании.
              </td>
            </tr>
            <tr>
              <td>Заграничный паспорт</td>
              <td className={styles.desc}>
                Действующий загранпаспорт, который будет использоваться при оформлении ВНЖ.
              </td>
            </tr>
            <tr>
              <td>Две цветные фотографии</td>
              <td className={styles.desc}>
                Два цветных портретных фото на белом фоне (размеры 35 x 45мм).
              </td>
            </tr>
            <tr>
              <td>Медицинская страховка</td>
              <td className={styles.desc}>
                Документ, подтверждающий наличие медицинской страховки, покрывающей расходы на медицинское обслуживание в Испании.
              </td>
            </tr>
            <tr>
              <td>Справка о доходах</td>
              <td className={styles.desc}>
                Выписка из банка или другие документы, подтверждающие финансовую состоятельность.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className={styles.title_two}>Основания для получения:</h4>
        <p className={styles.description}>
          Возможные варианты получения ВНЖ в Испании.
        </p>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Вариант 1: Открытие торгового представительства</strong>
            <span>
              До 2 месяцев. Подходит для собственников ООО, действующего не менее 2 лет на территории России.
            </span>
          </li>
          <li>
            <strong>Вариант 2: Трудоустройство в действующую компанию</strong>
            <span>
              Если у вас нет собственного ООО, вы можете быть оформлены наемным сотрудником в действующую организацию, которая уже имеет иностранное представительство на территории Испании.
            </span>
          </li>
        </ul>

        <h2 className={styles.title_two}>Этапы получения:</h2>
        <ul className={styles.process_list_two}>
          <li>
            <strong>Подготовка оснований для получения ВНЖ</strong>
            <span>
              Сбор необходимых документов и обоснований для получения вида на жительство. (срок — 15 рабочих дней)
            </span>
          </li>
          <li>
            <strong>Подготовка документов на визу «Д»</strong>
            <span>
              Открытие банковских счетов, оформление медицинской страховки, подтверждение адреса проживания. (срок — 7 рабочих дней)
            </span>
          </li>
          <li>
            <strong>Подача документов на визу «Д» в посольстве Испании</strong>
            <span>
              Подача заявления по предварительной записи; срок рассмотрения до 45 дней.
            </span>
          </li>
          <li>
            <strong>Подача документов на ВНЖ в миграционную службу по месту жительства</strong>
            <span>
              Подача документов в миграционную службу Испании; срок рассмотрения на выбор заявителя, от 14 дней до 2 месяцев.
            </span>
          </li>
          <li>
            <strong>Получение карты ВНЖ сроком на 1 год</strong>
            <span>
              После одобрения заявления вы получаете карту вида на жительство, действительную в течение одного года.
            </span>
          </li>
        </ul>
      </section>
      <AdvantagesTwo/>
    </main>
  )
}

export default Vnj_Spain;