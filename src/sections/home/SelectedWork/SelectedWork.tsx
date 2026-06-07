import Image from 'next/image';
import Link from 'next/link';
import styles from './SelectedWork.module.css';

const projects = [
  {
    title: 'Rádio MEC / Nacional',
    meta: 'UX/UI Design, Interface Architecture, Frontend Engineering',
    description:
    'Modernization of public radio platforms with a focus on live streaming, content discovery, accessibility, and scalable editorial experiences.',
    href: '/work/radio-mec-nacional',
    image: '/images/portal-radios-ebc.png',
    alt: 'Preview of Rádio MEC and Rádio Nacional project',
  },
  {
    title: 'EBC',
    meta: 'UX/UI Design, Design System, Frontend',
    description:
    'Design systems and digital platforms created to support public communication through accessible, scalable, and content-driven experiences.',
    href: '/work/ebc',
    image: '/images/portal-ebc.png',
    alt: 'Preview of EBC website project',
  },
  {
    title: 'Grand Reserva',
    meta: 'UX/UI Design, Prototype',
    description:
    'A self-initiated redesign concept created during COP30 to rethink an outdated scheduling system through clarity, responsiveness, and stronger UX.',
    href: '/work/grand-reserva',
    image: '/images/grandreserva.png',
    alt: 'Preview of Grand Reserva side project',
  },
];


export default function SelectedWork() {
  return (
    <section id="work" className={styles.section} aria-labelledby="selected-work-title">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Selected Work</p>
        </div>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <Link key={project.title} href={project.href} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className={styles.image}
              />
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardMeta}>{project.meta}</p>
              <p className={styles.cardDescription}>{project.description}</p>

              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}