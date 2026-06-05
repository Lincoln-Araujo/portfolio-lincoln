import styles from './Journey.module.css';

const journeyItems = [
  {
    title: 'Before software',
    text: 'Before software, I was already drawn to building things — drawing, creating, imagining, organizing. Even before I had the language for it, I was naturally pulled toward structure, creation, and problem-solving.',
  },
  {
    title: 'The shift',
    text: 'My transition into tech came from friction. I was constantly noticing how systems and public services made simple tasks harder than they needed to be. At some point, that frustration turned into a question: what if I became someone who could improve them?',
  },
  {
    title: 'Discovering UX',
    text: 'Studying Software Engineering showed me that digital products were never just about code. That’s where UX started to matter to me — not as decoration, but as the experience of using something. I became increasingly interested in interfaces that feel clear, intuitive, and natural.',
  },
  {
    title: 'Building in the real world',
    text: 'That path eventually brought me into digital product work at EBC, where I started contributing to institutional platforms, public communication products, and more complex interface systems. Later, my postgraduate degree in UX Engineering helped me deepen that perspective and bring it back into real projects.',
  },
];

export default function Journey() {
  return (
    <section className={styles.section} aria-labelledby="journey-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Journey</p>
        <h2 id="journey-title" className={styles.title}>
          How I got here
        </h2>
      </div>

      <div className={styles.grid}>
        {journeyItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}