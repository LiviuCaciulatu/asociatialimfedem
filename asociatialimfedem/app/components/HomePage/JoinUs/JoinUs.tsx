"use client";

import React from "react";
import Link from "next/link";
import styles from "./JoinUs.module.scss";

export default function JoinUs() {
  return (
    <section className={styles.joinUs}>
      <div className={styles.title}>
        Cum te poți&nbsp;<span className={styles.highlight}>implica?</span>
      </div>
      <div className={styles.subtitle}>
        Ne dorim să fim o voce puternică în comunitatea pacienților cu limfedem,
        dar și în comunitatea medicală.
      </div>
      <div className={styles.block}>
        <div className={`${styles.leftSide} ${styles.block1Left}`}>
          <h3 className={styles.blockTitle}>FII VOLUNTAR</h3>
          <p className={styles.blockSubtitle}>
            Oferă-ți timpul și abilitățile pentru a susține evenimentele și
            inițiativele noastre.
          </p>
          <Link href="/implica-te">
            <button className={styles.blockButton}>VEZI DETALII</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <img
            src="/assets/png/joinUs-1.png"
            alt="Join us"
            width={500}
            height={500}
            className={styles.joinImage}
          />
        </div>
      </div>
      <div className={`${styles.block} ${styles.block2}`}>
        <div className={styles.leftSide}>
            <img
              src="/assets/png/joinUs-2.png"
              alt="logo"
              className={styles.logoAnpc}
            />
        </div>
        <div className={`${styles.rightSide} ${styles.block2Right}`}>
          <h3 className={styles.blockTitle}>SHARE MISIUNII NOASTRE</h3>
          <p className={styles.blockSubtitle}>
            Ajută-ne să creștem gradul de conștientizare împărtășind misiunea
            noastră prietenilor și familiei tale.
          </p>
          <Link href="/implica-te">
            <button className={styles.blockButton}>VEZI DETALII</button>
          </Link>
        </div>
      </div>
      <div className={styles.block}>
        <div className={`${styles.leftSide} ${styles.block1Left}`}>
          <h3 className={styles.blockTitle}>CONTRIBUIE</h3>
          <p className={styles.blockSubtitle}>
            Contribuțiile tale ne permit să ne continuăm munca în folosul
            pacienților.
          </p>
          <Link href="/implica-te">
            <button className={styles.blockButton}>VEZI DETALII</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
            <img
              src="/assets/png/joinUs-3.png"
              alt="logo"
              className={styles.logoAnpc}
            />
        </div>
      </div>
    </section>
  );
}
