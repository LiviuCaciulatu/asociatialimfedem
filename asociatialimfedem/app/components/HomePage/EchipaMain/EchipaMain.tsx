 'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './EchipaMain.module.scss';
import EmployeeCard from '../../employee-card/EmployeeCard';

interface Employee {
  name: string;
  position: string;
  image: string;
}

const EchipaMain: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('/assets/json/employees.json')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error loading employees:', error));
  }, []);

  return (
    <section className={styles.echipaSection}>
      <div className={styles.row}>
        <div className={styles.info}>
          <div className={styles.title}>Echipa</div>
          <div className={styles.content}>
            <p>
              Fondatorii Asociației sunt Claudia Trandafirescu, pacient cu limfedem secundar grad III și Liculescu Florentina, pacient oncologic și pacient cu limfedem secundar.
            </p>
          </div>
          <Link href="/echipa-noastra" className={styles.buttonDark}>
            DESCOPERA TOATA ECHIPA
          </Link>
        </div>

        <div className={styles.cards}>
          {employees.slice(0, 2).map((emp, idx) => (
            <EmployeeCard
              key={idx}
              name={emp.name}
              position={emp.position}
              image={emp.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EchipaMain;
