import styles from './ContactBlock.module.css';

const contactLinks = [
  { href: 'mailto:lincolnaraujo22@gmail.com', label: 'Email' },
  { href: 'https://www.linkedin.com/in/lincolnaraujo/', label: 'LinkedIn', external: true },
  { href: 'https://github.com/Lincoln-Araujo', label: 'GitHub', external: true },
];

export default function ContactBlock() {
  return (
    <section className={styles.section} aria-labelledby="contact-block-title">
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Let&apos;s connect</p>

          <h2 id="contact-block-title" className={styles.title}>
            I&apos;m always open to thoughtful work, good conversations, and meaningful digital products.
          </h2>

          <p className={styles.description}>
            Whether it&apos;s about a project, an opportunity, or simply exchanging ideas, feel free to reach out.
          </p>
        </div>

        <ul className={styles.links} aria-label="Contact links">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.link}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}