import { Metadata } from 'next'
import Romania from './Grajdanstvo_rom_page'

export const metadata: Metadata = {
  title: 'Гражданство Румынии | Получение паспорта ЕС',
  description: 'Помогаем оформить гражданство Румынии и получить паспорт ЕС. Полное сопровождение, консультации, подача документов.',
}

export default function Page() {
  return <Romania />
}
