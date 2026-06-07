import styles from './ResumeBlock.module.css';

export default function ResumeBlock() {
  return (
    <section className={styles.section} aria-labelledby="resume-block-title">
      <div className={styles.card}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Resume</p>

          <h2 id="resume-block-title" className={styles.title}>
            Want the concise version?
          </h2>

          <p className={styles.description}>
            You can download my resume for a concise view of my experience,
            background, and work.
          </p>
        </div>

        <a href="#" className={styles.button}>
          Download Resume
        </a>
      </div>
    </section>
  );
}