import Image from 'next/image';
import styles from './GrandReservaContext.module.css';

export default function GrandReservaContext() {
  return (
    <section className={styles.section} aria-labelledby="grand-reserva-context-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Context</p>
        <h2 id="grand-reserva-context-title" className={styles.title}>
          A real operational pain point became the starting point for a self-initiated redesign.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            Grand Reserva was the official scheduling system used during COP30 operations.
            I came into direct contact with it while working on-site in Belém and needing to
            check, update, and distribute daily schedules quickly to a large internal team.
          </p>

          <p className={styles.paragraph}>
            The system was difficult to understand, visually outdated, and especially painful
            to use on mobile. Tables behaved like desktop spreadsheets compressed into a phone
            screen, forcing users to zoom, scroll horizontally, and repeatedly recover context.
          </p>

          <p className={styles.paragraph}>
            Because schedule changes happened daily, this was not a minor inconvenience. It was
            a recurring operational problem. The redesign began as an attempt to show that the
            system could become clearer, more credible, and much easier to use without
            necessarily being rebuilt from scratch.
          </p>
        </div>

        <div className={styles.visualColumn}>
           <div className={styles.imageWrap}>
              <Image
                src="/images/dashboard-grandreserva.png"
                alt="Dashboard platform"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
        </div>
      </div>
    </section>
  );
}