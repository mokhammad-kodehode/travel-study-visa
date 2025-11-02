
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
                        <h1 className={styles.title_text}>Услуги нашей компании</h1>
                        <p className={styles.title_text_desc}>Международный центр туризма, образования и права «Travel&Study»
                              включает в себя все ключевые направления для комфортной и уверенной жизни, учёбы, работы и путешествий.
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
          <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}>Международный центр туризма, <br /> образования и права «Travel &Study».</div>
                <p className={styles.description}>включает в себя все ключевые направления для комфортной и уверенной жизни, учёбы, работы и путешествий.
                Мы объединяем туризм, образование и юридическую поддержку, чтобы клиент мог решать все вопросы — от планирования поездки и поступления в вуз до оформления виз, гражданства и открытия бизнеса — в одном месте, с надёжной профессиональной помощью.
                </p>
                <p className={styles.description}>Мы сопровождаем клиентов как в России, так и за рубежом: подбираем учебные программы, оформляем визы и загранпаспорта, легализуем документы, защищаем интересы и сопровождаем международные сделки.
                Наши специалисты сочетают юридическую точность, знание международных норм и персональный подход — чтобы каждая задача решалась быстро, грамотно и без лишних сложностей.
                </p>
        </section >
        <section className={styles.svcWrap} aria-labelledby="svc-title">
              <header className={styles.svcHead}>
                <h2 id="svc-title" className={styles.svcTitle}>
                  Основные направления деятельности
                </h2>
                <p className={styles.svcSub}>Ключевые сервисы «Travel &amp; Study»</p>
              </header>

              <div className={styles.svcGrid}>
                {[
                  {
                    title: "Туризм и путешествия",
                    text:
                      "Авторские маршруты, бронирование, страхование и сопровождение по всему миру.",
                  },
                  {
                    title: "Образование в России и за рубежом",
                    text:
                      "Подбор программ, поступление, визовая поддержка и консультации.",
                  },
                  {
                    title: "Юридическая поддержка",
                    text:
                      "ВНЖ, гражданство, загранпаспорта, сопровождение сделок и защита интересов в РФ и за рубежом.",
                  },
                  {
                    title: "Визовый центр",
                    text:
                      "Визы всех категорий, апелляции после отказов, контроль сроков и требования консульств.",
                  },
                  {
                    title: "Переводы и апостиль",
                    text:
                      "Нотариальные, присяжные и консульские переводы; апостиль и легализация документов.",
                  },
                  {
                    title: "Бизнес и инвестиции",
                    text:
                      "Регистрация компаний, юридическое сопровождение и анализ инвестиционных проектов в РФ и за рубежом.",
                  },
                ].map((it, i) => (
                  <article key={i} className={styles.svcItem}>
                    <div className={styles.svcIconWrap}>
                      {/* простой «листик/звёздочка» как маркер — можно заменить на любую иконку */}
                      <span className={styles.svcIcon}>✦</span>
                    </div>
                    <div className={styles.svcBody}>
                      <h3 className={styles.svcItemTitle}>{it.title}</h3>
                      <p className={styles.svcText}>{it.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
        <ServicesList/>
        <AdvantagesTwo/>
        <Contact/>
    </main>
  )
}
