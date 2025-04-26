import { Metadata } from 'next';
import CountryPage from '@/app/components/Visa_EU_page/Visa_EU_page';
import { europeCountries } from '@/app/data/CountryData';


type PageParams = {
  params: { id: string }   // структура динамического сегмента [id]
};

/* ---------- SEO ---------- */
export async function generateMetadata(
  { params }: PageParams      // ← используем свой тип
): Promise<Metadata> {
  const country = europeCountries.find(c => c.nameof === params.id);

  if (!country) {
    return {
      title:       'Оформление виз | Travel and Study',
      description: 'Получите визу в любую страну Азии. Полное сопровождение, документы, консультации.',
    };
  }
  return {
    title:       `Виза в ${country.name_two} | Оформление и поддержка`,
    description: `Помогаем оформить визы в ${country.name_two}. Подготовка документов, запись на собеседование, консультации.`,
  };
}

/* ---------- Страница ---------- */
export default function Page({ params }: PageParams) {
  const country = europeCountries.find(c => c.nameof === params.id);
  if (!country) return <div>Страна не найдена</div>;

  return <CountryPage country={country} />
}