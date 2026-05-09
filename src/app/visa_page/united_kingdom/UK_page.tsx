'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import styles from './styles.module.css';
import 'fontsource-inter';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import VisaFeatureCard from '@/app/components/VisaFeature/Visa_feature';
import ProcessTimelineSection from '@/app/components/ProcessTimelineSection/ProcessTimelineSection';
import { FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { UkPageData } from '@/sanity/adapters';

const FEATURE_ICONS: IconType[] = [FaPlane, FaCalendarAlt, FaBriefcase, FaSuitcaseRolling];

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

export default function UnitedKingdom({ data }: { data: UkPageData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <h1 className={styles.title_text}>{data.bannerTitle}</h1>
            <p style={{ whiteSpace: 'pre-line' }}>{data.bannerSubtitle}</p>
          </div>
        </div>
      </section>

      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt;
          <a href="/visa_page">Оформление визы</a> &gt;
          <span>Великобритания</span>
        </div>
      </div>

      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>{data.sectionTitle}</div>

        {data.mainImageUrl && (
          <div data-aos="fade-top" className={styles.image_wrapper}>
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

        {data.mainText.length > 0 && (
          <div className={styles.main_text_wrapper}>
            <PortableText value={data.mainText} components={portableComponents} />
          </div>
        )}

        {data.visaTypes.length > 0 && (
          <>
            <h2 className={styles.title_two}>{data.visaTypesTitle}</h2>
            <ul data-aos="fade-top" className={styles.process_list}>
              {data.visaTypes.map((visa, index) => (
                <li
                  key={index}
                  className={`${styles.process_list_item} ${openIndex === index ? styles.open_item : ''}`}
                >
                  <button className={styles.toggleButton} onClick={() => toggleDescription(index)}>
                    <strong>{visa.title}</strong>
                    <span className={`${styles.toggleIcon} ${openIndex === index ? styles.open : ''}`}>
                      {openIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  <div className={`${styles.description} ${openIndex === index ? styles.open : ''}`}>
                    {visa.description}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {data.features.length > 0 && (
          <>
            <h3 className={styles.title_two}>{data.featuresTitle}</h3>
            <div data-aos="fade-top" className={styles.special_wrapper}>
              {data.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i] ?? FEATURE_ICONS[FEATURE_ICONS.length - 1];
                return <VisaFeatureCard key={i} icon={Icon} title={f.title} description={f.description} />;
              })}
            </div>
          </>
        )}

        <h4 className={styles.title_two}>Необходимые документы для подачи на визу:</h4>
        <p className={styles.description}>
          Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.
        </p>
        <table data-aos="fade-top" className={styles.document_table}>
          <thead>
            <tr>
              <th>Документ</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Заграничный паспорт</td>
              <td className={styles.desc}>
                Срок действия паспорта должен быть не менее шести месяцев с момента въезда в Великобританию.
              </td>
            </tr>
            <tr>
              <td>Заполненная анкета</td>
              <td className={styles.desc}>
                Анкета для неиммиграционной визы. Заполняется онлайн, и после заполнения нужно распечатать
                подтверждение.
              </td>
            </tr>
            <tr>
              <td>Подтверждение оплаты консульского сбора</td>
              <td className={styles.desc}>
                Квитанция об оплате консульского сбора (сумма может варьироваться в зависимости от типа визы).
              </td>
            </tr>
            <tr>
              <td>Фотография</td>
              <td className={styles.desc}>Фото должно соответствовать стандартам на визу (5х5 см, на белом фоне).</td>
            </tr>
            <tr>
              <td>Подтверждение бронирования авиабилетов и проживания</td>
              <td className={styles.desc}>
                Описание маршрута, бронирование отеля, письма-приглашения от друзей или родственников (если есть).
              </td>
            </tr>
            <tr>
              <td>Финансовые документы</td>
              <td className={styles.desc}>Для деловых поездок или посещения родственников</td>
            </tr>
            <tr>
              <td>Приглашение</td>
              <td className={styles.desc}>
                Выписка с банковского счета, справка о доходах, документы на имущество, подтверждающие наличие
                средств для поездки.
              </td>
            </tr>
            <tr>
              <td>Подтверждение зачисления в учебное заведение</td>
              <td className={styles.desc}>Для студентов</td>
            </tr>
            <tr>
              <td>Приглашение на работу или контракт</td>
              <td className={styles.desc}>Для работниковтелей.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {data.processSteps.length > 0 && (
        <ProcessTimelineSection
          title={data.processTitle}
          subtitle={data.processSubtitle}
          items={data.processSteps}
        />
      )}

      <CountryCards />
    </main>
  );
}
