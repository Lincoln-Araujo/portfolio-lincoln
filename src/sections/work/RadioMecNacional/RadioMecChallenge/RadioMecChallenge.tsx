import styles from './RadioMecChallenge.module.css';

const challengePoints = [
  'Building a production-ready project while learning Plone 6 in practice.',
  'Designing for two audiences at once: listeners and editors.',
  'Combining live radio, podcasts, videocasts, editorial content, and discovery in one coherent product.',
  'Making the platform feel more like an audio streaming experience than a traditional news portal.',
  'Creating internal tools such as the editorial dashboard and the new programming workflow.',
];

export default function RadioMecChallenge() {
  return (
    <section
      className={styles.section}
      aria-labelledby="project-challenge-title"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>Challenge</p>
        <h2 id="project-challenge-title" className={styles.title}>
          More than a redesign, this was a product, workflow, and platform challenge at the same time.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            The challenge was not limited to modernizing a dated interface. The
            project had to turn a fragmented platform into a coherent digital
            audio product while also improving the editorial workflows behind it.
          </p>

          <p className={styles.paragraph}>
            On the audience side, the portal needed to support a more natural
            streaming-oriented experience, where users could listen while
            navigating, discover content more clearly, and move through the
            platform without losing context.
          </p>

          <p className={styles.paragraph}>
            On the editorial side, the product needed to become easier to manage,
            especially in complex areas such as programming schedules,
            publication states, and content organization.
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