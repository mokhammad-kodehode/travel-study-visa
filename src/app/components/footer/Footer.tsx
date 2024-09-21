import React from 'react';
import styles from './styles.module.css'; 
import Link from 'next/link';
import Logo from '../logo/logo';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div  className={styles.footer_wrapper}>
            <div className={styles.footer_section}>

                <Link className={styles.logo} href="/">
                    <Logo /> 
                </Link>
                <p>Визовый центр</p>
                <p>+7 (495) 995-95-95</p>
            </div>
            <div className={styles.footer_section}>
                <h4>УСЛУГИ</h4>
                <ul>
                    <Link  href="/visa_page">
                        <li>Оформление виз</li> 
                    </Link>
                    <Link  href="/vnj_page">
                        <li>Оформление внж</li> 
                    </Link>
                    <Link  href="/services_page/zagran_passport">
                        <li>Оформление загранпаспорта</li> 
                    </Link>
                    <Link  href="/services_page/booking_tickets">
                        <li>Бронирование авиа и жд билетов</li> 
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
                    <Link  href="/visa_page/japan">
                        <li>Япония</li> 
                    </Link>
                    <Link  href="/visa_page/japan">
                        <li>Япония</li> 
                    </Link>
                    <li>Европа</li>
                    <li>США</li>
                    <li>Великобритания</li>
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