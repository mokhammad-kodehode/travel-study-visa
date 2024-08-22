"use client"


import styles from './styles.module.css'
import 'fontsource-inter';
import ModalForm from '@/app/components/ContactForm/ContactFor';
import CountryCards from '@/app/components/PopularCountries/PopularCountries';
import { useState, useEffect } from 'react';


export default function Contact() {
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
          <div>
            <div>
              <h1>Контакты</h1>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.537434%2C55.749633&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNzQ4OTk0ODY4EkvQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LHQtdGA0LXQttC90LDRjywgMTIiCg1VJhZCFZ__XkI%2C&sctx=ZAAAAAgAEAAaKAoSCYQQkC%2Bh2EZAEeULWkjAqEVAEhIJ%2BWcG8YEd1z8RRQ4RN6eSwz8iBgABAgMEBSgKOABAkFZIAWIecmVsZXZfc2VydmljZV9hcmVhX3BlcmNlbnQ9MTAwagJydZ0BzcxMPaABAKgBAL0BveVrocIBAQCCAh1QcmVzbmVuc2theWEgTmFiZXJlemhuYXlhLCAxMooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=37.537434%2C55.749633&sspn=0.014188%2C0.004640&text=Presnenskaya%20Naberezhnaya%2C%2012&z=16.67"
              width="100%"
              height="100%"
              allowFullScreen
              className={styles.mapIframe}
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}