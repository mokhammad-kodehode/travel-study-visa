"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import { useState } from 'react';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import Contact from '@/app/components/contact/Contact';
import ServicesList from '@/app/components/OurServices/OurServices';
import Advantages from '@/app/components/Advantage/AdvantageCard/AdvantageCard';
import { FaPassport, FaFileAlt, FaCalendarCheck, FaEnvelopeOpenText } from 'react-icons/fa'


const ZagranPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
        <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформоение загранпаспорта</h1>
                        <h2 className={styles.title_text_desc}>С нами оформление заграничного паспорта становится простым и быстрым! Обратитесь к нам и сделайте первый шаг к своим путешествиям!</h2>
                        <button onClick={handleOpenModal} className={styles.order_btn} >ЗАБРОНИРОВАТЬ</button>
                            {isModalOpen && (
                            <ModalForm closeModal={handleCloseModal} />
                            )}
                    </div>
                </div>
            </div>
         </section >
        <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a  href="/services_page">Наши услуги</a> &gt;
              <span>Оформаление загранпаспорта</span>
            </div>
        </div>
        <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}>Оформоение загранпаспорта</div>
                <p className={styles.description}>Мы предлагаем услугу ускоренного оформления заграничного паспорта, которая избавит вас от всех забот. Наша команда профессионалов поможет на каждом этапе, чтобы вы могли сосредоточиться на своих планах.
                </p>
                  <h3 className={styles.title_two}>Почему стоит выбрать нас?</h3>
                  <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                      icon={FaPassport}
                      title="Выбор типа паспорта"
                      description="Мы поможем вам выбрать между биометрическим паспортом на 10 лет и старым образцом на 5 лет, а также срок оформления, исходя из Ваших ближайших плановых путешествий. "
                    />
                    <VisaFeatureCard
                      icon={FaFileAlt}
                      title="Заполнение анкеты"
                      description="Вы можете заполнить анкету самостоятельно или с нашей помощью. Мы гарантируем быстрое, и качественное оформление, чтобы у вас был полный комплект документов"
                    />
                    <VisaFeatureCard
                      icon={FaCalendarCheck}
                      title="Запись на подачуя"
                      description="Мы организуем запись на подачу документов в удобное для вас время, избегая очередей и ненужного ожидания."
                    />
                    <VisaFeatureCard
                      icon={FaEnvelopeOpenText}
                      title="Получение паспорта"
                      description="Мы будем информировать вас о готовности паспорта и поможем забрать его в назначенный срок"
                    />
              </div>
        </section >
        <Advantages/>
        <Contact/>
        <ServicesList/>
    </main>
  )
}

export default ZagranPage;