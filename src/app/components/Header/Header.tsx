import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'; // Создадим отдельный файл для стилей

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
        <div className={styles.contact}>
          <a href="tel:84951183527">
            <Image 
              src="/path/to/phone-icon.png" // Замените на иконку телефона
              alt="Phone Icon" 
              width={20} 
              height={20} 
            /> 
            8 (495) 118-35-27
          </a>
        </div>
          {/* <nav className={styles.nav}>
          <Link href="/visas">Визы</Link>
          <Link href="/multivisas">Мультивизы</Link>
          <Link href="/passport">Загранпаспорт</Link>
          <Link href="/insurance">Страхование туристов</Link>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;