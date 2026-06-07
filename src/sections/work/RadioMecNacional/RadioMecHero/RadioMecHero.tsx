import styles from './RadioMecHero.module.css';

const metaItems = [
  {
    label: 'Organization',
    value: 'Empresa Brasil de Comunicação (EBC)',
  },
  {
    label: 'Platforms',
    value: 'radiomec.ebc.com.br / radionacional.ebc.com.br',
  },
  {
    label: 'Role',
    value: 'Frontend Engineer / UX Engineer',
  },
  {
    label: 'Scope',
    value:
      'Website redesign, information architecture, audio streaming experience, editorial tooling, accessibility, backend integration',
  },
  {
    label: 'Status',
    value: 'Pre-launch case study',
  },
];

export default function RadioMecHero() {
  return (
    <section className={styles.section} aria-labelledby="project-hero-title">
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Frontend Engineering / UX / Interface Architecture
          </p>

          <h1 id="project-hero-title" className={styles.title}>
            Radio MEC / Nacional
          </h1>

          <p className={styles.summary}>
            Reimagining the digital experience of EBC’s radio platforms through
            content-rich architecture, accessibility, and interface clarity.
          </p>

          <dl className={styles.metaList}>
            {metaItems.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <dt className={styles.metaLabel}>{item.label}</dt>
                <dd className={styles.metaValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.media}>
          <div className={styles.placeholder}>
            <div className={styles.placeholderInner}>
              <p className={styles.placeholderLabel}>New portal preview</p>
              <p className={styles.placeholderTitle}>
                Hero visual will be added after release
              </p>
              <p className={styles.placeholderText}>
                This space is reserved for the final project image of the new
                portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}