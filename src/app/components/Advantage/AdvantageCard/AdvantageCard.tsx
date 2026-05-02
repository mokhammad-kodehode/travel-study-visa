import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faCheck,
  faRuble,
  faShield,
  faFileLines,
  faStar,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import type { AdvantagesSectionData } from '@/sanity/adapters';

// Иконки подбираются по индексу. Если карточек больше — fallback на последнюю.
const ICONS: IconDefinition[] = [faRuble, faShield, faFileLines, faCheck, faStar, faPaperPlane];

// Дефолтный контент — используется как fallback если data не передан.
export const valuesFallback: AdvantagesSectionData = {
  title: 'Наши ценности',
  cards: [
    {
      title: 'Оплата',
      description: 'Предлагаем различные способы оплаты услуг. Оплату можно произвести безналичным расчётом или наличными. Каждый клиент получает чек и договор, подтверждающий безопасность и законность сделки.',
    },
    {
      title: 'Надежность и Гарантии',
      description: 'Прозрачные условия — без скрытых платежей и сложных формулировок. Мы обеспечиваем защиту персональных данных и сопровождаем клиентов на каждом этапе — от первой консультации до результата. Репутация, честность и доверие — основа нашей работы.',
    },
    {
      title: 'Документы',
      description: 'Мы помогаем получить большинство необходимых документов для путешествий, обучения или переезда за рубеж. Наши специалисты проверяют корректность заполнения, снижают риск ошибок и отказов при подаче заявлений.',
    },
    {
      title: 'Широкий спектр услуг',
      description: 'Оформляем визы в более чем 50 стран — туристические, деловые, студенческие и рабочие. Помогаем в сложных случаях, включая повторные обращения после отказов. Предоставляем клиентам актуальную информацию о требованиях и документах на каждом этапе оформления.',
    },
  ],
};

const Advantages: React.FC<{ data?: AdvantagesSectionData }> = ({ data }) => {
  const section = data ?? valuesFallback;
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

export default Advantages;