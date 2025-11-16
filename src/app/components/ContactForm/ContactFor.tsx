import React, { useState, ChangeEvent, FormEvent} from 'react';
import styles from './styles.module.css'; // Стили для модального окна и формы


interface ModalFormProps {
    closeModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ closeModal }) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName = (event.currentTarget.elements.namedItem('fullName') as HTMLInputElement).value;
    const phone = (event.currentTarget.elements.namedItem('phone') as HTMLInputElement).value;
    const comment = (event.currentTarget.elements.namedItem('comment') as HTMLTextAreaElement).value;

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone, comment }),
      });

      const result = await res.json();

      if (result.success) {
        alert('Заявка отправлена!');
        closeModal();
      } else {
        alert('Произошла ошибка при отправке');
      }
    } catch (err) {
      alert('Ошибка соединения с сервером');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
  };

  return (
    <>
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button onClick={closeModal} className={styles.closeButton}>&times;</button>
            <h2>Оставить заявку</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Поля формы */}
                <div className={styles.input_container}>
                    <div className={styles.name_input}>
                        <label htmlFor="fullName">Представьтесь (ФИО) <span> * </span></label>
                        <input type="text" id="fullName" placeholder="ФИО" required />
                    </div>
                    <div className={styles.phone_input}>
                        <label htmlFor="phone">Контактный телефон <span> * </span></label>
                        <input type="tel" id="phone" placeholder="Контактный телефон" required />
                    </div>
                </div>
                <div className={styles.text_input}>
                    <label htmlFor="comment">Комментарий</label>
                    <textarea id="comment" placeholder="Комментарий"></textarea>
                </div>
                <p>Поля отмеченные <span> * </span> обязательны для заполнения</p>
                <button type="submit" className={styles.submitButton}>ОТПРАВИТЬ</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default ModalForm;