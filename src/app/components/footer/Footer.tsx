import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { PHONE_DISPLAY } from '@/config/contacts';
import type { CitizenshipListItem } from '@/sanity/adapters';

type FooterProps = {
  citizenshipCountries?: CitizenshipListItem[];
};

const Footer: React.FC<FooterProps> = ({ citizenshipCountries = [] }) => {
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
                <p>{PHONE_DISPLAY}</p>
            </div>
            <div className={styles.footer_section}>
                <h4>УСЛУГИ</h4>
                <ul>
                    <Link  href="/visa_page">
                        <li>Визовые услуги</li> 
                    </Link>
                    <Link  href="/vnj_page">
                        <li>Оформление ВНЖ</li> 
                    </Link>
                    <Link  href="/services_page/study_page">
                        <li>Образовательные программы</li> 
                    </Link>
                    <Link  href="/services_page//umra">
                        <li>Умра и туры в Саудовскую Аравию</li>
                    </Link>

                    <Link  href="/services_page/booking_tickets">
                        <li>Бронирование авиабилетов отелей</li> 
                    </Link>
                    <Link  href="/services_page/legalservices">
                        <li>Оформление загранпаспорта</li> 
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
                    <Link  href="/visa_page/asia">
                        <li>Азия</li> 
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
                <h4>ГРАЖДАНСТВО</h4>
                <ul>
                    <Link href="/grajdanstvo">
                        <li>Все программы</li>
                    </Link>
                    {citizenshipCountries.map((c) => (
                        <Link key={c.slug} href={c.pageUrl}>
                            <li>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className={styles.footer_section}>
                <h4>О КОМПАНИИ</h4>
                <ul>
                     <Link  href="/About_page">
                        <li>О нас</li>
                    </Link>
                     <Link  href="/contact_page">
                        <li>Контакты</li>
                    </Link>
                </ul>
            </div>
        </div>
        <div className={styles.footer_bottom}>
            <p>© 2024 Все права защищены.</p>
            <Link href="/Privacy_policy_page" className={styles.footer_bottom_link}>
                Политика конфиденциальности
            </Link>
        </div>
    </footer>
  );
};

export default Footer