import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'; // Убедитесь, что у вас есть этот файл стилей

const services = [
  {
    title: 'Оформление загранпаспорта',
    description: 'Для быстрого оформления загранпаспорта требуется заполнение анкеты на специальном бланке.',
    link: '/services_page/zagran_passport'
  },
  {
    title: 'Бронирование авиа и ж\д билетов',
    description: 'Мы поможем вам и подберем наиболее выгодные варианты!',
    link: '/services/multivisa'
  },
  {
    title: 'Бронирование отелей',
    description: 'Подберем идеальный отель для отдыха или рабочей поездки.',
    link: '/services_page/romanian-citizenship'
  },
  {
    title: 'Оформление загранпаспорта',
    description: 'Для быстрого оформления загранпаспорта требуется заполнение анкеты на специальном бланке.',
    link: '/services_page/romanian-citizenship'
  },
  {
    title: 'Страхование',
    description: 'Наличие страховки означает, что Вы будете защищены в другой стране, если возникнет непредвиденная ситуация.',
    link: '/services/multivisa'
  },
  {
    title: 'Оформление мультивиз',
    description: 'Мультивиза представляет собой аналог шенгенской визы. Она позволяет многократно посещение стран.',
    link: '/services/multivisa'
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
                <Link className={styles.Cardtitle} href={service.link} >
                    {service.title}
                </Link>
                    <p>{service.description}</p>
                </div>
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