import React from 'react';
import styles from './JoinUs.module.scss';

const JoinUs: React.FC = () => {
  return (
    <section className={styles.join} aria-labelledby="join-title">
      <div className={styles.inner}>
        <h2 id="join-title" className={styles.title}>
          Alăturați-vă în misiunea noastră de a sprijini pacienții cu limfedem și familiile acestora!
        </h2>
        <p className={styles.content}>
          Împreună, putem crește gradul de conștientizare, impulsionăm specializarea personalului medical și putem avea un impact pozitiv asupra vieții celor care trăiesc cu limfedem.
        </p>
        <div className={styles.subtitle}>
          Fii parte din schimbare — implică-te astăzi!
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
