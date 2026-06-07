'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ExpandableImage.module.css';

type ExpandableImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageFit?: 'cover' | 'contain';
};

export default function ExpandableImage({
  src,
  alt,
  sizes = '(max-width: 980px) 100vw, 50vw',
  priority = false,
  className,
  imageFit = 'contain',
}: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-label={`Expand image: ${alt}`}
      >
        <div className={`${styles.imageWrap} ${className ?? ''}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`${styles.image} ${imageFit === 'cover' ? styles.cover : styles.contain}`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close expanded image"
            >
              ×
            </button>

            <div className={styles.modalImageWrap}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className={`${styles.modalImage} ${imageFit === 'cover' ? styles.cover : styles.contain}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}