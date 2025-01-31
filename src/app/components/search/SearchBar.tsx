import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Передаем запрос в родительский компонент
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Введите название страны..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default SearchBar;