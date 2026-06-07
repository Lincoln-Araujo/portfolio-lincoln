import styles from './RadioMecHighlights.module.css';

const highlightItems = [
  {
    title: 'Global player',
    text: 'The player becomes active when a live radio or on-demand audio action is triggered and stays fixed at the bottom of the interface, allowing users to keep listening while navigating.',
    label: 'New portal preview',
    placeholderTitle: 'Global audio player visual goes here',
  },
  {
    title: 'Programming workflow',
    text: 'The schedule became clearer for listeners and dramatically easier for editors, with recurring weekday logic, special schedules, copy actions, validations, and time safeguards.',
    label: 'New portal preview',
    placeholderTitle: 'Programming editor and schedule view go here',
  },
  {
    title: 'Search experience',
    text: 'The new search is intentionally simple and focused, helping users find radio-specific content through covers, titles, dates, and direct access with much more clarity.',
    label: 'New portal preview',
    placeholderTitle: 'Search interface visual goes here',
  },
  {
    title: 'Homepage structure',
    text: 'The homepage works as a condensed expression of the platform, combining hero, programming, latest content, programs, podcasts, and videocasts into a coherent opening experience.',
    label: 'New portal preview',
    placeholderTitle: 'Homepage opening quadrant goes here',
  },
  {
    title: 'Content page',
    text: 'The content page became more immersive and integrated with the rest of the portal, supporting playback, sharing, feedback, related content, and richer contextual information.',
    label: 'New portal preview',
    placeholderTitle: 'Content page visual goes here',
  },
];

export default function RadioMecHighlights() {
  return (
    <section
      className={styles.section}
      aria-labelledby="project-highlights-title"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>Key experience decisions</p>
        <h2 id="project-highlights-title" className={styles.title}>
          The project was shaped by a few structural decisions that changed how
          the platform feels to use.
        </h2>
      </div>

      <div className={styles.stack}>
        {highlightItems.map((item) => (
          <article key={item.title} className={styles.block}>
            <div className={styles.textColumn}>
              <h3 className={styles.blockTitle}>{item.title}</h3>
              <p className={styles.blockText}>{item.text}</p>
            </div>

            <div className={styles.visualColumn}>
              <div className={styles.placeholder}>
                <div className={styles.placeholderInner}>
                  <p className={styles.placeholderLabel}>{item.label}</p>
                  <p className={styles.placeholderTitle}>
                    {item.placeholderTitle}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}