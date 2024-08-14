import React, { useState, FormEvent } from 'react';
import styles from './styles.module.css';

interface FormProps {
  // You can define props here if needed
}

const MyFormServices: React.FC<FormProps> = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [services, setServices] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle the form submission
    console.log(`Name: ${name}, Phone: ${phoneNumber}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <label htmlFor="name" className={styles.label}>Представьтесь (ФИО) <span> * </span></label>
        <input
          type="text"
          id="name"
          className={styles.inputField}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ФИО" 
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className={styles.label}>Контактный телефон <span> * </span></label>
        <input
          type="tel"
          id="phone"
          className={styles.inputField}
          value={phoneNumber}
          placeholder="Контактный телефон"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
         <label htmlFor="services" className={styles.label}>Наши Услуги</label>
            <select
             id="services"
             className={styles.selectField}
             value={services}
              onChange={(e) => setServices(e.target.value)}
                        >
                        <option value="">Выберите услугу</option>
                        <option value="Zagran">Оформление загран паспорта</option>
                        <option value="tickets">Бронирование авиа и жд билетов</option>
                        <option value="hotels">Бронирование отелей</option>
                        <option value="Visa">Оформление визы</option>
                        <option value="VNJ">Оформление  ВНЖ</option>
                        <option value="citizenship">Оформление гражданство</option>
                        <option value="study">Образование</option>
                        </select>
                  </div>
                  <div className={styles.text_input}>
                    <label className={styles.label} htmlFor="comment">Комментарий</label>
                    <textarea id="comment" placeholder="Комментарий"></textarea>
                </div>
      <p>Поля отмеченные <span> * </span> обязательны для заполнения</p>
      <button type="submit" className={styles.submitButton}>ОТПРАВИТЬ</button>
    </form>
  );
};

export default MyFormServices;