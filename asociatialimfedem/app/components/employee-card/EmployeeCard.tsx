'use client';

import React from 'react';
import styles from './EmployeeCard.module.scss';

interface EmployeeCardProps {
  name: string;
  position: string;
  image: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, position, image }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.avatar} />
    <h3 className={styles.name}>{name}</h3>
    <p className={styles.position}>{position}</p>
  </div>
);

export default EmployeeCard;
