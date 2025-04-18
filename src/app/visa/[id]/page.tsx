import { Metadata } from 'next'
import CountryPage from '@/app/components/Visa_EU_page/Visa_EU_page'
import { europeCountries } from '@/app/data/CountryData'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const country = europeCountries.find(c => c.nameof === params.id)

  if (!country) {
    return {
      title: 'Оформление виз | Travel and Study',
      description: 'Получите визу в любую страну Европы. Полное сопровождение, документы, консультации.'
    }
  }

  return {
    title: `Виза в ${country.name_two} | Оформление и поддержка`,
    description: `Помогаем оформить визы в ${country.name_two}. Подготовка документов, запись на собеседование, консультации.`
  }
}

// 👇 Server Component — передаёт props в Client Component
export default function Page({ params }: { params: { id: string } }) {
  const country = europeCountries.find(c => c.nameof === params.id)

  if (!country) return <div>Страна не найдена</div>

  return <CountryPage country={country} />
}