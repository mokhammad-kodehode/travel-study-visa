
import type { Metadata } from 'next'
import 'fontsource-poppins';
import 'fontsource-inter';
import './globals.css'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/newNav';
import AOSInitializer from './components/AOSInitializer';
import CallButton from './components/CallButton/CallButton';
import CookieConsent from './components/CookieConsent/CookieConsent';
import { SITE_URL } from '@/config/contacts';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Travel and Study',
  description: 'Оформление виз, ВНЖ и гражданство.',
  keywords: ['визовые услуги', 'ВНЖ', 'гражданство', 'путешествия', 'учеба за границей', 'Travel and Study'],
  openGraph: {
    title: 'Travel and Study',
    description: 'Оформление виз, ВНЖ и гражданство.',
    url: SITE_URL,
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/logo.svg',
        width: 600,
        height: 600,
        alt: 'Логотип Travel and Study',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body >
        <Header/>
        <Navbar/>
        <AOSInitializer />
        <CallButton /> 
        <CookieConsent />
        {children}
        <Footer/>
        <script src="//code.jivosite.com/widget/V03s3szzXR" async></script>
        </body>
    </html>
  )
}
