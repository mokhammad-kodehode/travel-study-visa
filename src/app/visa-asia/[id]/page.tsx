import { Metadata } from 'next';
import CountryPageAsia from '@/app/components/Visa_asia_page/Visa_asia_page';
import { asiaCountries } from '@/app/data/CountryData';

/* ---------- SEO ---------- */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const country = asiaCountries.find(c => c.nameof === params.id);
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
  const country = asiaCountries.find(c => c.nameof === params.id);
  if (!country) return <div>Страна не найдена</div>;
  return <CountryPageAsia country={country} />;
}
