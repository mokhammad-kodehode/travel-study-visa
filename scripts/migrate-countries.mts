/**
 * Миграция стран из src/app/data/CountryData.ts в Sanity.
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-countries.mts
 *
 * Идемпотентен: если документ с таким slug уже есть — пропускаем.
 */

import { createClient } from '@sanity/client';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import {
  europeCountries,
  asiaCountries,
  AmericaCountries,
  type CountryData,
} from '../src/app/data/CountryData.ts';

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

type Region = 'europe' | 'asia' | 'america';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

const all: Array<{ data: CountryData; region: Region }> = [
  ...europeCountries.map((c) => ({ data: c, region: 'europe' as Region })),
  ...asiaCountries.map((c) => ({ data: c, region: 'asia' as Region })),
  ...AmericaCountries.map((c) => ({ data: c, region: 'america' as Region })),
];

async function uploadImage(publicPath: string | undefined, label: string) {
  if (!publicPath) return undefined;
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
    console.warn(`  ! ${label}: не удалось загрузить ${publicPath} (${(err as Error).message})`);
    return undefined;
  }
}

function collectFeatures(c: CountryData): string[] {
  return [
    c.feature_one,
    c.feature_two,
    c.feature_three,
    c.feature_four,
    c.feature_five,
    c.feature_six,
  ]
    .map((f) => (f ?? '').trim())
    .filter(Boolean);
}

// Превращает plain-text в Portable Text — массив блоков, по абзацу на блок.
function textToPortableText(text: string) {
  const trimmed = (text ?? '').trim();
  if (!trimmed) return [];
  const paragraphs = trimmed.split(/\n\s*\n/).filter(Boolean);
  return paragraphs.map((paragraph) => ({
    _type: 'block',
    _key: randomUUID().replace(/-/g, '').slice(0, 12),
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: randomUUID().replace(/-/g, '').slice(0, 12),
        text: paragraph.trim(),
        marks: [],
      },
    ],
  }));
}

function collectDescription(c: CountryData) {
  // Используем feature_seven как изначальный source текста (так было в старом коде).
  const text = typeof c.description === 'string' && c.description ? c.description : (c.feature_seven ?? '');
  return textToPortableText(text);
}

function buildBannerTitle(c: CountryData): string {
  return `Оформление визы в ${c.name_two}`;
}

function buildBannerSubtitle(c: CountryData): string {
  return `Оформим нужный тип визы в ${c.name_two}.\nСпециализируемся на визовых вопросах любой сложности`;
}

async function migrate() {
  console.log(`\nМиграция ${all.length} стран в Sanity (project: ${projectId})\n`);

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const { data, region } of all) {
    const slug = data.nameof;
    const docId = `country.${slug}`;

    const existing = await client.fetch(`*[_id == $id][0]{_id}`, { id: docId });

    process.stdout.write(`  → ${data.name.padEnd(20)} [${region}] `);

    try {
      if (existing) {
        // Получаем текущее состояние документа — нужно понять, есть ли уже bannerImage.
        const current = await client.fetch<{ bannerImage?: unknown; heroImage?: unknown }>(
          `*[_id == $id][0]{ bannerImage, heroImage }`,
          { id: docId }
        );

        const patch: Record<string, unknown> = {
          description: collectDescription(data),
          features: collectFeatures(data),
          bannerTitle: buildBannerTitle(data),
          bannerSubtitle: buildBannerSubtitle(data),
        };

        // Если bannerImage ещё не загружен — переносим из heroImage (или с нуля заливаем фон).
        if (!current?.bannerImage) {
          if (current?.heroImage) {
            patch.bannerImage = current.heroImage;
          } else {
            const banner = await uploadImage(data.backgroundImgUrl, 'bannerImage');
            if (banner) patch.bannerImage = banner;
          }
        }

        await client.patch(docId).set(patch).commit();
        console.log('↻ обновлено');
        skipped++;
        continue;
      }

      const [flag, bannerImage, heroImage] = await Promise.all([
        uploadImage(data.flagUrl, 'flag'),
        uploadImage(data.backgroundImgUrl, 'bannerImage'),
        uploadImage(data.backgroundImgUrl, 'heroImage'),
      ]);

      await client.create({
        _id: docId,
        _type: 'country',
        name: data.name,
        nameAccusative: data.name_two,
        slug: { _type: 'slug', current: slug },
        region,
        flag,
        bannerImage,
        heroImage,
        bannerTitle: buildBannerTitle(data),
        bannerSubtitle: buildBannerSubtitle(data),
        description: collectDescription(data),
        features: collectFeatures(data),
      });

      console.log('✓');
      created++;
    } catch (err) {
      console.log(`✗ ${(err as Error).message}`);
      failed++;
    }
  }

  console.log('\n--- Итог ---');
  console.log(`Создано: ${created}`);
  console.log(`Пропущено (уже было): ${skipped}`);
  console.log(`Ошибок: ${failed}`);
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
