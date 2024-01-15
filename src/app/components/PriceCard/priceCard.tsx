"use client"
import React, { useState } from 'react';
import styles from './styles.module.css';
import ModalForm from '../ContactForm/ContactFor'; 

interface ServiceOption {
  id: number;
  title: string;
  description: string;
  services:string[];
  price: number;
}

const services: ServiceOption[] = [
  {
    id: 1,
    title: 'Базовый',
    description: 'Полная подготовка для самостоятельной подачи. Сборы оплачиваются самостоятельно',
    services: ['Анкета', 'Бронирование отеля', 'Бронирование авиабилетов', '5 дней'],
    price: 7000,
  },
  {
    id: 2,
    title: 'Стандартный',
    description: 'Полное оформление документов с подачей в ВЦ. Все сборы включены',
    services: ['Анкета', 
                'Бронирование отеля', 
                'Бронирование авиабилетов', 
                '5 дней',
                'Подача в ВЦ',
                'Консульский сбор',
                'Визовый сбор',
                'Курьерские услуги',
                'Сопровождение на дактилоскопию',
                'Запись в ВЦ',],
    price: 12000,
  },
  {
    id: 3,
    title: 'Премиум',
    description: 'Оформление длинной визы под ключ от 3 до 5 лет гарантированно. Все сборы включены',
    services: ['Анкета', 
    'Бронирование отеля', 
    'Бронирование авиабилетов', 
    '5 дней',
    'Подача в ВЦ',
    'Консульский сбор',
    'Визовый сбор',
    'Курьерские услуги',
    'Сопровождение на дактилоскопию',
    'Запись в ВЦ',
    'Усиливаем визовый пакет для увеличения % одобрения',
    'Логистический сбор',
    'Страховка на 10 дней',],
    price: 16000,
  },
];

const TariffSelectionPage: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceOption>(services[0]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <section className={styles.tariff_section}>
        <h1 className={styles.tariff}>Наши Тарифы</h1>
        <div className={styles.container}>
          <div className={styles.left_panel}>
            <div className={styles.left_panel_title}>
            <h1 className={styles.tariff_title}>{activeService.title}</h1>
            <p>{activeService.description}</p>
            </div>
            {activeService ? (
              <div>
                <ul className={styles.service_list}>
                  {activeService.services.map((service, index) => (
                    <li key={index} className={styles.service_item}>
                      <span className={styles.dot}></span> {/* Используйте ваш стиль для желтой точки */}
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Выберите тариф для отображения информации</p>
            )}
          </div>
          <div className={styles.right_panel}>
            {services.map((service) => (
              <div key={service.id} 
              className={`${styles.service_option} ${activeService.id === service.id ? styles.active_service : ''}`}
              onClick={() => setActiveService(service)}>
                <h2>{service.title}</h2>
                <p className={styles.option_description}>{service.description}</p>
                <p>Цена <strong>от {service.price} руб.</strong> </p>
              </div>
            ))}
            <button onClick={handleOpenModal} className={styles.order_btn} > Заказать</button>
            {isModalOpen && (
              <ModalForm closeModal={handleCloseModal} />
            )}
          </div>
        </div>
    </section>
  );
};

export default TariffSelectionPage;