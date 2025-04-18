
import ServicesList from '../components/OurServices/OurServices';
import styles from './styles.module.css'
import AdvantagesTwo from '../components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import Contact from '../components/contact/Contact';
import 'fontsource-inter';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Наши услуги | Travel and Study – Визы, ВНЖ, Гражданство и Обучение',
  description: 'Предоставляем визовые услуги, помощь в оформлении ВНЖ, получении гражданства и обучении за рубежом. Полная поддержка клиентов на всех этапах оформления.',
}


export default function Services() {
  return (
    <main className={styles.main}>
            <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Услуги нашего сервиса</h1>
                        <p className={styles.title_text_desc}>Мы — ведущий эксперт в сфере визовых услуг, получения ВНЖ, гражданства и образовательных программ за рубежом. Наша цель — помочь вам открыть новые возможности для жизни, работы и учебы в других странах, предоставив комплексную поддержку на всех этапах. Мы берем на себя решение всех вопросов, связанных с визовыми и миграционными процедурами, позволяя вам сосредоточиться на достижении ваших целей.
                        </p>
                    </div>
                </div>
            </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <span>Наши услуги</span>
            </div>
          </div>
        <ServicesList/>
        <AdvantagesTwo/>
        <Contact/>
    </main>
  )
}
