import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/react';
import styles from './styles.module.css';

const components: PortableTextComponents = {
  marks: {
    violet: ({ children }) => <span className={styles.violet}>{children}</span>,
    strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} className={styles.link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  },
};

type Props = {
  eyebrow?: string;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  blocks: PortableTextBlock[];
};

export default function MainTextSection({ eyebrow, title, imageUrl, imageAlt, blocks }: Props) {
  if (!blocks || blocks.length === 0) return null;
  const hasImage = Boolean(imageUrl);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {hasImage && (
          <div className={styles.imageWrap}>
            <div className={styles.glow} aria-hidden />
            <div className={styles.imageFrame}>
              <Image
                src={imageUrl!}
                alt={imageAlt || title}
                fill
                sizes="(max-width: 820px) 100vw, 1200px"
                className={styles.image}
                priority={false}
              />
            </div>
          </div>
        )}

        <div className={styles.content}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.body}>
            <PortableText value={blocks} components={components} />
          </div>
        </div>
      </div>
    </section>
  );
}
