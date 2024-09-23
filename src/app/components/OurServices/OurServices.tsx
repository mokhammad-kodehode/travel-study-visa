import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'; // Убедитесь, что у вас есть этот файл стилей
import Image from 'next/image';

const services = [
  {
    title: 'Умра и туры в Саудовскую Аравию',
    description: 'Мы предлагаем услуги по оформлению визы Умра и организацию незабываемых туров в Саудовскую Аравию!',
    link: '/services_page/umra',
    image: '/images/Umra.jpg' // Добавьте путь к вашему изображению
  },
  {
    title: 'Оформление загранпаспорта',
    description: 'Для быстрого оформления загранпаспорта требуется заполнение анкеты на специальном бланке.',
    link: '/services_page/zagran_passport',
    image: '/images/Pass.jpg' // Добавьте путь к вашему изображению
  },
  {
    title: 'Бронирование авиа и отелей',
    description: 'Мы поможем вам и подберем наиболее выгодные варианты!',
    link: '/services_page/booking_tickets',
    image: '/images/Booking.jpg' // Добавьте путь к вашему изображению
  },
  {
    title: 'Страхование',
    description: 'Наличие страховки означает, что Вы будете защищены в другой стране, если возникнет непредвиденная ситуация.',
    link: '/services_page/strahovka',
    image: '/images/services/insurance.jpg' // Добавьте путь к вашему изображению
  },
  {
    title: 'Оформление виз',
    description: 'Оформление визы для посещения иностранных стран.',
    link: '/services_page/visa',
    image: '/images/services/visa.jpg' // Добавьте путь к вашему изображению
  },
  {
    title: 'Оформление мультивиз',
    description: 'Мультивиза представляет собой аналог шенгенской визы. Она позволяет многократно посещение стран.',
    link: '/services_page/multivisa',
    image: '/images/services/multivisa.jpg' // Добавьте путь к вашему изображению
  },
];

const ServicesList: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container_title}>НАШИ УСЛУГИ</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceCard_header}>
              <Image 
                src={service.image} 
                alt={service.title} 
                width={400} // Задаем ширину изображения
                height={80} // Задаем высоту изображения
                className={styles.serviceImage} 
              />
            </div>
              <Link className={styles.Cardtitle} href={service.link}>
                {service.title}
              </Link>
              <p>{service.description}</p>
              <Link className={styles.learnMoreButton} href={service.link} >
                Подробнее
              </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;