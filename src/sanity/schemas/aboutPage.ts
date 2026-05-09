import { defineField, defineType } from 'sanity';

/**
 * Страница «О компании» — singleton-документ.
 * Все блоки опциональны на уровне рендера: если поле пустое, страница использует fallback из кода.
 *
 * Иконки в карточках (Mission, CTA-кнопках) подбираются в коде по индексу — клиент их не редактирует.
 */
export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'Страница: О компании',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Баннер' },
    { name: 'mission', title: 'Миссия и ценности' },
    { name: 'mainText', title: 'Основной текст' },
    { name: 'timeline', title: 'История компании' },
    { name: 'geography', title: 'География работы' },
    { name: 'cta', title: 'CTA в конце' },
  ],
  fields: [
    defineField({
      name: 'internalName',
      title: 'Внутреннее имя',
      description: 'Не отображается на сайте, только в админке',
      type: 'string',
      initialValue: 'О компании',
      readOnly: true,
    }),

    // ===== Hero / Banner =====
    defineField({
      name: 'heroTitle',
      title: 'Заголовок баннера',
      description: 'Например: «Travel & Study»',
      type: 'string',
      group: 'hero',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Подзаголовок баннера',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroStats',
      title: 'Статистика на баннере',
      description: 'Карточки с числами на правой стороне баннера. Иконки подбираются автоматически по порядку.',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            defineField({ name: 'number', title: 'Число (например, 10+)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'label', title: 'Подпись (например, лет опыта)', type: 'string', validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'number', subtitle: 'label' } },
        },
      ],
    }),

    // ===== Mission & Values =====
    defineField({
      name: 'missionEnabled',
      title: 'Показывать блок «Миссия и ценности»',
      type: 'boolean',
      group: 'mission',
      initialValue: true,
    }),
    defineField({
      name: 'missionTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'mission',
      initialValue: 'Миссия и ценности',
      hidden: ({ parent }) => !parent?.missionEnabled,
    }),
    defineField({
      name: 'missionSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'mission',
      hidden: ({ parent }) => !parent?.missionEnabled,
    }),
    defineField({
      name: 'missionItems',
      title: 'Карточки',
      description: 'Можно добавлять, удалять и переставлять (мин. 3, макс. 6). Иконки подбираются автоматически по порядку.',
      type: 'array',
      group: 'mission',
      hidden: ({ parent }) => !parent?.missionEnabled,
      of: [
        {
          type: 'object',
          name: 'missionItem',
          fields: [
            defineField({ name: 'title', title: 'Заголовок', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
      validation: (r) => r.max(6),
    }),

    // ===== Main text =====
    defineField({
      name: 'mainTextEyebrow',
      title: 'Маленькая надпись над заголовком',
      description: 'Например: «О КОМПАНИИ». Можно оставить пустым.',
      type: 'string',
      group: 'mainText',
      initialValue: 'О КОМПАНИИ',
    }),
    defineField({
      name: 'mainTextTitle',
      title: 'Заголовок',
      type: 'string',
      group: 'mainText',
      initialValue: 'Travel & Study — больше, чем просто визовый центр',
    }),
    defineField({
      name: 'mainTextImage',
      title: 'Фото компании',
      description: 'Большая картинка над текстом (например, фото офиса/команды). Если не загружено — секция покажется без фото.',
      type: 'image',
      group: 'mainText',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-текст (для SEO и доступности)',
          description: 'Что изображено на фото. Например: «Офис Travel & Study в Москве»',
        },
      ],
    }),
    defineField({
      name: 'mainText',
      title: 'Основной текст',
      description: 'Можно выделять жирным/курсивом и вставлять ссылки. Каждый параграф — отдельный блок.',
      type: 'array',
      group: 'mainText',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Обычный текст', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Жирный', value: 'strong' },
              { title: 'Курсив', value: 'em' },
              { title: 'Фиолетовый акцент', value: 'violet' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Ссылка',
                fields: [
                  { name: 'href', type: 'url', title: 'URL', validation: (r) => r.required() },
                ],
              },
            ],
          },
        },
      ],
    }),

    // ===== Timeline =====
    defineField({
      name: 'timelineEnabled',
      title: 'Показывать блок «История компании»',
      type: 'boolean',
      group: 'timeline',
      initialValue: true,
    }),
    defineField({
      name: 'timelineTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'timeline',
      initialValue: 'История компании',
      hidden: ({ parent }) => !parent?.timelineEnabled,
    }),
    defineField({
      name: 'timelineSubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'timeline',
      hidden: ({ parent }) => !parent?.timelineEnabled,
    }),
    defineField({
      name: 'timelineItems',
      title: 'События',
      description: 'Каждая запись — точка на таймлайне. Сортировка от старых к новым.',
      type: 'array',
      group: 'timeline',
      hidden: ({ parent }) => !parent?.timelineEnabled,
      of: [
        {
          type: 'object',
          name: 'timelineItem',
          fields: [
            defineField({ name: 'year', title: 'Год (или дата, например «2018»)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Событие', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'description', title: 'Описание', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'year' },
            prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ? `📅 ${subtitle}` : '' }),
          },
        },
      ],
    }),

    // ===== Geography =====
    defineField({
      name: 'geographyEnabled',
      title: 'Показывать блок «География работы»',
      type: 'boolean',
      group: 'geography',
      initialValue: true,
    }),
    defineField({
      name: 'geographyTitle',
      title: 'Заголовок блока',
      type: 'string',
      group: 'geography',
      initialValue: 'География работы',
      hidden: ({ parent }) => !parent?.geographyEnabled,
    }),
    defineField({
      name: 'geographySubtitle',
      title: 'Подпись под заголовком',
      type: 'text',
      rows: 2,
      group: 'geography',
      initialValue: 'Мы оформляем визы и документы для более чем 50 стран мира',
      hidden: ({ parent }) => !parent?.geographyEnabled,
    }),
    // Список стран берётся из существующих документов country (Sanity), не дублируется.

    // ===== CTA =====
    defineField({
      name: 'ctaEnabled',
      title: 'Показывать CTA-блок',
      type: 'boolean',
      group: 'cta',
      initialValue: true,
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Заголовок CTA',
      type: 'string',
      group: 'cta',
      initialValue: 'Готовы начать?',
      hidden: ({ parent }) => !parent?.ctaEnabled,
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Описание под заголовком',
      type: 'text',
      rows: 3,
      group: 'cta',
      initialValue: 'Получите бесплатную консультацию специалиста — мы подберём оптимальное решение для ваших целей.',
      hidden: ({ parent }) => !parent?.ctaEnabled,
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'Текст основной кнопки',
      type: 'string',
      group: 'cta',
      initialValue: 'Бесплатная консультация',
      hidden: ({ parent }) => !parent?.ctaEnabled,
    }),
    defineField({
      name: 'ctaPrimaryAction',
      title: 'Действие основной кнопки',
      type: 'string',
      group: 'cta',
      options: {
        list: [
          { title: 'Перейти на /contacts', value: 'contacts' },
          { title: 'Открыть WhatsApp', value: 'whatsapp' },
          { title: 'Открыть Telegram', value: 'telegram' },
          { title: 'Позвонить', value: 'phone' },
          { title: 'Произвольная ссылка', value: 'custom' },
        ],
        layout: 'radio',
      },
      initialValue: 'contacts',
      hidden: ({ parent }) => !parent?.ctaEnabled,
    }),
    defineField({
      name: 'ctaPrimaryHref',
      title: 'URL (только если выбрано «Произвольная ссылка»)',
      type: 'string',
      group: 'cta',
      hidden: ({ parent }) => !parent?.ctaEnabled || parent?.ctaPrimaryAction !== 'custom',
    }),
    defineField({
      name: 'ctaSecondaryEnabled',
      title: 'Показывать вторую кнопку',
      type: 'boolean',
      group: 'cta',
      initialValue: true,
      hidden: ({ parent }) => !parent?.ctaEnabled,
    }),
    defineField({
      name: 'ctaSecondaryLabel',
      title: 'Текст второй кнопки',
      type: 'string',
      group: 'cta',
      initialValue: 'Написать в WhatsApp',
      hidden: ({ parent }) => !parent?.ctaEnabled || !parent?.ctaSecondaryEnabled,
    }),
    defineField({
      name: 'ctaSecondaryAction',
      title: 'Действие второй кнопки',
      type: 'string',
      group: 'cta',
      options: {
        list: [
          { title: 'Перейти на /contacts', value: 'contacts' },
          { title: 'Открыть WhatsApp', value: 'whatsapp' },
          { title: 'Открыть Telegram', value: 'telegram' },
          { title: 'Позвонить', value: 'phone' },
          { title: 'Произвольная ссылка', value: 'custom' },
        ],
        layout: 'radio',
      },
      initialValue: 'whatsapp',
      hidden: ({ parent }) => !parent?.ctaEnabled || !parent?.ctaSecondaryEnabled,
    }),
    defineField({
      name: 'ctaSecondaryHref',
      title: 'URL (только если выбрано «Произвольная ссылка»)',
      type: 'string',
      group: 'cta',
      hidden: ({ parent }) =>
        !parent?.ctaEnabled || !parent?.ctaSecondaryEnabled || parent?.ctaSecondaryAction !== 'custom',
    }),
  ],
  preview: {
    select: { title: 'heroTitle' },
    prepare: ({ title }) => ({ title: title || 'О компании', subtitle: '/About_page' }),
  },
});
