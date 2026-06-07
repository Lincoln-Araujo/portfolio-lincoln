import Image from 'next/image';
import styles from './EBCHero.module.css';

const metaItems = [
   {
    label: 'Organization',
    value: 'Empresa Brasil de Comunicação (EBC)',
  },
  {
    label: 'Website',
    value: 'ebc.com.br',
    href: 'https://www.ebc.com.br',
  },
  {
    label: 'Role',
    value: 'UI Designer / Frontend Developer',
  },
  {
    label: 'Scope',
    value:
      'Institutional portal redesign, homepage experience, content hub logic, frontend implementation, Plone 5 integration',
  },
  {
    label: 'Status',
    value: 'Completed project',
  },
];

export default function EBCHero() {
  return (
    <section className={styles.section} aria-labelledby="ebc-hero-title">
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            UI Design / Frontend / Institutional Platform
          </p>

          <h1 id="ebc-hero-title" className={styles.title}>
            EBC
          </h1>

          <p className={styles.summary}>
            Redesigning EBC’s institutional portal as a clearer, more credible
            digital entry point for the company and its communication ecosystem.
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
          <div className={styles.imageWrap}>
            <Image
              src="/images/portal-ebc.png"
              alt="EBC homepage redesign"
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