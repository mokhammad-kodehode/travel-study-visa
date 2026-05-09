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
  title: string;
  blocks: PortableTextBlock[];
};

export default function MainTextSection({ title, blocks }: Props) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.accentBar} aria-hidden />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.body}>
              <PortableText value={blocks} components={components} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
