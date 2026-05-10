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
        <div className={styles.banner_container}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>Гражданство</h1>
              <p>
                Поможем оформить второе гражданство по программам репатриации и натурализации. Travel & Study
                сопровождает на всех этапах — от анализа документов до получения паспорта.
              </p>
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
        <div className={styles.section_text_content_title}>Оформление гражданства</div>
        <p className={styles.description}>
          Получение второго гражданства открывает доступ к новым возможностям: безвизовые поездки, право жить и
          работать в другой стране, доступ к европейской медицине, образованию и социальной системе.
        </p>
        <p className={styles.description}>
          Мы работаем с программами репатриации и натурализации в нескольких странах. Подбираем оптимальный путь под
          вашу ситуацию — родословный архив, инвестиционные программы или длительное проживание.
        </p>
        <p className={styles.description}>
          Берём на себя весь процесс: анализ документов, сбор архивных справок, перевод и нотариальное заверение,
          подача заявления и юридическое сопровождение до получения паспорта.
        </p>
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
