"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  pages: { name: string; path: string }[];
  isOpen: boolean;
}

export default function Dropdown({ pages, isOpen }: DropdownProps) {
  const pathname = usePathname();
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
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
    </div>
  );
}
