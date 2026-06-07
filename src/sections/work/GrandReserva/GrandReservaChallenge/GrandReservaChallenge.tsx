import styles from './GrandReservaChallenge.module.css';

const challengePoints = [
  'Designing quickly under extreme time pressure during COP30.',
  'Improving a system that was widely disliked but still operationally essential.',
  'Making the experience work credibly on mobile, where the original system failed badly.',
  'Suggesting meaningful improvement without assuming a full rebuild would be possible.',
  'Building a polished enough MVP to be taken seriously in conversation with the UNFCCC team.',
];

export default function GrandReservaChallenge() {
  return (
    <section className={styles.section} aria-labelledby="grand-reserva-challenge-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Challenge</p>
        <h2 id="grand-reserva-challenge-title" className={styles.title}>
          The biggest challenge was not only redesigning the interface, but doing it under pressure and with real-world constraints in mind.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            This was not a speculative redesign done from distance. It happened during an intense
            month of work, in the middle of COP30 operations, while I was still using the original
            system daily for time-sensitive coordination tasks.
          </p>

          <p className={styles.paragraph}>
            The redesign had to be fast, practical, and credible. It needed to show that the system
            could become more usable and more aligned with the importance of the institution behind
            it, without pretending that implementation would be easy or unconstrained.
          </p>

          <p className={styles.paragraph}>
            That meant balancing ambition with realism: proposing a better experience while still
            respecting the possibility that any real evolution of the system would depend on budget,
            team capacity, and technical limitations.
          </p>
        </div>

        <div className={styles.pointsColumn}>
          <div className={styles.pointsBlock}>
            {challengePoints.map((point) => (
              <p key={point} className={styles.point}>
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}