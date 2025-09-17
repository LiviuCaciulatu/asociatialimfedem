import React from "react";
import styles from "./Welcome.module.scss";

export default function Welcome() {
  return (
    <section className={styles.welcome} aria-labelledby="welcome-title">
      <div className={styles.inner}>
        <h2 id="welcome-title" className={styles.title}>
          Bun venit la asociația pacienților cu{" "}
          <span className={styles.highlight}>limfedem</span>
        </h2>
        <p className={styles.description}>
          ...unde suntem dedicați să facem o diferență în viața celor afectați
          de limfedem. Suntem o organizație non-guvernamentală care se angajează
          să ofere sprijin și să promoveze buna practică a specialiștilor pentru
          a îmbunătăți viața pacienților cu limfedem în România.
        </p>
      </div>
      <div className={styles.subsection}>
        <div className={styles.subinner}>
          <div className={styles.subTitle}>
            Misiunea noastră este clară: să îmbunătățim calitatea vieții
            pacienților cu limfedem prin:
          </div>
          <div className={styles.list}>
            <div className={styles.card}>
              <img src="/assets/jpg/heart-icon.jpg" alt="icon" className={styles.icon} />
              <h3 className={styles.cardTitle}>
                Creșterea gradului de conștientizare
              </h3>
              <p className={styles.cardDescription}>
                Ne străduim să creștem înțelegerea afecțiunii în rândul
                publicului larg, pentru identificarea cazurilor nediagnosticate
                și integrarea pacienților în societate, dar și în rândul
                autorităților pentru recunoașterea și susținerea bolnavilor.
              </p>
            </div>
            <div className={styles.card}>
                <img src="/assets/jpg/heart-icon.jpg" alt="icon" className={styles.icon} />
              <h3 className={styles.cardTitle}>
                Sprijin informațional și material pentru pacienții aflați în
                dificultate
              </h3>
              <p className={styles.cardDescription}>
                Organizăm târguri și evenimente caritabile pentru a sprijini
                pacienții defavorizați, precum și întâlniri cu specialiști,
                destinate educării pacienților.
              </p>
            </div>
            <div className={styles.card}>
                <img src="/assets/jpg/heart-icon.jpg" alt="icon" className={styles.icon} />
              <h3 className={styles.cardTitle}>
                Evenimente dedicate specialiștilor
              </h3>
              <p className={styles.cardDescription}>
                Întâlniri cu medici, asistenți, fizioterapeuți și alte cadre
                medicale, care doresc să se alăture cauzei noastre pentru
                acordarea îngrijirilor potrivite pacienților.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
