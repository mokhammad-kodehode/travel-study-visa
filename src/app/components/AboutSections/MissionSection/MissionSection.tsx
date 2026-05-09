import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faShieldHalved,
  faHandshake,
  faUserTie,
  faRoute,
  faGlobe,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import type { AboutMissionItem } from '@/sanity/adapters';

const ICONS: IconDefinition[] = [faShieldHalved, faHandshake, faUserTie, faRoute, faGlobe, faAward];

type Props = {
  title: string;
  subtitle?: string;
  items: AboutMissionItem[];
};

export default function MissionSection({ title, subtitle, items }: Props) {
  if (!items.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.grid}>
          {items.map((item, i) => {
            const icon = ICONS[i] ?? ICONS[ICONS.length - 1];
            return (
              <article key={i} className={styles.card}>
                <div className={styles.iconTile}>
                  <FontAwesomeIcon icon={icon} />
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
