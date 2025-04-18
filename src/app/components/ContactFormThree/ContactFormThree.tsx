"use client"

import React, { useState, FormEvent } from 'react';
import styles from './styles.module.css';
import { europeCountries } from '@/app/data/CountryDataVnj';

const MyFormThree: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`Name: ${name}, Phone: ${phoneNumber}, Country: ${country}, Comment: ${comment}`);
    // Здесь можешь добавить отправку данных
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
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Контактный телефон"
          required
        />
      </div>

      <div>
        <label htmlFor="country" className={styles.label}>В какую страну хотите ВНЖ? <span> * </span></label>
        <select
          id="country"
          className={styles.selectField}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Выберите страну</option>
          {europeCountries.map((item) => (
            <option key={item.nameof} value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="comment" className={styles.label}>Комментарий или вопрос</label>
        <textarea
          id="comment"
          className={styles.textareaField}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Дополнительная информация..."
        />
      </div>

      <p>Поля отмеченные <span> * </span> обязательны для заполнения</p>
      <button type="submit" className={styles.submitButton}>ОТПРАВИТЬ</button>
    </form>
  );
};

export default MyFormThree;
