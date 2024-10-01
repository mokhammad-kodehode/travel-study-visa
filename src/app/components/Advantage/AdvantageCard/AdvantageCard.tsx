import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCheck, 
            faStar, 
            faFileImport, 
            faRuble, 
            faShield, 
            faFileLines,
            faPaperPlane, 
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
    icon: faRuble,
    title: 'Оплата',
    description: 'Предлагаем различные способы оплаты услуг. Оплату можно произвести безналичным расчетом и наличными.',
    color: 'orange',
  },
  {
    icon: faShield,
    title: 'Гарантия',
    description: 'Мы гарантируем, что Вы получите необходимые документы максимально быстро и по оптимальной цене.',
    color: 'orange',
  },
  {
    icon: faFileLines,
    title: 'Документы',
    description: 'Мы можем помочь Вам получить большинство документов необходимых для путешествий и переездов в другие страны.',
    color: 'orange',
  },
  {
    icon: faCheck,
    title: 'Оформление',
    description: 'Оформить необходимые документы можно онлайн, без приезда в офис.',
    color: 'orange',
  },
  // {
  //   icon: faFileImport,
  //   title: 'Доставка',
  //   description: 'Полученые документы, мы можем отправить Вам с курьером.',
  //   color: 'orange',
  // },
  // {
  //   icon: faStar,
  //   title: 'Отличный сервис',
  //   description: 'Мы мотивируем наших сотрудников на эффективное решение задач, ориентируясь на потребности клиента.',
  //   color: 'orange',
  // },
];

const Advantages: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.container_title}>Наши ценности</h2>
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

export default Advantages;