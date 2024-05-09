"use client"

import styles from './styles.module.css'
import 'fontsource-inter';
import MyFormThree from '../components/ContactFormThree/ContactFormThree';
import Link from 'next/link';
import Image from 'next/image';
import CountryCards from '../components/PopularCountries/PopularCountries'

export default function Home() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div  className={styles.banner_container}> 
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление ВНЖ</h1>
                        <h2 className={styles.title_text_desc}>Оформим ВНЖ в страны ЕС.</h2>
                    </div>
                    <p>
                        Хотите получить ВНЖ легко и без лишних хлопот? 
                        Откройте двери к новым возможностям с нашими визовыми услугами для ВНЖ. 
                        Надежное сопровождение, профессиональные консультации и быстрое оформление – все, что вам нужно для комфортного старта в новой стране. Доверьте нам ваше будущее, и начните новую жизнь прямо сейчас!
                     </p>
                </div>
                <MyFormThree/>
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
                        <Image src="/images/Flags/bulgaria.svg" alt="Флаг Болгарии" width={104} height={65} />
                        <span>Болгария</span>
                    </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/spain.svg" alt="Флаг Испании" width={104} height={65} />
                            <span>Испания</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/france.svg" alt="Флаг Франция" width={104} height={65} />
                            <span>Франция</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/serbia.svg" alt="Флаг Сербии" width={104} height={65} />
                            <span>Сербия</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/UAE.svg" alt="Флаг ОАЭ" width={104} height={65} />
                            <span>ОАЭ</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/italy.svg" alt="Флаг Италии" width={104} height={65} />
                            <span>Италия</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/hungary.svg" alt="Флаг Венгрии" width={104} height={65} />
                            <span>Венгрия</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/slovenia.svg" alt="Флаг Словаении" width={104} height={65} />
                            <span>Словения</span>
                        </div>
                    </Link>
                    <Link href="/" >
                        <div className={styles.countryItem}>
                            <Image src="/images/Flags/armenia.svg" alt="Флаг Армении" width={104} height={65} />
                            <span>Армения</span>
                        </div>
                    </Link>
                </div>
            </div>
          </section>
    </main>
  )
}
