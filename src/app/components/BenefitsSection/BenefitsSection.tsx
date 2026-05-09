import {
  FaShieldAlt,
  FaPassport,
  FaGlobeEurope,
  FaGavel,
  FaClock,
  FaCoins,
  FaGraduationCap,
  FaStar,
  FaUserTie,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import styles from './styles.module.css';
import type { CitizenshipBenefit } from '@/sanity/adapters';

const ICONS: IconType[] = [
  FaShieldAlt,
  FaPassport,
  FaGlobeEurope,
  FaGavel,
  FaClock,
  FaCoins,
  FaGraduationCap,
  FaStar,
  FaUserTie,
];

type Props = {
  title: string;
  subtitle?: string;
  items: CitizenshipBenefit[];
};

export default function BenefitsSection({ title, subtitle, items }: Props) {
  if (!items.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.grid}>
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article key={i} className={styles.card}>
                <div className={styles.iconTile}>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
