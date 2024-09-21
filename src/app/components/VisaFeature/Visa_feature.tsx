import React from 'react';
import styles from './styles.module.css';
import { IconType } from 'react-icons';

interface VisaFeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const VisaFeatureCard: React.FC<VisaFeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_wrapper}>
        <Icon className={styles.icon} />
        <h3 className={styles.title_card}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default VisaFeatureCard;