import { Metadata } from 'next'
import Home from './home'

export const metadata: Metadata = {
  title: 'Визовый центр Travel & Study – Визы, ВНЖ, Образование за границей',
  description: 'Оформление виз, ВНЖ и гражданства. Образовательные программы за рубежом. Умра и туры в Саудовскую Аравию. Бронирование авиабилетов и отелей.',
}

export default function Page() {
  return <Home />
}

