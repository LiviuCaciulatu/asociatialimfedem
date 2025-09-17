import React from 'react';
import styles from './JoinUs.module.scss';
import Link from 'next/link';

interface Props {
  title?: string;
  content?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

const JoinUs: React.FC<Props> = ({
  title = 'Alăturați-vă în misiunea noastră de a sprijini pacienții cu limfedem și familiile acestora!',
  content = 'Împreună, putem crește gradul de conștientizare, impulsionăm specializarea personalului medical și putem avea un impact pozitiv asupra vieții celor care trăiesc cu limfedem.',
  subtitle = 'Fii parte din schimbare — implică-te astăzi!',
  buttonText = 'IMPLICA-TE',
  buttonHref = '/implica-te',
}) => {
  return (
    <section className={styles.join} aria-labelledby="join-title">
      <div className={styles.inner}>
        <h2 id="join-title" className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <div className={styles.subtitle}>{subtitle}</div>
        <Link href={buttonHref}>
          <button className={styles.primaryBtn}>{buttonText}</button>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
