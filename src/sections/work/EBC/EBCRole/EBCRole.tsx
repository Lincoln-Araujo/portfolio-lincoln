import styles from './EBCRole.module.css';

const responsibilities = [
  'Created the interface direction for the homepage and key visual areas of the portal.',
  'Worked on UI design based on benchmarking, stakeholder discussion, and early Figma proposals.',
  'Implemented the approved frontend using HTML, CSS, and JavaScript.',
  'Delivered the coded interface to the backend team for Plone 5 integration.',
  'Helped translate the renewed institutional brand into a more modern and coherent web presence.',
];

export default function EBCRole() {
  return (
    <section className={styles.section} aria-labelledby="ebc-role-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>My Role</p>
          <h2 id="ebc-role-title" className={styles.title}>
            A quieter role than later projects, but still a defining one in how
            I started shaping digital experiences at EBC.
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            At that point, I had recently joined the team and was still learning
            the workflow, the CMS environment, and the internal dynamics of the
            group. I had been working on benchmarking and early interface ideas
            in Figma when the need for a redesign became concrete.
          </p>

          <p className={styles.paragraph}>
            From there, my contribution focused mainly on interface design and
            frontend implementation. I designed the visual direction, discussed
            it with the internal stakeholder, refined the solution, and then
            translated it into HTML, CSS, and JavaScript for the backend team to
            integrate into Plone 5.
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