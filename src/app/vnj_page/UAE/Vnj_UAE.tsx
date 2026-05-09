'use client';

import { useState } from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import styles from './styles.module.css';
import 'fontsource-inter';
import {
  FaCalendarAlt,
  FaGlobe,
  FaBriefcase,
  FaHeartbeat,
  FaMoneyBillWave,
  FaFileAlt,
  FaHome,
  FaPassport,
  FaIdCard,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import BenefitsSection from '@/app/components/BenefitsSection/BenefitsSection';
import ProcessTimelineSection from '@/app/components/ProcessTimelineSection/ProcessTimelineSection';
import type { VnjUAEPageData } from '@/sanity/adapters';

const UAE_FEATURE_ICONS: IconType[] = [
  FaCalendarAlt,
  FaBriefcase,
  FaHeartbeat,
  FaMoneyBillWave,
  FaFileAlt,
  FaHome,
  FaGlobe,
  FaPassport,
  FaIdCard,
];

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

export default function Vnj_UAE({ data }: { data: VnjUAEPageData }) {
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('${data.bannerImageUrl}')`,
      }
    : undefined;

  return (
    <main className={styles.main}>
      <section className={styles.banner} style={bannerStyle}>
        <div className={styles.banner_container}>
          <div className={styles.banner_title}>
            <h1 className={styles.title_text}>{data.bannerTitle}</h1>
            {data.bannerSubtitle && (
              <p style={{ whiteSpace: 'pre-line' }}>{data.bannerSubtitle}</p>
            )}
            <button onClick={openOrCloseChat} className={styles.main_btn}>
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <a href="/vnj_page">Страны</a> &gt;
          <span>Объединённые Арабские Эмираты</span>
        </div>
      </div>

      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>{data.sectionTitle}</div>
        {data.description.length > 0 && (
          <div className={styles.main_text_wrapper}>
            <PortableText value={data.description} components={portableComponents} />
          </div>
        )}
      </section>

      {data.features.length > 0 && (
        <BenefitsSection
          title={data.featuresTitle}
          subtitle={data.featuresSubtitle}
          items={data.features}
          icons={UAE_FEATURE_ICONS}
        />
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
        </section>
      )}

      {data.processSteps.length > 0 && (
        <ProcessTimelineSection
          title={data.processTitle}
          subtitle={data.processSubtitle}
          items={data.processSteps}
        />
      )}
    </main>
  );
}
