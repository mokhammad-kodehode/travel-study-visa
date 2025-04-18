import { Metadata } from 'next';
import CountryPage from '@/app/components/VNJ_countrys_page/CountryPage';
import { europeCountries } from '@/app/data/CountryDataVnj';

/* ---------- SEO ---------- */
export async function generateMetadata({ params }: any): Promise<Metadata> {
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
export default function Page({ params }: any) {
  const country = europeCountries.find(c => c.nameof === params.id);
  if (!country) return <div>Страна не найдена</div>;
  return <CountryPage  country={country} />;
}
