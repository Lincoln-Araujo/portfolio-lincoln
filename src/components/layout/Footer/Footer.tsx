import styles from './Footer.module.css';

const footerLinks = [
  { href: 'mailto:lincolnaraujo22@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/lincolnaraujo/', label: 'LinkedIn' },
  { href: 'https://github.com/Lincoln-Araujo', label: 'GitHub' },
  { href: '/resume/lincoln-araujo-cv.pdf', label: 'Resume' },
];

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.links} aria-label="Contact links">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.link}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                download={link.label === 'Resume' ? true : undefined}
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