import Link from 'next/link';
import styles from './RadioMecNextProject.module.css';

export default function RadioMecNextProject() {
  return (
    <section
      className={styles.section}
      aria-labelledby="next-project-title"
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Next project</p>
          <h2 id="next-project-title" className={styles.title}>
            EBC
          </h2>
          <p className={styles.description}>
            Institutional and public communication interfaces designed with
            clarity, consistency, and scalable structure.
          </p>
        </div>

        <Link href="/work/ebc" className={styles.link}>
          View next case
        </Link>
      </div>
    </section>
  );
}