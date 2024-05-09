import React, { useState, FormEvent } from 'react';
import styles from './styles.module.css';

interface FormProps {
  // You can define props here if needed
}

const MyFormThree: React.FC<FormProps> = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('');

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
        <label htmlFor="country" className={styles.label}>В какую страну хотите ВНЖ?</label>
            <select
            id="country"
            className={styles.selectField}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            >
            <option value="">Выберите страну</option>
            <option value="Bulgaria">Болгария</option>
            <option value="Spain">Испания</option>
            <option value="Serbia">Сербия</option>
            <option value="UAE">ОАЭ</option>
            <option value="Hungary">Вернгрия</option>
            <option value="France">Франция</option>
            <option value="Armenia">Армения</option>
            <option value="Italy">Италия</option>
            </select>
      </div>
      <p>Поля отмеченные <span> * </span> обязательны для заполнения</p>
      <button type="submit" className={styles.submitButton}>ОТПРАВИТЬ</button>
    </form>
  );
};

export default MyFormThree;