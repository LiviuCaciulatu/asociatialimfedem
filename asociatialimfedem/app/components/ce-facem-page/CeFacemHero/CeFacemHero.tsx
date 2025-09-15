import React from 'react';
import styles from './CeFacemHero.module.scss';
import Link from 'next/link';

const CeFacemHero: React.FC = () => {
  return (
    <section className={styles.hero} aria-labelledby="despre-noi-title">
      <div className={styles.inner}>
        <h1 id="despre-noi-title" className={styles.title}>Ce facem?</h1>
        <p className={styles.lead}>
          Asociatia Pacientilor cu Limfedem este o organizație non-profit dedicată îmbunătățirii vieții pacienților care suferă de limfedem, o boală cronică debilitantă care poate afecta drastic calitatea vieții și duce la complicații serioase și, în unele cazuri, la invaliditate permanentă .
        </p>
              <Link href="/implica-te">
          <button className={styles.primaryBtn}>IMPLICA-TE SI TU</button>
        </Link>
      </div>
    </section>
  );
};

export default CeFacemHero;
