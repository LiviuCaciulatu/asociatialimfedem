"use client";

import styles from "./Footer.module.scss";
import React, { useState } from "react";
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h4>Meniu rapid</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/">Acasă</Link>
            </li>
            <li>
              <Link href="/despr-noi">Despre noi</Link>
            </li>
            <li>
              <Link href="/echipa-noastra">Echipa</Link>
            </li>
            <li>
              <Link href="/despre-limfedem">Despre Limfedem</Link>
            </li>
            <li>
              <Link href="/ce-facem">Ce facem</Link>
            </li>
          </ul>
        </div>

        <div className={styles.center}>
          <div className={styles.brand}>
            <img
              src="/assets/png/logo-new-wide.png"
              alt="logo"
              className={styles.logo}
            />
          </div>
          <p className={styles.description}>
            Înscrie-te la newsletter și fii la curent cu noutățile! Completează
            formularul de mai jos!
          </p>
          <form className={styles.form} onSubmit={submit}>
            <input
              aria-label="Email"
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adresa@exemplu.com"
            />
            <button
              className={styles.submit}
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Se încarcă..." : "Inscrie-te acum!"}
            </button>
          </form>

          {status === "error" && (
            <p className={styles.error}>
              Te rugăm introdu o adresă de email validă.
            </p>
          )}
          {status === "success" && (
            <p className={styles.success}>Mulțumim! Ai fost înscris.</p>
          )}
          <img
            src="/assets/footer/netopia.png"
            alt="logo"
            className={styles.logoNetopia}
          />
          <div className={styles.anpcLogos}>
            <img
              src="/assets/footer/anpc-1.webp"
              alt="logo"
              className={styles.logoAnpc}
            />
            <img
              src="/assets/footer/anpc-2.png"
              alt="logo"
              className={styles.logoAnpc}
            />
          </div>
        </div>

        <div className={styles.right}>
          <h4 className={styles.titleRight}>Link-uri utile</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/implica-te">Implică-te</Link>
            </li>
            <li>
              <Link href="/media">Media</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contactează-ne</Link>
            </li>
            <li>
              <Link href="/politica-de-confidentialitate">Politica de confidențialitate</Link>
            </li>
          </ul>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              FB
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>© {year} Asociația Limfedem</div>
      <div className={styles.cleancode}>
        <div className={styles.cleancodeTag}>Powered by</div>
        <a href="https://cleancode.ro/" target="_blank" rel="noopener noreferrer" aria-label="Clean Code">
          <img src="/assets/footer/logo_color.svg" alt="Clean Code" />
        </a>
      </div>
    </footer>
  );
}
