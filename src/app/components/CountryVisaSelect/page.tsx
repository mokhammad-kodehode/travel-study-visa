"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const items = [
  {
    href: "/visa_page/america",
    title: "Америка",
    src: "/images/Flags/america.svg",
    alt: "Флаг США и Канады",
  },
  {
    href: "/visa_page/europe",
    title: "Европа",
    src: "/images/Flags/european-union.svg",
    alt: "Флаг Евросоюза",
  },
  {
    href: "/visa_page/united_kingdom",
    title: "Великобритания",
    src: "/images/Flags/united-kingdom.svg",
    alt: "Флаг Великобритании",
  },
  {
    href: "/visa_page/asia",
    title: "Азия",
    src: "/images/Flags/asia.svg", // круглый значок
    alt: "Иконка Азии",
  },
];

export default function CountryVisaSelect() {
  return (
    <nav className={styles.countrySelect} aria-label="Выбор направления">
      {items.map((it) => (
        <Link key={it.href} href={it.href} className={styles.cardLink}>
          <div className={styles.countryCard}>
            <div className={styles.flagWrap} aria-hidden="true">
              {/* Заполняем контейнер, картинка внутри центрируется и не «рвёт» пропорции */}
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 820px) 40vw, 220px"
                className={styles.flagImg}
                priority={false}
              />
            </div>
            <span className={styles.title}>{it.title}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
