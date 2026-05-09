import { defineField, defineType } from 'sanity';

/**
 * Страница «Виза в Великобританию» — singleton-документ.
 * Таблица документов остаётся захардкоженной в коде (UK_page.tsx) — пока не делаем редактируемой.
 *
 * Иконки в карточках «Особенности визы» подбираются в коде по индексу — клиент их не редактирует.
 */
export const unitedKingdomPageType = defineType({
  name: 'unitedKingdomPage',
  title: 'Страница: Виза в Великобританию',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Баннер' },
    { name: 'main', title: 'Основной текст' },
    { name: 'visaTypes', title: 'Типы виз' },
    { name: 'features', title: 'Особенности визы' },
    { name: 'documents', title: 'Документы (заголовок)' },
    { name: 'process', title: 'Процесс получения' },
  ],
  fields: [
    defineField({
      name: 'internalName',
      title: 'Внутреннее имя',
      type: 'string',
      initialValue: 'Виза в Великобританию',
      readOnly: true,
    }),

    // ===== Hero / Banner =====
    defineField({
      name: 'bannerImage',
      title: 'Фон баннера',
      description: 'Большая картинка-фон для верхнего баннера. Если не загружено — используется тёмный градиент по умолчанию.',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt-текст' },
      ],
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Заголовок баннера',
      type: 'string',
      group: 'hero',
      initialValue: 'Оформление визы в Великобританию',
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
      initialValue: 'Виза в Великобританию',
    }),
    defineField({
      name: 'mainImage',
      title: 'Главное фото',
      description: 'Картинка под заголовком секции (например, фото Лондона).',
      type: 'image',
      group: 'main',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt-текст' },
      ],
    }),
    defineField({
      name: 'mainText',
      title: 'Описание',
      description: 'Параграфы описания. Можно выделять жирным/курсивом и вставлять ссылки.',
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
                title: 'Ссылка',
                fields: [{ name: 'href', type: 'url', title: 'URL', validation: (r) => r.required() }],
              },
            ],
          },
        },
      ],
    }),

    // ===== Visa types =====
    defineField({
      name: 'visaTypesTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'visaTypes',
      initialValue: 'У нас доступны следующие варианты виз',
    }),
    defineField({
      name: 'visaTypesSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'visaTypes',
    }),
    defineField({
      name: 'visaTypes',
      title: 'Типы виз',
      description: 'Раскрывающиеся карточки с типами виз.',
      type: 'array',
      group: 'visaTypes',
      of: [
        {
          type: 'object',
          name: 'visaType',
          fields: [
            defineField({ name: 'title', title: 'Название визы', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),

    // ===== Visa features =====
    defineField({
      name: 'featuresTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'features',
      initialValue: 'Особенности визы',
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
      title: 'Особенности',
      description: 'Карточки с особенностями. Иконки подбираются по порядку (4 шт.).',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ name: 'title', title: 'Название', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
      validation: (r) => r.max(4),
    }),

    // ===== Documents (заголовок + подпись; сама таблица остаётся в коде) =====
    defineField({
      name: 'documentsTitle',
      title: 'Заголовок блока документов',
      type: 'string',
      group: 'documents',
      initialValue: 'Необходимые документы для подачи на визу:',
    }),
    defineField({
      name: 'documentsSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'documents',
      initialValue: 'Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.',
    }),

    // ===== Process steps =====
    defineField({
      name: 'processTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'process',
      initialValue: 'Процесс получения визы',
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
      description: 'Шаги процесса. Будут показаны в виде зигзаг-таймлайна.',
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
    prepare: ({ title }) => ({ title: title || 'Виза в Великобританию', subtitle: '/visa_page/united_kingdom' }),
  },
});
