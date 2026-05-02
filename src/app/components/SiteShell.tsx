'use client';

import { usePathname } from 'next/navigation';
import Header from './Header/Header';
import Navbar from './navbar/newNav';
import Footer from './footer/Footer';
import AOSInitializer from './AOSInitializer';
import CallButton from './CallButton/CallButton';
import CookieConsent from './CookieConsent/CookieConsent';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/admin');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <AOSInitializer />
      <CallButton />
      <CookieConsent />
      {children}
      <Footer />
    </>
  );
}
