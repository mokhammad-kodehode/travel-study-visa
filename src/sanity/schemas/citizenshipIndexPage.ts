import { defineField, defineType } from 'sanity';

/**
 * Страница «Гражданство» (index — список стран). Singleton-документ.
 * URL: /grajdanstvo.
 */
export const citizenshipIndexPageType = defineType({
  name: 'citizenshipIndexPage',
  title: 'Страница: Гражданство (главная)',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Баннер' },
    { name: 'main', title: 'Текстовый блок' },
  ],
  fields: [
    defineField({
      name: 'internalName',
      title: 'Внутреннее имя',
      type: 'string',
      initialValue: 'Гражданство (главная)',
      readOnly: true,
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
      type: 'string',
      group: 'hero',
      initialValue: 'Гражданство',
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
      title: 'Заголовок текстового блока',
      type: 'string',
      group: 'main',
      initialValue: 'Оформление гражданства',
    }),
    defineField({
      name: 'description',
      title: 'Описание (параграфы)',
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
  ],
  preview: {
    select: { title: 'bannerTitle' },
    prepare: ({ title }) => ({ title: title || 'Гражданство', subtitle: '/grajdanstvo' }),
  },
});
