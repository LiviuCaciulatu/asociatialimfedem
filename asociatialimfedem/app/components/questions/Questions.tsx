"use client";

import React, { useState } from "react";
import styles from "./Questions.module.scss";

type QA = {
  question: string;
  answer: React.ReactNode;
};

type QuestionsProps = {
  items?: QA[];
};

const defaultItems: QA[] = [
  {
    question: "Când se trimite formularul?",
    answer: "In perioada 1 ian 2026 până pe 25 mai 2026.",
  },
  {
    question: "L-am descărcat, ce trebuie să completez?",
    answer: (
      <span>
        E nevoie să completezi aici secțiunea I care conține datele tale de
        identificare ( Nume , Prenume, CNP, tel , adresa de email, etc ) și să
        semnezi la Semnătura contribuabilului. Atat!
        <br />
        <br />
        Vei vedea că sunt deja completate anul și datele Organizației Salvați
        Copiii. Dacă ai deja un formular printat și vrei să le completezi de
        mână, iată datele mai jos: <br />
        <br />
        <span className={styles.highlight}>ASOCIAȚIA LIMFEDEM</span> <br />
        <br />
        Cod de identificare fiscală:{" "}
        <span className={styles.highlight}>52178265</span> <br />
        <br />
        IBAN: <span className={styles.highlight}>RO42INGB0000999918010242</span>
      </span>
    ),
  },
  {
    question: "Care este Administrația Financiară de care aparțin?",
    answer: (
      <span>
        Administrația Financiară de care aparții este cea din localitatea de
        domiciliu trecută în cartea de identitate.{" "}
        <a
          href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/telefoane_judete/Regiuni.htm
        </a>
      </span>
    ),
  },

  {
    question: "Am nevoie de adeverinta de venit?",
    answer:
      "Nu. Nu este nevoie să atașezi adeverinta de venit sau fisa fiscala. Suma redirecționată va fi calculată și completată de către inspectorul fiscal.",
  },

  {
    question: "Aceasta este o donație?​",
    answer:
      "Nu. Este alegerea ta despre cum să fie folosiți o parte din banii pe care i-ai virat deja statului, ca impozit pe veniturile obținute în 2025. În cazul în care nu alegi să susții o cauză anume, întreaga sumă va rămâne la bugetul de stat.",
  },

  {
    question: "De ce 3,5%?",
    answer: (
      <span>
        Din 2021 toate organizațiile nonprofit pot primi până la 3,5% din impozitul pe venit.Inregistrarea ASOCIATIA LIMFEDEM – IMPREUNA PAS CU PAS poate fi verificată accesând acest LINK .{" "}
        <a
          href="https://www.anaf.ro/RegistrulEntitatilorUnitatilorCult/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          https://www.anaf.ro/RegistrulEntitatilorUnitatilorCult/
        </a>
        &nbsp; introducând codul fiscal{" "}
        <span className={styles.highlight}>52178265</span>.
      </span>
    ),
  },

  {
    question: "Pot face aceste demersuri online?",
    answer: (
      <span>
        Da, poti completa, semna online si trimite formularu AICI {" "}
        <a
          href="https://asociatialimfedem.ro/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          redirectioneaza.ro
        </a>
        ,
      </span>
    ),
  },
    {
    question: "Pot trimite formularul și pe e-mail?",
    answer: (
      <span>
       Da. Îl poți trimite la <span className={styles.highlight}>contact@asociatialimfedem.ro</span>, iar <span className={styles.highlight}>noi îl depunem</span> la ANAF pentru tine.
      </span>
    ),
  },
      {
    question: "Mă poate contacta ANAF după ce depun Formularul 230?",
    answer: (
      <span>
       Da. E o <span className={styles.highlight}>verificare standard</span>: ți se poate cere să confirmi că ai completat formularul <span className={styles.highlight}>în cunoștință de cauză</span> și că <span className={styles.highlight}>tu</span> ai ales direcționarea. Spui simplu: „Da, eu am optat”. Atât. Nu ți se cere nicio altă informație sensibilă.
      </span>
    ),
  },
];

const Questions: React.FC<QuestionsProps> = ({ items = defaultItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className={styles.wrapper} aria-labelledby="faq-title">
      <h2 id="faq-title" className={styles.title}>
        INTREBARI CU SUFLET
      </h2>
      <ul className={styles.list}>
        {items.map((it, i) => (
          <li key={i} className={styles.item}>
            <button
              className={`${styles.question} ${
                openIndex === i ? styles.questionOpen : ""
              }`}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span
                className={`${styles.sign} ${
                  openIndex === i ? styles.open : ""
                }`}
                aria-hidden="true"
              >
                {openIndex === i ? "−" : "+"}
              </span>
              {it.question}
            </button>
            <div
              className={`${styles.answer} ${
                openIndex === i ? styles.open : ""
              }`}
              aria-hidden={openIndex !== i}
            >
              {it.answer}
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <a
          className={styles.primary}
          href="https://asociatialimfedem.ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPLETEAZA FORMULARUL ONLINE
        </a>
      </div>
    </section>
  );
};

export default Questions;
