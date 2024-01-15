import Image from 'next/image'
import Link from 'next/link'
import ServicesList from '../components/OurServices/OurServices';
import styles from './styles.module.css'
import 'fontsource-inter';

export default function Home() {
  return (
    <main className={styles.main}>
        <ServicesList/>
    </main>
  )
}
