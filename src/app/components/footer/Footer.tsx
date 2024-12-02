import React from 'react';
import styles from './styles.module.css'; 
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div  className={styles.footer_wrapper}>
            <div className={styles.footer_section}>
            <Link href="/">
                    <Image 
                        src="/images/logo.svg" 
                        alt="Company Logo" 
                        width={100} 
                        height={100} 
                    />
            </Link>
                <p>Визовый центр</p>
                <p>+7(900)555-42-77</p>
            </div>
            <div className={styles.footer_section}>
                <h4>УСЛУГИ</h4>
                <ul>
                    <Link  href="/visa_page">
                        <li>Визовые услуги</li> 
                    </Link>
                    <Link  href="/vnj_page">
                        <li>Оформление внж</li> 
                    </Link>
                    <Link  href="/services_page/study_page">
                        <li>Образовательные программы</li> 
                    </Link>
                    <Link  href="/services_page/zagran_passport">
                        <li>Оформление загранпаспорта</li> 
                    </Link>

                    <Link  href="/services_page/booking_hotel">
                        <li>Бронирование отелей</li> 
                    </Link>
                    <Link  href="/services_page/strahovka">
                        <li>Страхование</li> 
                    </Link>
                </ul>
            </div>
            <div className={styles.footer_section}>
                <h4>НАПРАВЛЕНИЕ</h4>
                <ul>
                    <Link  href="/visa_page/europe">
                        <li>Европа</li> 
                    </Link>
                    <Link  href="/visa_page/america">
                        <li>Америка</li> 
                    </Link>
                    <Link  href="/visa_page/saudi_arabia">
                        <li>Саудовская Аравия</li> 
                    </Link>
                    <Link  href="/visa_page/united_kingdom">
                        <li>Великобритания</li> 
                    </Link>
                </ul>
            </div>
            <div className={styles.footer_section}>
                <h4>О КОМПАНИИ</h4>
                <ul>
                    <li>О нас</li>
                    <li>Контакты</li>
                </ul>
            </div>  
        </div>
        <div className={styles.footer_bottom}>
            <p>© 2024 Все права защищены.</p>
            <Link legacyBehavior href="/Privacy_policy_page">
                <a className={styles.footer_bottom_link}>Политика конфиденциальности</a>
            </Link>
        </div>
    </footer>
  );
};

export default Footer