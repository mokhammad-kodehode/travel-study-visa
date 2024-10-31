
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Иконка телефона
import { faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Иконки соцсетей

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Link href="/">
              <Image 
                src="/images/logo.svg" // Замените на путь к вашему логотипу
                alt="Visa Travels Logo" 
                width={90} 
                height={90} 
              />
          </Link>
          <div className={styles.slogan}>
            ДОБРО ПОЖАЛОВАТЬ В <span>TRAVEL AND STUDY</span>
          </div>
        </div>
        <div className={styles.Header_items}>
            <Link className={styles.Header_item} href="/Gallery">
                ГАЛЛЕРЕЯ
              </Link>
            <div className={styles.contact}>
              {/* Телефон */}
              <a href="tel:+7(900)555-42-77" className={styles.phone}>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} /> 
                +7(900)555-42-77
              </a>
              {/* Социальные сети */}
              <div className={styles.social_icons}>
                <a href="https://t.me/travelandstudyru" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
                </a>
                <a href="https://wa.me/40756504079" target="_blank" rel="noopener noreferrer">
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