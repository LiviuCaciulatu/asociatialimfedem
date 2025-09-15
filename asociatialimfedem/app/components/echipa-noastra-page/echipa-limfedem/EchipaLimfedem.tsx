"use client";

import React, { useEffect, useState } from 'react';
import styles from './EchipaLimfedem.module.scss';
import EmployeeCard from '../../employee-card/EmployeeCard';
import Link from 'next/link';

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
        <h2 id="echipa-title" className={styles.title}>Echipa Limfedem</h2>
        <p className={styles.lead}>
          O echipă dedicată formată din pacienți, voluntari și specialiști care
          colaborează pentru a sprijini persoanele afectate de limfedem.
        </p>

        {employees.length === 0 ? (
          <p>Se încarcă echipa...</p>
        ) : (
          <>
            <div className={styles.aboutUs}>
              <h3 className={styles.sectionTitle}>Despre noi</h3>
              <p className={styles.sectionText}>
                Asociația Pacientilor cu Limfedem este un angajament pentru îmbunătățirea vieții pacienților cu afecțiuni ale sistemului limfatic.

                Într-o lume în care aceste boli sunt adesea nevăzute, suntem aici pentru a aduce lumină și speranță, promovând o schimbare pozitivă în societate și în viețile celor afectați.
              </p>
            </div>

            <div className={styles.leadership}>
              <h3 className={styles.sectionTitle}>Echipa de conducere</h3>
              <div className={styles.grid}>
                {employees.slice(0, 2).map((emp, idx) => (
                  <EmployeeCard key={idx} name={emp.name} position={emp.position} image={emp.image} />
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
