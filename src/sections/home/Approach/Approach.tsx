import {
  Accessibility,
  Grid2x2,
  MousePointerClick,
  SunMedium,
} from 'lucide-react';

import styles from './Approach.module.css';

const principles = [
  {
    title: 'Clarity',
    description:
      'I remove noise and focus on what matters, so users can understand effortlessly.',
    icon: SunMedium,
  },
  {
    title: 'Usability',
    description:
      'I design for real people and real tasks, creating interfaces that feel intuitive and efficient.',
    icon: MousePointerClick,
  },
  {
    title: 'Structure',
    description:
      'I build scalable systems and components that bring consistency and speed.',
    icon: Grid2x2,
  },
  {
    title: 'Accessibility',
    description:
      'I design inclusively and build with accessibility in mind from the very beginning.',
    icon: Accessibility,
  },
];

export default function Approach() {
  return (
    <section className={styles.section} aria-labelledby="approach-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Approach</p>

          <h2 id="approach-title" className={styles.title}>
            Principles that guide my work
          </h2>

          <span className={styles.accentLine} aria-hidden="true" />
        </div>

        <div className={styles.principles}>
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={styles.principle}>
                <div className={styles.icon} aria-hidden="true">
                  <Icon 
                    size={42}
                    strokeWidth={1.4} 
                  />
                </div>

                <h3 className={styles.principleTitle}>{item.title}</h3>

                <p className={styles.principleDescription}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}