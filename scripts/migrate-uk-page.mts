/**
 * Миграция страницы «Виза в Великобританию» в Sanity.
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-uk-page.mts
 *
 * Идемпотентен: фиксированный _id = "unitedKingdomPage.singleton".
 *   - Если документа нет — создаётся со всеми полями и картинками
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
const DOC_ID = 'unitedKingdomPage.singleton';

const BANNER_IMAGE_PATH = '/images/countries/united_kingdom.jpg';
const BANNER_IMAGE_ALT = 'Биг Бен и Лондон — фон страницы виз в Великобританию';
const MAIN_IMAGE_PATH = '/images/LondonMain.jpg';
const MAIN_IMAGE_ALT = 'Лондон';

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

const visaTypes = [
  {
    _key: uid(),
    _type: 'visaType',
    title: 'Туристическая виза (Visitor Visa)',
    description:
      'Подходит для туризма, посещения друзей и родственников, краткосрочного обучения или деловых встреч. Срок рассмотрения: 3-4 недели. Консульский сбор: от 125 GBP',
  },
  {
    _key: uid(),
    _type: 'visaType',
    title: 'Бизнес-виза',
    description:
      'Для деловых поездок, участия в конференциях, встреч и переговоров. Срок рассмотрения: 3-4 недели. Консульский сбор: от 125 GBP',
  },
  {
    _key: uid(),
    _type: 'visaType',
    title: 'Студенческая виза (Student Visa)',
    description:
      'Для обучения в Великобритании на длительный срок. Срок рассмотрения: 4-6 недель. Консульский сбор: от 363 GBP',
  },
  {
    _key: uid(),
    _type: 'visaType',
    title: 'Рабочая виза (Work Visa)',
    description:
      'Для трудоустройства или долгосрочного пребывания. Срок рассмотрения: 4-8 недель. Консульский сбор: от 625 GBP',
  },
];

const features = [
  {
    _key: uid(),
    _type: 'feature',
    title: 'Многократный въезд',
    description:
      'Британская виза позволяет совершать многократные въезды в страну в течение срока ее действия, что удобно для частых поездок.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Длительный срок действия',
    description:
      'В зависимости от типа визы, вы можете получить разрешение на пребывание в Великобритании от 6 месяцев до нескольких лет для работы или учебы.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Образование и работа',
    description:
      'Визы в Великобританию предоставляют возможность обучения в ведущих университетах и трудоустройства в международных компаниях.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Свободное путешествие',
    description:
      'С британской визой вы можете путешествовать по всей стране, исследуя ее культурное и историческое наследие без дополнительных ограничений.',
  },
];

const processSteps = [
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Определите тип визы',
    description: 'Решите, какая виза вам необходима — туристическая, деловая, студенческая или рабочая.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Заполните онлайн-заявление',
    description: 'Наши специалисты заполнят вам нужный тип заявления.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Оплатите консульский сбор',
    description:
      'После заполнения анкеты необходимо оплатить визовый сбор. Сумма зависит от типа и длительности визы.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Запишитесь на подачу биометрических данных',
    description:
      'После оплаты вам будет предложено выбрать дату и время посещения визового центра для сдачи отпечатков пальцев и фотографии.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Соберите необходимые документы',
    description:
      'Действующий заграничный паспорт, фото установленного образца, подтверждение финансовой состоятельности, бронь жилья, документы цели поездки и переводы на английский.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Посетите визовый центр',
    description:
      'В назначенное время посетите ближайший визовый центр VFS Global для сдачи биометрии и подачи документов.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Ожидайте решения',
    description:
      'Стандартный срок рассмотрения — около 15 рабочих дней, но может варьироваться. Есть возможность ускоренного рассмотрения за дополнительную плату.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Получите паспорт с визой',
    description:
      'После принятия решения вы получите уведомление о возможности забрать паспорт или о его доставке.',
  },
];

const mainTextBlocks = [
  block(
    span(
      'Планируете поездку в Лондон или Манчестер, мечтаете увидеть старинные замки, университеты Оксфорда и Кембриджа, прогуляться по набережной Темзы или попасть на концерты мировых звёзд? Наш международный визовый центр ',
    ),
    span('Travel & Study ', ['strong']),
    span('поможет воплотить эту мечту в реальность.'),
  ),
  block(
    span('Мы оформим визу в Великобританию легко, '),
    span('быстро и без стресса', ['strong']),
    span(
      ' — будь то туристическая, учебная, бизнес- или рабочая. Вам останется только выбрать направление, а всю остальную подготовку возьмут на себя наши специалисты.',
    ),
  ),
];

async function migrate() {
  console.log(`\nМиграция unitedKingdomPage в Sanity (project: ${projectId})\n`);

  const existing = await client.fetch<{ _id: string } | null>(`*[_id == $id][0]{ _id }`, { id: DOC_ID });

  const textFields = {
    internalName: 'Виза в Великобританию',
    bannerTitle: 'Оформление визы в Великобританию',
    bannerSubtitle: 'Откройте для себя Великобританию — страну, где история встречается с современностью.',
    sectionTitle: 'Виза в Великобританию',
    mainText: mainTextBlocks,
    visaTypesTitle: 'У нас доступны следующие варианты виз',
    visaTypesSubtitle: 'Подберём подходящий тип визы под ваши цели и сроки.',
    visaTypes,
    featuresTitle: 'Особенности визы',
    featuresSubtitle: 'Что даёт британская виза кроме самого права въезда.',
    features,
    documentsTitle: 'Необходимые документы для подачи на визу:',
    documentsSubtitle:
      'Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.',
    processTitle: 'Процесс получения визы',
    processSubtitle: 'Пошаговый план — что делать после обращения в нашу команду.',
    processSteps,
  };

  if (existing) {
    console.log('Документ уже существует. Обновляю текстовые поля (картинки оставляю как есть)...');
    await client.patch(DOC_ID).set(textFields).commit();
    console.log('\n✓ Документ обновлён.');
    return;
  }

  console.log('Документа нет, создаю новый. Загружаю картинки...');
  const [bannerImage, mainImage] = await Promise.all([
    uploadImage(BANNER_IMAGE_PATH, BANNER_IMAGE_ALT, 'bannerImage'),
    uploadImage(MAIN_IMAGE_PATH, MAIN_IMAGE_ALT, 'mainImage'),
  ]);

  await client.create({
    _id: DOC_ID,
    _type: 'unitedKingdomPage',
    ...textFields,
    ...(bannerImage ? { bannerImage } : {}),
    ...(mainImage ? { mainImage } : {}),
  });

  console.log('\n✓ Документ создан. Открой /admin → «Страница: Виза в Великобританию».');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
