import Image from 'next/image';
import styles from './EBCContext.module.css';

export default function EBCContext() {
  return (
    <section className={styles.section} aria-labelledby="ebc-context-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Context</p>
        <h2 id="ebc-context-title" className={styles.title}>
          A renewed brand, an outdated portal, and the need for a stronger
          institutional entry point.
        </h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            The EBC portal was redesigned to become a clearer and more credible
            institutional website, while also working as a switchboard for the
            company’s broader ecosystem of communication platforms.
          </p>

          <p className={styles.paragraph}>
            The previous portal had been online for more than a decade and no
            longer reflected the meaning of the renewed EBC brand. It also
            lacked visual clarity and did little to give visibility to the
            company’s other vehicles, which were themselves still operating with
            outdated platforms at the time.
          </p>

          <p className={styles.paragraph}>
            The new portal needed to balance these two roles: institutional
            presence and content hub. It had to communicate the company more
            clearly, while also helping users discover TV, radio, and news
            platforms through a more organized and visually engaging homepage.
          </p>
        </div>

        <div className={styles.visualColumn}>
           <div className={styles.imageWrap}>
              <Image
                src="/images/portal-ebc-more.png"
                alt="EBC homepage redesign"
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