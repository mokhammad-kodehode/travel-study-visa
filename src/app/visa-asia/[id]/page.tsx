import type { Metadata } from 'next';
import CountryPageAsia   from './Visa_asia_page';
import { asiaCountries } from '@/app/data/CountryData';

/** минимальный тип, который точно расширяет внутренний PageProps */
type Props = {
  params:        Record<string, string>;          // id, slug, …
  searchParams?: Record<string, string | string[] | undefined>;
};

/* ---------- SEO ---------- */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const country = asiaCountries.find(c => c.nameof === params.id);

  if (!country) {
    return {
      title:       'Оформление виз | Travel and Study',
      description: 'Получите визу в любую страну Азии. Полное сопровождение, документы, консультации.'
    };
  }

  return {
    title:       `Виза в ${country.name_two} | Оформление и поддержка`,
    description: `Помогаем оформить визы в ${country.name_two}. Подготовка документов, запись на собеседование, консультации.`
  };
}

/* ---------- Страница ---------- */
export default function Page({ params }: Props) {
  const country = asiaCountries.find(c => c.nameof === params.id);

  if (!country) return <div>Страна не найдена</div>;

  return <CountryPageAsia country={country} />;
}
