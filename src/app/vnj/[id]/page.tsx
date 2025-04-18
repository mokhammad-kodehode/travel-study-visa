import { Metadata } from 'next'
import CountryPage from './CountryPage'
import { europeCountries } from '@/app/data/CountryDataVnj'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const countryData = europeCountries.find(c => c.nameof.toLowerCase() === params.id.toLowerCase())

  if (!countryData) {
    return {
      title: 'Вид на жительство | Travel and Study',
      description: 'Оформление вида на жительство за границей. Консультации, документы, сопровождение.',
    }
  }

  const seoData: Record<string, { title: string, description: string }> = {
    bulgaria: {
      title: 'ВНЖ Болгарии | Оформление и преимущества',
      description: 'Поможем получить вид на жительство в Болгарии. Полное сопровождение, подготовка документов.',
    },
    spain: {
      title: 'ВНЖ Испании | Легальное проживание в ЕС',
      description: 'Оформление ВНЖ в Испании. Консультации, помощь в сборе документов и подача заявки.',
    },
    france: {
      title: 'ВНЖ Франции | Оформление для жизни и бизнеса',
      description: 'Помощь в получении ВНЖ во Франции. Подготовка документов, сопровождение и консультации.',
    },
  }

  return seoData[countryData.nameof] || {
    title: `ВНЖ ${countryData.name} | Travel and Study`,
    description: `Оформление ВНЖ в ${countryData.name}. Консультации, подготовка документов, сопровождение.`,
  }
}

export default function Page() {
  return <CountryPage />
}