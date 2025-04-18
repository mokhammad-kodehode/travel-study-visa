import { Metadata } from 'next'
import UmraPage from './Umra_page'

export const metadata: Metadata = {
  title: 'Умра и туры в Саудовскую Аравию | Организация поездок',
  description: 'Организуем поездки на Умру и туры в Саудовскую Аравию. Визовая поддержка, бронирование отелей и билетов.',
}

export default function Page() {
  return <UmraPage/>
}
