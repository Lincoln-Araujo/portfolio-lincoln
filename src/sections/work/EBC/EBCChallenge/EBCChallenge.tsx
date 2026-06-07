import styles from './EBCChallenge.module.css';

const challengePoints = [
  'Modernizing a decade-old institutional portal after a brand refresh.',
  'Making the homepage work as both an institutional portal and a content hub.',
  'Giving more visibility to EBC’s vehicles while their own platforms were still outdated.',
  'Designing within the constraints of Plone 5 while still raising the visual quality of the experience.',
  'Building trust, readability, and a stronger first impression through interface design.',
];

export default function EBCChallenge() {
  return (
    <section className={styles.section} aria-labelledby="ebc-challenge-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Challenge</p>
        <h2 id="ebc-challenge-title" className={styles.title}>
          The real challenge was not complexity of features, but clarity of role,
          perception, and presence.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            The EBC portal was not meant to be the company’s main editorial
            destination. Its role was more subtle: to represent the institution,
            support access to services and internal pages, and at the same time
            work as an entry point into EBC’s broader ecosystem of communication
            platforms.
          </p>

          <p className={styles.paragraph}>
            That meant the redesign had to balance institutional communication
            with discoverability. The homepage needed to feel more modern and
            credible, but also function as a switchboard that could introduce
            users to TV, radio, and news vehicles more clearly.
          </p>

          <p className={styles.paragraph}>
            In practice, the challenge was to make the portal feel more readable,
            more intentional, and more aligned with the renewed brand — all
            within the constraints of an older CMS environment and an early stage
            in my own journey inside the team.
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