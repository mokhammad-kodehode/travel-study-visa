import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'
import 'fontsource-inter';
import CountryCards from '@/app/components/PopularCountries/PopularCountries'
import AdvantagesTwo from '@/app/components/Advantage/AdvantageCardTwo/AdvangeCardTwo';
import { AmericaCountries } from '@/app/data/CountryData';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Виза в США и Канаду | Оформление и поддержка',
  description: 'Помогаем оформить визы в США и Канаду. Подготовка документов, запись на собеседование, консультации.',
}


export default function America() {

  return (
    <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.banner_container} >
                <div className={styles.banner_title}>
                    <div className={styles.banner_title_text}>
                        <h1 className={styles.title_text}>Оформление виз в Америку и Канаду</h1>
                        <h2 className={styles.title_text_desc}>Мы оказываем полное сопровождение при подаче на визы в США и Канаду.
                        Помогаем выбрать оптимальный тип визы, подготовить форму DS-160, записаться на собеседование и собрать необходимые подтверждающие документы.
                        Наши заявители получают детальные инструкции, индивидуальные рекомендации и поддержку на всех этапах.
                        </h2>
                    </div>
                </div>
            </div>
          </section >
          <div className={styles.breadcrumbs_wrapper}>
            <div className={styles.breadcrumbs}>
              <a href="/">Главная</a> &gt;
              <a href="/visa_page">Оформление визы</a> &gt;
              <span>Северная Америка</span>
            </div>
          </div>
          <section className={styles.section_two}>
            <div className={styles.section_two_top}>
               <h2 className={styles.selectCountryTitle}>СЕВЕРНАЯ АМЕРИКА</h2>
                <div className={styles.countryList}>
                    {AmericaCountries.map(country => (
                        <Link href={country.pageUrl} key={country.name}>
                        <div className={styles.countryItem}>
                            <Image src={country.flagUrl} alt={`Флаг ${country.name}`} width={54} height={35} />
                            <span>{country.name}</span>
                        </div>
                        </Link>
                    ))}
                    </div>
            </div>
          </section>
          <CountryCards/>
          <AdvantagesTwo/>
    </main>
  )
}
