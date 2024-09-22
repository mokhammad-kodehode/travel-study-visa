import React, { useState, ChangeEvent, FormEvent} from 'react';
import styles from './styles.module.css'; // Стили для модального окна и формы


interface ModalFormProps {
    closeModal: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ closeModal }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Обработка данных формы
    handleCloseModal();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    // Ваша логика обработки изменений в input или textarea
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