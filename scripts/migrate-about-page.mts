/**
 * Миграция страницы «О компании» в Sanity.
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-about-page.mts
 *
 * Требует SANITY_API_WRITE_TOKEN в .env.local с правом write.
 *
 * Идемпотентен: фиксированный _id = "aboutPage.singleton".
 *   - Если документа нет — создаётся со всеми полями и картинками
 *   - Если есть — обновляются только текстовые поля; картинки НЕ перезаписываются
 *     (чтобы юзер мог менять их в Studio и не терять при повторном запуске)
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
const DOC_ID = 'aboutPage.singleton';

// === Дефолтные картинки (можно менять в Studio после миграции) ===
const HERO_IMAGE_PATH = '/images/Banner_Visa.jpg';
const HERO_IMAGE_ALT = 'Паспорт со штампами разных стран';
const MAIN_TEXT_IMAGE_PATH = '/images/global.jpg';
const MAIN_TEXT_IMAGE_ALT = 'Travel & Study — международный центр туризма, образования и права';

// === Helpers ===
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
  return {
    _type: 'block',
    _key: uid(),
    style: 'normal',
    markDefs: [],
    children: spans,
  };
}

function span(text: string, marks: string[] = []): Span {
  return { _type: 'span', _key: uid(), text, marks };
}

// === Контент ===
const heroStats = [
  { _key: uid(), number: '10+', label: 'лет опыта' },
  { _key: uid(), number: '1000+', label: 'довольных клиентов' },
  { _key: uid(), number: '50+', label: 'стран мира' },
];

const missionItems = [
  {
    _key: uid(),
    _type: 'missionItem',
    title: 'Прозрачность и честность',
    description:
      'Никаких скрытых платежей и расплывчатых формулировок. Каждый клиент получает чёткий договор и понимает, за что он платит.',
  },
  {
    _key: uid(),
    _type: 'missionItem',
    title: 'Индивидуальный подход',
    description:
      'Мы не работаем по шаблону. Каждый кейс прорабатываем под цели и обстоятельства клиента — от первой консультации до результата.',
  },
  {
    _key: uid(),
    _type: 'missionItem',
    title: 'Опыт и экспертиза',
    description:
      'Более 10 лет работы с визами, ВНЖ и юридическим сопровождением. Знаем требования консульств и нюансы законодательства разных стран.',
  },
  {
    _key: uid(),
    _type: 'missionItem',
    title: 'Полное сопровождение',
    description:
      'Берём на себя весь процесс: документы, переводы, апостиль, подача и контроль сроков. Вы получаете результат, а не задачу.',
  },
];

const mainTextBlocks = [
  block(
    span(
      'Уже много лет мы помогаем людям открывать новые страны, получать качественное образование и решать юридические вопросы любой сложности — как в России, так и за её пределами. ',
    ),
    span(
      'Мы создали комплексную систему сопровождения для туристических, образовательных и миграционных программ по всему миру.',
      ['strong'],
    ),
  ),
  block(
    span(
      'Мы выстраиваем стабильные и доверительные отношения с партнёрами в России и за рубежом, ',
      ['strong'],
    ),
    span(
      'обеспечивая надёжность и прозрачность сотрудничества. Команда наших специалистов гарантирует ',
    ),
    span('высокий уровень сервиса на каждом этапе', ['strong']),
    span(
      ' — от профессионального оформления виз, перевода и легализации документов до комплексного юридического сопровождения по любым направлениям.',
    ),
  ),
  block(
    span('Мы предлагаем '),
    span('полное сопровождение', ['strong']),
    span(
      ' в сфере международного образования, миграции и зарубежных инвестиций: от подбора учебных заведений и оформления ВНЖ до получения второго гражданства и приобретения недвижимости за границей. Мы работаем с клиентами со всего мира, предоставляя ',
    ),
    span('индивидуальный подход', ['strong']),
    span(' и лучшие возможности для реализации ваших международных планов. '),
    span('Убедитесь в этом сами — станьте нашим партнёром уже сегодня!', ['strong']),
  ),
];

const timelineItems = [
  {
    _key: uid(),
    _type: 'timelineItem',
    year: '2014',
    title: 'Основание',
    description: 'Открытие первого офиса в Москве и старт работы с визами в страны Европы.',
  },
  {
    _key: uid(),
    _type: 'timelineItem',
    year: '2018',
    title: 'Расширение в Азию',
    description: 'Добавлены направления Китая, Японии, Кореи и Юго-Восточной Азии.',
  },
  {
    _key: uid(),
    _type: 'timelineItem',
    year: '2020',
    title: 'ВНЖ и второе гражданство',
    description: 'Запуск отдельного направления по ВНЖ и инвестиционному гражданству.',
  },
  {
    _key: uid(),
    _type: 'timelineItem',
    year: '2023',
    title: '50+ стран в работе',
    description: 'Достигли отметки 50+ стран и более 1000 успешно завершённых кейсов.',
  },
];

// === Главное ===
async function migrate() {
  console.log(`\nМиграция aboutPage в Sanity (project: ${projectId})\n`);

  const existing = await client.fetch<{ _id: string; heroImage?: unknown; mainTextImage?: unknown } | null>(
    `*[_id == $id][0]{ _id, heroImage, mainTextImage }`,
    { id: DOC_ID },
  );

  // Текстовые поля документа (без картинок) — всегда обновляются
  const textFields = {
    internalName: 'О компании',
    heroTitle: 'Travel & Study',
    heroSubtitle:
      'Международный центр туризма, образования и права — ваш надёжный партнёр в мире путешествий, обучения и юридической поддержки.',
    heroStats,
    missionEnabled: true,
    missionTitle: 'Миссия и ценности',
    missionSubtitle: 'Принципы, которые делают наше сопровождение надёжным на каждом этапе.',
    missionItems,
    mainTextEyebrow: 'О КОМПАНИИ',
    mainTextTitle: 'Travel & Study — больше, чем просто визовый центр',
    mainText: mainTextBlocks,
    timelineEnabled: true,
    timelineTitle: 'История компании',
    timelineSubtitle: 'Ключевые этапы нашего пути.',
    timelineItems,
    ctaEnabled: true,
    ctaTitle: 'Готовы начать?',
    ctaDescription:
      'Получите бесплатную консультацию специалиста — мы подберём оптимальное решение для ваших целей.',
    ctaPrimaryLabel: 'Бесплатная консультация',
    ctaPrimaryAction: 'jivo',
    ctaPrimaryHref: '',
    ctaSecondaryEnabled: true,
    ctaSecondaryLabel: 'Написать в WhatsApp',
    ctaSecondaryAction: 'whatsapp',
    ctaSecondaryHref: '',
  };

  if (existing) {
    console.log('Документ уже существует. Обновляю текстовые поля (картинки оставляю как есть)...');
    await client.patch(DOC_ID).set(textFields).commit();
    console.log('\n✓ Документ обновлён.');
    return;
  }

  console.log('Документа нет, создаю новый. Загружаю картинки...');

  const [heroImage, mainTextImage] = await Promise.all([
    uploadImage(HERO_IMAGE_PATH, HERO_IMAGE_ALT, 'heroImage'),
    uploadImage(MAIN_TEXT_IMAGE_PATH, MAIN_TEXT_IMAGE_ALT, 'mainTextImage'),
  ]);

  await client.create({
    _id: DOC_ID,
    _type: 'aboutPage',
    ...textFields,
    ...(heroImage ? { heroImage } : {}),
    ...(mainTextImage ? { mainTextImage } : {}),
  });

  console.log('\n✓ Документ создан со всеми полями. Открой /admin → «Страница: О компании» чтобы поправить.');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
