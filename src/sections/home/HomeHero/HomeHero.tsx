import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Hi, I'm Lincoln Araújo
          </p>

          <h1 id="home-hero-title" className={styles.title}>
            Frontend Engineer specializing in UX &amp; Interface Architecture
          </h1>

          <p className={styles.intro}>
             I design and build interfaces that turn complexity into clarity,
            with a strong focus on usability, structure, and natural user
            flows.
          </p>

          <div className={styles.actions}>
            <Link href="#work" className={styles.primaryAction}>
              View Work <span aria-hidden="true">→</span>
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              About Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/hero-portrait.png"
              alt="Portrait of Lincoln Araujo"
              fill
              priority
              sizes="(max-width: 1180px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <p className={styles.sideNote}>Based in Brazil</p>
        </div>
      </div>
    </section>
  );
}