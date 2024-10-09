"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import Link from 'next/link';
import Image from 'next/image';
import AdvantagesTwo from '../components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import ServicesList from '../components/OurServices/OurServices';
import Contact from '../components/contact/Contact';

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
                  <Link href="vnj_page/Bulgaria" >
                    <div className={styles.countryItem}>
                        <Image className={styles.flag} src="/images/Flags/bulgaria.svg" alt="Флаг Болгарии" width={104} height={65} />
                        <span>Болгария</span>
                    </div>
                    </Link>
                    <Link href="vnj_page/Spain" >
                        <div className={styles.countryItem}>
                            <Image className={styles.flag} src="/images/Flags/spain.svg" alt="Флаг Испании" width={104} height={65} />
                            <span>Испания</span>
                        </div>
                    </Link>
                    <Link href="/vnj_page/UAE" >
                        <div className={styles.countryItem}>
                            <Image className={styles.flag} src="/images/Flags/UAE.svg" alt="Флаг ОАЭ" width={104} height={65} />
                            <span>ОАЭ</span>
                        </div>
                    </Link>
                </div>
            </div>
          </section>
          <AdvantagesTwo/>
          <ServicesList/>
          <Contact/>
    </main>
  )
}
