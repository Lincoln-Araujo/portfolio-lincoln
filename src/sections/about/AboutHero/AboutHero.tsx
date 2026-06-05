import Image from 'next/image';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.section} aria-labelledby="about-hero-title">
      <div className={styles.layout}>
        <div className={styles.media}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/hero-portrait.png"
              alt="Portrait of Lincoln Araujo"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 38vw"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>About</p>

          <h1 id="about-hero-title" className={styles.title}>
            Engineer. Problem Solver. Interface Architect.
          </h1>

          <p className={styles.lead}>
            I moved into software after years of noticing how poorly designed
            systems make simple things harder than they should be.
          </p>

          <p className={styles.body}>
            That shift shaped the way I build today: with care for clarity,
            usability, and the structure behind a good experience. Over time,
            frontend became the place where my builder mindset, UX thinking, and
            interest in real-world usability naturally came together.
          </p>
        </div>
      </div>
    </section>
  );
}