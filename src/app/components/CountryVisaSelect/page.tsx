import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

const CountryVisaSelect = () => {
    return (
        <div className={styles.countrySelect}>
            <Link href="/america">
                <div className={styles.countryCard}>
                    <Image src="/images/Flags/america.svg" alt="Флаг США" width={135} height={85} />
                    <span>Америка</span>
                </div>
            </Link>
            <Link href="/europe">
                <div className={styles.countryCard}>
                    <Image src="/images/Flags/european-union.svg" alt="Флаг Евросоюза" width={135} height={85} />
                    <span>Европа</span>
                </div>
            </Link>
            <Link href="/united-kingdom">
                <div className={styles.countryCard}>
                    <Image src="/images/Flags/united-kingdom.svg" alt="Флаг Великобританий" width={135} height={85} />
                    <span>Великобритания</span>
                </div>
            </Link>
            <Link href="/japan">
                <div className={styles.countryCard}>
                    <Image src="/images/Flags/japan.svg" alt="Флаг Японии" width={135} height={85} />
                    <span>Япония</span>
                </div>
            </Link>
        </div>
        );}

export default CountryVisaSelect;