"use client";
import React from 'react';
import styles from './Mission.module.scss';
import Link from 'next/link';

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          Misiunea asociației {' '}
          <span className={styles.highlight}>Limfedem</span>
        </h2>
        <div className={styles.content}>
          <p>
            Ne dorim să fim o voce puternică în comunitatea pacienților cu limfedem, dar și în comunitatea medicală
            pentru a crește gradul de conștientizare și înțelegere a acestei afecțiuni atât de puțin cunoscută și
            recunoscută de sistem.
          </p>
          <p>
            Prin colaborarea cu medici, fizioterapeuți, furnizori de articole medicale și alți specialiști, ne dorim
            să fim alături de pacienți în călătoria lor pentru conștientizarea, educația, gestionarea și îngrijirea
            limfedemului primar și secundar, dar și a afecțiunilor conexe limfedemului, precum lipedemul.
          </p>
          <p>
            Nu în cele din urmă dorim susținerea drepturilor pacienților care suferă de această boală cronică.
            Ne dorim să fim activi pentru a oferi sprijin emoțional, medical și juridic, informații utile și resurse
            necesare pentru gestionarea bolii.
          </p>
        </div>
        <Link href="/implica-te">
          <button className={styles.button}>IMPLICA-TE SI TU</button>
        </Link>
      </div>
      <div className={styles.right}>
            <img
              src="/assets/png/photo-1.png"
              alt="logo"
              className={styles.logoAnpc}
            />
      </div>
    </section>
  );
}
