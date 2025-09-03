"use client";

import styles from "./HomePage.module.scss";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <div className={styles.heroTitle}>
        <h1 className={styles.title}>
          Deblocarea speranței și mai multă putere în viața bolnavilor de{" "}
          <span className={styles.highlight}>limfedem</span>
        </h1>
        <h2 className={styles.subTitle}>
          Asociatia noastră are misiunea de a transforma viața pacienților cu
          limfedem din întreaga Românie.
        </h2>
        <div className={styles.btns}>
          <Link href="/implica-te">
            <button className={styles.primaryBtn}>IMPLICA-TE SI TU</button>
          </Link>
          <Link href="/contact">
            <button className={styles.secondaryBtn}>IA LEGATURA CU NOI</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
