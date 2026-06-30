import { motion } from 'framer-motion'

const badges = [
  {
    label: 'Colegiado COPC 35627',
    variant: 'teal',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    label: 'Primera sesión orientativa',
    variant: 'coral',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: 'Presencial & Online',
    variant: 'sky',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    label: 'Práctica inclusiva y afirmativa',
    variant: 'lilac',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
      </svg>
    ),
  },
]

const palette: Record<string, { bg: string; color: string }> = {
  teal: { bg: 'var(--sage-tint)', color: 'var(--teal-strong)' },
  coral: { bg: 'var(--coral-tint)', color: '#9C4A2C' },
  sky: { bg: 'var(--sky-tint)', color: '#2F6A87' },
  lilac: { bg: 'var(--lilac-tint)', color: '#63507E' },
  amber: { bg: 'var(--amber-tint)', color: '#8A6A1E' },
}

const badgeStyle = (variant: string): React.CSSProperties => {
  const c = palette[variant] ?? palette.teal
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    fontFamily: 'var(--sans)',
    fontWeight: 680,
    fontSize: '.77rem',
    letterSpacing: '.04em',
    padding: '7px 15px',
    borderRadius: 999,
    background: c.bg,
    color: c.color,
  }
}

export function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="hidden-mobile"
      style={{
        padding: '18px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          flexWrap: 'wrap',
        }}>
          {badges.map((b, i) => (
            <div key={b.label} style={{ display: 'contents' }}>
              {i > 0 && (
                <div
                  className="trust-sep"
                  style={{
                    width: 1,
                    height: 18,
                    background: 'var(--border)',
                  }}
                />
              )}
              <span style={badgeStyle(b.variant)}>
                {b.icon}
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .trust-sep { display: none !important; }
        }
      `}</style>
    </motion.div>
  )
}
