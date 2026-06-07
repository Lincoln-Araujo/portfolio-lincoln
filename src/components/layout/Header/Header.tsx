'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
  { href: '/#work', label: 'Work', match: '/' },
  { href: '/about', label: 'About', match: '/about' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Go to homepage">
          <span className={styles.logoLetter}>L</span>
          <span className={styles.logoSlash}>/</span>
          <span className={styles.logoLetter}>A</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive = pathname === item.match;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <a
                href="/resume/lincoln-araujo-cv.pdf"
                download
                className={styles.navLink}
              >
                Resume
              </a>
            </li>

            <li>
              <Link href="/about#contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}