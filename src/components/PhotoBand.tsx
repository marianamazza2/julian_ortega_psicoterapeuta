import { motion } from 'framer-motion'

type Props = {
  src: string
  alt: string
  /** Vertical framing of the crop, e.g. 'center 40%' */
  focus?: string
  background?: string
}

/**
 * Wide photographic band used as a breather between content sections.
 * Same 1060 container as the rest of the page, 16/9 crop, sin texto encima.
 */
export function PhotoBand({ src, alt, focus = 'center 38%', background = 'transparent' }: Props) {
  return (
    <section aria-hidden={false} style={{ padding: '0 0 0', background }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '72px 32px' }}>
        <motion.figure
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            position: 'relative',
            margin: 0,
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '16 / 9',
            boxShadow: '0 26px 60px -32px rgba(36,53,49,.4)',
          }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: focus,
              display: 'block',
            }}
          />
        </motion.figure>
      </div>
    </section>
  )
}
