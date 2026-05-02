import { defineField, defineType } from 'sanity';

/**
 * Секция «Наши преимущества» / «Наши ценности» — singleton-like документ.
 * В Sanity создаются ровно 2 документа этого типа:
 *   - slug = 'values'      → блок «Наши ценности» (компонент Advantages)
 *   - slug = 'advantages'  → блок «Наши преимущества» (компонент AdvantagesTwo)
 *
 * Иконки в карточках задаются в коде по индексу — клиент их не редактирует.
 */
export const advantagesSectionType = defineType({
  name: 'advantagesSection',
  title: 'Блок преимуществ / ценностей',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Идентификатор блока',
      description: 'Какой блок: «values» (наши ценности) или «advantages» (наши преимущества)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 32,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Заголовок блока',
      description: 'Например: «Наши преимущества» или «Наши ценности»',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Карточки',
      description: 'Можно добавлять, удалять и переставлять. Иконки подбираются автоматически по порядку — переставляя карточки, ты переставляешь и иконки.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Карточка',
          fields: [
            defineField({
              name: 'title',
              title: 'Название карточки',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'description',
              title: 'Описание',
              type: 'text',
              rows: 4,
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
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Блок без названия',
        subtitle: subtitle ? `Идентификатор: ${subtitle}` : '',
      };
    },
  },
});
