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
    title: 'Оформление шенгенских визы',
    description: 'Получение шенгенской визы открывает двери в 26 стран Европы, предоставляя свободу путешествовать без границ.',
    link: '/services/multivisa'
  },
  {
    title: 'Гражданство Румынии',
    description: 'В нашем визовом центре вы можете воспользоваться специализированной услугой по оформлению гражданства Румынии.',
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
                    <h3>{service.title}</h3>
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