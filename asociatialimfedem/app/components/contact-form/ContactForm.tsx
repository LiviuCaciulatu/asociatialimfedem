"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !phone.trim()) {
      alert("Completează toate câmpurile înainte de trimitere.");
      return;
    }

    const subject = encodeURIComponent(`Mesaj de la ${name}`);
    const body = encodeURIComponent(`Nume: ${name}\nTelefon: ${phone}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:contact@asociatialimfedem.ro?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className={styles.formSection} aria-labelledby="form-title">
      {!sent ? (
          <div className={styles.container}>
          <div className={styles.left}>
            <h2 id="form-title" className={styles.title}>Contactează-ne completând formularul de mai jos:</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Numele tău
            <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label className={styles.label}>
            Telefon
            <input className={styles.input} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label className={styles.label}>
            Email
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label className={styles.label}>
            Mesajul tău
            <textarea className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>

          <button className={styles.button} type="submit">Trimite</button>
            </form>
          </div>

          <div className={styles.right}>
            <div className={styles.mapWrap}>
              <iframe
                title="Locație"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  'Bloc S19, Strada Râmnicu Vâlcea 8, București 031802'
                )}&output=embed`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.thanks}>Mulțumim! Se va deschide aplicația de email pentru a trimite mesajul.</p>
      )}
    </section>
  );
};

export default ContactForm;
