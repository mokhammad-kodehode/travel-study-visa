"use client";

import React, { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";
import Link from "next/link";

const STORAGE_KEY = "cookieConsent"; // "accepted" | "rejected"

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Уже есть решение? Не показываем
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === "accepted" || val === "rejected") return;

    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    // тут можно включать аналитики/трекинг, если нужно
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
    // тут можно отключать/не включать необязательные куки
  };

  if (!visible) return null;

  return (
    <div
      className={styles.wrapper}
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на использование cookies"
    >
      <div className={styles.card}>
        <div className={styles.text}>
          <h4 className={styles.title}>Мы используем cookies</h4>
          <p className={styles.desc}>
            Они помогают улучшить работу сайта, запоминать ваши настройки и
            показывать актуальный контент. Подробности — в{" "}
            <Link href="/Privacy_policy_page" className={styles.link}>
              Политике конфиденциальности
            </Link>
            .
          </p>
        </div>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnGhost}`} onClick={handleReject}>
            Отклонить
          </button>
          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleAccept}>
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
