'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PHONE_DISPLAY, PHONE_TEL, TELEGRAM_URL, WHATSAPP_URL } from '@/config/contacts';
import HeaderSearch from './HeaderSearch';

const isVisaRoute = (pathname: string) =>
  pathname.startsWith('/visa_page') ||
  pathname.startsWith('/visa/') ||
  pathname.startsWith('/visa-asia/');

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isVisa = isVisaRoute(pathname);

  if (!isHome && !isVisa) return null;

  return (
    <header className={styles.header}>
      <div className={`${styles.header_content} ${!isHome ? styles.compact : ''}`}>
        {isHome && (
          <div className={styles.header_row_top}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Travel & Study Logo"
                  width={72}
                  height={72}
                  priority
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
                <a href={`tel:${PHONE_TEL}`} className={styles.phone}>
                  <span className={styles.phoneIconWrap}>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                  </span>
                  {PHONE_DISPLAY}
                </a>
                <div className={styles.social_icons}>
                  <a href={TELEGRAM_URL} aria-label="Перейти на Telegram" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
                  </a>
                  <a href={WHATSAPP_URL} aria-label="Перейти в Whatsapp" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
