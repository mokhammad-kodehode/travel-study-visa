import { Metadata } from 'next'
import USA from './Usa_page'

export const metadata: Metadata = {
  title: 'Виза в США| Оформление и поддержка',
  description: 'Помогаем оформить визы в США. Подготовка документов, запись на собеседование, консультации.',
}

export default function Page() {
  return <USA />
}
