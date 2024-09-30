
import type { Metadata } from 'next'
import 'fontsource-poppins';
import 'fontsource-inter';
import './globals.css'
import Navbar from './components/navbar/navbar'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';

export const metadata: Metadata = {
  title: 'Travel and Study',
  description: 'Оформдение виз, внж и гражданство.',
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
        <script src="//code.jivosite.com/widget/V03s3szzXR" async></script>
        </body>
    </html>
  )
}
