import React from 'react';
import styles from './echipa-noastra-Hero.module.scss';
import Link from 'next/link';

const EchipaNoastraHero: React.FC = () => {
  return (
    <section className={styles.hero} aria-labelledby="echipa-noastra-title">
      <div className={styles.inner}>
        <h1 id="echipa-noastra-title" className={styles.title}>Echipa noastră</h1>
        <p className={styles.lead}>
          Asociația noastră are misiunea de a transforma viața pacienților cu imfedem din întreaga Românie.
        </p>
              <Link href="/implica-te">
          <button className={styles.primaryBtn}>IMPLICA-TE SI TU</button>
        </Link>
      </div>
    </section>
  );
};

export default EchipaNoastraHero;
