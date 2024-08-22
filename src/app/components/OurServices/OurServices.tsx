import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'; // Убедитесь, что у вас есть этот файл стилей
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport, faPlane, faHotel, faShieldAlt, faPlaneDeparture,} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Оформление загранпаспорта',
    description: 'Для быстрого оформления загранпаспорта требуется заполнение анкеты на специальном бланке.',
    link: '/services_page/zagran_passport',
    icon: faPassport
  },
  {
    title: 'Бронирование авиа и ж\д билетов',
    description: 'Мы поможем вам и подберем наиболее выгодные варианты!',
    link: '/services_page/booking_tickets',
    icon: faPlane
  },
  {
    title: 'Бронирование отелей',
    description: 'Подберем идеальный отель для отдыха или рабочей поездки.',
    link: '/services_page/booking_hotel',
    icon: faHotel
  },
  {
    title: 'Страхование',
    description: 'Наличие страховки означает, что Вы будете защищены в другой стране, если возникнет непредвиденная ситуация.',
    link: '/services_page/strahovka',
    icon: faShieldAlt
  },
  {
    title: 'Оформление виз',
    description: 'Наличие страховки означает, что Вы будете защищены в другой стране, если возникнет непредвиденная ситуация.',
    link: '/services/multivisa',
    icon: faHotel
  },
  {
    title: 'Оформление мультивиз',
    description: 'Мультивиза представляет собой аналог шенгенской визы. Она позволяет многократно посещение стран.',
    link: '/services/multivisa',
    icon: faHotel
  },
  // Добавьте описание остальных услуг
];

const ServicesList: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container_title}>НАШИ УСЛУГИ</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceCard_title}>
              <FontAwesomeIcon icon={service.icon} className={styles.serviceIcon} /> {/* Иконка для каждой услуги */}
              <Link className={styles.Cardtitle} href={service.link}>
                {service.title}
              </Link>
            </div>
            <p>{service.description}</p>
            <Link href={service.link} legacyBehavior>
              <a className={styles.learnMoreButton}>Подробнее</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;