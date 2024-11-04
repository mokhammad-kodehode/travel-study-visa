"use client"
import React, { useState } from 'react';
import styles from './styles.module.css';
import ModalForm from '../ContactForm/ContactFor'; 
import { FaCheckCircle } from 'react-icons/fa';

interface ServiceOption {
  id: number;
  title: string;
  description: string;
  services:string[];
  price: string;
}

const services: ServiceOption[] = [
  {
    id: 1,
    title: 'БАЗОВЫЙ',
    description: 'Полная подготовка для самостоятельной подачи.',
    services: ['Визовая анкета',
      'Бронирование авиабилетов',
      'Бронирование отеля',
      'Страховой полис',
      'Доставка документов',],
    price: '9900 ₽',
  },
  {
    id: 2,
    title: 'ПОД КЛЮЧ',
    description: 'Полное оформление документов с подачей в ВЦ.',
    services: [ 'Визовая анкета',
      'Бронирование авиабилетов',
      'Бронирование отеля',
      'Страховой полис',
      'Доставка документов',
      'Запись на подачу документов',
      'Подача с нашим специалистом',
      'Срочная запись на подачу',],
      price: "22 900 ₽"
  },
  {
    id: 3,
    title: 'СРОЧНАЯ ВИЗА',
    description: 'Оформление длинной визы под ключ от 3 до 5 лет гарантированно.',
    services: ['Визовая анкета',
      'Бронирование авиабилетов',
      'Бронирование отеля',
      'Страховой полис',
      'Доставка документов',
      'Запись на подачу документов',
      'Подача с нашим специалистом',
      'Срочная запись на подачу',
      'Визовый сбор'],
    price: "34 900 ₽",
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
        <div className={`${styles.container} ${styles.mobileReverse}`}>
            <div className={styles.left_panel}>
              <div className={styles.left_panel_title}>
              <h1 className={styles.tariff_title}>{activeService.title}</h1>
              <p className={styles.desc}>{activeService.description}</p>
              </div>
              {activeService ? (
                <div>
                  <ul className={styles.service_list}>
                    {activeService.services.map((service, index) => (
                      <li key={index} className={styles.service_item}>
                        <FaCheckCircle className={styles.icons}></FaCheckCircle> {/* Используйте ваш стиль для желтой точки */}
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
                    {/* <p className={styles.option_description}>{service.description}</p> */}
                    <p><strong>от {service.price}</strong> </p>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default TariffSelectionPage;