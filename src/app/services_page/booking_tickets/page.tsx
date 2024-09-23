"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import { useState } from 'react';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import Contact from '@/app/components/contact/Contact';
import ServicesList from '@/app/components/OurServices/OurServices';
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCard/AdvantageCard';
import { FaTags, FaUserTie, FaLaptopHouse, FaHeadset } from 'react-icons/fa'


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
                        <h1 className={styles.title_text}>Бронирование авиа и отелей</h1>
                        <h2 className={styles.title_text_desc}>Планируете путешествие? Мы поможем вам с бронированием отелей и авиабилетов, обеспечивая комфорт и экономию!</h2>
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
              <span>Бронирование авиа и отелей</span>
            </div>
        </div>
        <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}>Бронирование авиа и отелей</div>
                <p className={styles.description}>Не упустите шанс сделать ваше путешествие не только комфортным, но и выгодным! Свяжитесь с нами сегодня и получите лучшие предложения на бронирование отелей и авиабилетов!
                </p>
                  <h3 className={styles.title_two}>Почему стоит выбрать нас?</h3>
                  <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                      icon={FaTags}
                      title="Скидки до 30%"
                      description="Мы предлагаем уникальные предложения на бронирование отелей и авиабилетов. С нами вы сможете сэкономить значительную сумму на своем путешествии."
                    />
                    <VisaFeatureCard
                      icon={FaUserTie}
                      title="Индивидуальный подход"
                      description="Наша команда профессионалов учтет все ваши пожелания и предложит лучшие варианты, подходящие именно вам."
                    />
                    <VisaFeatureCard
                      icon={FaLaptopHouse}
                      title="Удобство бронирования"
                      description="Мы сделаем процесс бронирования простым и быстрым. Вы получите все необходимые документы и подтверждения без лишних усилий."
                    />
                    <VisaFeatureCard
                      icon={FaHeadset}
                      title="Поддержка 24/7"
                      description="Наша служба поддержки всегда готова помочь вам в любое время. Мы обеспечим решение любых вопросов на всех этапах вашей поездки."
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