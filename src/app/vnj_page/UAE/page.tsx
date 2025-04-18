import { Metadata } from 'next'
import Vnj_UAE from './Vnj_UAE'

export const metadata: Metadata = {
  title: 'ВНЖ ОАЭ | Проживание и бизнес в Эмиратах',
  description: 'Оформление ВНЖ в ОАЭ для работы, бизнеса и инвесторов. Консультации, поддержка, сопровождение.',
}

export default function Page() {
  return <Vnj_UAE />
}
