import { cache } from 'react';
import { Metadata } from 'next';
import type { PortableTextBlock } from '@portabletext/react';
import Vnj_UAE from './Vnj_UAE';
import { client } from '@/sanity/client';
import { vnjUAEPageQuery } from '@/sanity/queries';
import { sanityToVnjUAEPage, type SanityVnjUAEPage, type VnjUAEPageData } from '@/sanity/adapters';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'ВНЖ ОАЭ | Проживание и бизнес в Эмиратах',
  description: 'Оформление ВНЖ в ОАЭ для работы, бизнеса и инвесторов. Консультации, поддержка, сопровождение.',
};

const fallbackDescription: PortableTextBlock[] = [
  {
    _type: 'block',
    _key: 'uae1',
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: 'uae1a',
        text:
          'Виза Remote Work Visa (или Virtual Working Program) в ОАЭ позволяет иностранным гражданам работать удаленно в стране, оставаясь при этом сотрудниками своих компаний за рубежом. Этот тип визы был введен в 2020 году, чтобы привлечь специалистов, работающих удаленно, и дать им возможность проживать и работать в ОАЭ.',
      },
    ],
  } as unknown as PortableTextBlock,
];

const fallback: VnjUAEPageData = {
  bannerImageUrl: '/images/countries/UAE.jpg',
  bannerImageAlt: 'Дубай — фон страницы ВНЖ ОАЭ',
  bannerTitle: 'Оформление ВНЖ с Remote Visa и Emirates ID',
  bannerSubtitle:
    'Remote Visa — аналог визы цифрового кочевника и позволяет удаленным работникам проживать в ОАЭ и работать на своих иностранных работодателей.',
  sectionTitle: 'Виза Remote Work Visa (или Virtual Working Program)',
  description: fallbackDescription,
  featuresTitle: 'Особенности и требования',
  featuresSubtitle: 'Что нужно знать про Remote Work Visa и какие условия для получения.',
  features: [
    {
      title: 'Срок действия',
      description: 'Виза выдается на один год с возможностью продления.',
    },
    {
      title: 'Рабочий статус',
      description:
        'Вы можете работать на свою компанию или быть фрилансером, при этом ваше рабочее место находится за пределами ОАЭ.',
    },
    {
      title: 'Медицинское страхование',
      description: 'Необходимо иметь действующую медицинскую страховку, покрывающую ваше пребывание в ОАЭ.',
    },
    {
      title: 'Минимальный доход',
      description:
        'Требуется подтверждение минимального ежемесячного дохода в размере не менее 5 000 долларов США или эквивалентной суммы в другой валюте.',
    },
    {
      title: 'Документы',
      description:
        'Включают паспорт, доказательства трудовой занятости, справку о доходах, а также документы, подтверждающие постоянное место жительства за пределами ОАЭ.',
    },
    {
      title: 'Проживание и льготы',
      description:
        'Виза дает право на проживание в ОАЭ и доступ к ряду льгот: открытие банковского счета, аренда жилья, получение водительских прав и др.',
    },
    {
      title: 'Цели визы',
      description:
        'Особенно актуальна для тех, кто хочет работать удаленно, наслаждаясь высоким уровнем жизни, безопасностью и развитой инфраструктурой ОАЭ.',
    },
  ],
  documentsTitle: 'Необходимые документы для подачи на ВНЖ с RemoteVisa',
  documentsSubtitle: 'Список может варьироваться в зависимости от конкретного кейса.',
  documents: [
    { name: 'Подтверждение удаленной деятельности', description: 'Договор с работодателем' },
    { name: 'Справка о заработной плате', description: 'Документ, подтверждающий вашу зарплату' },
    { name: 'Выписка с банковского счета', description: 'За последние 3 месяца' },
    { name: 'Фотография', description: '45×35 мм' },
    { name: 'Паспорт', description: 'Заграничный паспорт' },
    { name: 'Оплата пошлины', description: 'Платёж за оформление ВНЖ' },
  ],
  processTitle: 'Этапы получения',
  processSubtitle: 'Пошаговый план — что делать после обращения в нашу команду.',
  processSteps: [
    {
      title: 'Проверка соответствия требованиям',
      description: 'Убедитесь, что вы соответствуете критериям для получения удаленной рабочей визы в ОАЭ.',
    },
    {
      title: 'Сбор необходимых документов',
      description:
        'Подготовьте все требуемые документы, включая действующий загранпаспорт, фотографии, подтверждение занятости и дохода.',
    },
    {
      title: 'Подача онлайн-заявки',
      description: 'Заполните и подайте онлайн-заявку на официальном сайте властей ОАЭ или через уполномоченные сервисы.',
    },
    {
      title: 'Оплата сборов',
      description: 'Оплатите необходимые визовые сборы и медицинскую страховку, если требуется.',
    },
    {
      title: 'Ожидание рассмотрения заявки',
      description: 'Дождитесь обработки вашей заявки; обычно это занимает от 5 до 15 рабочих дней.',
    },
    {
      title: 'Получение одобрения и въезд в ОАЭ',
      description: 'После одобрения получите въездное разрешение и прибывайте в ОАЭ.',
    },
    {
      title: 'Прохождение медицинского обследования и получение Emirates ID',
      description: 'По прибытии пройдите медицинское обследование и подайте заявку на получение Emirates ID.',
    },
  ],
};

const fetchUAE = cache(async () => client.fetch<SanityVnjUAEPage | null>(vnjUAEPageQuery));

export default async function Page() {
  const raw = await fetchUAE();
  const data = sanityToVnjUAEPage(raw, fallback);
  return <Vnj_UAE data={data} />;
}
