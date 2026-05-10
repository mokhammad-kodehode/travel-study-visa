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

const DEFAULT_ICONS: IconType[] = [
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

type BenefitItem = { title: string; description: string };

type Props = {
  title: string;
  subtitle?: string;
  items: BenefitItem[] | CitizenshipBenefit[];
  icons?: IconType[];
  ctaSlot?: React.ReactNode;
};

export default function BenefitsSection({ title, subtitle, items, icons, ctaSlot }: Props) {
  const iconSet = icons && icons.length > 0 ? icons : DEFAULT_ICONS;
  if (!items.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.grid}>
          {items.map((item, i) => {
            const Icon = iconSet[i % iconSet.length];
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
          {ctaSlot && <div className={styles.ctaCell}>{ctaSlot}</div>}
        </div>
      </div>
    </section>
  );
}
