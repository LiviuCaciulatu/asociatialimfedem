import React from "react";
import styles from "./PersoaneFizice.module.scss";

const PersoaneFizice: React.FC = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="pf-title">
      <div className={styles.description}>
        <p className={styles.subtitle}>
          Un an greu. Un gest ușor. O viață schimbată.
        </p>
        <p className={styles.paragraph}>
          Schimbările legislative ne apasă, dar nu ne opresc. Mergem înainte cu
          curaj — iar <span className={styles.highlight}>tu</span> poți fi
          diferența, <span className={styles.highlight}>gratuit</span>.
        </p>
        <p className={`${styles.paragraph} ${styles.highlight}`}>
          Redirecționează 3,5% în 2 minute
        </p>
        <p className={styles.paragraph}>
          Completează{" "}
          <span className={styles.highlight}>online Formularul 230</span> și
          transformi un „da” în{" "}
          <span className={styles.highlight}>
            un ciorap compresiv pentru un copil.
          </span>
          <br />
          👉 Completează{" "}
          <a
            href="https://redirectioneaza.ro/asociatia-pacientilor-cu-limfedem/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Formularul 230 aici
          </a>
        </p>

        <h3 className={styles.subtitle}>De ce contează fiecare formular</h3>
        <ul className={styles.list}>
          <li>
            🟢 Statul român alocă{" "}
            <span className={styles.highlight}>~90 lei</span> pentru fiecare
            formular completat.
          </li>
          <li>
            🟢 Poți completa dacă ai fost angajat(ă) cel puțin o lună în anul
            fiscal precedent;{" "}
            <span className={styles.highlight}>pensionarii</span> pot, de
            asemenea, participa.
          </li>
          <li>
            🟢 Bifează și semnează opțiunea de{" "}
            <span className={styles.highlight}>
              redirecționare pentru 2 ani
            </span>{" "}
            — ajutor constant, fără griji.
          </li>
        </ul>

        <h3 className={styles.subtitle}>Cum funcționează (simplu):</h3>
        <ol className={styles.list}>
          <li>
            <span className={styles.highlight}>Completezi online</span>{" "}
            formularul (linkul de mai sus) sau îl trimiți pe e-mail la{" "}
            <a
              href="mailto:contact@asociatialimfedem.ro"
              className={styles.highlight}
            >
              contact@asociatialimfedem.ro
            </a>
            .
          </li>
          <li><span className={styles.highlight}>Asociația</span> depune formularele la ANAF.</li>
          <li>
            <span className={styles.highlight}>Statul</span> calculează 3,5% din impozitul pe venit achitat pentru anul
            precedent și virează suma către noi, conform procedurii ANAF.
          </li>
        </ol>

        <h3 className={styles.subtitle}>Impactul tău, pe concret ❤️</h3>
        <ul className={styles.list}>
          <li className={styles.highlight}>
            22 formulare = o pereche de ciorăpei de compresie pentru un copil
          </li>
          <li className={styles.highlight}>
            18 formulare = o mănușă de compresie pentru un pacient cu limfedem
            secundar
          </li>
          <li className={styles.highlight}>44 formulare = un ciorap de compresie pentru un adult</li>
          <li className={styles.highlight}>3 formulare = o ședință de drenaj limfatic manual</li>
        </ul>

        <p className={`${styles.paragraph} ${styles.highlight}`}>Fiecare formular este important.</p>

        <h3 className={styles.subtitle}>Schimbăm copilării, nu doar cifre</h3>
        <p className={styles.paragraph}>
          Prin acest gest mic, un copil cu limfedem primar poate alerga, se
          poate juca, poate râde fără durere. Tu faci loc demnității și
          speranței.
        </p>

        <h3 className={styles.subtitle}>Susține și prin donații</h3>
        <p className={styles.paragraph}>
          <span className={styles.highlight}>Transfer bancar</span>: Poți susține copiii cu limfedem primar sau pacienții
          cu limfedem și cu donații în contul:{" "}
          <span className={styles.highlight}>RO42INGB0000999918010242</span>{" "}
          deschis la ING suc. Mihai Bravu, CUI <span className={styles.highlight}>52178265</span>
          <br />
          <br />
          Asociația Limfedem – Împreună pas cu pas
          <br />
          Detalii plată recomandate: „Donație – sprijin pacienți”
        </p>

        <p className={`${styles.paragraph} ${styles.highlight}`}>Împreună putem mai mult.</p>
        <p className={`${styles.paragraph} ${styles.highlight}`}>
          FIECARE FORMULAR, FIECARE LEU, FIECARE GEST — PUNE SPERANȚA ÎN
          MIȘCARE.
        </p>
      </div>
      <div className={styles.actions}>
        <a
          className={styles.primary}
          href="https://redirectioneaza.ro/asociatia-pacientilor-cu-limfedem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPLETEAZA FORMULARUL
        </a>
      </div>
    </section>
  );
};

export default PersoaneFizice;
