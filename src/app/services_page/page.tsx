"use client"
import ServicesList from '../components/OurServices/OurServices';
import styles from './styles.module.css'
import MyForm from '../components/contactFormTwo/ContactFormTwo';
import 'fontsource-inter';

export default function Home() {
  return (
    <main className={styles.main}>
            <section className={styles.banner}>
            <div  className={`${styles.banner_container} ${styles.mobileReverse}`}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Услуги нашего сервиса</h1>
                        <h2 className={styles.title_text_desc}>Наш визовый центр Study and Travel предлагает спектр услуг.</h2>
                        <h3 className={styles.title_text_desc}>Специализируемся на визовых вопросах любой сложности</h3>
                    </div>
                </div>
                <MyForm/>
            </div>
          </section >
        <ServicesList/>
    </main>
  )
}
