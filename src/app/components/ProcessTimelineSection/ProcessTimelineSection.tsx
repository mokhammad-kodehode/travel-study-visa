import styles from './styles.module.css';
import type { UkProcessStep } from '@/sanity/adapters';

type Props = {
  title: string;
  subtitle?: string;
  items: UkProcessStep[];
};

export default function ProcessTimelineSection({ title, subtitle, items }: Props) {
  if (!items.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <ol className={styles.timeline}>
          <span className={styles.line} aria-hidden />
          {items.map((item, i) => (
            <li key={i} className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.dot} aria-hidden />
              <article className={styles.card}>
                <span className={styles.step}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.description && <p className={styles.cardDesc}>{item.description}</p>}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
