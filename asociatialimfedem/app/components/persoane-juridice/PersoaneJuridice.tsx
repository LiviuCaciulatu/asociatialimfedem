import React from "react";
import styles from "./PersoaneJuridice.module.scss";

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
        gratuit și deductibil o cota din din impozitul pe profit al firmei tale.
        <br />
        <br />
        <span className={styles.highlight}>
          Nu te costă nimic, deoarece această sumă se scade din impozitul
          datorat statului.
        </span>
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
            astfel:
            <br />
            <br />» Dacă sunteți societate comercială care plătește impozit pe
            profit, sumele aferente sponsorizărilor se scad din impozitul pe
            profit datorat la nivelul valorii minime dintre următoarele: 0,75%
            din cifra de afaceri, respectiv 20% din impozitul pe profit datorat.
            Începând cu anul 2024 numai Societățile care au impozit pe profit
            mai pot face sponsorizări cu deducerea sumelor.
            <br />
            <br />
            Pentru a iniția acest proces, descarcă si completează Contractul de
            sponsorizare cu datele firmei tale. Trimite contractul semnat și
            ștampilat la adresa de mail:{" "}
            <a
              className={styles.cardLink}
              href="mailto:contact@asociatialimfedem.ro"
            >
              contact@asociatialimfedem.ro
            </a>{" "}
            sau la sediul nostru din str. Râmnicu Vâlcea nr 8 etaj 7 ap 711,
            sector 3, București.
            <br />
            <br />
            Daca firma ta, are un alt model de Contract de Sponsorizare, il poți
            trimite pe adresa de email{" "}
            <a
              className={styles.cardLink}
              href="mailto:contact@asociatialimfedem.ro"
            >
              contact@asociatialimfedem.ro
            </a>
            <br />
            <br />
            Dacă ai întrebări suplimentare legate de pașii pe care trebuie să îi
            urmezi, noi îți stăm la dispoziție pentru mai multe detalii,
            scrie-ne la{" "}
            <a
              className={styles.cardLink}
              href="mailto:contact@asociatialimfedem.ro"
            >
              contact@asociatialimfedem.ro
            </a>
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            2. PROCEDURA PENTRU REDIRECȚIONAREA IMPOZITULUI (aferent anului
            2023) PRIN DECLARAȚIA 177:
          </h3>
          <p className={styles.cardDescription}>
            Dacă suma pe care ați cheltuit-o pentru sponsorizări în cursul
            anului 2023 nu a depășit limita maximă permisă, aveți posibilitatea
            să alegeți să redirecționați si in anul 2024 o parte din impozitul
            pe profit sau impozitul pe veniturile microîntreprinderilor către o
            entitate caritabilă sau culturală cum este si ASOCIATIA PACIENTILOR
            CU LIMFEDEM, in termen de 6 luni de la termenul legal de depunere a
            declaratiei anuale de impozit pe profit.
            <br />
            <br />• Pentru a iniția acest proces, descarca si completeaza
            Contractul de sponsorizare cu datele firmei tale. Trimite contractul
            semnat și ștampilat la adresa de mail:{" "}
            <a
              className={styles.cardLink}
              href="mailto:contact@asociatialimfedem.ro"
            >
              contact@asociatialimfedem.ro
            </a>{" "}
            sau la sediul nostru din str. Ramnicu Valcea nr 8 etaj 7 ap 711,
            sector 3, București.
            <br />
            <br />
            Daca firma ta, are un alt model de Contract de Sponsorizare, il poți
            trimite pe adresa de email{" "}
            <a
              className={styles.cardLink}
              href="mailto:contact@asociatialimfedem.ro"
            >
              contact@asociatialimfedem.ro
            </a>
            <br />
            • În plus, va trebui să completați Declarația 177 (cunoscută și sub
            denumirea de D177), intitulată „Cerere privind redirecționarea
            impozitului pe profit/impozitului pe veniturile
            microîntreprinderilor”. Acest formular este disponibil pe portalul
            web al Administrației Naționale a Finanțelor Publice (ANAF) si o
            puteti accesa din urmatororul link
            <br />
            <a
              className={styles.cardLink}
              href="https://static.anaf.ro/static/10/Anaf/formulare/177_OPANAF_1679_2022.pdf"
            >
              https://static.anaf.ro/static/10/Anaf/formulare/177_OPANAF_1679_2022.pdf
            </a>
            <br />
            <br />
            • Ultimul pas constă în depunerea Declarației 177, care trebuie să
            includă toate informațiile necesare, inclusiv suma pe care doriți să
            o redirecționați către ASOCIATIA PACIENTILOR CU LIMFEDEM.
            <br />
            <br />
            Mai multe detalii se pot gasi si aici despre cadrul legal si
            acordarea sponsorizarii:
            <br />
            <a
              className={styles.cardLink}
              href="https://static.anaf.ro/static/10/Iasi/material_informativ-1_23-09-2022.pdf"
            >
              https://static.anaf.ro/static/10/Iasi/material_informativ-1_23-09-2022.pdf
            </a>
          </p>
          <a
            className={styles.cardBtn}
            href="/assets/doc/Contract-de-sponsorizare-general-site.docx"
            download
          >
            DESCARCA CONTRACTUL DE SPONSORIZARE
          </a>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          CE INSEAMNA PENTRU COMPANIE DEPUNEREA DECLARATIE 177?
        </div>
        <div className={styles.subTitle}>
          Declarația 177 vă oferă o modalitate simplă și eficientă de a sprijini
          cauzele care vă interesează, fără a vă implica direct financiar, iar
          suma redirecționată este determinată cu precizie și se face prin
          intermediul ANAF după încheierea exercițiului fiscal.
        </div>
        <div className={styles.content}>
          Declarația 177 nu reprezintă o donație sau o cheltuială, ci este o
          modalitate de a redirecționa o parte din impozitul pe care deja l-ați
          plătit către stat. Cu alte cuvinte, nu scoateți bani din buzunar
          pentru aceasta. Această sumă sponsorizată este transferată către
          organizația non-guvernamentală de către Administrația Națională a
          Finanțelor Publice (ANAF), nu de către compania dvs. <br />
          Este important de menționat că Declarația 177 se depune după
          încheierea anului fiscal. Acest lucru înseamnă că puteți completa și
          trimite această declarație după ce ați încheiat toate tranzacțiile
          financiare pentru anul respectiv, astfel încât să puteți calcula cu
          exactitate suma pe care doriți să o redirecționați către organizația
          non-profit. <br />
          Suma disponibilă pentru sponsorizare nu este doar o estimare
          aproximativă. Ea este determinată cu precizie prin intermediul
          declarației dvs. de venit sau profit. Acest lucru înseamnă că puteți
          să redirecționați o sumă specifică, corectă și exactă către
          organizația caritabilă sau culturală pe care o susțineți, fără a fi
          nevoie să estimați.
        </div>
        <div className={styles.title}>
          TERMENUL DE DEPUNERE IN ANUL 2024 A DECLARATIEI 177 (pentru impozitul
          platit aferent anului 2023)
        </div>
        <div className={styles.subTitle}>
          Puteți lua decizia de a sprijini o cauză pe care o considerați
          importantă și să redirecționați o parte din impozitul pe care trebuie
          să-l plătiți către stat, transformandu-l intr-un zambet pentru copii,
          in curaj pentru parinti sau o raza de soare pentru pacientii cu
          limfedem /lipedem.
        </div>
        <div className={styles.content}>
          Pentru a face acest lucru, va trebui să completați Declarația 177
          pentru impozitul plătit în cursul anului 2023. Perioada de depunere
          pentru această declarație începe după 25 iunie 2024 și se încheie la
          data de 25 decembrie 2024 pentru ca suma acordată să considerată parte
          din anul fiscal în curs. Acest proces vă oferă o modalitate simplă și
          eficientă de a face o schimbare pozitivă în comunitatea dumneavoastră,
          fără a afecta bugetul companiei. <br />
          <br />
          NOTĂ: Acest document are caracter informativ și nu reprezintă
          consultanță fiscală profesională. Pentru informații și detalii vă
          recomandăm consultarea prevederilor legislative. Va rugam sa va
          consultati si cu firma de contabilitte a dumneavoastra pentru
          eventuale modificari legislative din domeniu.
        </div>
      </div>
    </section>
  );
};

export default PersoaneJuridice;
