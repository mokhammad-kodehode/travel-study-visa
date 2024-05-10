import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faClock, 
            faUserFriends, 
            faGlobe, 
            faHandshake, 
            faAward, 
            faFileLines,
            faWallet, 
        } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

type Advantage = {
  icon: IconDefinition ;
  title: string;
  description: string;
  color: string;
};

const advantages: Advantage[] = [
    {
        icon: faClock,
        title: "Экономия времени",
        description: "Мы сократим время, необходимое для оформления документов, благодаря оптимизированному процессу обработки заявок.",
        color: "orange",
      },
      {
        icon: faUserFriends,
        title: "Индивидуальный подход",
        description: "Мы учитываем особенности каждого клиента и предлагаем индивидуальные решения, нацеленные на удовлетворение его потребностей.",
        color: "orange",
      },
      {
        icon: faGlobe,
        title: "Глобальное покрытие",
        description: "Мы оказываем услуги клиентам из разных стран мира, обеспечивая полное покрытие их потребностей в получении документов.",
        color: "orange",
      },
      {
        icon: faHandshake,
        title: "Профессиональные партнеры",
        description: "Мы сотрудничаем с проверенными партнерами по всему миру, чтобы обеспечить нашим клиентам максимально эффективное и качественное обслуживание.",
        color: "orange",
      },
      {
        icon: faAward,
        title: "Признание качества",
        description: "Мы гордимся нашей репутацией и признанием на рынке как надежного и профессионального провайдера услуг в сфере оформления документов.",
        color: "orange",
      },
      {
        icon: faWallet,
        title: "Экономия средств",
        description: "Мы предлагаем конкурентные цены и различные акции, чтобы помочь нашим клиентам сэкономить средства при получении необходимых документов.",
        color: "orange",
      },
];

const AdvantagesTwo: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.container_title}>Наши преимущества</h2>
      <div className={styles.cards}>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.card}>
            <FontAwesomeIcon className={styles.card_icon} size="2x" icon={advantage.icon}  />
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesTwo;