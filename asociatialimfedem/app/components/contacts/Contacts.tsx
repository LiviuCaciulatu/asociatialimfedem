import React from "react";
import styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts} aria-labelledby="contacts-title">
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Email</h3>
          <a
            className={styles.cardLink}
            href="mailto:contact@asociatialimfedem.ro"
          >
            contact@asociatialimfedem.ro
          </a>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Telefon</h3>
          <a className={styles.cardLink} href="tel:+40720063878">
            0720063878
          </a>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Facebook</h3>
          <a
            className={styles.cardLink}
            href="https://www.facebook.com/people/Asocia%C8%9Bia-pacien%C8%9Bilor-cu-limfedem/100090613821011/"
            target="_blank"
            rel="noreferrer"
          >
            Pagina noastră
          </a>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Adresă</h3>
          <a className={styles.cardLink}>
            Str. Ramnicu Valcea, nr. 8, et. 7, ap. 711, sect. 3
          </a>
        </article>
      </div>
      <div className={styles.gridTwo}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>
            Asociația Pacienților cu Limfedem
          </h3>
          <a className={styles.cardSubTitle}>
            Înreg. în Registrul național al persoanelor juridice fără scop
            patrimonial în baza Încheierii nr. 136 din 6.12.2022 dispusă de
            Judecătoria Sector 3 București în dosarul nr. <span className={styles.highlight}>27985/301/2022</span>,
            <br /><br />
          </a>
          <p className={styles.cardSubTitle}>
            Cod de înregistrare fiscală: <span className={styles.highlight}>47632542</span>
          </p>
          <br /><br />
          <p className={styles.cardSubTitle}>
            Cont bancar: <span className={styles.highlight}>RO80 INGB 0000 9999 1353 0971</span> deschis la ING
          </p>
        </article>
      </div>
    </section>
  );
};

export default Contacts;
