
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
                        <p className={styles.title_text_desc}>Международный центр туризма, образования и права — ваш надёжный партнёр в мире путешествий, обучения и юридической поддержки.</p>
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
          <section className={styles.section_text_content}>
            <div className={styles.section_text_content_title}>О Компании</div>
              <p className={styles.description}>
                Уже много лет мы помогаем людям открывать новые страны, получать качественное образование
                и решать юридические вопросы любой сложности — как в России, так и за её пределами.
                <strong> Мы создали комплексную систему сопровождения для туристических, образовательных и миграционных программ по всему миру.</strong>
              </p>

              <p className={styles.description}>
                <strong>Мы выстраиваем стабильные и доверительные отношения с партнёрами в России и за рубежом,</strong>
                обеспечивая надёжность и прозрачность сотрудничества.
                <br /><br />
                Команда наших специалистов гарантирует <strong>высокий уровень сервиса на каждом этапе</strong> — от профессионального оформления виз,
                перевода и легализации документов до комплексного юридического сопровождения по любым направлениям.
              </p>

              <p className={styles.description}>
                Мы предлагаем <strong>полное сопровождение</strong> в сфере международного образования, миграции и зарубежных инвестиций:
                от подбора учебных заведений и оформления ВНЖ до получения второго гражданства и приобретения недвижимости за границей.
                <br /><br />
                Мы работаем с клиентами со всего мира, предоставляя <strong>индивидуальный подход, гибкие решения</strong> и
                <strong>лучшие возможности для реализации ваших международных планов.</strong>
                <br /><br />
                <strong>Убедитесь в этом сами — станьте нашим партнёром уже сегодня!</strong>
              </p>

        </section >
          <section className={styles.section_two}>
            <Advantages/>
          </section>
    </main>
  )
}
