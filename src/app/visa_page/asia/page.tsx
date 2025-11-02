
import styles from './styles.module.css'
import 'fontsource-inter';
import CountryList from '../../components/CountryListAll/CountryListAll'
import { asiaCountries } from '../../data/CountryData'
import Contact from '@/app/components/contact/Contact';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Визы в Азию | Туристические и деловые визы',
  description: 'Оформление виз в страны Азии – Китай, Таиланд, ОАЭ, Индия и другие. Подготовка документов и сопровождение.',
}



export default function Asia() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в страны Азии и Ближнего Востока </h1>
                        <h2 className={styles.title_text_desc}>Специалисты Travel&Study оформляют визы в Японию, Южную Корею, Китай, Сингапур, ОАЭ, Таиланд, Индонезию и другие. </h2>
                            <h2 className={styles.title_text_desc}>Мы подбираем наиболее удобный формат подачи — электронный, консульский или через визовый центр — и берём на себя все организационные вопросы.
                            С нами процесс получения виз в страны Азии и Ближнего Востока становится быстрым, понятным и комфортным. </h2>
                    </div>
                    <p>
                     </p>
                </div>
            </div>
          </section >
            <div className={styles.breadcrumbs_wrapper}>
              <div className={styles.breadcrumbs}>
                <a href="/">Главная</a> &gt;
                <a href="/visa_page">Оформление визы</a> &gt;
                <span>Азия</span>
              </div>
            </div>
          <section className={styles.section_two}>
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>АЗИЯ</h2>
            </div>
            <CountryList countries={asiaCountries}/>
          </section>
          <Contact/>
    </main>
  )
}
