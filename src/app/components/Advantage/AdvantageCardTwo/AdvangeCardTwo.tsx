import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faClock,
  faGlobe,
  faHandshake,
  faAward,
  faFileLines,
  faUserFriends,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import type { AdvantagesSectionData } from '@/sanity/adapters';

// Иконки подбираются по индексу. Если карточек больше — fallback на последнюю.
const ICONS: IconDefinition[] = [faClock, faAward, faGlobe, faHandshake, faFileLines, faUserFriends, faWallet];

// Дефолтный контент — используется как fallback если data не передан.
export const advantagesFallback: AdvantagesSectionData = {
  title: 'Наши преимущества',
  cards: [
    {
      title: 'Эффективность и удобство',
      description: 'Оформляем визы быстро и без лишней бюрократии. Наш офис удобно расположен, а также доступно дистанционное обслуживание. Предлагаем полный спектр услуг — от консультации и перевода документов до страхования и бронирования билетов.',
    },
    {
      title: 'Профессионализм и опыт',
      description: 'Высокий уровень квалификации специалистов с опытом более 10 лет в сфере визового и юридического сопровождения, а также индивидуальный подход к каждому клиенту, учитывая его уникальные потребности и обстоятельства.',
    },
    {
      title: 'Международное мышление',
      description: 'Мы работаем не только с гражданами России, но и с иностранными клиентами, соблюдая международные стандарты, уважая культурные различия и преодолевая языковые барьеры',
    },
    {
      title: 'Доверие клиентов',
      description: 'Более 1000 довольных клиентов, многие обращаются повторно. Наши клиенты отмечают профессионализм, оперативность и внимательное отношение. Большинство новых обращений поступают по рекомендациям друзей и знакомых — это лучшая оценка нашей работы.',
    },
  ],
};

const AdvantagesTwo: React.FC<{ data?: AdvantagesSectionData }> = ({ data }) => {
  const section = data ?? advantagesFallback;
  return (
    <section className={styles.container}>
      <h2 className={styles.container_title}>{section.title}</h2>
      <div data-aos="fade-top" className={styles.cards}>
        {section.cards.map((card, index) => {
          const icon = ICONS[index] ?? ICONS[ICONS.length - 1];
          return (
            <div key={index} className={styles.card}>
              <FontAwesomeIcon className={styles.card_icon} size="2x" icon={icon} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvantagesTwo;