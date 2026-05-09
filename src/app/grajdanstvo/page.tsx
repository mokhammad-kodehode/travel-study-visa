import { cache } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/client';
import { allCitizenshipCountriesQuery } from '@/sanity/queries';
import { sanityToCitizenshipList, type SanityCitizenshipListItem } from '@/sanity/adapters';
import styles from './styles.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Гражданство — выберите страну | Travel and Study',
  description:
    'Оформление гражданства разных стран по программам репатриации и натурализации. Выберите страну для получения подробной информации.',
};

const fetchCountries = cache(async () => {
  return client.fetch<SanityCitizenshipListItem[]>(allCitizenshipCountriesQuery);
});

export default async function CitizenshipIndex() {
  const raw = await fetchCountries();
  const countries = sanityToCitizenshipList(raw);

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={styles.banner_inner}>
          <h1 className={styles.title}>Гражданство</h1>
          <p className={styles.subtitle}>
            Поможем оформить второе гражданство по программам репатриации и натурализации. Выберите страну, чтобы узнать
            детали процесса, документы и сроки.
          </p>
        </div>
      </section>

      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Главная</Link> &gt;
          <span>Гражданство</span>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {countries.length === 0 ? (
            <p className={styles.empty}>Скоро здесь появятся страны для оформления гражданства.</p>
          ) : (
            <div className={styles.grid}>
              {countries.map((c) => (
                <Link key={c.slug} href={c.pageUrl} className={styles.cardLink}>
                  <article className={styles.card}>
                    <div className={styles.flagWrap}>
                      {c.flagUrl ? (
                        <Image
                          src={c.flagUrl}
                          alt={`Флаг ${c.name}`}
                          fill
                          sizes="(max-width: 820px) 50vw, 25vw"
                          className={styles.flagImg}
                        />
                      ) : (
                        <div className={styles.flagPlaceholder} aria-hidden />
                      )}
                    </div>
                    <h2 className={styles.cardName}>Гражданство {c.name}</h2>
                    {c.shortDescription && (
                      <p className={styles.cardDesc}>{c.shortDescription}</p>
                    )}
                    <span className={styles.cardCta}>Подробнее →</span>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
