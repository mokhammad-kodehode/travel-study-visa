"use client"
import React, { useState,useRef  } from 'react';
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
    title: 'Economy – Базовый пакет',
    description: 'Полная подготовка для самостоятельной подачи.',
    services: [
      'Первичная консультация по требованиям для шенгенской визы',
      'Запись на приём в визовый центр (через бота)',
      'Предварительный анализ и проверка укомплектованности документов',
      'Помощь в заполнении стандартных форм и заявлений',
      'Бронирование отеля и авиабилетов «туда-обратно» на срок заявленной поездки без предоплаты',
      'Страховой полис для стран Шенгенского соглашения на срок поездки',
      'Информирование о статусе заявления на получение визы после его рассмотрения',
      'Составление маршрутного листа',
      'Персональные скидки на авиабилеты, отели и развлечения',
      'Консульский сбор оплачивается Вами при подаче'
    ],
    price: '27 990₽',
  },
  {
    id: 2,
    title: 'Standard – Стандартный пакет',
    description: 'Улучшенный пакет с дополнительными услугами и приоритетной записью.',
    services: [
      'Всё из пакета Economy',
      'Подготовка и корректировка дополнительных справок (о доходах, с места работы и пр.)',
      'Приоритетная запись на приём в визовый центр (ускоренное планирование даты подачи документов на ближайшие даты)',
      'Выкупленные авиабилеты «туда-обратно»',
      'Возможность дистанционной подачи документов (при необходимости)'
    ],
    price: '59 990₽',
  },
  {
    id: 3,
    title: 'Business Class – Приоритетное обслуживание',
    description: 'Приоритетное оформление с экспресс-доступом и полным сопровождением.',
    services: [
      'Всё из пакета Standard',
      'Экспресс-подготовка документов с сокращёнными сроками оформления',
      'Оформление спонсорского и сопроводительного писем',
      'Оплаченное бронирование отеля и авиабилетов (предоплаченные ваучеры отеля и авиабилеты в обе стороны)',
      'Экспресс-обратная связь от персонального менеджера и оперативное решение срочных вопросов на каждом этапе поездки'
    ],
    price: '89 990₽',
  },
  {
    id: 4,
    title: 'VIP First Class – VIP-сервис',
    description: 'Максимальный комфорт и личное сопровождение на всех этапах.',
    services: [
      'Всё из пакета Business Class',
      'Офф-лайн консультации с подробным разбором особенностей вашего дела',
      'Полное юридическое сопровождение',
      'Дополнительное сопровождение в визовый центр (если потребуется)',
      'Возможность дистанционной подачи документов (при необходимости)'
    ],
    price: '199 999₽',
  },
  {
    id: 5,
    title: 'Private Jet – Эксклюзивный пакет «под ключ» для тех, кто после отказа',
    description: 'Полное оформление для сложных случаев с личным визовым консьержем.',
    services: [
      'Полное оформление «под ключ»: от сбора документов до получения визы',
      'Страховой полис на 1 год, действующий по всему миру',
      'Личный визовый консьерж',
      'Организация трансфера в визовый центр и обратно',
      'Экспресс-доставка документов курьерской службой',
      'Предоплаченные ваучеры отеля и авиабилеты в обе стороны',
      'Экспресс-обратная связь от персонального менеджера и оперативное решение срочных вопросов на каждом этапе поездки',
      'Персональные скидки на авиабилеты, отели и развлечения'
    ],
    price: '299 999₽',
  },
];


const TariffSelectionPage: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceOption>(services[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const scrollToDetails = () => {
    if (!detailsRef.current) return;

    const navbarOffset = 130; // ≈ высота мобильного header-a
    const y =
      detailsRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleChooseService = (service: ServiceOption) => {
    setActiveService(service);
    if (window.innerWidth <= 820) scrollToDetails();
  };


  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <section className={styles.tariff_section}>
    <h1 className={styles.tariff}>Наши тарифы</h1>

    <div className={`${styles.container} ${styles.mobileReverse}`}>
      {/* Левая панель с подробными услугами */}
      <div ref={detailsRef} className={styles.left_panel}>
        <div className={styles.left_panel_title}>
          <h1 className={styles.tariff_title}>{activeService.title}</h1>
          <p className={styles.desc}>{activeService.description}</p>
        </div>

        <ul className={styles.service_list}>
          {activeService.services.map((srv, i) => (
            <li key={i} className={styles.service_item}>
              <FaCheckCircle className={styles.icons} /> {srv}
            </li>
          ))}
        </ul>
      </div>

      {/* Правая панель — список тарифов */}
      <div className={styles.right_panel}>
        {services.map((s) => (
          <div
            key={s.id}
            className={`${styles.service_option} ${
              activeService.id === s.id ? styles.active_service : ""
            }`}
            onClick={() => handleChooseService(s)}
          >
            <h2>{s.title}</h2>
            <p>
              <strong>от {s.price}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TariffSelectionPage;