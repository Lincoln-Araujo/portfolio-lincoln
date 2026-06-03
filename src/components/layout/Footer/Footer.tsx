import styles from './Footer.module.css';

const footerLinks = [
  { href: 'mailto:your@email.com', label: 'Email' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { href: 'https://github.com/', label: 'GitHub' },
  { href: '#', label: 'Resume' },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.heading}>
          Let&apos;s build something clear, thoughtful, and meaningful.
        </p>

        <ul className={styles.links} aria-label="Contact links">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.link}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.signature}>Designed and built by Lincoln Araujo</p>
      </div>
    </footer>
  );
}