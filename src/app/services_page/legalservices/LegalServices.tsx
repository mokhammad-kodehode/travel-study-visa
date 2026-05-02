"use client";

import styles from "./styles.module.css";
import la from "./legalAreas.module.css";
import "fontsource-inter";
import { useState, type ReactNode } from "react";
import {
  FaPassport,
  FaFileSignature,
  FaGlobe,
  FaGraduationCap,
  FaBuilding,
  FaBalanceScale,
  FaChevronDown,
} from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import Contact from "@/app/components/contact/Contact";
import ServicesList from "@/app/components/OurServices/OurServices";
import { PHONE_TEL } from "@/config/contacts";
import type { LegalServicesPageData } from "@/sanity/adapters";

// Иконки подбираются по индексу. Если карточек больше — берём последнюю иконку как fallback.
const AREA_ICONS = [FaGlobe, FaPassport, FaFileSignature, FaGraduationCap, FaBuilding, FaBalanceScale];

export default function LegalServices({ data, valuesSlot }: { data: LegalServicesPageData; valuesSlot?: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const openOrCloseChat = () => {
    if (typeof window !== "undefined" && (window as any).jivo_api) {
      if (isChatOpen) {
        (window as any).jivo_api.close();
        setIsChatOpen(false);
      } else {
        (window as any).jivo_api.open();
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
        <div className={`${styles.banner_container} ${styles.mobileReverse}`}>
          <div className={styles.banner_title}>
            <div className={styles.banner_title_text}>
              <h1 className={styles.title_text}>{data.bannerTitle}</h1>
              {data.bannerSubtitle && (
                <h2 className={styles.title_text_desc} style={{ whiteSpace: "pre-line" }}>
                  {data.bannerSubtitle}
                </h2>
              )}
              <button onClick={openOrCloseChat} className={styles.order_btn}>
                ЗАКАЗАТЬ
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.breadcrumbs_wrapper}>
        <div className={styles.breadcrumbs}>
          <a href="/">Главная</a> &gt; <a href="/services_page">Наши услуги</a> &gt;{" "}
          <span>{data.bannerTitle}</span>
        </div>
      </div>

      <section className={styles.section_text_content}>
        <div className={styles.section_text_content_title}>{data.bannerTitle}</div>

        <div className={styles.description}>
          <PortableText value={data.description} />
        </div>

        {data.areas.length > 0 && (
          <section className={la.wrap} aria-labelledby="legal-areas-title">
            <header className={la.head}>
              <h3 id="legal-areas-title" className={la.title}>
                {data.areasTitle}
              </h3>
              {data.areasSubtitle && <p className={la.sub}>{data.areasSubtitle}</p>}
            </header>

            <div className={la.grid}>
              {data.areas.map((area, index) => {
                const isOpen = openIndex === index;
                const bodyId = `body-${index}`;
                const titleId = `title-${index}`;
                const Icon = AREA_ICONS[index] ?? AREA_ICONS[AREA_ICONS.length - 1];

                return (
                  <article
                    key={area._key ?? index}
                    className={`${la.card} ${isOpen ? la.open : ""}`}
                    aria-labelledby={titleId}
                  >
                    <button
                      className={la.cardHead}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-controls={bodyId}
                      aria-expanded={isOpen}
                      id={titleId}
                    >
                      <span className={la.icon}>
                        <Icon />
                      </span>
                      <span className={la.cardTitle}>{area.title}</span>
                      <FaChevronDown className={`${la.chev} ${isOpen ? la.chevOpen : ""}`} />
                    </button>

                    <div
                      id={bodyId}
                      className={la.body}
                      hidden={!isOpen}
                      style={{ maxHeight: isOpen ? "420px" : "0px" }}
                    >
                      <ul className={la.list}>
                        {area.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            {(data.calloutText || data.calloutTitle) && (
              <div className={la.callout}>
                <div>
                  <h4 className={la.calloutTitle}>{data.calloutTitle}</h4>
                  {data.calloutText && <p className={la.calloutText}>{data.calloutText}</p>}
                </div>
                <a href={`tel:${PHONE_TEL}`} className={la.cta}>
                  {data.calloutCtaLabel}
                </a>
              </div>
            )}
          </section>
        )}
      </section>

      {valuesSlot}
      <Contact />
      <ServicesList />
    </main>
  );
}
