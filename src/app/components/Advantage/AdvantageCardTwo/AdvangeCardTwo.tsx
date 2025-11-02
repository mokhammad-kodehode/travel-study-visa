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
        title: "Эффективность и удобство",
        description: "Оформляем визы быстро и без лишней бюрократии. Наш офис удобно расположен, а также доступно дистанционное обслуживание. Предлагаем полный спектр услуг — от консультации и перевода документов до страхования и бронирования билетов.",
        color: "orange",
      },
      {
        icon: faAward,
        title: "Профессионализм и опыт",
        description: "Высокий уровень квалификации специалистов с опытом более 10 лет в сфере визового и юридического сопровождения, а также индивидуальный подход к каждому клиенту, учитывая его уникальные потребности и обстоятельства.",
        color: "orange",
      },
      {
        icon: faGlobe,
        title: "Международное мышление",
        description: "Мы работаем не только с гражданами России, но и с иностранными клиентами, соблюдая международные стандарты, уважая культурные различия и преодолевая языковые барьеры",
        color: "orange",
      },
      {
        icon: faHandshake,
        title: " Доверие клиентов ",
        description: "Более 1000 довольных клиентов, многие обращаются повторно. Наши клиенты отмечают профессионализм, оперативность и внимательное отношение. Большинство новых обращений поступают по рекомендациям друзей и знакомых — это лучшая оценка нашей работы.",
        color: "orange",
      },
];

const AdvantagesTwo: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.container_title}>Наши преимущества</h2>
      <div data-aos="fade-top"  className={styles.cards}>
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