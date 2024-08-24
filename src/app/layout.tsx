import type { Metadata } from 'next';
import 'fontsource-poppins';
import 'fontsource-inter';
import './globals.css';
import { LoaderProvider } from './context/LoaderContext';
import ClientRootLayout from './components/ClientRootLayout/ClientRootLayout';

export const metadata: Metadata = {
  title: 'Travel and Study',
  description: 'Visa project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <LoaderProvider>
          <ClientRootLayout>
            {children}
          </ClientRootLayout>
        </LoaderProvider>
      </body>
    </html>
  );
}