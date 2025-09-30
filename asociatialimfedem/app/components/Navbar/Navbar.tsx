"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Dropdown from './Dropdown';
import styles from './Navbar.module.scss';

const pages = [
  { name: 'ACASĂ', path: '/' },
  { name: 'DESPRE NOI', path: '/despre-noi' },
  { name: 'ECHIPĂ', path: '/echipa-noastra' },
  { name: 'DESPRE LIMFEDEM', path: '/despre-limfedem' },
  { name: 'SIMULATOR', path: '/simulator' },
  { name: 'CE FACEM', path: '/ce-facem' },
  { name: 'MEDIA', path: '/media' },
  { name: 'BLOG', path: '/blog' },
  { name: 'EVENIMENTE', path: '/evenimente' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img
            src="/assets/png/logo-orizontal.png"
            alt="Limfedem Logo"
            className={styles.logoImg}
          />
        </Link>
      </div>
      <div className={styles.pages}>
        <ul className={styles.links}>
          {pages.map((page) => (
            <li key={page.path} className={styles.linkItem}>
              <Link
                href={page.path}
                className={`${styles.link} ${pathname === page.path ? styles.linkActive : ''}`}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className={styles.closeIcon}>&times;</span>
          ) : (
            <>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </>
          )}
        </button>
        <Dropdown pages={pages} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      <div className={styles.cta}>
        <Link href="/implica-te">
          <button type="button" className={styles.ctaBtn}>
            Implică-te
          </button>
        </Link>
      </div>
    </nav>
  );
}
