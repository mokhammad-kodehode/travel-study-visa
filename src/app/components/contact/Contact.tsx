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
                </div>
            </div>
        </section>
    );
}

export default Contact;