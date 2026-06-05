import styles from './HowIThink.module.css';

const principles = [
  {
    title: 'Natural use',
    text: 'A strong product should feel learnable, stable, and clear — not impressive at the cost of usability.',
  },
  {
    title: 'Clarity over noise',
    text: 'People should understand where they are, what they can do, and what happens next.',
  },
  {
    title: 'Structure shapes experience',
    text: 'Behind a good interface there is hierarchy, consistency, and thoughtful system design.',
  },
  {
    title: 'Accessibility is quality',
    text: 'Inclusive design is part of what makes a product genuinely usable.',
  },
];

export default function HowIThink() {
  return (
    <section className={styles.section} aria-labelledby="how-i-think-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>How I Think</p>
          <h2 id="how-i-think-title" className={styles.title}>
            The way I work is shaped by one idea: good interfaces should help people move naturally.
          </h2>
          <p className={styles.lead}>
            I care about products that feel clear, usable, and grounded in real interaction — not just visually polished.
          </p>
        </div>

        <div className={styles.grid}>
          {principles.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}