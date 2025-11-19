"use client";
import React from "react";
import styles from "./Mission.module.scss";
import Link from "next/link";

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          Misiunea asociației <span className={styles.highlight}>Limfedem</span>
        </h2>
        <div className={styles.content}>
          <p>
            Misiunea Asociației Limfedem – Impreuna pas cu pas,este să de a voce
            pacienților și să impună respectarea drepturilor lor. Creștem
            nivelul de conștientizare în rândul publicului și al
            profesioniștilor, conectăm pacienții la îngrijiri corecte și
            susținem, fără compromisuri, standarde internationale de tratament
            pentru limfedem (primar și secundar), afecțiunile conexe, inclusiv
            lipedemul. Ne străduim să transformăm suferința tăcută în
            recunoaștere oficială, traseele confuze în parcursuri clare de
            îngrijire și izolarea în comunitate activă.
          </p>
        </div>
        <Link href="/implica-te">
          <button className={styles.button}>IMPLICA-TE SI TU</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img
          src="/assets/png/photo-1.png"
          alt="logo"
          className={styles.logoAnpc}
        />
      </div>
    </section>
  );
}
