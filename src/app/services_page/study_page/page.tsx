"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import { useState } from 'react';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import Contact from '@/app/components/contact/Contact';
import ServicesList from '@/app/components/OurServices/OurServices';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCard/AdvantageCard';
import { FaGlobe, FaChalkboardTeacher, FaHandshake , FaLanguage  } from 'react-icons/fa'


const BookingTicketsPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

  return (
    <main className={styles.main}>
        <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Образовательные программы за рубежом</h1>
                        <h2 className={styles.title_text_desc}>Путешествуйте, учитесь, вдохновляйтесь вместе с нами!.
                        </h2>
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
              <span>Образовательные программы за рубежом</span>
            </div>
        </div>
        <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}>Образовательные программы за рубежом</div>
                <p className={styles.description}>Мы создаем программы, которые позволяют не просто увидеть новые страны, но и погрузиться в их культуру, изучить язык, историю и традиции изнутри.
                </p>
                <p className={styles.description}>Наши курсы рассчитаны на тех, кто стремится расширить свои горизонты, открыть для себя мир знаний и культурных богатств, улучшить навыки общения на иностранном языке и получить практический опыт в различных сферах жизни за рубежом. Каждая программа разработана с учетом современных образовательных методик и поддерживается опытными преподавателями и гидами.
                </p>
                <p className={styles.description}>Мы работаем с ведущими учебными заведениями и туристическими партнерами по всему миру, чтобы предложить вам только лучшие условия для обучения и путешествий. Независимо от того, хотите ли вы изучать язык, погружаться в историю или просто открыть для себя новые страны, мы создадим для вас программу, которая не просто вдохновит, но и изменит ваше восприятие мира.

                </p>
                  <h3 className={styles.title_two}>Почему стоит выбрать нас?</h3>
                  <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                      icon={FaGlobe}
                      title="Погружение в культуру"
                      description="Полное погружение в культуру: изучение языка, истории и традиций изнутри."
                    />
                    <VisaFeatureCard
                      icon={FaChalkboardTeacher}
                      title="Современные методики обучения"
                      description="Программы разработаны с учетом современных образовательных методик."
                    />
                    <VisaFeatureCard
                      icon={FaHandshake }
                      title="Партнерство с ведущими учебными заведениями"
                      description="Мы сделаем процесс бронирования простым и быстрым. Вы получите все необходимые документы и подтверждения без лишних усилий."
                    />
                    <VisaFeatureCard
                      icon={FaLanguage}
                      title="Практический опыт за рубежом"
                      description="Возможность получить практический опыт и улучшить навыки общения на иностранном языке."
                    />
              </div>
        </section >
        <ServicesList/>
        <Contact/>
        <AdvantagesTwo/>
    </main>
  )
}

export default BookingTicketsPage;