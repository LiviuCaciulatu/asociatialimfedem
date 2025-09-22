import React from "react";
import styles from "./PersoaneFizice.module.scss";

const PersoaneFizice: React.FC = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="pf-title">
      <div className={styles.description}>
        🟢 Suntem la inceputul unui an dificil din punctul nostru de vedere.
        Schimbările legislative sunt semnificative in ceea ce ne privește. Dar
        mergem mai departe cu curaj. Din păcate, nu mulți suntem conștienți că
        putem oferi ajutor gratuit! Completează formularul online 230 din linkul&nbsp;
        <a
          href="https://redirectioneaza.ro/asociatia-pacientilor-cu-limfedem/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          https://redirectioneaza.ro/asociatia-pacientilor-cu-limfedem/
        </a>{" "}
        și vei contribui la acordarea unui ciorap compresiv unui copil. <br />
        <br />
        🟢Statul român va aloca aproximativ 90 de lei pentru fiecare formular
        completat, iar procedura de a ne ajuta, este foarte simplă: •
        Completează formularul accesând link-ul. Poți să completezi dacă ai fost
        angajat cel puțin o lună în 2023, iar pensionarii pot, de asemenea, să
        participe. Nu uita sa semnezi si sa bifezi daca ești de acord ca suma sa
        ne fie acordata 2 ani. • Asociația Pacienților cu Limfedem depune
        formularele la ANAF. • Statul calculează 3,5% din impozitul pe venitul
        tău plătit în anul 2023 și îl virează către noi in cursul anului 2024. •
        Poti trimite formularul completat si la adresa de email
        contact@asociatialimfedem.ro iar de restul ne ocupam noi. <br />
        <br />
        🟢Prin această acțiune, poți ajuta un copil să aibă o viață mai ușoară
        și să se bucure de joacă alături de alți copii.
        <br />
        <br />
        ❤️ Un total de 22 de formulare înseamnă o pereche de ciorăpei de
        compresie, ❤️18 formulare pot asigura o mănușă de compresie pentru un
        pacient cu limfedem secundar, ❤️44 de formulare pot susține
        achiziționarea unui ciorap de compresie pentru un adult,❤️ 3 formulare
        pot acoperi costurile unei ședințe de drenaj limfatic manual. ❤️Fiecare
        formular este important. <br />
        <br />
        🟢Doar împreună putem merge mai departe și oferi sprijin. 🟢Poți susține
        copiii cu limfedem primar sau pacienții cu limfedem si cu donații in
        contul: <span className={styles.highlight}>RO80 INGB 0000 9999 1353 0971</span> deschis la ING suc. Mihai Bravu ,
        CUI 47632542
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
