/**
 * Миграция страницы «Гражданство Румынии» в Sanity (citizenshipCountry).
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-citizenship-romania.mts
 *
 * Идемпотентен: фиксированный _id = "citizenshipCountry.romania".
 *   - Если документа нет — создаётся со всеми полями и картинкой
 *   - Если есть — обновляются только текстовые поля; картинки НЕ перезаписываются
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
const DOC_ID = 'citizenshipCountry.romania';

const BANNER_IMAGE_PATH = '/images/countries/Romania.jpg';
const BANNER_IMAGE_ALT = 'Бухарест — фон страницы гражданства Румынии';
const MAIN_IMAGE_PATH = '/images/countries/Romania.jpg';
const MAIN_IMAGE_ALT = 'Гражданство Румынии';
const FLAG_PATH = '/images/Flags/romania.svg';
const FLAG_ALT = 'Флаг Румынии';

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
      'Хотите свободно передвигаться по странам Европейского Союза, жить и работать в любой точке Европы? Получение румынского паспорта по программе репатриации — это быстрый и доступный способ открыть для себя новые перспективы!',
    ),
  ),
];

const benefits = [
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Лёгкость получения гражданства',
    description:
      'Возможность получения гражданства без необходимости постоянного проживания в Румынии. Это делает процесс гораздо проще и удобнее по сравнению с другими программами.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Право на гражданство по происхождению',
    description:
      'Программа репатриации предназначена для потомков граждан Румынии. Если ваши родители, бабушки или дедушки были гражданами Румынии — у вас есть право претендовать на гражданство по происхождению.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Возможность двойного гражданства',
    description:
      'Программа позволяет сохранить ваше текущее гражданство — это важно для тех, кто не хочет терять гражданство своей страны. Подходит бизнесменам, студентам и людям, часто путешествующим.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Доступ к правам граждан ЕС',
    description:
      'С румынским гражданством вы становитесь гражданином Европейского Союза — это даёт возможность жить, работать и учиться в странах ЕС без дополнительных виз и разрешений.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Без экзаменов на знание языка',
    description:
      'Для получения гражданства по программе репатриации не требуется сдавать экзамены на знание румынского языка — это существенно упрощает процесс для заявителей.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Экономическая и социальная выгода',
    description:
      'Доступ к европейским образовательным, медицинским и социальным системам, а также возможность пользоваться льготами для граждан ЕС.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Быстрый процесс',
    description:
      'В сравнении с программами натурализации других стран, программа репатриации в Румынии может занять значительно меньше времени — от одного до двух лет в зависимости от сложности случая.',
  },
  {
    _key: uid(),
    _type: 'benefit',
    title: 'Низкие затраты',
    description:
      'Программа считается одной из самых доступных по финансовым затратам на юридическое сопровождение и сбор документов.',
  },
];

const documents = [
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Свидетельство о рождении Ваше (Апостиль)',
    description: 'В новом формате А4',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Свидетельство о рождении Ваших родителей (Апостиль)',
    description: 'В новом формате А4',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Свидетельство о рождении Ваших детей (Апостиль)',
    description: 'В новом формате А4',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Свидетельства о заключении всех браков Ваше и родителей или расторжения всех браков',
    description: 'Апостиль на все документы.',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Сканы паспортов',
    description: 'Внутренний и загран (если есть).',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Паспорт загран Ваш',
    description: 'Он будет всё время на руках у Вас, летать можно везде и всегда ожидая выхода приказа.',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Сканы Паспорт',
    description: 'Внутренний Ваш и Ваших родителей (также будет у Вас на руках).',
  },
  {
    _key: uid(),
    _type: 'documentRow',
    name: 'Справка об отсутствии судимости (Апостиль)',
    description: 'Заказывать через гос услуги заранее сразу с апостилем, готовят 1,5 мес.',
  },
];

const processSteps = [
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Анализ документов и консультация',
    description:
      'Наши специалисты помогут вам проанализировать ваш родословный архив, определить возможность получения гражданства и подготовить индивидуальный план действий.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Сбор необходимых документов',
    description:
      'Поможем собрать все нужные справки, свидетельства и архивные документы, подтверждающие гражданство ваших предков. Берём на себя перевод и нотариальное заверение документов.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Подача заявления',
    description:
      'Наши юристы сопровождают вас на всех этапах подготовки и подачи заявления в Министерство Юстиции в г. Бухарест, обеспечивая грамотное оформление всех формальностей.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Присяга и получение гражданства',
    description:
      'После одобрения вашего дела вы примете присягу и получите свидетельство о румынском гражданстве. Сразу после этого мы подадим документы на оформление румынского паспорта в течение недели.',
  },
];

const outroText = [
  block(span('Процесс от 1 до 2 лет при ускорении через суд с лучшими адвокатами в Бухаресте.')),
  block(
    span(
      'Мы гарантируем профессиональный подход на всех этапах оформления гражданства. Позвольте себе и своей семье открыть двери в европейское будущее.',
    ),
  ),
];

async function migrate() {
  console.log(`\nМиграция citizenshipCountry "Romania" в Sanity (project: ${projectId})\n`);

  const existing = await client.fetch<{ _id: string; flag?: unknown } | null>(
    `*[_id == $id][0]{ _id, flag }`,
    { id: DOC_ID },
  );

  const textFields = {
    name: 'Румыния',
    nameAccusative: 'Румынию',
    nameGenitive: 'Румынии',
    slug: { _type: 'slug', current: 'romania' },
    bannerTitle: 'Гражданство Румынии',
    bannerSubtitle: 'Получение румынского гражданства по программе репатриации — ваш путь к европейским возможностям!',
    sectionTitle: 'Гражданство Румынии по программе репатриации',
    description,
    benefitsTitle: 'Что даёт гражданство Румынии',
    benefitsSubtitle: 'Преимущества румынского паспорта по программе репатриации.',
    benefits,
    documentsTitle: 'Необходимые документы для подачи на визу:',
    documentsSubtitle: 'Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.',
    documents,
    documentsOutro:
      'Если была перемена ФИО — свидетельство о смене имени с апостилем (отсутствующие документы можно собрать с помощью нас, заказав из архива за доплату). Апостиль ставит ведомство, выдавшее документы (ЗАГС на все свидетельства, МВД на справку об отсутствии судимости).',
    processTitle: 'Этапы получения румынского гражданства',
    processSubtitle: 'Пошаговый план — что делать после обращения в нашу команду.',
    processSteps,
    outroText,
  };

  if (existing) {
    console.log('Документ уже существует. Обновляю текстовые поля...');
    const patch: Record<string, unknown> = { ...textFields };

    if (!existing.flag) {
      console.log('Флаг не загружен — загружаю...');
      const flag = await uploadImage(FLAG_PATH, FLAG_ALT, 'flag');
      if (flag) patch.flag = flag;
    } else {
      console.log('Флаг уже загружен — пропускаю.');
    }

    await client.patch(DOC_ID).set(patch).commit();
    console.log('\n✓ Документ обновлён.');
    return;
  }

  console.log('Документа нет, создаю новый. Загружаю картинки...');
  const [bannerImage, mainImage, flag] = await Promise.all([
    uploadImage(BANNER_IMAGE_PATH, BANNER_IMAGE_ALT, 'bannerImage'),
    uploadImage(MAIN_IMAGE_PATH, MAIN_IMAGE_ALT, 'mainImage'),
    uploadImage(FLAG_PATH, FLAG_ALT, 'flag'),
  ]);

  await client.create({
    _id: DOC_ID,
    _type: 'citizenshipCountry',
    ...textFields,
    ...(bannerImage ? { bannerImage } : {}),
    ...(mainImage ? { mainImage } : {}),
    ...(flag ? { flag } : {}),
  });

  console.log('\n✓ Документ создан. Открой /admin → «Страница: Гражданство (страна)» → Румыния.');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
