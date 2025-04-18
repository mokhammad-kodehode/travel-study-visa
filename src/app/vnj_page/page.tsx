
import styles from './styles.module.css'
import 'fontsource-inter';
import Link from 'next/link';
import Image from 'next/image';
import AdvantagesTwo from '../components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import ServicesList from '../components/OurServices/OurServices';
import Contact from '../components/contact/Contact';
import CountryVNJ from '../components/CountrySelect/countrySelect';
import { europeCountries } from '../data/CountryDataVnj';
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: ' Вид на жительство в Европе и ОАЭ | Помощь с оформлением',
    description: 'Получение ВНЖ в Болгарии, Испании, Франции и ОАЭ. Консультации, подготовка документов, полное сопровождение',
  }
}


export default function VNJ_Page() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div  className={styles.banner_container}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление ВНЖ</h1>
                        <p>
                        Хотите получить ВНЖ легко и без лишних хлопот? 
                        Откройте двери к новым возможностям с нашими визовыми услугами для ВНЖ. 
                        Надежное сопровождение, профессиональные консультации и быстрое оформление – все, что вам нужно для комфортного старта в новой стране. Доверьте нам ваше будущее, и начните новую жизнь прямо сейчас!
                     </p>
                    </div>
                </div>
            </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <span>ВНЖ</span>
            </div>
          </div>
          <section className={styles.section_two}>
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>Выберите страну для ВНЖ</h2>
               <div className={styles.countryList}>
                    <CountryVNJ countries={europeCountries}/>
                </div>
                <Link href="/vnj_page/UAE" >
                        <div className={styles.countryItem}>
                            <Image className={styles.flag} src="/images/Flags/UAE.svg" alt="Флаг ОАЭ" width={54} height={35} />
                            <span>ОАЭ</span>
                        </div>
                    </Link>
            </div>
          </section>
          <ServicesList/>
          <Contact/>
          <AdvantagesTwo/>
    </main>
  )
}
