import { defineField, defineType } from 'sanity';

/**
 * Страница «Гражданство [страны]» — динамический документ по slug.
 * URL: /grajdanstvo/[slug] (например /grajdanstvo/romania).
 *
 * Иконки в карточках «Что даёт гражданство» подбираются в коде по индексу — клиент их не редактирует.
 */
export const citizenshipCountryType = defineType({
  name: 'citizenshipCountry',
  title: 'Страница: Гражданство (страна)',
  type: 'document',
  groups: [
    { name: 'meta', title: 'Метаданные' },
    { name: 'hero', title: 'Баннер' },
    { name: 'main', title: 'Основной текст' },
    { name: 'benefits', title: 'Что даёт гражданство' },
    { name: 'documents', title: 'Документы' },
    { name: 'process', title: 'Этапы получения' },
    { name: 'outro', title: 'Закрывающий текст' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Название страны (именительный)',
      description: 'Например: «Румыния»',
      type: 'string',
      group: 'meta',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'nameAccusative',
      title: 'Название (винительный — для «Гражданство [Румынию]»)',
      description: 'Например: «Румынию»',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'nameGenitive',
      title: 'Название (родительный — для «Что даёт гражданство [Румынии]»)',
      description: 'Например: «Румынии»',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      description: 'Латиницей, без пробелов. Например: «romania». Будет использован в URL /grajdanstvo/[slug]',
      type: 'slug',
      group: 'meta',
      options: { source: 'name', maxLength: 32 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'flag',
      title: 'Флаг страны',
      type: 'image',
      group: 'meta',
      options: { hotspot: true },
    }),

    // ===== Banner =====
    defineField({
      name: 'bannerImage',
      title: 'Фон баннера',
      description: 'Большая картинка-фон. Поверх неё ляжет затемнение.',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt-текст' }],
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Заголовок баннера',
      description: 'Например: «Гражданство Румынии»',
      type: 'string',
      group: 'hero',
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
      description: 'Например: «Гражданство Румынии»',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'mainImage',
      title: 'Главное фото',
      type: 'image',
      group: 'main',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt-текст' }],
    }),
    defineField({
      name: 'description',
      title: 'Описание под заголовком',
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

    // ===== Benefits (Что даёт гражданство) =====
    defineField({
      name: 'benefitsTitle',
      title: 'Заголовок блока',
      description: 'Например: «Что даёт гражданство Румынии»',
      type: 'string',
      group: 'benefits',
      initialValue: 'Что даёт гражданство',
    }),
    defineField({
      name: 'benefitsSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'benefits',
    }),
    defineField({
      name: 'benefits',
      title: 'Преимущества',
      description: 'Карточки с преимуществами. Иконки подбираются по порядку (мин. 3, макс. 9).',
      type: 'array',
      group: 'benefits',
      of: [
        {
          type: 'object',
          name: 'benefit',
          fields: [
            defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
      validation: (r) => r.min(3).max(9),
    }),

    // ===== Documents =====
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
    defineField({
      name: 'documents',
      title: 'Документы',
      description: 'Строки таблицы документов (название + описание).',
      type: 'array',
      group: 'documents',
      of: [
        {
          type: 'object',
          name: 'document',
          fields: [
            defineField({ name: 'name', title: 'Название документа', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'name', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'documentsOutro',
      title: 'Текст после таблицы документов',
      description: 'Например: «Если была перемена ФИО — свидетельство о смене имени...»',
      type: 'text',
      rows: 3,
      group: 'documents',
    }),

    // ===== Process =====
    defineField({
      name: 'processTitle',
      title: 'Заголовок блока процесса',
      type: 'string',
      group: 'process',
      initialValue: 'Этапы получения гражданства',
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

    // ===== Outro =====
    defineField({
      name: 'outroText',
      title: 'Закрывающий текст',
      description: 'Параграфы внизу страницы (после процесса). Например: «Процесс от 1 до 2 лет...»',
      type: 'array',
      group: 'outro',
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
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug.current' },
    prepare: ({ title, subtitle }) => ({
      title: title ? `Гражданство ${title}` : 'Гражданство',
      subtitle: subtitle ? `/grajdanstvo/${subtitle}` : '',
    }),
  },
});
