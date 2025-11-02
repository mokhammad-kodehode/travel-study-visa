
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Link href="/">
              <Image 
                src="/images/logo.svg" 
                alt="Visa Travels Logo" 
                width={90} 
                height={90} 
              />
          </Link>
            <div className={styles.slogan}>
              <span className={styles.brand}>Travel &amp; Study</span>
              <h2 className={styles.headline}>
                Международный центр туризма, образования и права
              </h2>
            </div>
        </div>
        <div className={styles.Header_items}>
            <div className={styles.contact}>
              <a href="tel:+7(985)779-15-55" className={styles.phone}>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} /> 
                +7(985)779-15-55
              </a>
              <div className={styles.social_icons}>
                <a href="https://t.me/travelandstudyru" aria-label="Перейти на Telegram" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
                </a>
                <a href="https://wa.me/40756504079" aria-label="Перейти в Whatsapp" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                </a>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;