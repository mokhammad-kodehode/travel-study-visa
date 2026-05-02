// Локальная загрузка .env.local — postbuild запускается отдельным процессом и
// env переменные из next build туда не пробрасываются. На Vercel переменные
// уже лежат в process.env из dashboard, файла .env.local там нет — пропускаем.
const fs = require('fs');
const path = require('path');
try {
  const envFile = fs.readFileSync(path.resolve(__dirname, '.env.local'), 'utf8');
  for (const line of envFile.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const [, key, raw] = m;
    if (process.env[key]) continue;
    process.env[key] = raw.replace(/^['"]|['"]$/g, '');
  }
} catch {
  /* .env.local нет — это нормально на проде */
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.travelandstudy.ru',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Исключаем мёртвые/служебные пути.
  // /vnj_page/Spain и /vnj_page/Bulgaria — старые статические страницы, заменены на /vnj/spain и /vnj/bulgaria.
  exclude: [
    '/admin',
    '/admin/*',
    '/api/*',
    '/vnj_page/Spain',
    '/vnj_page/Bulgaria',
    '/components/*',
  ],

  // Динамические маршруты тянем из Sanity, чтобы /visa/[id], /visa-asia/[id], /vnj/[id] попали в sitemap.
  additionalPaths: async (config) => {
    const { createClient } = require('@sanity/client');

    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    if (!projectId || !dataset) {
      console.warn('[next-sitemap] Sanity env vars не заданы — динамические маршруты пропущены');
      return [];
    }

    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-12-01',
      useCdn: false,
      perspective: 'published',
      token: process.env.SANITY_API_READ_TOKEN,
    });

    const visaCountries = await client.fetch(
      `*[_type == "country" && defined(slug.current)]{ "slug": slug.current, region }`
    );
    const vnjCountries = await client.fetch(
      `*[_type == "vnjCountry" && defined(slug.current)]{ "slug": slug.current }`
    );

    console.log(`[next-sitemap] Sanity: visa=${visaCountries.length}, vnj=${vnjCountries.length}`);

    const paths = [];

    for (const c of visaCountries) {
      const base = c.region === 'asia' ? '/visa-asia' : '/visa';
      paths.push(await config.transform(config, `${base}/${c.slug}`));
    }
    for (const c of vnjCountries) {
      paths.push(await config.transform(config, `/vnj/${c.slug}`));
    }

    return paths;
  },
};
