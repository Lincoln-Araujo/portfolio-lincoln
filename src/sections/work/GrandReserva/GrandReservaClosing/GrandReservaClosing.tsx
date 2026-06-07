import Link from 'next/link';
import styles from './GrandReservaClosing.module.css';

export default function GrandReservaClosing() {
  return (
    <section className={styles.section} aria-labelledby="grand-reserva-closing-title">
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h2 id="grand-reserva-closing-title" className={styles.title}>
            Want to go back through the work?
          </h2>
          <p className={styles.description}>
            Explore the homepage, revisit the selected projects, or continue through the About page.
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryLink}>
            Back to home
          </Link>

          <Link href="/about" className={styles.secondaryLink}>
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}