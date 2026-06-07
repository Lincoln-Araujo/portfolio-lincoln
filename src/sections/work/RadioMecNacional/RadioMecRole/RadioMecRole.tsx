import styles from './RadioMecRole.module.css';

const responsibilities = [
  'Led UX and frontend across the project within a small multidisciplinary team.',
  'Identified user, editorial, and product pain points and translated them into platform decisions.',
  'Defined interface behavior, visual direction, and reusable component logic.',
  'Architected and implemented the global audio player experience.',
  'Worked closely with backend integration and helped shape API behavior through frontend rules.',
  'Contributed to editorial workflows, platform training, and administrative tooling decisions.',
];

export default function RadioMecRole() {
  return (
    <section className={styles.section} aria-labelledby="project-role-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>My Role</p>
          <h2 id="project-role-title" className={styles.title}>
            UX, frontend, interaction logic, and the structure behind the experience.
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            I was the sole person responsible for UX and frontend across the project,
            working alongside backend, infrastructure, technical leadership, and the
            internal stakeholder who owned the platform.
          </p>

          <p className={styles.paragraph}>
            My role covered the product from multiple angles: identifying pain points,
            aligning user and editorial needs, shaping interface architecture,
            translating brand guidelines into digital experience, implementing the
            frontend, and contributing to how the platform worked behind the scenes.
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