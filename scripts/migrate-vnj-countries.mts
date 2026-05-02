/**
 * Миграция VNJ-стран из src/app/data/CountryDataVnj.ts в Sanity (тип vnjCountry).
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-vnj-countries.mts
 *
 * Идемпотентен: если документ с таким slug уже есть — обновляем тексты, картинки не перезаливаем.
 */

import { createClient } from '@sanity/client';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import {
  europeCountries,
  type CountryDataVNJ,
} from '../src/app/data/CountryDataVnj.ts';

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

// Какую картинку использовать для секции (под фото). Если в public/ нет _two — fallback на тот же фон.
const heroImageOverrides: Record<string, string> = {
  spain: '/images/countries/spain_two.jpg',
  bulgaria: '/images/countries/Bulgaria_two.jpg',
  france: '/images/countries/France.jpg',
};

// Падежи (массив их не содержит во всех формах нужных схеме).
const cases: Record<string, { accusative: string; genitive: string }> = {
  spain: { accusative: 'Испанию', genitive: 'Испании' },
  bulgaria: { accusative: 'Болгарию', genitive: 'Болгарии' },
  france: { accusative: 'Францию', genitive: 'Франции' },
};

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

function collectFeatureFields(c: CountryDataVNJ) {
  return {
    featureLiving: (c.feature_one ?? '').trim(),
    featureTravel: (c.feature_two ?? '').trim(),
    featureEducation: (c.feature_three ?? '').trim(),
    featureBusiness: (c.feature_four ?? '').trim(),
    featureTaxes: (c.feature_five ?? '').trim(),
    featureProperty: (c.feature_six ?? '').trim(),
    featureCitizenship: (c.feature_seven ?? '').trim(),
  };
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

// Дефолтные карточки «Возможные варианты получения ВНЖ» для каждой страны.
const defaultOptions = (genitive: string) => [
  {
    _type: 'option',
    _key: randomUUID().replace(/-/g, '').slice(0, 12),
    title: 'Открытие торгового представительства',
    description: 'До 2 месяцев. Подходит для собственников ООО, действующего не менее 2 лет на территории России.',
  },
  {
    _type: 'option',
    _key: randomUUID().replace(/-/g, '').slice(0, 12),
    title: 'Трудоустройство в действующую компанию',
    description: `Если у вас нет собственного ООО, вы можете быть оформлены наемным сотрудником в действующую организацию, которая уже имеет иностранное представительство на территории ${genitive}.`,
  },
];

async function migrate() {
  console.log(`\nМиграция ${europeCountries.length} VNJ-стран в Sanity (project: ${projectId})\n`);

  let created = 0;
  let updated = 0;
  let failed = 0;

  for (const data of europeCountries) {
    const slug = data.nameof;
    const docId = `vnjCountry.${slug}`;
    const cs = cases[slug] ?? { accusative: data.name_two, genitive: data.name_three };

    const bannerTitle = `Оформление ВНЖ в ${cs.accusative}`;
    const bannerSubtitle = 'Ваш путь к европейскому ВНЖ начинается здесь — профессиональная помощь в оформлении документов';

    process.stdout.write(`  → ${data.name.padEnd(15)} `);

    try {
      const existing = await client.fetch(`*[_id == $id][0]{_id}`, { id: docId });

      const description = textToPortableText(typeof data.description === 'string' ? data.description : '');
      const options = defaultOptions(cs.genitive);

      if (existing) {
        await client
          .patch(docId)
          .set({
            name: data.name,
            nameAccusative: cs.accusative,
            nameGenitive: cs.genitive,
            bannerTitle,
            bannerSubtitle,
            description,
            options,
            ...collectFeatureFields(data),
          })
          .unset(['features'])
          .commit();
        console.log('↻ обновлено (тексты)');
        updated++;
        continue;
      }

      const [flag, bannerImage, heroImage] = await Promise.all([
        uploadImage(data.flagUrl, 'flag'),
        uploadImage(data.backgroundImgUrl, 'bannerImage'),
        uploadImage(heroImageOverrides[slug] ?? data.backgroundImgUrl, 'heroImage'),
      ]);

      await client.create({
        _id: docId,
        _type: 'vnjCountry',
        name: data.name,
        slug: { _type: 'slug', current: slug },
        nameAccusative: cs.accusative,
        nameGenitive: cs.genitive,
        flag,
        bannerTitle,
        bannerSubtitle,
        bannerImage,
        heroImage,
        description,
        options,
        ...collectFeatureFields(data),
      });

      console.log('✓ создано');
      created++;
    } catch (err) {
      console.log(`✗ ${(err as Error).message}`);
      failed++;
    }
  }

  console.log('\n--- Итог ---');
  console.log(`Создано:   ${created}`);
  console.log(`Обновлено: ${updated}`);
  console.log(`Ошибок:    ${failed}`);
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
