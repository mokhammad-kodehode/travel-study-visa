
import { Metadata } from 'next'
import styles from './styles.module.css'
import 'fontsource-inter';
import Contact from '../components/contact/Contact';



export const metadata: Metadata = {
  title: 'Контакты Travel & Study | Свяжитесь с нами',
  description: 'Контактная информация визового центра Travel & Study. Адрес, телефон, WhatsApp, email. Консультации и запись на прием.',
}


export default function Contact_Page() {
  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={styles.banner_container}>
          <Contact/>
        </div>
      </section>
    </main>
  );
}