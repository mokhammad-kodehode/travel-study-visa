/**
 * Миграция страницы «Гражданство (главная)» в Sanity (citizenshipIndexPage).
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-citizenship-index.mts
 *
 * Идемпотентен: фиксированный _id = "citizenshipIndexPage.singleton".
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

const client = createClient({ projectId, dataset, token, apiVersion: '2024-12-01', useCdn: false });

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const DOC_ID = 'citizenshipIndexPage.singleton';

const BANNER_IMAGE_PATH = '/images/Pass.jpg';
const BANNER_IMAGE_ALT = 'Паспорта — фон страницы Гражданство';

const uid = () => randomUUID().replace(/-/g, '').slice(0, 12);

async function uploadImage(publicPath: string, alt: string, label: string) {
  const cleanPath = publicPath.startsWith('/') ? publicPath.slice(1) : publicPath;
  const fullPath = path.join(PUBLIC_DIR, cleanPath);
  try {
    const buffer = await fs.readFile(fullPath);
    const filename = path.basename(fullPath);
    const asset = await client.assets.upload('image', buffer, { filename });
    console.log(`  ✓ ${label}: ${publicPath} → asset ${asset._id}`);
    return {
      _type: 'image' as const,
      asset: { _type: 'reference' as const, _ref: asset._id },
      alt,
    };
  } catch (err) {
    console.warn(`  ! ${label}: не удалось загрузить ${publicPath} (${(err as Error).message})`);
    return undefined;
  }
}

type Span = { _type: 'span'; _key: string; text: string; marks?: string[] };
function block(...spans: Span[]) {
  return { _type: 'block', _key: uid(), style: 'normal', markDefs: [], children: spans };
}
function span(text: string, marks: string[] = []): Span {
  return { _type: 'span', _key: uid(), text, marks };
}

const description = [
  block(
    span(
      'Получение второго гражданства открывает доступ к новым возможностям: безвизовые поездки, право жить и работать в другой стране, доступ к европейской медицине, образованию и социальной системе.',
    ),
  ),
  block(
    span(
      'Мы работаем с программами репатриации и натурализации в нескольких странах. Подбираем оптимальный путь под вашу ситуацию — родословный архив, инвестиционные программы или длительное проживание.',
    ),
  ),
  block(
    span(
      'Берём на себя весь процесс: анализ документов, сбор архивных справок, перевод и нотариальное заверение, подача заявления и юридическое сопровождение до получения паспорта.',
    ),
  ),
];

async function migrate() {
  console.log(`\nМиграция citizenshipIndexPage в Sanity (project: ${projectId})\n`);

  const existing = await client.fetch<{ _id: string } | null>(`*[_id == $id][0]{ _id }`, { id: DOC_ID });

  const textFields = {
    internalName: 'Гражданство (главная)',
    bannerTitle: 'Гражданство',
    bannerSubtitle:
      'Поможем оформить второе гражданство по программам репатриации и натурализации. Travel & Study сопровождает на всех этапах — от анализа документов до получения паспорта.',
    sectionTitle: 'Оформление гражданства',
    description,
  };

  if (existing) {
    console.log('Документ уже существует. Обновляю текстовые поля (картинку оставляю как есть)...');
    await client.patch(DOC_ID).set(textFields).commit();
    console.log('\n✓ Документ обновлён.');
    return;
  }

  console.log('Документа нет, создаю новый. Загружаю картинку...');
  const bannerImage = await uploadImage(BANNER_IMAGE_PATH, BANNER_IMAGE_ALT, 'bannerImage');

  await client.create({
    _id: DOC_ID,
    _type: 'citizenshipIndexPage',
    ...textFields,
    ...(bannerImage ? { bannerImage } : {}),
  });

  console.log('\n✓ Документ создан. Открой /admin → «Страница: Гражданство (главная)».');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
