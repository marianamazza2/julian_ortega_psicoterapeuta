import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const tabs = [
  {
    id: 'quien',
    label: 'Quién soy',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
    title: 'Psicólogo, egresado de la UBA',
    body: 'Soy psicólogo egresado de la Universidad de Buenos Aires. Acompaño a personas adultas y parejas en distintos momentos de dificultad emocional, relacional o vital.',
  },
  {
    id: 'enfoque',
    label: 'Enfoque',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Una mirada integral',
    body: 'Trabajo desde un enfoque integrador, articulando distintos recursos clínicos para ofrecerte un acompañamiento ajustado a tus necesidades.',
  },
  {
    id: 'compromiso',
    label: 'Diversidad sexual',
    shortLabel: 'Diversidad',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
      </svg>
    ),
    title: 'Una clínica con perspectiva de género',
    body: 'Mi doctorado en Psicología, centrado en diversidad sexual y trabajo, me ha llevado a profundizar en los cruces entre la identidad y el entorno social. Desde esta perspectiva, ofrezco una escucha atenta a tu singularidad frente a las demandas del contexto.',
  },
]

const credentials = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Doctor en Psicología',
    sub: 'Universidad de Buenos Aires',
    color: 'var(--teal)',
    tint: 'var(--sage-tint)',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: 'Graduado en Psicología',
    sub: 'Universidad de Buenos Aires (UBA)',
    color: 'var(--coral)',
    tint: 'var(--coral-tint)',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
      </svg>
    ),
    label: 'Práctica afirmativa LGBTIQ+',
    sub: 'Compromiso con la diversidad sexual y de género',
    color: 'var(--lilac)',
    tint: 'var(--lilac-tint)',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

export function SobreMi() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [credOpen, setCredOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const current = tabs[active]

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Advance the active tab based on how far the section has scrolled through
  // the viewport — same scroll-driven behaviour, but without pinning the section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  })

  useMotionValueEvent(scrollYProgress, 'change', v => {
    if (isMobile) return
    const idx = Math.min(tabs.length - 1, Math.max(0, Math.floor(v * tabs.length)))
    setActive(idx)
  })

  const goTo = (i: number) => setActive(i)

  const inner = (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px', width: '100%' }}>
        <div
          className="sobre-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: 72,
            alignItems: 'start',
          }}
        >
          {/* Left: text */}
          <div>
            <motion.span
              {...fadeUp(0)}
              style={{
                display: 'block',
                fontFamily: 'var(--sans)',
                fontWeight: 680,
                fontSize: '.75rem',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--coral)',
                marginBottom: '1rem',
              }}
            >
              Sobre mí
            </motion.span>

            <motion.h2
              {...fadeUp(0.07)}
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
                fontWeight: 430,
                lineHeight: 1.18,
                letterSpacing: '-.01em',
                color: 'var(--teal)',
                marginBottom: '1.9rem',
              }}
            >
              Una práctica clínica integrativa, comprometida con la diversidad
            </motion.h2>

            {/* Interactive tabs */}
            <motion.div
              {...fadeUp(0.14)}
              style={{
                display: 'flex',
                flexWrap: isMobile ? 'nowrap' : 'wrap',
                gap: isMobile ? 7 : 10,
                marginBottom: 30,
              }}
            >
              {tabs.map((t, i) => {
                const isActive = i === active
                return (
                  <button
                    key={t.id}
                    onClick={() => goTo(i)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: isMobile ? 6 : 8,
                      fontFamily: 'var(--sans)',
                      fontWeight: 680,
                      fontSize: isMobile ? '.8rem' : '.86rem',
                      padding: isMobile ? '9px 13px' : '9px 16px',
                      whiteSpace: 'nowrap',
                      borderRadius: 999,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--teal)' : 'var(--border)',
                      background: isActive ? 'var(--teal)' : '#fff',
                      color: isActive ? '#fff' : 'var(--ink)',
                      transition: 'background .18s, color .18s, border-color .18s, transform .18s',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.borderColor = 'var(--teal)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.borderColor = 'var(--border)'
                    }}
                  >
                    {t.icon}
                    {isMobile && t.shortLabel ? t.shortLabel : t.label}
                  </button>
                )
              })}
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              style={{
                position: 'relative',
                minHeight: 128,
                marginBottom: '1.6rem',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <h3 style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.35rem',
                    fontWeight: 440,
                    color: 'var(--teal)',
                    lineHeight: 1.35,
                    margin: '0 0 1rem',
                  }}>
                    {current.title}
                  </h3>
                  <p style={{
                    fontSize: '1.08rem',
                    color: 'var(--ink)',
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: '60ch',
                  }}>
                    {current.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              {...fadeUp(0.32)}
              className="sobre-inclusiva"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'var(--sage-tint)',
                color: 'var(--teal-strong)',
                fontFamily: 'var(--sans)',
                fontWeight: 600,
                fontSize: '.93rem',
                lineHeight: 1.55,
                padding: '16px 22px',
                borderRadius: 'var(--radius)',
                borderLeft: '3px solid var(--sage)',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
              </svg>
              Práctica psicológica inclusiva, respetuosa y afirmativa hacia las diversidades
              sexuales, afectivas y de género.
            </motion.div>
          </div>

          {/* Right: credentials card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 32px',
              boxShadow: '0 18px 44px -24px rgba(36,53,49,.2)',
            }}
          >
            {(() => {
              const headerLabel = (
                <span style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 680,
                  fontSize: '.72rem',
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                }}>
                  Formación y credenciales
                </span>
              )

              const list = (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {credentials.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: c.tint,
                        color: c.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {c.icon}
                      </div>
                      <div>
                        <p style={{
                          fontFamily: 'var(--sans)',
                          fontWeight: 680,
                          fontSize: '.93rem',
                          color: 'var(--ink)',
                          margin: 0,
                          lineHeight: 1.3,
                        }}>
                          {c.label}
                        </p>
                        <p style={{
                          fontSize: '.82rem',
                          color: 'var(--ink-soft)',
                          margin: '4px 0 0',
                          lineHeight: 1.45,
                        }}>
                          {c.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )

              // Mobile: collapsible accordion to save space
              if (isMobile) {
                return (
                  <>
                    <button
                      onClick={() => setCredOpen(o => !o)}
                      aria-expanded={credOpen}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: 12,
                        padding: 0,
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      {headerLabel}
                      <motion.svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="var(--ink-soft)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                        animate={{ rotate: credOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ flexShrink: 0 }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </motion.svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {credOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ paddingTop: 22 }}>{list}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />
                  </>
                )
              }

              return (
                <>
                  <div style={{ marginBottom: 22 }}>{headerLabel}</div>
                  {list}
                  <div style={{ height: 1, background: 'var(--border)', margin: '24px 0 20px' }} />
                </>
              )
            })()}

            <a
              href="#contacto"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontFamily: 'var(--sans)',
                fontWeight: 680,
                fontSize: '.93rem',
                padding: '13px 20px',
                borderRadius: 999,
                background: 'var(--teal-cta)',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '0 8px 22px -10px rgba(31,92,86,.5)',
                transition: 'background .15s, transform .15s',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget
                t.style.background = 'var(--teal-cta-strong)'
                t.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const t = e.currentTarget
                t.style.background = 'var(--teal-cta)'
                t.style.transform = 'translateY(0)'
              }}
            >
              Solicitar primera entrevista →
            </a>
          </motion.div>
        </div>
      </div>
  )

  const responsiveStyle = (
    <style>{`
      @media (max-width: 820px) {
        .sobre-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .sobre-inclusiva { display: none !important; }
      }
    `}</style>
  )

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="section-y"
      style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}
    >
      {inner}
      {responsiveStyle}
    </section>
  )
}
