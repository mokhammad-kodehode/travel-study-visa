import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faArrowRight, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css';
import type { AboutCtaAction } from '@/sanity/adapters';
import { PHONE_TEL, TELEGRAM_URL, WHATSAPP_URL } from '@/config/contacts';
import ChatButton from './ChatButton';

function resolveHref(action: AboutCtaAction, customHref: string): string {
  switch (action) {
    case 'jivo':
      return '#';
    case 'contacts':
      return '/contacts';
    case 'whatsapp':
      return WHATSAPP_URL;
    case 'telegram':
      return TELEGRAM_URL;
    case 'phone':
      return `tel:${PHONE_TEL}`;
    case 'custom':
      return customHref || '#';
  }
}

function isExternal(action: AboutCtaAction): boolean {
  return action === 'whatsapp' || action === 'telegram' || action === 'custom';
}

function getButtonIcon(action: AboutCtaAction): IconDefinition {
  switch (action) {
    case 'jivo':
      return faComments;
    case 'whatsapp':
      return faWhatsapp;
    case 'telegram':
      return faTelegram;
    case 'phone':
      return faPhone;
    default:
      return faArrowRight;
  }
}

type Props = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryAction: AboutCtaAction;
  primaryHref: string;
  secondaryEnabled: boolean;
  secondaryLabel: string;
  secondaryAction: AboutCtaAction;
  secondaryHref: string;
};

export default function CtaSection(props: Props) {
  const primary = {
    href: resolveHref(props.primaryAction, props.primaryHref),
    external: isExternal(props.primaryAction),
    icon: getButtonIcon(props.primaryAction),
    isJivo: props.primaryAction === 'jivo',
  };
  const secondary = props.secondaryEnabled
    ? {
        href: resolveHref(props.secondaryAction, props.secondaryHref),
        external: isExternal(props.secondaryAction),
        icon: getButtonIcon(props.secondaryAction),
        isJivo: props.secondaryAction === 'jivo',
      }
    : null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden />
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
          <div className={styles.buttons}>
            {primary.isJivo ? (
              <ChatButton
                label={props.primaryLabel}
                icon={primary.icon}
                className={`${styles.btn} ${styles.btnPrimary}`}
                iconClassName={styles.btnIcon}
                iconPosition="right"
              />
            ) : (
              <Link
                href={primary.href}
                className={`${styles.btn} ${styles.btnPrimary}`}
                {...(primary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span>{props.primaryLabel}</span>
                <FontAwesomeIcon icon={primary.icon} className={styles.btnIcon} />
              </Link>
            )}

            {secondary &&
              (secondary.isJivo ? (
                <ChatButton
                  label={props.secondaryLabel}
                  icon={secondary.icon}
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  iconClassName={styles.btnIcon}
                  iconPosition="left"
                />
              ) : (
                <Link
                  href={secondary.href}
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  {...(secondary.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <FontAwesomeIcon icon={secondary.icon} className={styles.btnIcon} />
                  <span>{props.secondaryLabel}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
