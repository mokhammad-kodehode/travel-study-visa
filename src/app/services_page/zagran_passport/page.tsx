import { Metadata } from 'next'
import ZagranPage from './Zagran_page'

export const metadata: Metadata = {
  title: 'Оформление загранпаспорта | Быстрое и надежное получение',
  description: 'Поможем оформить загранпаспорт быстро и без лишних проблем. Консультации, подача документов, срочное оформление.',
}

export default function Page() {
  return <ZagranPage/>
}
