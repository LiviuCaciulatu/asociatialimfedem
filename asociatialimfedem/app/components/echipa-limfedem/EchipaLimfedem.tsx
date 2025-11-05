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
              <img src="/assets/echipa/about-us.png" alt="Limfedem Logo" className={styles.aboutUsImg} />
              <div className={styles.despreNoi}>
              <h3 className={styles.sectionTitle}>Despre noi</h3>
              <p className={styles.sectionText}>
                Asociația Limfedem este un angajament pentru îmbunătățirea vieții pacienților cu afecțiuni ale sistemului limfatic.
                <br /><br />
                Într-o lume în care aceste boli sunt adesea nevăzute, suntem aici pentru a aduce lumină și speranță, promovând o schimbare pozitivă în societate și în viețile celor afectați.
              </p>
              </div>
            </div>

            <div className={styles.leadership}>
              {/* <h3 className={styles.sectionTitle}>Echipa de conducere</h3> */}
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
                {employees.slice(2).map((emp, idx) => (
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
