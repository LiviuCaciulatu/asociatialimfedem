'use client';

import React from 'react';
import styles from './EventCard.module.scss';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date?: string;
  location?: string;
  image?: string;
  description?: string;
  href?: string;
  id?: string;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, image, description, href, id, onClick }) => {
  const content = (
    <div className={styles.card}>
      {image && (
        <div className={styles.media}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        {(date || location) && (
          <div className={styles.meta}>
            {date && <span className={styles.date}>{date}</span>}
            {date && location && <span className={styles.sep}>•</span>}
            {location && <span className={styles.location}>{location}</span>}
          </div>
        )}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.footer}>
          {href || id ? (
            <Link href={href ?? `/evenimente/${id}/`} className={styles.cta}>
              Citeste mai departe...
            </Link>
          ) : (
            <button className={styles.cta} onClick={onClick}>
              Citeste mai departe...
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return content;
};

export default EventCard;
