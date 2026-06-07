import Image from 'next/image';
import ExpandableImage from '@/components/ui/ExpandableImage/ExpandableImage';
import styles from './GrandReservaHighlights.module.css';

const highlightItems = [
  {
    title: 'Main dashboard',
    text: 'The redesign clarified the overall structure of the system and made the interface feel more official, intentional, and aligned with the UNFCCC brand.',
    src: '/images/dashboard-grandreserva.png',
    alt: 'Grand Reserva redesigned main dashboard',
  },
  {
    title: 'Schedule tab',
    text: 'Core schedule information became easier to scan, with better hierarchy, less spreadsheet-like density, and a clearer sense of what matters most.',
    src: '/images/schedule-tab-grandreserva.png',
    alt: 'Grand Reserva schedule tab redesign',
  },
  {
    title: 'Meetings tab',
    text: 'Alternative views helped users navigate event information more comfortably, depending on task and context.',
    src: '/images/meetings-tab-grandreserva.png',
    alt: 'Grand Reserva meetings tab redesign',
  },
  {
    title: 'Notification system',
    text: 'A notification concept highlighted which event rows had changed, helping users identify updates more quickly instead of manually comparing versions.',
    src: '/images/notification-grandreserva.png',
    alt: 'Grand Reserva notification system concept',
  },
  {
    title: 'Mobile-friendly tables and cards',
    text: 'One of the strongest improvements was making the experience work more credibly on small screens, including responsive treatment for tables and an alternative card-based view.',
    src: '/images/card-view-grandreserva.png',
    alt: 'Grand Reserva mobile card and table views',
  },
];

export default function GrandReservaHighlights() {
  return (
    <section
      className={styles.section}
      aria-labelledby="grand-reserva-highlights-title"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>Key experience decisions</p>
        <h2 id="grand-reserva-highlights-title" className={styles.title}>
          The redesign focused on making information easier to trust, easier to
          read, and easier to act on.
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