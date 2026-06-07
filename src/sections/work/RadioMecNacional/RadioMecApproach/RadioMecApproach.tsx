import styles from './RadioMecApproach.module.css';

export default function RadioMecApproach() {
  return (
    <section
      className={styles.section}
      aria-labelledby="project-approach-title"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>Approach</p>
        <h2 id="project-approach-title" className={styles.title}>
          I approached the project as both a listening product and an editorial
          system.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            For the audience, the goal was to make the experience feel less like
            a traditional institutional portal and more like a platform centered
            on audio, continuity, and discovery. Navigation, hierarchy, and the
            placement of key components were all designed to support that shift.
          </p>

          <p className={styles.paragraph}>
            For editors, the goal was to reduce operational friction. Instead of
            treating administrative work as something separate from experience, I
            approached it as part of the same product problem: if the people
            managing the platform struggled with schedules, publishing, and
            organization, that would directly affect the quality of the public
            portal.
          </p>

          <p className={styles.paragraph}>
            This led me to work on both fronts at the same time: the public
            experience for listeners and the internal tooling that supports the
            platform behind the scenes.
          </p>
        </div>

        <div className={styles.noteBlock}>
          <p className={styles.noteLabel}>Working principle</p>
          <p className={styles.noteText}>
            I do not separate interface quality from system logic. Experience,
            structure, content architecture, and workflow design are all part of
            the same product problem.
          </p>
        </div>
      </div>
    </section>
  );
}