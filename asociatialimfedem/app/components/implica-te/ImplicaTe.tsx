import React from "react";
import styles from "./ImplicaTe.module.scss";
import Link from "next/link";

const ImplicaTe: React.FC = () => {
  return (
    <section className={styles.implica} aria-labelledby="implica-title">
      <h2 id="implica-title" className={styles.title}>
        Cum te poți implica?
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Persoane fizice</h3>
          <p>Vezi mai multe informații despre completarea formularului 230.</p>
          <Link className={styles.button} href="/formular-230">
            VEZI DETALII
          </Link>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Persoane juridice</h3>
          <p>
           Redirecționează în 3 pași simpli!
          </p>
          <Link className={styles.button} href="/donate">
            VEZI DETALII
          </Link>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Transfer Bancar</h3>
          <p>
           Cod de înregistrare fiscală: <span className={styles.highlight}>47632542</span>
          </p>
          <p>
           Cont în Ron nr. <br /><span className={styles.highlight}>RO80INGB0000999913530971</span><br />deschis la ING,
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Donează online</h3>

          <a className={styles.button} href="https://pay.galantom.ro/donation_forms/view?id=94" target="_blank" rel="noopener noreferrer">
            Realizeaza o donatie online
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImplicaTe;
