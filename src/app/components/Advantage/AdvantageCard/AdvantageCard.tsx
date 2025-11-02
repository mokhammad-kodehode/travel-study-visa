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
    description: 'Предлагаем различные способы оплаты услуг. Оплату можно произвести безналичным расчётом или наличными. Каждый клиент получает чек и договор, подтверждающий безопасность и законность сделки.',
    color: 'orange',
  },
  {
    icon: faShield,
    title: 'Надежность и Гарантии',
    description: 'Прозрачные условия — без скрытых платежей и сложных формулировок. Мы обеспечиваем защиту персональных данных и сопровождаем клиентов на каждом этапе — от первой консультации до результата. Репутация, честность и доверие — основа нашей работы.',
    color: 'orange',
  },
  {
    icon: faFileLines,
    title: 'Документы',
    description: 'Мы помогаем получить большинство необходимых документов для путешествий, обучения или переезда за рубеж. Наши специалисты проверяют корректность заполнения, снижают риск ошибок и отказов при подаче заявлений.',
    color: 'orange',
  },
  {
    icon: faCheck,
    title: 'Широкий спектр услуг',
    description: 'Оформляем визы в более чем 50 стран — туристические, деловые, студенческие и рабочие. Помогаем в сложных случаях, включая повторные обращения после отказов. Предоставляем клиентам актуальную информацию о требованиях и документах на каждом этапе оформления.',
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
      <div data-aos="fade-top" className={styles.cards}>
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