import { Metadata } from 'next';
import Home from './home';
import AdvantagesProsServer from './components/Advantage/AdvantagesProsServer';
import AdvantagesValuesServer from './components/Advantage/AdvantagesValuesServer';

export const metadata: Metadata = {
  title: 'Визовый центр Travel & Study – Визы, ВНЖ, Образование за границей',
  description:
    'Оформление виз, ВНЖ и гражданства. Образовательные программы за рубежом. Умра и туры в Саудовскую Аравию. Бронирование авиабилетов и отелей.',
};

export default function Page() {
  return (
    <Home
      advantagesSlot={<AdvantagesProsServer />}
      valuesSlot={<AdvantagesValuesServer />}
    />
  );
}
