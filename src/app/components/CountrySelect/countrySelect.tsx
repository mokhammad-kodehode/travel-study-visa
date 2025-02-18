import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { CountryDataVNJ } from '@/app/data/CountryDataVnj';


interface CountryListProps {
    countries: CountryDataVNJ[];
  }

const CountryVNJ: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <div className={styles.countryList}>
      {countries.map(country => (
        <Link href={country.pageUrl} key={country.name}>
          <div className={styles.countryItem}>
            <Image src={country.flagUrl} alt={`Флаг ${country.name}`} width={54} height={35} />
            <span>{country.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryVNJ;