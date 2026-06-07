import Link from 'next/link';
import styles from './EBCNextProject.module.css';

export default function EBCNextProject() {
  return (
    <section className={styles.section} aria-labelledby="ebc-next-project-title">
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Next project</p>
          <h2 id="ebc-next-project-title" className={styles.title}>
            Grand Reserva
          </h2>
          <p className={styles.description}>
            A self-initiated redesign concept created during COP30, focused on mobile usability, 
            clearer hierarchy, and a more credible official experience.
          </p>
        </div>

        <Link href="/work/grand-reserva" className={styles.link}>
          View next case
        </Link>
      </div>
    </section>
  );
}