'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './headerSearch.module.css';
import {
  europeCountries,
  asiaCountries,
  AmericaCountries,
  type CountryData,
} from '@/app/data/CountryData';

type Region = 'Европа' | 'Азия' | 'Америка';

type SearchItem = CountryData & { region: Region };

const ALL_COUNTRIES: SearchItem[] = [
  ...europeCountries.map((c) => ({ ...c, region: 'Европа' as Region })),
  ...asiaCountries.map((c) => ({ ...c, region: 'Азия' as Region })),
  ...AmericaCountries.map((c) => ({ ...c, region: 'Америка' as Region })),
];

const MAX_RESULTS = 6;

const HeaderSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.name_two.toLowerCase().includes(q) ||
        c.nameof.toLowerCase().includes(q),
    ).slice(0, MAX_RESULTS);
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const go = (item: SearchItem) => {
    setQuery('');
    setIsOpen(false);
    router.push(item.pageUrl);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(results[activeIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.inputBox}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Поиск страны..."
          className={styles.input}
          aria-label="Поиск страны"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-controls="header-search-results"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className={styles.clear}
            aria-label="Очистить"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </div>

      {showDropdown && (
        <ul
          id="header-search-results"
          role="listbox"
          className={styles.dropdown}
        >
          {results.length === 0 ? (
            <li className={styles.empty}>Ничего не найдено</li>
          ) : (
            results.map((item, i) => (
              <li
                key={`${item.region}-${item.nameof}`}
                role="option"
                aria-selected={i === activeIndex}
                className={`${styles.item} ${i === activeIndex ? styles.itemActive : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => go(item)}
              >
                <Image
                  src={item.flagUrl}
                  alt=""
                  width={24}
                  height={18}
                  className={styles.flag}
                />
                <span className={styles.name}>{item.name}</span>
                <span className={styles.region}>{item.region}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default HeaderSearch;
