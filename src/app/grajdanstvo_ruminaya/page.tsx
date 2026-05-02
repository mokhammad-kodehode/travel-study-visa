import { Metadata } from 'next';
import Romania from './Grajdanstvo_rom_page';
import AdvantagesProsServer from '@/app/components/Advantage/AdvantagesProsServer';

export const metadata: Metadata = {
  title: 'Гражданство Румынии | Получение паспорта ЕС',
  description: 'Помогаем оформить гражданство Румынии и получить паспорт ЕС. Полное сопровождение, консультации, подача документов.',
};

export default function Page() {
  return <Romania advantagesSlot={<AdvantagesProsServer />} />;
}
