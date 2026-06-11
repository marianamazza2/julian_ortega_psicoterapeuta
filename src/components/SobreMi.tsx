import { motion } from 'framer-motion'

const credentials = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
    label: 'Colegiado COPC 35627',
    sub: 'Col·legi Oficial de Psicologia de Catalunya',
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
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Doctor en Diversidad Sexual',
    sub: 'Investigación académica y práctica clínica',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
      </svg>
    ),
    label: 'Práctica afirmativa LGBTIQ+',
    sub: 'Compromiso con la diversidad sexual y de género',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

export function SobreMi() {
  return (
    <section
      id="sobre-mi"
      style={{
        padding: '96px 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
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
                lineHeight: 1.1,
                letterSpacing: '-.01em',
                color: 'var(--teal)',
                marginBottom: '1.4rem',
              }}
            >
              Una práctica clínica integrativa
              <br />y comprometida con la diversidad
            </motion.h2>

            <motion.p
              {...fadeUp(0.14)}
              style={{
                fontSize: '1.08rem',
                color: 'var(--ink)',
                lineHeight: 1.75,
                marginBottom: '1.1rem',
                maxWidth: '60ch',
              }}
            >
              Soy psicólogo colegiado (COPC 35627), argentino, y me formé en la Universidad de
              Buenos Aires, donde me gradué en Psicología. Acompaño a personas adultas y parejas
              en distintos momentos de dificultad emocional, relacional o vital.
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              style={{
                fontSize: '1.08rem',
                color: 'var(--ink)',
                lineHeight: 1.75,
                marginBottom: '1.1rem',
                maxWidth: '60ch',
              }}
            >
              Mi trabajo clínico integra herramientas de distintas corrientes psicológicas con
              el objetivo de ofrecer una comprensión amplia de cada situación y una intervención
              ajustada a las necesidades particulares de cada persona.
            </motion.p>

            <motion.p
              {...fadeUp(0.26)}
              style={{
                fontSize: '1.08rem',
                color: 'var(--ink)',
                lineHeight: 1.75,
                marginBottom: '1.6rem',
                maxWidth: '60ch',
              }}
            >
              Cuento con un doctorado en diversidad sexual y una trayectoria académica vinculada
              a los estudios del trabajo y las organizaciones. Estas áreas me permiten abordar
              con especial sensibilidad cuestiones relacionadas con la diversidad sexual y de
              género, las experiencias de discriminación, los vínculos afectivos y el impacto
              que el trabajo puede tener sobre la salud mental.
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'var(--sage-tint)',
                color: 'var(--teal-strong)',
                fontFamily: 'var(--sans)',
                fontWeight: 600,
                fontSize: '.93rem',
                padding: '12px 20px',
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
              padding: '32px 28px',
              boxShadow: '0 18px 44px -24px rgba(36,53,49,.2)',
            }}
          >
            <p style={{
              fontFamily: 'var(--sans)',
              fontWeight: 680,
              fontSize: '.72rem',
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              marginBottom: 22,
            }}>
              Formación y credenciales
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {credentials.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'var(--sage-tint)',
                    color: 'var(--teal)',
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
                      margin: '2px 0 0',
                      lineHeight: 1.4,
                    }}>
                      {c.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: 'var(--border)', margin: '24px 0 20px' }} />

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

      <style>{`
        @media (max-width: 820px) {
          .sobre-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
