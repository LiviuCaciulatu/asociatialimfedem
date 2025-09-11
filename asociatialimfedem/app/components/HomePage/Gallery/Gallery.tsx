'use client';

import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';

interface Item {
  image: string;
  alt?: string;
}

const Gallery: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {

  const galleryFiles = ['g1.jpg', 'g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpeg', 'g6.jpeg'];
  const imgs = galleryFiles.map((f) => ({ image: `/assets/gallery/${f}`, alt: f }));
  setItems(imgs);
  }, []);

  return (
    <section className={styles.gallery}>
      <h3 className={styles.title}>Galerie&nbsp; <span className={styles.highlight}>foto</span></h3>
      <p className={styles.description}>Ne dorim să fim o voce puternică în comunitatea pacienților cu limfedem, dar și în comunitatea medicală.</p>
      <div className={styles.grid}>
        {items.map((it, idx) => (
          <div
            key={idx}
            className={`${styles.item} ${idx >= 4 ? styles.span2 : ''}`}
          >
            <img src={it.image} alt={it.alt || 'imagine'} className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
