import React, { useState, FormEvent } from 'react';
import styles from './styles.module.css';

interface FormProps {
  // You can define props here if needed
}

const MyForm: React.FC<FormProps> = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [typeVisa, setTypeVisa] = useState<string>('');

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
        <label htmlFor="country" className={styles.label}>В какую страну хотите визу?</label>
            <select
            id="country"
            className={styles.selectField}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            >
            <option value="">Выберите страну</option>
            <option value="Germany">Германия</option>
            <option value="France">Франция</option>
            <option value="Italy">Италия</option>
            <option value="Spain">Испания</option>
            <option value="United Kingdom">Великобритания</option>
            <option value="Netherlands">Нидерланды</option>
            <option value="Greece">Греция</option>
            <option value="Sweden">Швеция</option>
            <option value="Poland">Польша</option>
            <option value="Norway">Норвегия</option>
            <option value="Denmark">Дания</option>
            <option value="USA">США</option>
            <option value="Canada">Канада</option>
            <option value="Japan">Япония</option>
            </select>
      </div>
      <div>
        <label htmlFor="typeofvisa" className={styles.label}>Тип визы</label>
            <select
            id="typeofvisa"
            className={styles.selectField}
            value={typeVisa}
            onChange={(e) => setTypeVisa(e.target.value)}
            required
            >
            <option value="">Выберите тип визы</option>
            <option value="tourism">Туризм</option>
            <option value="studies">Учеба</option>
            <option value="work">Работа</option>
            </select>
      </div>
      <p>Поля отмеченные <span> * </span> обязательны для заполнения</p>
      <button type="submit" className={styles.submitButton}>ОТПРАВИТЬ</button>
    </form>
  );
};

export default MyForm;