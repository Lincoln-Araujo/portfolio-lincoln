import styles from './Education.module.css';

const educationItems = [
  {
    title: 'Postgraduate Degree in UX Engineering',
    description:
      'A deeper focus on user experience, interface systems, and human-centered digital products.',
  },
  {
    title: 'B.Sc. in Software Engineering',
    description:
      'A foundation in software development, systems thinking, and product structure.',
  },
  {
    title: 'B.A. in Japanese Language and Literature',
    description:
      'A background shaped by language, learning, and communication — elements that continue to influence how I think about clarity, usability, and understanding in digital products.',
  },
];

export default function Education() {
  return (
    <section className={styles.section} aria-labelledby="education-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Education</p>
        <h2 id="education-title" className={styles.title}>
          The academic path that shaped how I build.
        </h2>
      </div>

      <div className={styles.grid}>
        {educationItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}