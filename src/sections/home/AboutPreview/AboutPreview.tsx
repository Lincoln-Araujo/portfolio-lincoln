import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutPreview.module.css';

export default function AboutPreview() {
  return (
    <section className={styles.section} aria-labelledby="about-preview-title">
      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/footer-portrait.png"
            alt="Lincoln Araujo working"
            fill
            sizes="360px"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>A Bit About Me</p>

          <h2 id="about-preview-title" className={styles.title}>
            I’m a developer with a designer’s eye and a systems thinker’s
            mindset.
          </h2>

          <p className={styles.description}>
            I believe great interfaces are the result of empathy, craftsmanship,
            and attention to detail. When I’m not coding or designing, you’ll
            find me reading, exploring new places, and photographing the world
            around me.
          </p>

          <Link href="/about" className={styles.link}>
            Learn more about me <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.signatureWrap}>
          <Image
            src="/images/assinatura.png"
            alt=""
            width={300}
            height={170}
            className={styles.signature}
          />
        </div>
      </div>
    </section>
  );
}