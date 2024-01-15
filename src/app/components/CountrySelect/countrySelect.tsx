
"use client"
import React, { useState, ChangeEvent } from 'react';
import styles from './styles.module.css'; 

interface CountrySelectProps {
  countries: string[]; // Массив стран
}

const CountrySelect: React.FC<CountrySelectProps> = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleLearnMoreClick = () => {
    if (selectedCountry) {
      // Здесь вы можете добавить логику для перехода на страницу с условиями для выбранной страны.
      // Мы оставим это для будущего добавления.
      console.log(`Выбрана страна: ${selectedCountry}`);
    }
  };

  return (
    <div className={styles.select_container}>
      <select
        id="countrySelect"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className={styles.select}
      >
        <option value="">В какую страну вам нужна виза?</option>
        {countries.map((country, index) => (
          <option className={styles.option} key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <button className={styles.select_btn} onClick={handleLearnMoreClick}>Узнать условия</button>
    </div>
  );
};

export default CountrySelect;