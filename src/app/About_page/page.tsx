
import { Metadata } from 'next'
import styles from './styles.module.css'
import 'fontsource-inter';
import Advantages from '../components/Advantage/AdvantageCard/AdvantageCard';

export const metadata: Metadata = {
  title: 'О компании | Travel and Study – Ваш визовый центр',
  description: 'Узнайте больше о Travel and Study. Мы предоставляем услуги по оформлению виз, ВНЖ, гражданства и обучению за границей. Индивидуальный подход и полное сопровождение.',
}

export default function About_Us() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Travel and Study</h1>
                        <p className={styles.title_text_desc}>Наш визовый центр — это надежный партнер на пути к вашему комфортному и безопасному путешествию. Мы предоставляем полный спектр услуг по оформлению виз для различных стран, делая процесс получения визы максимально простым и быстрым. Независимо от того, путешествуете ли вы для работы, учебы или отдыха, мы поможем вам получить все необходимые документы с минимальными усилиями с вашей стороны.</p>
                    </div>
                </div>
            </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <span>О Компании</span>
            </div>
          </div>
          <section className={styles.section_two}>
            <Advantages/>
          </section>
    </main>
  )
}
