import styles from './EBCReflection.module.css';

export default function EBCReflection() {
  return (
    <section className={styles.section} aria-labelledby="ebc-reflection-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Reflection</p>
          <h2 id="ebc-reflection-title" className={styles.title}>
            This project showed me how much perception can change through better
            hierarchy, clearer structure, and stronger visual intent.
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            The EBC portal did not become a radically different product in terms
            of feature set, but it became a much stronger institutional presence.
            It felt more readable, more coherent, and more aligned with the
            company’s renewed identity.
          </p>

          <p className={styles.paragraph}>
            For me, it was also an important moment professionally. I was still
            early in my time on the team, still learning the environment, and
            yet the result proved that stronger interface decisions could
            transform the way a public-facing platform was perceived.
          </p>

          <p className={styles.paragraph}>
            In many ways, this project became a signal of what was possible. Once
            the portal gained a more modern and credible presence, other EBC
            platforms also started pushing for broader redesigns of their own.
          </p>
        </div>
      </div>
    </section>
  );
}