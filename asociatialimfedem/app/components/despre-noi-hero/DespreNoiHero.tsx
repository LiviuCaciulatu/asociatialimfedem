import React from 'react';
import styles from './DespreNoiHero.module.scss';
import Link from 'next/link';

const DespreNoiHero: React.FC = () => {
  return (
    <section className={styles.hero} aria-labelledby="despre-noi-title">
      <div className={styles.inner}>
        <h1 id="despre-noi-title" className={styles.title}>Despre noi</h1>
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

export default DespreNoiHero;
