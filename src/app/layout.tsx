
import type { Metadata } from 'next'
import Head from 'next/head';
import 'fontsource-poppins';
import 'fontsource-inter';
import './globals.css'
import Navbar from './components/navbar/navbar'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import NavbarMUI from './components/navbar/navbartwo'


export const metadata: Metadata = {
  title: 'Travel and Study',
  description: 'Оформление виз, ВНЖ и гражданство.',
  keywords: ['визовые услуги', 'ВНЖ', 'гражданство', 'путешествия', 'учеба за границей', 'Travel and Study'],
  openGraph: {
    title: 'Travel and Study',
    description: 'Оформление виз, ВНЖ и гражданство.',
    url: 'https://www.travelandstudy.ru/',
    type: 'website',
    locale: 'ru_RU', // Обозначение для российского сегмента
    images: [
      {
        url: 'https://www.travelandstudy.ru/images/logo.svg', // Абсолютный путь к логотипу
        width: 600, // Ширина изображения (необязательно, но желательно)
        height: 600, // Высота изображения
        alt: 'Логотип Travel and Study',
      },
    ],
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
        <Navbar />
        {children}
        <Footer/>
        <script src="//code.jivosite.com/widget/V03s3szzXR" async></script>
        </body>
    </html>
  )
}
