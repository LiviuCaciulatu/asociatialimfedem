'use client';

import React, { useEffect, useState } from 'react';
import styles from './Events.module.scss';
import EventCard from '../event-card/EventCard';

interface EventItem {
  title: string;
  description: string;
  image: string;
  id: string;
}

const Events: React.FC = () => {
  const [items, setItems] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch('/assets/json/events.json')
      .then((res) => res.json())
      .then((data) => setItems(data || []))
      .catch((err) => {
        console.error('Failed to load events', err);
      });
  }, []);

  return (
    <section className={styles.events}>
      <h3 className={styles.title}>Evenimente</h3>
      <div className={styles.grid}>
        {items.map((it) => (
          <EventCard
            key={it.id}
            id={it.id}
            title={it.title}
            description={it.description}
            image={it.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
