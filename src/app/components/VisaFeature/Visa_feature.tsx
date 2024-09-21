import React from 'react';
import styles from './styles.module.css';
import { IconType } from 'react-icons'; // Библиотека для использования иконок, например, react-icons

interface VisaFeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const VisaFeatureCard: React.FC<VisaFeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default VisaFeatureCard;