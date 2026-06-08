import Image from 'next/image';
import ExpandableImage from '@/components/ui/ExpandableImage/ExpandableImage';
import styles from './RadioMecContext.module.css';

export default function RadioMecContext() {
  return (
    <section className={styles.section} aria-labelledby="project-context-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Context</p>
        <h2 id="project-context-title" className={styles.title}>
          Two brands, one outdated platform, and a listening experience that no
          longer matched the product.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            Radio MEC and Radio Nacional were redesigned as two new digital
            platforms for EBC’s radio brands. Previously, both brands shared the
            same website, which blurred their identities and forced them into an
            outdated, restrictive experience.
          </p>

          <p className={styles.paragraph}>
            The legacy platform had been online for over a decade and no longer
            reflected the brands, the content model, or the expectations of a
            modern audio product. Live radio players were difficult to find,
            content discovery was limited, and the experience behaved more like
            an old institutional portal than a platform designed for listening.
          </p>

          <p className={styles.paragraph}>
            At the same time, both brands had already gone through a visual
            refresh, while the website still carried the tone of an older and
            more traditional identity. The project needed to transform that gap
            into something more coherent, immersive, and clearly aligned with
            the idea of a digital audio platform.
          </p>
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.comparisonBlock}>
            <div className={styles.oldPortalSlot}>
              <div className={styles.imageWrap}>
                 <ExpandableImage
                  src="/images/radios-ebc-old.png"
                  alt="Previous shared website for Radio MEC and Radio Nacional"
                  priority
                  sizes="(max-width: 980px) 100vw, 50vw"
                  imageFit="cover"
                  className={styles.image}
                />

                <div className={styles.imageBadge}>
                  <p className={styles.imageBadgeLabel}>Legacy portal</p>
                  <p className={styles.imageBadgeText}>Shared website before redesign</p>
                </div>
              </div>
            </div>

            <div className={styles.newPortalSlot}>
              <div className={styles.slotInner}>
                <p className={styles.slotLabel}>New portal</p>
                <p className={styles.slotTitle}>Pre-launch preview coming soon</p>
                <p className={styles.slotText}>
                  Final visuals of the redesigned experience will be added after
                  release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}