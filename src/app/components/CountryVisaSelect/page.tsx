import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

const CountryVisaSelect = () => {
    return (
        <div className={styles.countrySelect}>
            <Link href="/visa_page/america">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/america.svg" alt="Флаг США" width={115} height={65} />
                    <span>Америка</span>
                </div>
            </Link>
            <Link href="/visa_page/europe">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/european-union.svg" alt="Флаг Евросоюза" width={115} height={65} />
                    <span>Европа</span>
                </div>
            </Link>
            <Link href="/visa_page/united_kingdom">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/united-kingdom.svg" alt="Флаг Великобританий" width={115} height={65} />
                    <span>Великобритания</span>
                </div>
            </Link>
            <Link href="/visa_page/japan">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/japan.svg" alt="Флаг Японии" width={115} height={65} />
                    <span>Япония</span>
                </div>
            </Link>
            <Link href="/visa_page/saudi_arabia">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/saudi.svg" alt="Флаг Саудовской Аравии" width={125} height={70} />
                    <span>Саудовская Аравия</span>
                </div>
            </Link>
        </div>
        );}

export default CountryVisaSelect;