"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import { useState, useEffect } from 'react';
import Contact from '../components/contact/Contact';


export default function Contact_Page() {
  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={styles.banner_container}>
           <div className={styles.breadcrumbs_wrapper}>
              <div className={styles.breadcrumbs}>
                <a href="/">Главная</a> &gt;
                <span>Контакты</span>
              </div>
            </div>
            <Contact/>
        </div>
      </section>
    </main>
  );
}