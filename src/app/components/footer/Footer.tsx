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
                    <li>Сделать визу в Шенген</li>
                    <li>Мультивиза</li>
                    <li>Оформление загранпаспортов</li>
                    <li>Страхование</li>
                    <li>Покупка авиа билетов</li>
                    <li>Бронирование отелей</li>
                </ul>
            </div>
            <div className={styles.footer_section}>
                <h4>НАПРАВЛЕНИЕ</h4>
                <ul>
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
    </footer>
  );
};

export default Footer