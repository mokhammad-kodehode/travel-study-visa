import React from 'react';
import styles from './styles.module.css'; 


import { FaCheckCircle } from 'react-icons/fa';

const PricingTable = () => {
  const plans = [
    {
      title: 'Базовый',
      price: '9 900 ₽',
      features: [
        'Визовая анкета',
        'Бронирование авиабилетов',
        'Бронирование отеля',
        'Страховой полис',
        'Доставка документов',
      ]
    },
    {
      title: 'Под ключ',
      price: '22 900 ₽',
      features: [
        'Визовая анкета',
        'Бронирование авиабилетов',
        'Бронирование отеля',
        'Страховой полис',
        'Доставка документов',
        'Запись на подачу документов',
        'Подача с нашим специалистом',
        'Срочная запись на подачу',
      ]
    },
    {
      title: 'Срочная виза',
      price: '34 900 ₽',
      features: [
        'Визовая анкета',
        'Бронирование авиабилетов',
        'Бронирование отеля',
        'Страховой полис',
        'Доставка документов',
        'Запись на подачу документов',
        'Подача с нашим специалистом',
        'Срочная запись на подачу',
        'Визовый сбор'
      ]
    }
  ];

  return (
    <div className={styles.pricingTable}>
      {plans.map((plan, index) => (
        <div key={index} className={styles.plan}>
          <h2 className={styles.planTitle}>{plan.title}</h2>
          <p className={styles.price}>{plan.price}</p>
          <ul className={styles.featuresList}>
            {plan.features.map((feature, i) => (
              <li key={i} className={styles.feature}>
                <FaCheckCircle className={styles.checkIcon} /> {feature}
              </li>
            ))}
          </ul>
          <button className={styles.button}>Выбрать план</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;