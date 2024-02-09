import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

const CountryVisaSelect = () => {
    return (
        <div className={styles.countrySelect}>
            <Link href="/visa_page/america">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/america.svg" alt="Флаг США" width={135} height={85} />
                    <span>Америка</span>
                </div>
            </Link>
            <Link href="/visa_page/europe">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/european-union.svg" alt="Флаг Евросоюза" width={135} height={85} />
                    <span>Европа</span>
                </div>
            </Link>
            <Link href="/visa_page/united_kingdom">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/united-kingdom.svg" alt="Флаг Великобританий" width={135} height={85} />
                    <span>Великобритания</span>
                </div>
            </Link>
            <Link href="/visa_page/japan">
                <div className={styles.countryCard}>
                    <Image className={styles.section_image} src="/images/Flags/japan.svg" alt="Флаг Японии" width={135} height={85} />
                    <span>Япония</span>
                </div>
            </Link>
        </div>
        );}

export default CountryVisaSelect;