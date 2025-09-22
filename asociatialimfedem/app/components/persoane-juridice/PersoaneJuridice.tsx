import React from "react";
import styles from "./PersoaneJuridice.module.scss";
import Link from "next/link";

const PersoaneJuridice: React.FC = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="pj-title">
      <div className={styles.description}>
        Din pozitia de antreprenor sau manager al unei companii, poti face o
        fapta buna.
        <br />
        <br />
        <span className={styles.highlight}>
          CREDEM CU TARIE CA NICI O FAPTA BUNA NU RAMANE NERESPLATITA
        </span>
        <br />
        Poți redirecționa către{" "}
        <span className={styles.highlight}>
          ASOCIATIA PACIENTILOR CU LIMFEDEM
        </span>{" "}
        gratuit și deductibil o cota din din impozitul pe profit al firmei tale.{" "}
        <br />
        <br />
        <span className={styles.highlight}>
          Nu te costă nimic, deoarece această sumă se scade din impozitul
          datorat statului.
        </span>{" "}
        <br />
        <br />
        Practic, poți alege unde ajung banii tăi și poți susține astfel
        activitatea pe care o desfășurăm pentru pacientii cu limfedem.
      </div>
      <div className={styles.howTo}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            1. PROCEDURA PENTRU REDIRECȚIONAREA IMPOZITULUI PE VENIT.
          </h3>
          <p className={styles.cardDescription}>
            Potrivit Codului Fiscal, puteți sponsoriza Asociatia Pacientilor cu
            Limfedem înregistrată în Registrul entităților/unităților de cult
            pentru care se acordă reduceri fiscale, conform Legii nr. 32/1994,
            cu modificările și completările ulterioare, în situația în care
            reprezentați o societate comercială care plătește impozit pe profit,
            astfel: » Dacă sunteți societate comercială care plătește impozit pe
            profit, sumele aferente sponsorizărilor se scad din impozitul pe
            profit datorat la nivelul valorii minime dintre următoarele: 0,75%
            din cifra de afaceri, respectiv 20% din impozitul pe profit datorat.
            Începând cu anul 2024 numai Societățile care au impozit pe profit
            mai pot face sponsorizări cu deducerea sumelor. Pentru a iniția
            acest proces, descarcă si completează Contractul de sponsorizare cu
            datele firmei tale. Trimite contractul semnat și ștampilat la adresa
            de mail: contact@asociatialimfedem.ro sau la sediul nostru din str.
            Râmnicu Vâlcea nr 8 etaj 7 ap 711, sector 3, București. Daca firma
            ta, are un alt model de Contract de Sponsorizare, il poți trimite pe
            adresa de email contact@asociatialimfedem.ro Dacă ai întrebări
            suplimentare legate de pașii pe care trebuie să îi urmezi, noi îți
            stăm la dispoziție pentru mai multe detalii, scrie-ne la
            contact@asociatialimfedem.ro
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersoaneJuridice;
