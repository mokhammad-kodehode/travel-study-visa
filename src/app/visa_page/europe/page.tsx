"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyForm from '../../components/contactFormTwo/ContactFormTwo'
import CountryList from '../../components/CountryListAll/CountryListAll'
import { europeCountries } from '../../data/CountryData'
import CountryVisaSelect from '@/app/components/CountryVisaSelect/page';

export default function Europe() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в Европу</h1>
                        <h2 className={styles.title_text_desc}>Оформим нужный тип визы в любую страну Европы. Оставьте заявку, и наш специалист ответит на все вопросы</h2>
                    </div>
                    <p>
                        Нужно оформить шенгенскую визу? 
                        В визовом центре Visa-travels недорого готовы помочь вам с 
                        получением визы в Москве. Процедура получения шенгенской визы
                        для граждан РФ регламентируется законодательно и определяется
                        международными соглашениями.
                     </p>
                </div>
                <MyForm/>
            </div>
          </section >
            <div className={styles.breadcrumbs_wrapper}>
              <div className={styles.breadcrumbs}>
                <a href="/">Главная</a> &gt;
                <a href="/visa_page">Оформление визы</a> &gt;
                <span>Европа</span>
              </div>
            </div>
          <section className={styles.section_two}>
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>Выберите направление</h2>
               <CountryVisaSelect/>
              <CountryList countries={europeCountries}/>
            </div>
          </section>
    </main>
  )
}
