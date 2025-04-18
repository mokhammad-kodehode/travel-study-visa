import { Metadata } from 'next'
import KSA from './Saudi_page'

export const metadata: Metadata = {
  title: 'Виза в Саудовскую Аравию | Оформление и поддержка',
  description: 'Помогаем оформить визы в Саудовскую Аравию. Подготовка документов, запись на собеседование, консультации.',
}

export default function Page() {
  return <KSA />
}
