import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className={styles.contacts_section}>
            <div className={styles.contacts_wrapper}>
                <div className={styles.contacts_container}>
                    <div className={styles.contact_info}>
                        <h1>Travel and Study</h1>
                        <div className={styles.contact_item}>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                            <p>+7(985)779-15-55</p>
                        </div>
                        <div className={styles.contact_item}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <p>traveland.study@yandex.ru</p>
                        </div>
                        <div className={styles.contact_item}>
                            <FontAwesomeIcon className={styles.adress_icon} icon={faMapMarkerAlt}  />
                            <p>г.Москва, Пресненская набережная, 12</p>
                        </div>
                        <div className={styles.social_media}>
                            <h2>Мы в социальных сетях</h2>
                            <div className={styles.social_icons}>

                            </div>
                        </div>
                    </div>
                </div>
                 <div className={styles.map_container}>
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
    );
}

export default Contact;