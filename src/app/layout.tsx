
import type { Metadata } from 'next'
import 'fontsource-poppins';
import 'fontsource-inter';
import './globals.css'
import Navbar from './components/navbar/navbar'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';

export const metadata: Metadata = {
  title: 'Travel and Study',
  description: 'Visa project',
}

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
        {children}
        <Footer/>
        </body>
    </html>
  )
}
