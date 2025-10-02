import React from "react";
import styles from "./Voluntar.module.scss";

export default function Voluntar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paragraph}>
        Poți participa la realizarea unor produse handmade (decorațiuni de
        Crăciun, mărțișoare, etc) în cadrul atelierelor noastre.
      </div>
      <div className={styles.paragraph}>
        Ne poți ajuta în organizarea evenimentelor caritabile, sau prin
        promovarea produselor noastre handmade.
      </div>
      <div className={styles.paragraph}>
        Dacă ești fizioterapeut specializat în managementul limfedemului, ne
        poți ajuta prin sprijinul terapeutic acordat pacienților și prin
        implicarea în evenimentele noastre de informare și educare.
      </div>
      <div className={styles.paragraph}>
        Află mai multe despre cum poți fii voluntar prin una din formele de
        contact disponibile.
      </div>
      <button className={styles.button}>Ia legatura cu noi!</button>
    </div>
  );
}
