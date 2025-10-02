"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  pages: { name: string; path: string }[];
  isOpen: boolean;
  onClose?: () => void;
}

export default function Dropdown({ pages, isOpen, onClose }: DropdownProps) {
  const pathname = usePathname();
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.links}>
        {pages.map((page) => (
          <li key={page.path} className={styles.linkItem}>
            {page.path === '/simulator' ? (
              <a
                href="/assets/html/simulator-limfedem-brat.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${pathname === page.path ? styles.linkActive : ''}`}
                onClick={() => onClose && onClose()}
              >
                {page.name}
              </a>
            ) : (
              <Link
                href={page.path}
                className={`${styles.link} ${pathname === page.path ? styles.linkActive : ''}`}
                onClick={() => onClose && onClose()}
              >
                {page.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
