
import type { Metadata } from 'next'
import 'fontsource-poppins';
import 'fontsource-inter';
import '@fontsource/playfair-display/cyrillic-700.css';
import '@fontsource/playfair-display/cyrillic-800.css';
import '@fontsource/playfair-display/cyrillic-800-italic.css';
import '@fontsource/playfair-display/latin-700.css';
import '@fontsource/playfair-display/latin-800.css';
import '@fontsource/playfair-display/latin-800-italic.css';
import './globals.css'
import SiteShell from './components/SiteShell';
import { SITE_URL } from '@/config/contacts';
import { client } from '@/sanity/client';
import { allCitizenshipCountriesQuery } from '@/sanity/queries';
import { sanityToCitizenshipList, type SanityCitizenshipListItem } from '@/sanity/adapters';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Travel and Study',
  description: 'Оформление виз, ВНЖ и гражданство.',
  keywords: ['визовые услуги', 'ВНЖ', 'гражданство', 'путешествия', 'учеба за границей', 'Travel and Study'],
  openGraph: {
    title: 'Travel and Study',
    description: 'Оформление виз, ВНЖ и гражданство.',
    url: SITE_URL,
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/logo.svg',
        width: 600,
        height: 600,
        alt: 'Логотип Travel and Study',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Список стран гражданства — для navbar dropdown и footer.
  // ISR обеспечивает revalidate в страницах ниже; layout сам по себе кешируется build-time + по запросам.
  const rawCountries = await client.fetch<SanityCitizenshipListItem[]>(allCitizenshipCountriesQuery);
  const citizenshipCountries = sanityToCitizenshipList(rawCountries);

  return (
    <html lang="ru">
      <body>
        <SiteShell citizenshipCountries={citizenshipCountries}>{children}</SiteShell>
        <script src="//code.jivosite.com/widget/V03s3szzXR" async></script>
      </body>
    </html>
  )
}
