"use client";

import Link from "next/link";
import styles from "./WhyUsHero.module.css";
import {
  FaShieldAlt,
  FaPassport,
  FaGlobeEurope,
  FaFileSignature,
  FaGavel,
  FaGraduationCap,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";

export default function WhyUsHero() {
  const items = [
    {
      icon: <FaShieldAlt />,
      title: "Международный центр туризма, образования и права",
      text:
        "станет вашим надёжным партнёром в мире путешествий, обучения и юридической поддержки.",
    },
    {
      icon: <FaFileSignature />,
      title: "Профессиональные переводы, апостиль и сопровождение кейса",
      text:
        "Мы берём на себя весь процесс — от перевода и легализации документов до комплексного ведения вашего дела на всех этапах.",
    },
    {
      icon: <FaGlobeEurope />,
      title: "Туризм и визовая поддержка",
      text:
        "Поможем со сбором документов, оформлением виз, ВНЖ и гражданства; бронированием отелей и авиабилетов.",
    },
    {
      icon: <FaGavel />,
      title: "Юридическая помощь",
      text:
        "Миграционное, гражданское, семейное, трудовое и международное право — сопровождение и защита интересов.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Образовательные программы",
      text:
        "Подберём обучение в России и за рубежом — от языковых курсов до поступления в ведущие университеты.",
    },
    {
      icon: <FaHandsHelping />,
      title:
        "Независимо от цели — учёба, отдых, эмиграция или правовые вопросы",
      text:
        "мы обеспечим профессиональное сопровождение на каждом этапе.",
    },
    {
      icon: <FaStar />,
      title: "Комфорт. Безопасность. Экспертность.",
      text: "Всё в одном центре.",
    },
    {
      icon: <FaPassport />,
      title: "Визовый центр",
      text:
        "Визы всех категорий, апелляции после отказов, контроль сроков и актуальные требования консульств.",
    },
  ];

  return (
    <section className={styles.wrap} aria-labelledby="why-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.lead}>
            Один центр — все решения: путешествия, образование и юридическая
            поддержка без стресса.
          </p>
        </header>

        <div className={styles.grid}>
          {items.map((it, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.icon}>{it.icon}</div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.text}>{it.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/About_page" className={styles.btnPrimary}>
            О компании
          </Link>
          <a href="tel:+79857791555" className={styles.btnGhost}>
            Консультация
          </a>
        </div>
      </div>

      {/* декоративные «пузырьки» */}
      <span className={`${styles.bubble} ${styles.b1}`} />
      <span className={`${styles.bubble} ${styles.b2}`} />
      <span className={`${styles.bubble} ${styles.b3}`} />
    </section>
  );
}
