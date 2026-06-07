import Image from 'next/image';
import styles from './GrandReservaHero.module.css';

const metaItems = [
  {
    label: 'Role',
    value: 'UX / UI / Frontend Prototype',
  },
  {
    label: 'Scope',
    value:
      'Self-initiated redesign concept, mobile-first usability improvements, interface restructuring, React prototype',
  },
  {
    label: 'Prototype',
    value: 'Live demo',
    href: 'https://grandreserve-ui-ux-redesign.vercel.app/',
  },
  {
    label: 'Status',
    value: 'Concept proposal / MVP prototype',
  },
];

export default function GrandReservaHero() {
  return (
    <section
      className={styles.section}
      aria-labelledby="grand-reserva-hero-title"
    >
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            UX / UI / Frontend Prototype / Self-initiated Project
          </p>

          <h1 id="grand-reserva-hero-title" className={styles.title}>
            Grand Reserva
          </h1>

          <p className={styles.summary}>
            Reimagining an outdated event scheduling system into a clearer, more
            credible, and mobile-friendly experience for high-stakes operational
            use.
          </p>

          <dl className={styles.metaList}>
            {metaItems.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <dt className={styles.metaLabel}>{item.label}</dt>
                <dd className={styles.metaValue}>
                  {'href' in item ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.metaLink}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.media}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/grandreserva.png"
              alt="Grand Reserva prototype dashboard"
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