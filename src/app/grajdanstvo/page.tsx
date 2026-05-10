import { cache } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextBlock, type PortableTextComponents } from '@portabletext/react';
import { client } from '@/sanity/client';
import { allCitizenshipCountriesQuery, citizenshipIndexPageQuery } from '@/sanity/queries';
import {
  sanityToCitizenshipList,
  sanityToCitizenshipIndexPage,
  type SanityCitizenshipListItem,
  type SanityCitizenshipIndexPage,
  type CitizenshipIndexPageData,
} from '@/sanity/adapters';
import styles from './styles.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Гражданство — выберите страну | Travel and Study',
  description:
    'Оформление гражданства разных стран по программам репатриации и натурализации. Выберите страну для получения подробной информации.',
};

const fallbackDescription: PortableTextBlock[] = [
  {
    _type: 'block',
    _key: 'cz1',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'cz1a',
        text:
          'Получение второго гражданства открывает доступ к новым возможностям: безвизовые поездки, право жить и работать в другой стране, доступ к европейской медицине, образованию и социальной системе.',
      },
    ],
  } as unknown as PortableTextBlock,
  {
    _type: 'block',
    _key: 'cz2',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'cz2a',
        text:
          'Мы работаем с программами репатриации и натурализации в нескольких странах. Подбираем оптимальный путь под вашу ситуацию — родословный архив, инвестиционные программы или длительное проживание.',
      },
    ],
  } as unknown as PortableTextBlock,
  {
    _type: 'block',
    _key: 'cz3',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'cz3a',
        text:
          'Берём на себя весь процесс: анализ документов, сбор архивных справок, перевод и нотариальное заверение, подача заявления и юридическое сопровождение до получения паспорта.',
      },
    ],
  } as unknown as PortableTextBlock,
];

const fallback: CitizenshipIndexPageData = {
  bannerImageUrl: '/images/Pass.jpg',
  bannerImageAlt: 'Паспорта — фон страницы Гражданство',
  bannerTitle: 'Гражданство',
  bannerSubtitle:
    'Поможем оформить второе гражданство по программам репатриации и натурализации. Travel & Study сопровождает на всех этапах — от анализа документов до получения паспорта.',
  sectionTitle: 'Оформление гражданства',
  description: fallbackDescription,
};

const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={styles.description}>{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const fetchIndex = cache(async () =>
  client.fetch<SanityCitizenshipIndexPage | null>(citizenshipIndexPageQuery),
);

const fetchCountries = cache(async () =>
  client.fetch<SanityCitizenshipListItem[]>(allCitizenshipCountriesQuery),
);

export default async function CitizenshipIndex() {
  const [rawIndex, rawCountries] = await Promise.all([fetchIndex(), fetchCountries()]);
  const data = sanityToCitizenshipIndexPage(rawIndex, fallback);
  const countries = sanityToCitizenshipList(rawCountries);

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('${data.bannerImageUrl}')`,
  };

  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle}>
        <div className={styles.banner_container}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>{data.bannerTitle}</h1>
              {data.bannerSubtitle && <p style={{ whiteSpace: 'pre-line' }}>{data.bannerSubtitle}</p>}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link> &gt;
          <span>Гражданство</span>
        </div>
      </div>

      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>{data.sectionTitle}</div>
        {data.description.length > 0 && (
          <PortableText value={data.description} components={portableComponents} />
        )}
      </section>

      <section className={styles.section_two}>
        <div className={styles.section_two_top}>
          <h2 className={styles.selectCountryTitle}>Выберите страну</h2>
          {countries.length === 0 ? (
            <p className={styles.empty}>Скоро здесь появятся страны для оформления гражданства.</p>
          ) : (
            <div className={styles.countryList}>
              {countries.map((c) => (
                <Link key={c.slug} href={c.pageUrl}>
                  <div className={styles.countryItem}>
                    {c.flagUrl ? (
                      <Image src={c.flagUrl} alt={`Флаг ${c.name}`} width={54} height={35} />
                    ) : (
                      <div className={styles.flagPlaceholder} aria-hidden />
                    )}
                    <span>{c.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
