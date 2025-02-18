import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

const CountryVisaSelect = () => {
    return (
        <div className={styles.countrySelect}>
            <Link href="/visa_page/america">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/america.svg" alt="Флаг США" width={100} height={55} />
                    <span>Америка</span>
                </div>
            </Link>
            <Link href="/visa_page/europe">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/european-union.svg" alt="Флаг Евросоюза" width={100} height={55} />
                    <span>Европа</span>
                </div>
            </Link>
            <Link href="/visa_page/united_kingdom">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/united-kingdom.svg" alt="Флаг Великобританий" width={100} height={55} />
                    <span>Великобритания</span>
                </div>
            </Link>
            {/* <Link href="/visa_page/japan">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/japan.svg" alt="Флаг Японии" width={115} height={55} />
                    <span>Япония</span>
                </div>
            </Link> */}
            <Link href="/visa_page/asia">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/asia.svg" alt="Флаг Азии" width={105} height={55} />
                    <span>Азия</span>
                </div>
            </Link>
        </div>
        );}

export default CountryVisaSelect;