import styles from './GrandReservaReflection.module.css';

export default function GrandReservaReflection() {
  return (
    <section className={styles.section} aria-labelledby="grand-reserva-reflection-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Reflection</p>
          <h2 id="grand-reserva-reflection-title" className={styles.title}>
            This project reminded me that some of the most meaningful redesigns start from direct friction.
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Grand Reserva was not a commissioned project. It came from seeing a system in active use,
            feeling its limitations in a real operational context, and believing that it could be much better.
          </p>

          <p className={styles.paragraph}>
            What made the project especially meaningful to me was the context around it: the possibility
            that improving a system like this could help people work faster, more clearly, and with more
            confidence during an internationally important event.
          </p>

          <p className={styles.paragraph}>
            Even if the proposal never gets implemented, I value the fact that it became something tangible,
            presentable, and real enough to open a serious conversation. For me, that already meant planting
            a seed.
          </p>
        </div>
      </div>
    </section>
  );
}