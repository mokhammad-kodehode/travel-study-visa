import { defineField, defineType } from 'sanity';

/**
 * Страница «ВНЖ ОАЭ» (Remote Visa) — singleton-документ.
 * URL: /vnj_page/UAE.
 *
 * Иконки в карточках «Особенности и требования» подбираются в коде по индексу — клиент их не редактирует.
 */
export const vnjUAEPageType = defineType({
  name: 'vnjUAEPage',
  title: 'Страница: ВНЖ ОАЭ',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Баннер' },
    { name: 'main', title: 'Основной текст' },
    { name: 'features', title: 'Особенности и требования' },
    { name: 'documents', title: 'Документы' },
    { name: 'process', title: 'Этапы получения' },
  ],
  fields: [
    defineField({
      name: 'internalName',
      title: 'Внутреннее имя',
      type: 'string',
      initialValue: 'ВНЖ ОАЭ (Remote Visa)',
      readOnly: true,
    }),

    // ===== Banner =====
    defineField({
      name: 'bannerImage',
      title: 'Фон баннера',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt-текст' }],
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Заголовок баннера',
      type: 'string',
      group: 'hero',
      initialValue: 'Оформление ВНЖ с Remote Visa и Emirates ID',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bannerSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 4,
      group: 'hero',
    }),

    // ===== Main text =====
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок секции',
      type: 'string',
      group: 'main',
      initialValue: 'Виза Remote Work Visa (или Virtual Working Program)',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Обычный', value: 'normal' }],
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
                fields: [{ name: 'href', type: 'url', title: 'URL', validation: (r) => r.required() }],
              },
            ],
          },
        },
      ],
    }),

    // ===== Features =====
    defineField({
      name: 'featuresTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'features',
      initialValue: 'Особенности и требования',
    }),
    defineField({
      name: 'featuresSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'features',
    }),
    defineField({
      name: 'features',
      title: 'Карточки особенностей',
      description: 'Иконки подбираются по порядку (макс. 9). Можно переставлять — иконки переставятся вместе.',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
      validation: (r) => r.max(9),
    }),

    // ===== Documents =====
    defineField({
      name: 'documentsTitle',
      title: 'Заголовок блока документов',
      type: 'string',
      group: 'documents',
      initialValue: 'Необходимые документы для подачи на ВНЖ с RemoteVisa',
    }),
    defineField({
      name: 'documentsSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'documents',
    }),
    defineField({
      name: 'documents',
      title: 'Документы',
      type: 'array',
      group: 'documents',
      of: [
        {
          type: 'object',
          name: 'documentRow',
          fields: [
            defineField({ name: 'name', title: 'Название документа', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'name', subtitle: 'description' } },
        },
      ],
    }),

    // ===== Process =====
    defineField({
      name: 'processTitle',
      title: 'Заголовок блока процесса',
      type: 'string',
      group: 'process',
      initialValue: 'Этапы получения',
    }),
    defineField({
      name: 'processSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'process',
    }),
    defineField({
      name: 'processSteps',
      title: 'Шаги',
      description: 'Шаги в виде зигзаг-таймлайна.',
      type: 'array',
      group: 'process',
      of: [
        {
          type: 'object',
          name: 'processStep',
          fields: [
            defineField({ name: 'title', title: 'Название шага', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 4 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'bannerTitle' },
    prepare: ({ title }) => ({ title: title || 'ВНЖ ОАЭ', subtitle: '/vnj_page/UAE' }),
  },
});
