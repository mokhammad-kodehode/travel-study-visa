import { defineField, defineType } from 'sanity';

export const countryType = defineType({
  name: 'country',
  title: 'Страна',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название страны',
      description: 'В именительном падеже: Австрия, Германия',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'nameAccusative',
      title: 'В винительном падеже',
      description: 'Для фраз вида «Виза в Австрию»',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      description: 'Часть адреса страницы: /visa/austria',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'region',
      title: 'Регион',
      type: 'string',
      options: {
        list: [
          { title: 'Европа', value: 'europe' },
          { title: 'Азия', value: 'asia' },
          { title: 'Америка', value: 'america' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'flag',
      title: 'Флаг',
      type: 'image',
    }),
    defineField({
      name: 'heroImage',
      title: 'Главное фото страны',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Описание страны',
      description: 'Короткий текст под фотографией (1-3 предложения)',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(500),
    }),
    defineField({
      name: 'features',
      title: 'Преимущества',
      description: 'Список пунктов — каждый абзац — отдельный пункт',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      validation: (r) => r.max(10),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'region', media: 'flag' },
    prepare({ title, subtitle, media }) {
      const regionLabel: Record<string, string> = {
        europe: 'Европа',
        asia: 'Азия',
        america: 'Америка',
      };
      return {
        title,
        subtitle: subtitle ? regionLabel[subtitle] || subtitle : '',
        media,
      };
    },
  },
});
