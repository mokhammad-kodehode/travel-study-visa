import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'; // Создадим отдельный файл для стилей

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
            <Image 
              src="/images/logo.svg" // Замените на путь к вашему логотипу
              alt="Visa Travels Logo" 
              width={150} 
              height={150} 
            />
        </Link>
        <div className={styles.slogan}>
          ШЕНГЕНСКИЕ ВИЗЫ <span>БЫСТРО И НЕДОРОГО</span>
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
      <nav className={styles.nav}>
        <Link href="/visas"><a>Визы</a></Link>
        <Link href="/multivisas"><a>Мультивизы</a></Link>
        <Link href="/passport"><a>Загранпаспорт</a></Link>
        <Link href="/insurance"><a>Страхование туристов</a></Link>
      </nav>
    </header>
  );
};

export default Header;