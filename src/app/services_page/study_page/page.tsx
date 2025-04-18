import { Metadata } from 'next'
import StudyPage from './Study_page'

export const metadata: Metadata = {
  title: 'Образование за границей | Учеба в Европе и США',
  description: 'Подбор и оформление учебных программ в Европе, США и других странах. Студенческие визы, помощь с поступлением.',
}

export default function Page() {
  return <StudyPage/>
}
