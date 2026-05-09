'use client';

import { usePathname } from 'next/navigation';
import Header from './Header/Header';
import Navbar from './navbar/newNav';
import Footer from './footer/Footer';
import AOSInitializer from './AOSInitializer';
import CallButton from './CallButton/CallButton';
import CookieConsent from './CookieConsent/CookieConsent';
import type { CitizenshipListItem } from '@/sanity/adapters';

type Props = {
  children: React.ReactNode;
  citizenshipCountries?: CitizenshipListItem[];
};

export default function SiteShell({ children, citizenshipCountries = [] }: Props) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/admin');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <Navbar citizenshipCountries={citizenshipCountries} />
      <AOSInitializer />
      <CallButton />
      <CookieConsent />
      {children}
      <Footer citizenshipCountries={citizenshipCountries} />
    </>
  );
}
