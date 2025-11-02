"use client";
import React, { useEffect, useState } from "react";
import styles from "./CallButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const CallButton = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Проверяем, закрывал ли пользователь кнопку ранее
    const isClosed = localStorage.getItem("callButtonClosed") === "true";
    if (isClosed) return; // не показываем вообще

    // 1) через 3 сек появляется круглая кнопка
    const showTimer = setTimeout(() => setVisible(true), 10000);
    // 2) ещё через 7 сек расширяется с текстом
    const expandTimer = setTimeout(() => setExpanded(true), 17000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(expandTimer);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setExpanded(false);
    localStorage.setItem("callButtonClosed", "true"); // сохраняем, что пользователь закрыл
  };

  if (!visible) return null;

  return (
    <div className={styles.wrapper}>
      <a
        href="tel:+79857791555"
        className={`${styles.callButton} ${expanded ? styles.expanded : ""}`}
        aria-label="Позвонить Travel & Study"
      >
        {/* Пульс только пока кнопка не раскрыта */}
        {!expanded && <span className={styles.pulse} />}

        <FontAwesomeIcon icon={faPhone} className={styles.icon} />

        {expanded && <span className={styles.label}>Позвонить</span>}
      </a>

      {/* Крестик — вне таблетки, в правом верхнем углу */}
      {expanded && (
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Закрыть кнопку звонка"
        />
      )}
    </div>
  );
};

export default CallButton;
