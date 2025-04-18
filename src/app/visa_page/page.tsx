import { Metadata } from 'next'
import Visa_page from './Visa_page'

export const metadata: Metadata = {
  title: 'Визовая поддержка | Визы в Европу, США, Великобританию, Азию',
  description: 'Поможем оформить визу в Европу, США, Великобританию и страны Азии. Полное сопровождение, консультации, срочное оформление',
}

export default function Page() {
  return <Visa_page  />
}
