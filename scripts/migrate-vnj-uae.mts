/**
 * Миграция страницы «ВНЖ ОАЭ» в Sanity (vnjUAEPage).
 *
 * Запуск:
 *   node --experimental-strip-types --env-file=.env.local scripts/migrate-vnj-uae.mts
 *
 * Идемпотентен: фиксированный _id = "vnjUAEPage.singleton".
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
const DOC_ID = 'vnjUAEPage.singleton';

const BANNER_IMAGE_PATH = '/images/countries/UAE.jpg';
const BANNER_IMAGE_ALT = 'Дубай — фон страницы ВНЖ ОАЭ';

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
      'Виза Remote Work Visa (или Virtual Working Program) в ОАЭ позволяет иностранным гражданам работать удаленно в стране, оставаясь при этом сотрудниками своих компаний за рубежом. Этот тип визы был введён в 2020 году, чтобы привлечь специалистов, работающих удаленно, и дать им возможность проживать и работать в ОАЭ.',
    ),
  ),
];

const features = [
  {
    _key: uid(),
    _type: 'feature',
    title: 'Срок действия',
    description: 'Виза выдается на один год с возможностью продления.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Рабочий статус',
    description:
      'Вы можете работать на свою компанию или быть фрилансером, при этом ваше рабочее место находится за пределами ОАЭ.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Медицинское страхование',
    description: 'Необходимо иметь действующую медицинскую страховку, покрывающую ваше пребывание в ОАЭ.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Минимальный доход',
    description:
      'Требуется подтверждение минимального ежемесячного дохода в размере не менее 5 000 долларов США или эквивалентной суммы в другой валюте.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Документы',
    description:
      'Включают паспорт, доказательства трудовой занятости, справку о доходах, а также документы, подтверждающие постоянное место жительства за пределами ОАЭ.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Проживание и льготы',
    description:
      'Виза дает право на проживание в ОАЭ и доступ к ряду льгот: открытие банковского счёта, аренда жилья, получение водительских прав и др.',
  },
  {
    _key: uid(),
    _type: 'feature',
    title: 'Цели визы',
    description:
      'Особенно актуальна для тех, кто хочет работать удаленно, наслаждаясь высоким уровнем жизни, безопасностью и развитой инфраструктурой ОАЭ.',
  },
];

const documents = [
  { _key: uid(), _type: 'documentRow', name: 'Подтверждение удаленной деятельности', description: 'Договор с работодателем' },
  { _key: uid(), _type: 'documentRow', name: 'Справка о заработной плате', description: 'Документ, подтверждающий вашу зарплату' },
  { _key: uid(), _type: 'documentRow', name: 'Выписка с банковского счета', description: 'За последние 3 месяца' },
  { _key: uid(), _type: 'documentRow', name: 'Фотография', description: '45×35 мм' },
  { _key: uid(), _type: 'documentRow', name: 'Паспорт', description: 'Заграничный паспорт' },
  { _key: uid(), _type: 'documentRow', name: 'Оплата пошлины', description: 'Платёж за оформление ВНЖ' },
];

const processSteps = [
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Проверка соответствия требованиям',
    description: 'Убедитесь, что вы соответствуете критериям для получения удалённой рабочей визы в ОАЭ.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Сбор необходимых документов',
    description:
      'Подготовьте все требуемые документы, включая действующий загранпаспорт, фотографии, подтверждение занятости и дохода.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Подача онлайн-заявки',
    description: 'Заполните и подайте онлайн-заявку на официальном сайте властей ОАЭ или через уполномоченные сервисы.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Оплата сборов',
    description: 'Оплатите необходимые визовые сборы и медицинскую страховку, если требуется.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Ожидание рассмотрения заявки',
    description: 'Дождитесь обработки вашей заявки; обычно это занимает от 5 до 15 рабочих дней.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Получение одобрения и въезд в ОАЭ',
    description: 'После одобрения получите въездное разрешение и прибывайте в ОАЭ.',
  },
  {
    _key: uid(),
    _type: 'processStep',
    title: 'Прохождение медицинского обследования и получение Emirates ID',
    description: 'По прибытии пройдите медицинское обследование и подайте заявку на получение Emirates ID.',
  },
];

async function migrate() {
  console.log(`\nМиграция vnjUAEPage в Sanity (project: ${projectId})\n`);

  const existing = await client.fetch<{ _id: string } | null>(`*[_id == $id][0]{ _id }`, { id: DOC_ID });

  const textFields = {
    internalName: 'ВНЖ ОАЭ (Remote Visa)',
    bannerTitle: 'Оформление ВНЖ с Remote Visa и Emirates ID',
    bannerSubtitle:
      'Remote Visa — аналог визы цифрового кочевника и позволяет удаленным работникам проживать в ОАЭ и работать на своих иностранных работодателей.',
    sectionTitle: 'Виза Remote Work Visa (или Virtual Working Program)',
    description,
    featuresTitle: 'Особенности и требования',
    featuresSubtitle: 'Что нужно знать про Remote Work Visa и какие условия для получения.',
    features,
    documentsTitle: 'Необходимые документы для подачи на ВНЖ с RemoteVisa',
    documentsSubtitle: 'Список может варьироваться в зависимости от конкретного кейса.',
    documents,
    processTitle: 'Этапы получения',
    processSubtitle: 'Пошаговый план — что делать после обращения в нашу команду.',
    processSteps,
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
    _type: 'vnjUAEPage',
    ...textFields,
    ...(bannerImage ? { bannerImage } : {}),
  });

  console.log('\n✓ Документ создан. Открой /admin → «Страница: ВНЖ ОАЭ».');
}

migrate().catch((err) => {
  console.error('\nFATAL:', err);
  process.exit(1);
});
