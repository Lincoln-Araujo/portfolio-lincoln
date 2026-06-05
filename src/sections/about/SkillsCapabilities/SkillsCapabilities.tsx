import styles from './SkillsCapabilities.module.css';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS / LESS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Plone / Volto frontends',
    ],
  },
  {
    title: 'UX & Interface',
    items: [
      'Information Architecture',
      'Accessibility',
      'Interface Architecture',
      'Design Systems Thinking',
      'Wireframing',
      'Prototyping',
      'UI Refinement',
    ],
  },
  {
    title: 'Product & Workflow',
    items: [
      'Stakeholder Collaboration',
      'Content-rich Platforms',
      'Frontend Strategy',
      'UX-driven Development',
      'Design-to-Code Workflow',
      'Scalable Interface Thinking',
    ],
  },
];

export default function SkillsCapabilities() {
  return (
    <section
      className={styles.section}
      aria-labelledby="skills-capabilities-title"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>Skills &amp; Capabilities</p>
        <h2 id="skills-capabilities-title" className={styles.title}>
          The tools are important. So is the way I use them.
        </h2>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>

            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}