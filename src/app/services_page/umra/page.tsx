import { Metadata } from 'next';
import UmraPage from './Umra_page';
import AdvantagesValuesServer from '@/app/components/Advantage/AdvantagesValuesServer';

export const metadata: Metadata = {
  title: 'Умра и туры в Саудовскую Аравию | Организация поездок',
  description: 'Организуем поездки на Умру и туры в Саудовскую Аравию. Визовая поддержка, бронирование отелей и билетов.',
};

export default function Page() {
  return <UmraPage valuesSlot={<AdvantagesValuesServer />} />;
}
