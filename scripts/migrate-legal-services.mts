/**
 * Создаёт singleton-документ "Юридическая поддержка" в Sanity.
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-legal-services.mts
 *
 * Идемпотентен: если документ уже есть — обновляет картинку и поля. Тексты не перезаписывает,
 * чтобы не потерять правки клиента (только заполняет пустые поля).
 */

import { createClient } from '@sanity/client';
import { promises as fs } from 'fs';
import path from 'path';
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

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const DOC_ID = 'legalServicesPage.main';

const k = () => randomUUID().replace(/-/g, '').slice(0, 12);

async function uploadImage(publicPath: string) {
  const cleanPath = publicPath.startsWith('/') ? publicPath.slice(1) : publicPath;
  const fullPath = path.join(PUBLIC_DIR, cleanPath);
  try {
    const buffer = await fs.readFile(fullPath);
    const filename = path.basename(fullPath);
    const asset = await client.assets.upload('image', buffer, { filename });
    return {
      _type: 'image' as const,
      asset: { _type: 'reference' as const, _ref: asset._id },
    };
  } catch (err) {
    console.warn(`  ! не удалось загрузить ${publicPath} (${(err as Error).message})`);
    return undefined;
  }
}

// Portable Text с двумя жирными словами — соответствует исходной разметке.
const description = [
  {
    _type: 'block',
    _key: k(),
    style: 'normal',
    markDefs: [],
    children: [
      { _type: 'span', _key: k(), text: 'Мы предоставляем полный спектр юридических услуг для частных лиц и компаний — как ', marks: [] },
      { _type: 'span', _key: k(), text: 'внутри страны', marks: ['strong'] },
      { _type: 'span', _key: k(), text: ', так и при решении ', marks: [] },
      { _type: 'span', _key: k(), text: 'международных вопросов', marks: ['strong'] },
      { _type: 'span', _key: k(), text: ', связанных с переездом, обучением, инвестированием и ведением бизнеса за рубежом. Наша команда юристов и консультантов помогает клиентам грамотно оформить документы, защитить свои интересы и реализовать личные и профессиональные цели в соответствии с законодательством России и других стран.', marks: [] },
    ],
  },
];

const areas = [
  {
    _type: 'area',
    _key: k(),
    title: 'Иммиграционное право',
    bullets: [
      'Оформление ВНЖ и второго гражданства',
      'Разрешения на работу',
      'Сопровождение иммиграционных и натурализационных процедур',
    ],
  },
  {
    _type: 'area',
    _key: k(),
    title: 'Визовое сопровождение',
    bullets: [
      'Подготовка документов для виз всех категорий',
      'Апелляции и работа со сложными случаями',
      'Консультации по требованиям разных стран',
    ],
  },
  {
    _type: 'area',
    _key: k(),
    title: 'Документы и легализация',
    bullets: [
      'Загранпаспорт и персональные документы в кратчайшие сроки',
      'Переводы с нотариальным заверением и присяжные переводы',
      'Апостиль и консульская легализация, доверенности и соглашения',
    ],
  },
  {
    _type: 'area',
    _key: k(),
    title: 'Образовательное право и обучение',
    bullets: [
      'Договоры с зарубежными учебными заведениями',
      'Студенческие визы и пакет документов',
      'Нострификация дипломов',
    ],
  },
  {
    _type: 'area',
    _key: k(),
    title: 'Бизнес и инвестиции',
    bullets: [
      'Открытие компаний в РФ и за рубежом',
      'Инвестиционные соглашения',
      'Проверка недвижимости и сделок',
    ],
  },
  {
    _type: 'area',
    _key: k(),
    title: 'Правовая поддержка внутри страны',
    bullets: [
      'Регистрация и ликвидация организаций',
      'Договоры, жалобы и обращения',
      'Представление интересов в госорганах',
    ],
  },
];

async function migrate() {
  console.log(`\nМиграция страницы юридической поддержки в Sanity (project: ${projectId})\n`);

  const existing = await client.fetch<{ _id: string; bannerImage?: unknown } | null>(
    `*[_id == $id][0]{ _id, bannerImage }`,
    { id: DOC_ID }
  );

  // Загружаем фон, если документа ещё нет или фон отсутствует.
  let bannerImage: unknown | undefined;
  if (!existing || !existing.bannerImage) {
    bannerImage = await uploadImage('/images/Pass.jpg');
  }

  if (existing) {
    const patch: Record<string, unknown> = {};
    if (bannerImage) patch.bannerImage = bannerImage;
    if (Object.keys(patch).length > 0) {
      await client.patch(DOC_ID).set(patch).commit();
      console.log('↻ обновлено (фон баннера дозалит)');
    } else {
      console.log('✓ документ уже существует, ничего не меняем');
    }
    return;
  }

  await client.create({
    _id: DOC_ID,
    _type: 'legalServicesPage',
    internalName: 'Юридическая поддержка',
    bannerImage,
    bannerTitle: 'Юридическая поддержка',
    bannerSubtitle:
      'Мы предоставляем полный спектр юридических услуг для частных лиц и компаний — как внутри страны, так и при решении международных вопросов, связанных с переездом, обучением, инвестированием и ведением бизнеса за рубежом.',
    description,
    areasTitle: 'Основные направления юридической поддержки',
    areasSubtitle: 'Нажмите на раздел, чтобы раскрыть список услуг',
    areas,
    calloutTitle: 'Комплексный подход',
    calloutText:
      'От первичной консультации и подготовки документов до представления ваших интересов в госорганах и международных структурах. Наша цель — юридическая точность и ваше спокойствие.',
    calloutCtaLabel: 'Получить консультацию',
  });

  console.log('✓ создан документ legalServicesPage.main');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
