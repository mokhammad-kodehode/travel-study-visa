/**
 * Создаёт 2 документа advantagesSection в Sanity:
 *   - slug='values'      → блок «Наши ценности» (компонент Advantages)
 *   - slug='advantages'  → блок «Наши преимущества» (компонент AdvantagesTwo)
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-advantages.mts
 *
 * Идемпотентен: если документ есть — не перезаписывает (чтобы не затереть правки клиента).
 */

import { createClient } from '@sanity/client';
import { randomUUID } from 'crypto';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error('Missing env: NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET / SANITY_API_WRITE_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-12-01',
  useCdn: false,
});

const k = () => randomUUID().replace(/-/g, '').slice(0, 12);

const valuesDoc = {
  _id: 'advantagesSection.values',
  _type: 'advantagesSection',
  slug: { _type: 'slug', current: 'values' },
  title: 'Наши ценности',
  cards: [
    {
      _type: 'card',
      _key: k(),
      title: 'Оплата',
      description: 'Предлагаем различные способы оплаты услуг. Оплату можно произвести безналичным расчётом или наличными. Каждый клиент получает чек и договор, подтверждающий безопасность и законность сделки.',
    },
    {
      _type: 'card',
      _key: k(),
      title: 'Надежность и Гарантии',
      description: 'Прозрачные условия — без скрытых платежей и сложных формулировок. Мы обеспечиваем защиту персональных данных и сопровождаем клиентов на каждом этапе — от первой консультации до результата. Репутация, честность и доверие — основа нашей работы.',
    },
    {
      _type: 'card',
      _key: k(),
      title: 'Документы',
      description: 'Мы помогаем получить большинство необходимых документов для путешествий, обучения или переезда за рубеж. Наши специалисты проверяют корректность заполнения, снижают риск ошибок и отказов при подаче заявлений.',
    },
    {
      _type: 'card',
      _key: k(),
      title: 'Широкий спектр услуг',
      description: 'Оформляем визы в более чем 50 стран — туристические, деловые, студенческие и рабочие. Помогаем в сложных случаях, включая повторные обращения после отказов. Предоставляем клиентам актуальную информацию о требованиях и документах на каждом этапе оформления.',
    },
  ],
};

const advantagesDoc = {
  _id: 'advantagesSection.advantages',
  _type: 'advantagesSection',
  slug: { _type: 'slug', current: 'advantages' },
  title: 'Наши преимущества',
  cards: [
    {
      _type: 'card',
      _key: k(),
      title: 'Эффективность и удобство',
      description: 'Оформляем визы быстро и без лишней бюрократии. Наш офис удобно расположен, а также доступно дистанционное обслуживание. Предлагаем полный спектр услуг — от консультации и перевода документов до страхования и бронирования билетов.',
    },
    {
      _type: 'card',
      _key: k(),
      title: 'Профессионализм и опыт',
      description: 'Высокий уровень квалификации специалистов с опытом более 10 лет в сфере визового и юридического сопровождения, а также индивидуальный подход к каждому клиенту, учитывая его уникальные потребности и обстоятельства.',
    },
    {
      _type: 'card',
      _key: k(),
      title: 'Международное мышление',
      description: 'Мы работаем не только с гражданами России, но и с иностранными клиентами, соблюдая международные стандарты, уважая культурные различия и преодолевая языковые барьеры',
    },
    {
      _type: 'card',
      _key: k(),
      title: 'Доверие клиентов',
      description: 'Более 1000 довольных клиентов, многие обращаются повторно. Наши клиенты отмечают профессионализм, оперативность и внимательное отношение. Большинство новых обращений поступают по рекомендациям друзей и знакомых — это лучшая оценка нашей работы.',
    },
  ],
};

async function migrate() {
  console.log(`\nМиграция блоков преимуществ в Sanity (project: ${projectId})\n`);

  for (const doc of [valuesDoc, advantagesDoc]) {
    const existing = await client.fetch(`*[_id == $id][0]{_id}`, { id: doc._id });
    if (existing) {
      console.log(`✓ ${doc.title}: документ уже существует, пропуск`);
    } else {
      await client.create(doc);
      console.log(`✓ ${doc.title}: создан (${doc._id})`);
    }
  }

  console.log('\nГотово.');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
