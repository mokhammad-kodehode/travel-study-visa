import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import type { GeographyCountry } from '@/sanity/adapters';

const REGION_LABELS: Record<GeographyCountry['region'], string> = {
  europe: 'Европа',
  asia: 'Азия',
  america: 'Америка',
};

const REGION_ORDER: GeographyCountry['region'][] = ['europe', 'asia', 'america'];

type Props = {
  title: string;
  subtitle?: string;
  countries: GeographyCountry[];
};

export default function GeographySection({ title, subtitle, countries }: Props) {
  if (!countries.length) return null;

  const grouped = REGION_ORDER.map((region) => ({
    region,
    label: REGION_LABELS[region],
    items: countries.filter((c) => c.region === region),
  })).filter((g) => g.items.length > 0);

  const total = countries.length;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.totalBadge}>
          <span className={styles.totalNumber}>{total}+</span>
          <span className={styles.totalLabel}>стран в работе</span>
        </div>

        <div className={styles.regions}>
          {grouped.map((group) => (
            <div key={group.region} className={styles.regionBlock}>
              <div className={styles.regionHeader}>
                <h3 className={styles.regionTitle}>{group.label}</h3>
                <span className={styles.regionCount}>{group.items.length}</span>
              </div>
              <div className={styles.grid}>
                {group.items.map((c) => (
                  <Link key={c.slug} href={c.pageUrl} className={styles.cardLink}>
                    <article className={styles.card}>
                      <div className={styles.flagWrap}>
                        {c.flagUrl ? (
                          <Image
                            src={c.flagUrl}
                            alt={`Флаг ${c.name}`}
                            fill
                            sizes="(max-width: 820px) 33vw, 12vw"
                            className={styles.flagImg}
                          />
                        ) : (
                          <div className={styles.flagPlaceholder} aria-hidden />
                        )}
                      </div>
                      <span className={styles.cardName}>{c.name}</span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
