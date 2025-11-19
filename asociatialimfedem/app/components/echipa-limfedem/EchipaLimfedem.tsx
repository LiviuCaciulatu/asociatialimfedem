"use client";

import React, { useEffect, useState } from 'react';
import styles from './EchipaLimfedem.module.scss';
import EmployeeCard from '../employee-card/EmployeeCard';

interface Employee {
  name: string;
  position: string;
  image: string;
}

const EchipaLimfedem: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('/assets/json/employees.json')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error('Failed to load employees', err));
  }, []);

  return (
    <section className={styles.wrapper} aria-labelledby="echipa-title">
      <div className={styles.container}>

        {employees.length === 0 ? (
          <p>Se încarcă echipa...</p>
        ) : (
          <>
            <div className={styles.aboutUs}>
              <div className={styles.despreNoi}>
              <p className={styles.sectionText}>
                Suntem o mână de oameni – pacienți, aparținători și profesioniști – care au ales să transforme frica în claritate și singurătatea în comunitate. Ne unește aceeași promisiune: să fim aproape, pas cu pas, cu informație sigură, îndrumare blândă și soluții reale pentru bolile sistemului limfatic.
                <br /><br />
                Într-o lume în care aceste boli sunt adesea nevăzute, suntem aici pentru a aduce lumină și speranță, promovând o schimbare pozitivă în societate și în viețile celor afectați.
              </p>
              <p className={styles.subtitle}>Ce facem, zi de zi</p>
              <p className={styles.sectionText}>
               <ul>
                <li> •	Ascultăm înainte să răspundem. Fiecare poveste contează.</li>
                <li> •	Traducem medicalul pe înțeles. Ghiduri, ateliere, răspunsuri scurte la întrebări grele.</li>
                <li> •	Conectăm oameni. Pacienți cu pacienți, pacienți cu specialiști, specialiști între ei.</li>
                <li> •	Apărăm drepturi. Când e nevoie, ridicăm vocea în fața sistemului – cu respect, dar hotărât.</li>
                <li> •	Măsurăm impactul. Ne uităm la rezultate: timp până la diagnostic, acces la compresie, calitatea vieții.</li>
               </ul>
              </p>
              <p className={styles.subtitle}>Valorile noastre</p>
              <p className={`${styles.paragraph} ${styles.highlight}`}>Demnitate • Claritate • Empatie • Echitate • Curaj</p>
              <p className={styles.paragraph}>Ne ghidează în fiecare decizie – de la un mesaj trimis noaptea unui pacient speriat, până la un document depus la autorități.</p>
              <p className={styles.subtitle}>Cum lucrăm cu tine</p>
              <p className={styles.paragraph}>Te întâmpinăm acolo unde ești: cu întrebările, durerile și speranțele tale. Îți oferim pași mici și siguri: îngrijirea pielii, compresie adecvată, exerciții, sprijin emoțional, orientare juridică de bază. <span className={styles.highlight}>Nu ești singur(ă).</span></p>
              </div>
            </div>

            <div className={styles.leadership}>
              <div className={styles.gridLeadership}>
                {employees.slice(0, 1).map((emp, idx) => (
                  <div key={idx} className={styles.leaderWrapper}>
                    <EmployeeCard name={emp.name} position={emp.position} image={emp.image} />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.volunteers}>
              <h3 className={styles.sectionTitle}>Echipa de voluntari</h3>
              <div className={styles.grid}>
                {employees.slice(1).map((emp, idx) => (
                  <EmployeeCard key={idx} name={emp.name} position={emp.position} image={emp.image} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default EchipaLimfedem;
