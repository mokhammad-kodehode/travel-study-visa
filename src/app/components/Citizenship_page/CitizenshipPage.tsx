'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import styles from './styles.module.css';
import 'fontsource-inter';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import Contact from '@/app/components/contact/Contact';
import BenefitsSection from '@/app/components/BenefitsSection/BenefitsSection';
import ProcessTimelineSection from '@/app/components/ProcessTimelineSection/ProcessTimelineSection';
import type { CitizenshipCountryData } from '@/sanity/adapters';
import type { ReactNode } from 'react';

const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={styles.description}>{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function CitizenshipPage({
  data,
  advantagesSlot,
}: {
  data: CitizenshipCountryData;
  advantagesSlot?: ReactNode;
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openOrCloseChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
      if (isChatOpen) {
        window.jivo_api.close();
        setIsChatOpen(false);
      } else {
        window.jivo_api.open();
        setIsChatOpen(true);
      }
    }
  };

  const bannerStyle = data.bannerImageUrl
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data.bannerImageUrl}')`,
      }
    : undefined;

  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle}>
        <div className={styles.banner_container}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>{data.bannerTitle}</h1>
              {data.bannerSubtitle && (
                <h2 className={styles.title_text_desc} style={{ whiteSpace: 'pre-line' }}>
                  {data.bannerSubtitle}
                </h2>
              )}
            </div>
            <button onClick={openOrCloseChat} className={styles.order_btn}>
              ЗАКАЗАТЬ
            </button>
          </div>
        </div>
      </section>

      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <span>Гражданство {data.nameGenitive}</span>
        </div>
      </div>

      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>{data.sectionTitle}</div>

        {data.mainImageUrl && (
          <div className={styles.image_wrapper}>
            <Image
              src={data.mainImageUrl}
              alt={data.mainImageAlt || data.sectionTitle}
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
              className={styles.section_image}
            />
          </div>
        )}

        {data.description.length > 0 && (
          <div className={styles.main_text_wrapper}>
            <PortableText value={data.description} components={portableComponents} />
          </div>
        )}
      </section>

      {data.benefits.length > 0 && (
        <BenefitsSection title={data.benefitsTitle} subtitle={data.benefitsSubtitle} items={data.benefits} />
      )}

      {data.documents.length > 0 && (
        <section className={styles.section_text_content}>
          <h2 className={styles.title_two}>{data.documentsTitle}</h2>
          {data.documentsSubtitle && <p className={styles.section_subtitle}>{data.documentsSubtitle}</p>}
          <table className={styles.document_table}>
            <thead>
              <tr>
                <th>Документ</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              {data.documents.map((doc, i) => (
                <tr key={i}>
                  <td>{doc.name}</td>
                  <td className={styles.desc}>{doc.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.documentsOutro && <p className={styles.description}>{data.documentsOutro}</p>}
        </section>
      )}

      {data.processSteps.length > 0 && (
        <ProcessTimelineSection
          title={data.processTitle}
          subtitle={data.processSubtitle}
          items={data.processSteps}
        />
      )}

      {data.outroText.length > 0 && (
        <section className={styles.section_text_content}>
          <div className={styles.outro}>
            <PortableText value={data.outroText} components={portableComponents} />
          </div>
        </section>
      )}

      {advantagesSlot}
      <CountryCards />
      <Contact />
    </main>
  );
}
