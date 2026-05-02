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
      name: 'bannerImage',
      title: 'Фон баннера',
      description: 'Большая картинка за заголовком наверху страницы',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Заголовок баннера (H1)',
      description: 'Например: «Оформление визы в Австрию». Если не заполнено — используется шаблон по умолчанию.',
      type: 'string',
    }),
    defineField({
      name: 'bannerSubtitle',
      title: 'Подпись под заголовком',
      description: 'Текст под H1. Перенос строки = новая строка на странице.',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(500),
    }),
    defineField({
      name: 'heroImage',
      title: 'Главное фото страны (под секцией)',
      description: 'Картинка под заголовком «Виза в …»',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Описание страны',
      description: 'Текст под главным фото. Можно выделять жирным/курсивом и ставить ссылки.',
      type: 'array',
      of: [
        {
          type: 'block',
          // Только базовое форматирование, чтобы клиент не сломал визуал.
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
