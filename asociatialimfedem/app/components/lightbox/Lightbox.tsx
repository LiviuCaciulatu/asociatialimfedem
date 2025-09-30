"use client";

import React, { useEffect } from 'react';
import styles from './Lightbox.module.scss';

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<Props> = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={`${styles.nav} ${styles.prev}`} aria-label="Previous" onClick={onPrev}>&larr;</button>
        <img src={images[index]} alt={`Image ${index + 1}`} className={styles.img} />
        <button className={`${styles.nav} ${styles.next}`} aria-label="Next" onClick={onNext}>&rarr;</button>
        <button className={styles.close} aria-label="Close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default Lightbox;
