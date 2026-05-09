import { cache } from 'react';
import { Metadata } from 'next';
import styles from './styles.module.css';
import 'fontsource-inter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBriefcase, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
import type { PortableTextBlock } from '@portabletext/react';

import Advantages from '../components/Advantage/AdvantagesValuesServer';
import MissionSection from '../components/AboutSections/MissionSection/MissionSection';
import MainTextSection from '../components/AboutSections/MainTextSection/MainTextSection';
import TimelineSection from '../components/AboutSections/TimelineSection/TimelineSection';
import GeographySection from '../components/AboutSections/GeographySection/GeographySection';
import CtaSection from '../components/AboutSections/CtaSection/CtaSection';

import { client } from '@/sanity/client';
import { aboutPageQuery, allCountriesForGeographyQuery } from '@/sanity/queries';
import {
  sanityToAboutPage,
  sanityCountriesToGeography,
  type AboutPageData,
  type SanityAboutPage,
  type SanityCountryFlag,
} from '@/sanity/adapters';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'О компании | Travel and Study – Ваш визовый центр',
  description:
    'Узнайте больше о Travel and Study. Мы предоставляем услуги по оформлению виз, ВНЖ, гражданства и обучению за границей. Индивидуальный подход и полное сопровождение.',
};

const STAT_ICONS: IconDefinition[] = [faBriefcase, faUsers, faGlobe];

// ===== Fallback на случай пустого Sanity-документа =====
const fallbackMainTextBlocks: PortableTextBlock[] = [
  {
    _type: 'block',
    _key: 'fb1',
    style: 'normal',
    children: [
      { _type: 'span', _key: 'fb1a', text: 'Уже много лет мы помогаем людям открывать новые страны, получать качественное образование и решать юридические вопросы любой сложности — как в России, так и за её пределами. ' },
      { _type: 'span', _key: 'fb1b', text: 'Мы создали комплексную систему сопровождения для туристических, образовательных и миграционных программ по всему миру.', marks: ['strong'] },
    ],
    markDefs: [],
  } as unknown as PortableTextBlock,
  {
    _type: 'block',
    _key: 'fb2',
    style: 'normal',
    children: [
      { _type: 'span', _key: 'fb2a', text: 'Мы выстраиваем стабильные и доверительные отношения с партнёрами в России и за рубежом, ', marks: ['strong'] },
      { _type: 'span', _key: 'fb2b', text: 'обеспечивая надёжность и прозрачность сотрудничества. Команда наших специалистов гарантирует высокий уровень сервиса на каждом этапе — от профессионального оформления виз, перевода и легализации документов до комплексного юридического сопровождения по любым направлениям.' },
    ],
    markDefs: [],
  } as unknown as PortableTextBlock,
  {
    _type: 'block',
    _key: 'fb3',
    style: 'normal',
    children: [
      { _type: 'span', _key: 'fb3a', text: 'Мы предлагаем ' },
      { _type: 'span', _key: 'fb3b', text: 'полное сопровождение', marks: ['strong'] },
      { _type: 'span', _key: 'fb3c', text: ' в сфере международного образования, миграции и зарубежных инвестиций: от подбора учебных заведений и оформления ВНЖ до получения второго гражданства и приобретения недвижимости за границей. Мы работаем с клиентами со всего мира, предоставляя индивидуальный подход и лучшие возможности для реализации ваших международных планов.' },
    ],
    markDefs: [],
  } as unknown as PortableTextBlock,
];

const fallback: AboutPageData = {
  hero: {
    title: 'Travel & Study',
    subtitle:
      'Международный центр туризма, образования и права — ваш надёжный партнёр в мире путешествий, обучения и юридической поддержки.',
    imageUrl: '',
    imageAlt: '',
    stats: [
      { number: '10+', label: 'лет опыта' },
      { number: '1000+', label: 'довольных клиентов' },
      { number: '50+', label: 'стран мира' },
    ],
  },
  mission: {
    enabled: true,
    title: 'Миссия и ценности',
    subtitle: 'Принципы, которые делают наше сопровождение надёжным на каждом этапе.',
    items: [
      {
        title: 'Прозрачность и честность',
        description:
          'Никаких скрытых платежей и расплывчатых формулировок. Каждый клиент получает чёткий договор и понимает, за что он платит.',
      },
      {
        title: 'Индивидуальный подход',
        description:
          'Мы не работаем по шаблону. Каждый кейс прорабатываем под цели и обстоятельства клиента — от первой консультации до результата.',
      },
      {
        title: 'Опыт и экспертиза',
        description:
          'Более 10 лет работы с визами, ВНЖ и юридическим сопровождением. Знаем требования консульств и нюансы законодательства разных стран.',
      },
      {
        title: 'Полное сопровождение',
        description:
          'Берём на себя весь процесс: документы, переводы, апостиль, подача и контроль сроков. Вы получаете результат, а не задачу.',
      },
    ],
  },
  mainText: {
    eyebrow: 'О КОМПАНИИ',
    title: 'Travel & Study — больше, чем просто визовый центр',
    imageUrl: '/images/global.jpg',
    imageAlt: 'Travel & Study — международный центр туризма, образования и права',
    blocks: fallbackMainTextBlocks,
  },
  timeline: {
    enabled: true,
    title: 'История компании',
    subtitle: 'Ключевые этапы нашего пути.',
    items: [
      { year: '2014', title: 'Основание', description: 'Открытие первого офиса в Москве и старт работы с визами в страны Европы.' },
      { year: '2018', title: 'Расширение в Азию', description: 'Добавлены направления Китая, Японии, Кореи и Юго-Восточной Азии.' },
      { year: '2020', title: 'ВНЖ и второе гражданство', description: 'Запуск отдельного направления по ВНЖ и инвестиционному гражданству.' },
      { year: '2023', title: '50+ стран в работе', description: 'Достигли отметки 50+ стран и более 1000 успешно завершённых кейсов.' },
    ],
  },
  geography: {
    enabled: true,
    title: 'География работы',
    subtitle: 'Мы оформляем визы и документы для более чем 50 стран мира.',
  },
  cta: {
    enabled: true,
    title: 'Готовы начать?',
    description:
      'Получите бесплатную консультацию специалиста — мы подберём оптимальное решение для ваших целей.',
    primaryLabel: 'Бесплатная консультация',
    primaryAction: 'jivo',
    primaryHref: '',
    secondaryEnabled: true,
    secondaryLabel: 'Написать в WhatsApp',
    secondaryAction: 'whatsapp',
    secondaryHref: '',
  },
};

// ===== Data fetching =====
const fetchAboutPage = cache(async () => {
  return client.fetch<SanityAboutPage | null>(aboutPageQuery);
});

const fetchCountriesForGeography = cache(async () => {
  return client.fetch<SanityCountryFlag[]>(allCountriesForGeographyQuery);
});

export default async function About_Us() {
  const [rawAbout, rawCountries] = await Promise.all([fetchAboutPage(), fetchCountriesForGeography()]);
  const data = sanityToAboutPage(rawAbout, fallback);
  const countries = sanityCountriesToGeography(rawCountries);

  const bannerStyle = data.hero.imageUrl
    ? {
        backgroundImage: `linear-gradient(rgba(10, 8, 35, 0.55), rgba(45, 27, 94, 0.65)), url('${data.hero.imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <main className={styles.main}>
      {/* ===== Hero (Dark Aurora) ===== */}
      <section className={styles.banner} style={bannerStyle}>
        <div className={`${styles.orb} ${styles.orb_violet}`} aria-hidden />
        <div className={`${styles.orb} ${styles.orb_gold}`} aria-hidden />
        <div className={`${styles.orb} ${styles.orb_pink}`} aria-hidden />
        <div className={`${styles.banner_container} ${styles.mobileReverse}`}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>{data.hero.title}</h1>
              <p className={styles.title_text_desc}>{data.hero.subtitle}</p>
            </div>
          </div>
          <div className={styles.stats_grid}>
            {data.hero.stats.map((stat, i) => {
              const icon = STAT_ICONS[i] ?? STAT_ICONS[STAT_ICONS.length - 1];
              return (
                <div
                  key={i}
                  className={styles.stat_card}
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  <div className={styles.stat_icon}>
                    <FontAwesomeIcon icon={icon} />
                  </div>
                  <div className={styles.stat_text}>
                    <div className={styles.stat_number}>{stat.number}</div>
                    <div className={styles.stat_label}>{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Breadcrumbs ===== */}
      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <span>О Компании</span>
        </div>
      </div>

      {/* ===== Main text (magazine style with photo) ===== */}
      <MainTextSection
        eyebrow={data.mainText.eyebrow}
        title={data.mainText.title}
        imageUrl={data.mainText.imageUrl}
        imageAlt={data.mainText.imageAlt}
        blocks={data.mainText.blocks}
      />

      {/* ===== Mission & Values ===== */}
      {data.mission.enabled && (
        <MissionSection
          title={data.mission.title}
          subtitle={data.mission.subtitle}
          items={data.mission.items}
        />
      )}

      {/* ===== Timeline ===== */}
      {data.timeline.enabled && (
        <TimelineSection
          title={data.timeline.title}
          subtitle={data.timeline.subtitle}
          items={data.timeline.items}
        />
      )}

      {/* ===== Geography ===== */}
      {data.geography.enabled && countries.length > 0 && (
        <GeographySection
          title={data.geography.title}
          subtitle={data.geography.subtitle}
          countries={countries}
        />
      )}

      {/* ===== Advantages (легаси-стиль, оставляем) ===== */}
      <section className={styles.section_two}>
        <Advantages />
      </section>

      {/* ===== CTA ===== */}
      {data.cta.enabled && (
        <CtaSection
          title={data.cta.title}
          description={data.cta.description}
          primaryLabel={data.cta.primaryLabel}
          primaryAction={data.cta.primaryAction}
          primaryHref={data.cta.primaryHref}
          secondaryEnabled={data.cta.secondaryEnabled}
          secondaryLabel={data.cta.secondaryLabel}
          secondaryAction={data.cta.secondaryAction}
          secondaryHref={data.cta.secondaryHref}
        />
      )}
    </main>
  );
}
