import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const pages = [
  { name: 'ACASĂ', path: '/' },
  { name: 'DESPRE NOI', path: '/despre-noi' },
  { name: 'ECHIPA NOASTRĂ', path: '/echipa-noastra' },
  { name: 'DESPRE LIMFEDEM', path: '/despre-limfedem' },
  { name: 'CE FACEM', path: '/ce-facem' },
  { name: 'MEDIA', path: '/media' },
  { name: 'BLOG', path: '/blog' },
  { name: 'EVENIMENTE', path: '/evenimente' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img
            src="/assets/png/Limfedem_logo_orizontal.png"
            alt="Limfedem Logo"
            className={styles.logoImg}
          />
        </Link>
      </div>
      <ul className={styles.links}>
        {pages.map((page) => (
          <li key={page.path} className={styles.linkItem}>
            <Link href={page.path} className={styles.link}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
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
