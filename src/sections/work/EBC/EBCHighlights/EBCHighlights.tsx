import Image from 'next/image';
import ExpandableImage from '@/components/ui/ExpandableImage/ExpandableImage';
import styles from './EBCHighlights.module.css';

const highlightItems = [
  {
    title: 'Homepage hero / carousel',
    text: 'The opening carousel became the strongest expression of the redesign, bringing motion, rhythm, and visual presence to a portal that previously felt dated and visually weak.',
    src: '/images/portal-ebc.png',
    alt: 'EBC homepage carousel redesign',
  },
  {
    title: 'Hub logic for EBC vehicles',
    text: 'The homepage was structured to work as a switchboard, surfacing main stories from different EBC vehicles and guiding users into the broader media ecosystem.',
    src: '/images/destaques-ebc.png',
    alt: 'EBC vehicle highlights section',
  },
  {
    title: 'Institutional section',
    text: 'A more institutional layer of the homepage helped balance services, internal pages, and corporate communication without losing visual clarity.',
    src: '/images/institucional-ebc.png',
    alt: 'EBC institutional homepage section',
  },
  {
    title: 'Content page',
    text: 'Even within a more limited scope, the content page helped extend the design language beyond the homepage and made the reading experience feel more coherent.',
    src: '/images/conteudo-ebc.png',
    alt: 'EBC content page redesign',
  },
];

export default function EBCHighlights() {
  return (
    <section className={styles.section} aria-labelledby="ebc-highlights-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Key visual decisions</p>
        <h2 id="ebc-highlights-title" className={styles.title}>
          The strongest value of this project was how it changed perception
          through structure, rhythm, and visual presence.
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
              <ExpandableImage
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 980px) 100vw, 50vw"
                imageFit="contain"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}