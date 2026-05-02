import { defineField, defineType } from 'sanity';

export const legalServicesPageType = defineType({
  name: 'legalServicesPage',
  title: 'Страница: Юридическая поддержка',
  type: 'document',
  fields: [
    defineField({
      name: 'internalName',
      title: 'Внутреннее имя (для админки)',
      description: 'Не отображается на сайте, используется только в Studio',
      type: 'string',
      initialValue: 'Юридическая поддержка',
      readOnly: true,
    }),
    defineField({
      name: 'bannerImage',
      title: 'Фон баннера',
      description: 'Большая картинка за заголовком наверху страницы',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Заголовок баннера (H1)',
      description: 'Например: «Юридическая поддержка»',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bannerSubtitle',
      title: 'Подпись под заголовком',
      description: 'Текст под H1. Перенос строки = новая строка на странице.',
      type: 'text',
      rows: 4,
      validation: (r) => r.max(800),
    }),
    defineField({
      name: 'description',
      title: 'Описание под заголовком секции',
      description: 'Длинный текст. Можно выделять жирным/курсивом и ставить ссылки.',
      type: 'array',
      of: [
        {
          type: 'block',
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
      name: 'areasTitle',
      title: 'Заголовок блока направлений',
      description: 'Например: «Основные направления юридической поддержки»',
      type: 'string',
      initialValue: 'Основные направления юридической поддержки',
    }),
    defineField({
      name: 'areasSubtitle',
      title: 'Подпись блока направлений',
      description: 'Например: «Нажмите на раздел, чтобы раскрыть список услуг»',
      type: 'string',
      initialValue: 'Нажмите на раздел, чтобы раскрыть список услуг',
    }),
    defineField({
      name: 'areas',
      title: 'Направления (карточки аккордеона)',
      description: 'Можно добавлять, удалять и переставлять. Иконки подбираются автоматически по порядку.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'area',
          title: 'Направление',
          fields: [
            defineField({
              name: 'title',
              title: 'Название направления',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'bullets',
              title: 'Список услуг',
              description: 'Каждая строка — отдельный пункт',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (r) => r.required().min(1),
            }),
          ],
          preview: {
            select: { title: 'title', bullets: 'bullets' },
            prepare({ title, bullets }) {
              const subtitle = Array.isArray(bullets) && bullets.length > 0
                ? `${bullets.length} ${bullets.length === 1 ? 'услуга' : 'услуг'}`
                : '';
              return { title, subtitle };
            },
          },
        },
      ],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'calloutTitle',
      title: 'Заголовок плашки «Комплексный подход»',
      type: 'string',
      initialValue: 'Комплексный подход',
    }),
    defineField({
      name: 'calloutText',
      title: 'Текст плашки «Комплексный подход»',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'calloutCtaLabel',
      title: 'Текст кнопки в плашке',
      type: 'string',
      initialValue: 'Получить консультацию',
    }),
  ],
  preview: {
    select: { title: 'bannerTitle' },
    prepare({ title }) {
      return { title: title || 'Юридическая поддержка', subtitle: '/services_page/legalservices' };
    },
  },
});
