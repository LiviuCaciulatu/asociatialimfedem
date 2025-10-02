import React from "react";
import styles from "./DespreLimfedem.module.scss";

const DespreLimfedem: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>LIMFEDEMUL:</h2>
        <p className={styles.mainParagraph}>
          este o afecțiune cronică a sistemului limfatic, care presupune
          acumularea anormală a limfei în spațiul interstițial. La nivel global,
          aproximativ 250 de milioane de oameni suferă de limfedem.
        </p>
        <p className={styles.mainParagraph}>
          În Europa și Statele Unite ale Americii, cea mai des întâlnită cauză a
          limfedemului o reprezintă tratamentul chirurgical și oncologic al
          cancerului de sân, chiar și în cazul tratamentelor moderne.
        </p>
        <p className={styles.mainParagraph}>
          Un număr semnificativ îl reprezintă, de asemenea, pacienții cu
          limfedem primar și secundar post-tratament oncologic de altă etiologie
          decât cel mamar (uro-genital, de colon, de prostate, etc).
        </p>
        <h3 className={styles.subtitle}>CE ESTE LIMFEDEMUL?</h3>
        <p className={styles.mainParagraph}>
          Limfedemul se poate manifesta sub diferite forme, cele două tipuri
          principale fiind:
        </p>
        <div className={styles.cardsRow}>
          <div className={styles.cardItem}>
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: "url('/assets/png/despre-limfedem-1.png')",
              }}
            />
            <h4 className={styles.cardTitle}>Limfedemul primar</h4>
            <p className={styles.cardText}>
              Acest tip de limfedem este cauzat de obicei de malformații
              congenitale sau de factori genetici, iar simptomele pot apărea la
              naștere sau mai târziu în viață.
            </p>
          </div>

          <div className={styles.cardItem}>
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: "url('/assets/jpg/despre-limfedem-2.jpg')",
              }}
            />
            <h4 className={styles.cardTitle}>Limfedemul secundar</h4>
            <p className={styles.cardText}>
              Limfedemul secundar apare din cauza deteriorării sau obstrucției
              sistemului limfatic, adesea rezultat din intervenții chirurgicale,
              radioterapie, leziuni, infecții sau traume.
            </p>
          </div>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.subtitle}>Simptome</h3>
          <p className={styles.paragraph}>
            Se manifestă, cel mai frecvent, la nivelul membrelor superioare și
            inferioare, dar poate să apară și la nivelul spatelui (mai ales în
            zona omoplatului, după tratamentul oncologic în cancerul de sân), la
            nivelul abdomenului, toracelui, feței, etc. Localizarea este legată
            de cauza apariției limfedemului.
          </p>
          <h4 className={styles.tagline}>
            Simptomele limfedemului pot varia ca severitate și pot include:
          </h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.icon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#EE9C32" strokeWidth="2" />
                  <path d="M12 8v4" stroke="#EE9C32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="16.2" r="0.6" fill="#EE9C32" />
                </svg>
              </span>
              Umflare locală, care la început se poate reduce spontan prin
              elevarea zonei tumefiate, după care persistă și se extinde.
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#EE9C32" strokeWidth="2" />
                  <path d="M12 8v4" stroke="#EE9C32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="16.2" r="0.6" fill="#EE9C32" />
                </svg>
              </span>
              Senzație de greutate, presiune, piele prea întinsă în zona
              tumefiată.
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#EE9C32" strokeWidth="2" />
                  <path d="M12 8v4" stroke="#EE9C32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="16.2" r="0.6" fill="#EE9C32" />
                </svg>
              </span>
              Limitare discretă a mobilității articulare, dacă edemul este
              localizat în vecinătatea unei articulații.
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#EE9C32" strokeWidth="2" />
                  <path d="M12 8v4" stroke="#EE9C32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="16.2" r="0.6" fill="#EE9C32" />
                </svg>
              </span>
              Modificări ale pielii, cum ar fi aspectul de coajă de portocală,
              îngroșarea, înroșire discretă.
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#EE9C32" strokeWidth="2" />
                  <path d="M12 8v4" stroke="#EE9C32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="16.2" r="0.6" fill="#EE9C32" />
                </svg>
              </span>
              Infecții recurente în zona afectată (optional).
            </li>
          </ul>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.subtitle}>
            Impactul asupra vieții de zi cu zi
          </h3>
          <p className={styles.paragraph}>
            Viața cu limfedem poate prezenta provocări semnificative pentru
            pacienți și familiile acestora. Afecțiunea nu afectează numai
            sănătatea fizică, ci și bunăstarea emoțională și calitatea generală
            a vieții. Confruntarea cu limfedemul necesită adesea o abordare
            cuprinzătoare care include management medical, ajustări ale stilului
            de viață și sprijin psihosocial.
          </p>
        </div>
        <div className={styles.subsectionHighlight}>
          <h3 className={styles.subtitle}>Tratament și management</h3>
          <p className={styles.paragraph}>
            Deși în prezent nu există un remediu pentru a vindeca limfedemul,
            terapia decongestivă completă poate gestiona eficient afecțiunea și
            poate îmbunătăți calitatea vieții pacienților.
          </p>
          <h4 className={styles.tagline}>Terapia include:</h4>
          <p className={styles.paragraph}>
            <span className={styles.highlight}>Drenaj limfatic manual (MLD):</span> O tehnică de terapie manuală care
            utilizează tracțiunea pielii pentru stimularea capilarelor
            limfatice, și manevre cu presiune moderată pentru stimularea
            stațiilor ganglionare funcționale. Terapia de compresie: Bandajarea
            compresivă multistratificată ajută la evacuarea unei cantități mai
            mari de limfă din zona afectată de limfedem. Îmbrăcămintea de
            compresie păstrează rezultatele obținute și previn agravrea
            limfedemului în timpul activităților cotidiene sau în situații de
            stres.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.highlight}>Exerciții și activități fizice:</span> exerciții personalizate pentru a
            îmbunătăți circulația limfatică locală și pentru a menține
            mobilitatea. Activitatea fizică și sportul cresc debitul limfatic de
            10-30 de ori – ATENȚIE în urma efortului, zona afectată nu trebuie
            să se umfle mai tare.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.highlight}>Îngrijirea pielii:</span> igiena adecvată a pielii și protecție pentru a
            preveni infecțiile și agravarea stadiului. Drenajul limfatic
            mecanic: terapie adjuvantă, întotdeauna trebuie aplicată după
            drenajul manual; niciodată utilizată ca unic mijloc terapeutic
          </p>
          <p className={styles.paragraph}>
            În unele cazuri, intervenția chirurgicală poate fi luată în
            considerare pentru gestionarea avansată a limfedemului, cu mențiunea
            că nu îl vindecă; poate ajuta la regresia stadiului și la ușurarea
            zonei afectate.
          </p>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.subtitle}>Angajamentul nostru:</h3>
          <p className={styles.paragraph}>
            La ASOCIATIA PACIENTILOR CU LIMFEDEM suntem dedicați să facem o
            diferență semnificativă în viața celor afectați de limfedem. Ne
            propunem să creștem gradul de conștientizare cu privire la această
            afecțiune, să oferim sprijin și resurse pacienților și familiilor
            acestora, și să pledăm pentru un acces îmbunătățit la îngrijire în
            sistemul medical de stat.
          </p>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.subtitle}>Concluzie:</h3>
          <p className={styles.paragraph}>
            Limfedemul este o afectiune complexa care necesita intelegere,
            compasiune si un efort unit pentru a-i fi depasit impactul. Impreuna
            sa ne unim mainile pentru a crea o lume in care cei cu limfedem sa
            poata fi auziti si ajutati, gasind putere in comunitate, cunostinte
            si in cautarea unui viitor mai luminos si mai sanatos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DespreLimfedem;
