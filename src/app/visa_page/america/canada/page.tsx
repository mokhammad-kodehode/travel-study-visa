import { Metadata } from 'next'
import CANADA from './Canada_page'

export const metadata: Metadata = {
  title: 'Виза в Канаду | Оформление и поддержка',
  description: 'Помогаем оформить визы в Канаду. Подготовка документов, запись на собеседование, консультации.',
}

export default function Page() {
  return <CANADA />
}
