import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faCogs, faTrophy, faDollarSign, faHeadset, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Styles.module.css';


const iconMap: Record<string, any> = {
  "Expertise Assured": faMedal,
  "Tailored Solutions": faCogs,
  "Proven Excellence": faTrophy,
  "Affordable Quality": faDollarSign,
  "Reliable Support": faHeadset
};

interface IconSelectorProps {
  title: string;
}

function IconSelector({ title }: IconSelectorProps) {
  const icon = iconMap[title] || faQuestionCircle; // Default icon if title not found

  return (
    <div className={styles.Icon}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default IconSelector;