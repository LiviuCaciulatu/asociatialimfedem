'use client';

import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.header}>
        <h3 className={styles.title}><span>Înscrie-te la</span> <span className={styles.teal}>Newsletter</span></h3>
        <p className={styles.description}>
          Înscrie-te la newsletter și fii la curent cu noutățile! Completează formularul de mai jos!
        </p>
      </div>

      <form className={styles.form} onSubmit={submit}>
        <input
          aria-label="Email"
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="adresa@exemplu.com"
        />
        <button className={styles.submit} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Se încarcă...' : 'Inscrie-te acum!'}
        </button>
      </form>

      {status === 'error' && <p className={styles.error}>Te rugăm introdu o adresă de email validă.</p>}
      {status === 'success' && <p className={styles.success}>Mulțumim! Ai fost înscris.</p>}
    </section>
  );
};

export default Newsletter;
