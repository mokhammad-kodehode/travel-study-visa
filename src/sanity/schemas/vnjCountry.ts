import { defineField, defineType } from 'sanity';

export const vnjCountryType = defineType({
  name: 'vnjCountry',
  title: 'Страница ВНЖ (страна)',
  type: 'document',
  fieldsets: [
    {
      name: 'features',
      title: 'Что даёт ВНЖ? (плитки)',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Название страны',
      description: 'В именительном падеже: Испания, Болгария',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      description: 'Часть адреса: /vnj/spain',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'nameAccusative',
      title: 'В винительном падеже',
      description: 'Для фраз вида «Виза в Испанию»',
      type: 'string',
    }),
    defineField({
      name: 'nameGenitive',
      title: 'В родительном падеже',
      description: 'Для фраз вида «ВНЖ Испании», «гражданство Испании»',
      type: 'string',
    }),
    defineField({
      name: 'flag',
      title: 'Флаг',
      type: 'image',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Фон баннера',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Заголовок баннера (H1)',
      description: 'Например: «Оформление ВНЖ в Испанию»',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bannerSubtitle',
      title: 'Подпись под заголовком баннера',
      description: 'Текст под H1. Перенос строки = новая строка на странице.',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(500),
    }),
    defineField({
      name: 'heroImage',
      title: 'Главное фото страны (под секцией)',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание под фото',
      description: 'Длинный текст под главным фото. Можно выделять жирным/курсивом и ставить ссылки.',
      type: 'array',
      of: [
        {
          type: 'block',
          // Ограничиваем форматирование — без заголовков, списков, цитат, чтобы клиент не сломал визуал.
          styles: [{ title: 'Обычный текст', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Жирный', value: 'strong' },
              { title: 'Курсив', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Ссылка',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (r) => r.required(),
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'options',
      title: 'Варианты получения ВНЖ',
      description: 'Карточки под заголовком «Возможные варианты получения ВНЖ». Можно добавлять, удалять и переставлять.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'option',
          title: 'Вариант',
          fields: [
            defineField({
              name: 'title',
              title: 'Заголовок карточки',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Описание',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'featureLiving',
      title: 'Право на проживание и работу',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
    defineField({
      name: 'featureTravel',
      title: 'Путешествия по Европе',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
    defineField({
      name: 'featureEducation',
      title: 'Доступ к медицине и образованию',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
    defineField({
      name: 'featureBusiness',
      title: 'Возможности для бизнеса и инвестиций',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
    defineField({
      name: 'featureTaxes',
      title: 'Налоговые льготы и преференции',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
    defineField({
      name: 'featureProperty',
      title: 'Покупка недвижимости',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
    defineField({
      name: 'featureCitizenship',
      title: 'Путь к гражданству',
      type: 'text',
      rows: 3,
      fieldset: 'features',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug.current', media: 'flag' },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `/vnj/${subtitle}` : '',
        media,
      };
    },
  },
});
