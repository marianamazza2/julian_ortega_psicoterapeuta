import { motion } from 'framer-motion'

type Props = {
  src: string
  alt: string
  caption: string
  /** Vertical framing of the crop, e.g. 'center 40%' */
  focus?: string
  background?: string
}

/**
 * Wide photographic band used as a breather between content sections.
 * Same 1060 container as the rest of the page, 16/9 crop, caption over a
 * teal gradient anchored to the bottom-left.
 */
export function PhotoBand({ src, alt, caption, focus = 'center 38%', background = 'transparent' }: Props) {
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

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(22,67,63,.74) 0%, rgba(22,67,63,.28) 38%, rgba(22,67,63,0) 68%)',
              pointerEvents: 'none',
            }}
          />

          <figcaption
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              padding: '0 40px 34px',
              maxWidth: '46ch',
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
              fontWeight: 430,
              lineHeight: 1.35,
              letterSpacing: '-.005em',
              color: '#fff',
              textShadow: '0 1px 18px rgba(22,67,63,.35)',
            }}
          >
            {caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
