import styles from './GrandReservaRole.module.css';

const responsibilities = [
  'Identified the most urgent pain points through direct day-to-day use during COP30 operations.',
  'Redesigned the interface with a stronger UX and UI focus grounded in real user friction.',
  'Improved hierarchy, responsiveness, and interaction clarity across the schedule experience.',
  'Built a rapid MVP prototype in React and Tailwind to make the proposal tangible and presentable.',
  'Presented the concept to broadcast leadership and later to the person responsible for the system.',
];

export default function GrandReservaRole() {
  return (
    <section className={styles.section} aria-labelledby="grand-reserva-role-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>My Role</p>
          <h2 id="grand-reserva-role-title" className={styles.title}>
            A self-initiated redesign shaped by direct friction, urgency, and a desire to improve the system.
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            This project was entirely self-initiated. I designed and prototyped it on my own while
            still working on-site at COP30, using short windows of time and a small number of free
            hours to turn a real pain point into a concrete proposal.
          </p>

          <p className={styles.paragraph}>
            Because of the time constraints, I focused on the most visible and recurring problems:
            mobile usability, responsiveness, readability, filter clarity, stronger interface hierarchy,
            and a more credible visual language aligned with the UNFCCC context.
          </p>

          <ul className={styles.list}>
            {responsibilities.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}