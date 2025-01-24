'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: true, // Анимация выполняется только один раз
    });
  }, []);

  return null; // Компонент не возвращает разметку
}
