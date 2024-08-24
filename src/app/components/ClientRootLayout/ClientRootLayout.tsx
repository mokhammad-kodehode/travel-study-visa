'use client';

import React, { useEffect } from 'react';
import { useLoader } from '@/app/context/LoaderContext';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';
import Spinner from '../spinner/spinned';

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    // Пример установки состояния загрузки при загрузке страницы
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Симулируем задержку загрузки
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}