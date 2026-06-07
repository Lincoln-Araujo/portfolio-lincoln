import styles from './RadioMecReflection.module.css';

export default function RadioMecReflection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="project-reflection-title"
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Reflection</p>
          <h2 id="project-reflection-title" className={styles.title}>
            This project reinforced the way I think about experience, structure,
            and product systems.
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            For listeners, the redesign made the platform feel more fluid, more
            immersive, and much more clearly centered on audio. It became easier
            to understand what was available, what was currently playing, and
            how to continue exploring without losing context.
          </p>

          <p className={styles.paragraph}>
            For editors, the project brought more clarity and control to daily
            operational tasks, especially in areas such as programming and
            publication management. Improving those workflows was just as
            important as refining the public-facing interface.
          </p>

          <p className={styles.paragraph}>
            More than anything, this work reinforced something that has become
            central to how I operate: interface quality, content architecture,
            system logic, and editorial workflow are not separate layers. They
            shape the same product experience together.
          </p>
        </div>
      </div>
    </section>
  );
}