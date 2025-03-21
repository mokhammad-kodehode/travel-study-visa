"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import { useState } from 'react';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import Contact from '@/app/components/contact/Contact';
import ServicesList from '@/app/components/OurServices/OurServices';
import Advantages from '@/app/components/Advantage/AdvantageCard/AdvantageCard';
import { FaBed , FaShuttleVan, FaMapMarkedAlt, FaMoneyBillWave} from 'react-icons/fa'

const UmraPage = () => {
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
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление визы Умра и туров в Саудовскую Аравию</h1>
                        <h2 className={styles.title_text_desc}>Планируете совершить паломничество в Мекку? Мы предлагаем услуги по оформлению визы Умра и организацию незабываемых туров в Саудовскую Аравию!</h2>
                        <button onClick={openOrCloseChat} className={styles.order_btn} >ОФОРМИТЬ</button>
                    </div>
                </div>
            </div>
         </section >
        <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a  href="/services_page">Наши услуги</a> &gt;
              <span>Умра и туры в Саудовскую Аравию</span>
            </div>
        </div>
        <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}>Виза Умра</div>
                <p className={styles.description}>Мы обеспечим быстрое и простое оформление визы Умра, которая позволит вам совершить паломничество в любое время года. Наша команда поможет собрать все необходимые документы и проконсультирует по процессу получения визы, чтобы вы могли сосредоточиться на духовном аспекте поездки.
                </p>
                  <h3 className={styles.title_two}>Мы предлагаем готовые туры Умра, которые включают</h3>
                  <div className={styles.special_wrapper}>
                    <VisaFeatureCard
                      icon={FaBed }
                      title="Проживание"
                      description="Комфортабельные отели в Мекке и Медине с удобным доступом к святым местам. "
                    />
                    <VisaFeatureCard
                      icon={FaShuttleVan}
                      title="Трансферы"
                      description="Профессиональные гиды расскажут о значении святых мест и помогут вам в организации всех необходимых обрядов."
                    />
                    <VisaFeatureCard
                      icon={FaMapMarkedAlt}
                      title="Экскурсии"
                      description="Профессиональные гиды расскажут о значении святых мест и помогут вам в организации всех необходимых обрядов."
                    />
                    <VisaFeatureCard
                      icon={FaMoneyBillWave}
                      title="Ценовой диапазон"
                      description="Профессиональные гиды расскажут о значении святых мест и помогут вам в организации всех необходимых обрядов."
                    />
              </div>
        </section >
        <Advantages/>
        <Contact/>
        <ServicesList/>
    </main>
  )
}

export default UmraPage;