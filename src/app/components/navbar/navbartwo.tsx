'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const MyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Меняем состояние при прокрутке
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`navbar-transparent ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        {/* Логотип */}
        <Navbar.Brand href="/">
          {' '}Visa Travels
        </Navbar.Brand>

        {/* Кнопка для мобильного меню */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Главные пункты меню */}
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/about_page">О компании</Nav.Link>

            {/* Наши услуги */}
            <NavDropdown title="Наши услуги" id="services-dropdown">
              <NavDropdown.Item href="/visa_page">Визовые услуги</NavDropdown.Item>
              <NavDropdown.Item href="/services_page/study_page">Образовательные программы</NavDropdown.Item>
              <NavDropdown.Item href="/services_page/umra">Умра и туры в Саудовскую Аравию</NavDropdown.Item>
              <NavDropdown.Item href="/services_page/zagran_passport">Оформление загранпаспортов</NavDropdown.Item>
              <NavDropdown.Item href="/services_page/booking_tickets">Бронирование авиа и отелей</NavDropdown.Item>
            </NavDropdown>

            {/* Визы */}
            <NavDropdown title="Визы" id="visa-dropdown">
              {/* Европа */}
              <NavDropdown title="Европа" id="europe-dropdown" drop="end">
                {[{ name: 'Франция', url: '/visa_page/europe/france' },
                  { name: 'Германия', url: '/visa_page/europe/germany' },
                  { name: 'Испания', url: '/visa_page/europe/spain' }
                ].map((country) => (
                  <NavDropdown.Item key={country.name} href={country.url}>
                    {country.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* Америка */}
              <NavDropdown title="Америка" id="america-dropdown" drop="end">
                {[{ name: 'США', url: '/visa_page/america/usa' },
                  { name: 'Канада', url: '/visa_page/america/canada' }
                ].map((country) => (
                  <NavDropdown.Item key={country.name} href={country.url}>
                    {country.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown.Item href="/visa_page/united_kingdom">Великобритания</NavDropdown.Item>
              <NavDropdown.Item href="/visa_page/saudi_arabia">Саудовская Аравия</NavDropdown.Item>
            </NavDropdown>

            {/* ВНЖ */}
            <NavDropdown title="ВНЖ" id="vnj-dropdown">
              <NavDropdown.Item href="/vnj/Bulgaria">Болгария</NavDropdown.Item>
              <NavDropdown.Item href="/vnj/Spain">Испания</NavDropdown.Item>
              <NavDropdown.Item href="/vnj/France">Франция</NavDropdown.Item>
              <NavDropdown.Item href="/vnj/UAE">ОАЭ</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/grajdanstvo_ruminaya">Гражданство Румынии</Nav.Link>
            <Nav.Link href="/contact_page">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Контакты */}
        <div className="d-flex align-items-center">
          <a href="tel:+7(900)555-42-77" className="me-3">
            <FontAwesomeIcon icon={faPhone} /> +7(900)555-42-77
          </a>
          <a
            href="https://t.me/travelandstudyru"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://www.google.com/maps/place/Presnenskaya+Naberezhnaya,+12,+Moskva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> г. Москва, Пресненская набережная, 12
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
