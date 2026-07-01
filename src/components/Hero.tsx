import { motion } from 'framer-motion'
import { TrustBar } from './TrustBar'

const services = [
  { label: 'Psicoterapia individual para adultos', color: 'var(--teal)', tint: 'var(--sage-tint)' },
  { label: 'Terapia de pareja', color: 'var(--coral)', tint: 'var(--coral-tint)' },
  { label: 'Atención afirmativa LGBTIQ+', color: 'var(--lilac)', tint: 'var(--lilac-tint)' },
  { label: 'Orientación vocacional y laboral', color: 'var(--teal)', tint: 'var(--sage-tint)' },
  { label: 'Acompañamiento en procesos migratorios', color: 'var(--coral)', tint: 'var(--coral-tint)' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        paddingTop: 160,
        paddingBottom: 100,
        background: `
          radial-gradient(ellipse 70% 60% at 95% -10%, var(--sky-tint) 0%, transparent 55%),
          radial-gradient(ellipse 55% 50% at 0% 5%,   var(--coral-tint) 0%, transparent 48%),
          radial-gradient(ellipse 65% 60% at 108% 108%, var(--amber-tint) 0%, transparent 55%),
          var(--bg)`,
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '420px 1fr',
            gap: 60,
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            className="hero-photo"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 22px 50px -28px rgba(36,53,49,.32)',
              aspectRatio: '4 / 5',
            }}
          >
            <img
              src="/julian-ortega.png"
              alt="Dr. Julián Ortega"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>

          {/* Right: text */}
          <div>
            <motion.span
              {...fadeUp(0.05)}
              style={{
                display: 'block',
                fontFamily: 'var(--sans)',
                fontWeight: 680,
                fontSize: '.75rem',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                opacity: 0.75,
                marginBottom: '1rem',
              }}
            >
              Psicoterapia · Barcelona &amp; Online
            </motion.span>

            <motion.h1
              {...fadeUp(0.12)}
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.5rem, 5.2vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.14,
                letterSpacing: '-.02em',
                color: 'var(--ink)',
                marginBottom: '.55em',
              }}
            >
              Un espacio para{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>comprender</em>
              <br />lo que te sucede
            </motion.h1>

            <motion.p
              {...fadeUp(0.22)}
              style={{
                fontSize: '1.1rem',
                color: 'var(--ink-soft)',
                maxWidth: '52ch',
                lineHeight: 1.72,
                marginBottom: '2rem',
              }}
            >
              Todos atravesamos momentos en los que las herramientas que hemos utilizado
              hasta ahora dejan de ser suficientes. La psicoterapia ofrece un espacio de
              escucha y reflexión donde explorar aquello que genera sufrimiento y construir
              nuevas formas de vivirlo.
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              className="hero-cta"
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}
            >
              <a
                href="#contacto"
                className="hero-cta-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'var(--sans)',
                  fontWeight: 680,
                  fontSize: '.98rem',
                  padding: '16px 32px',
                  borderRadius: 999,
                  background: 'var(--teal-cta)',
                  color: '#fff',
                  textDecoration: 'none',
                  boxShadow: '0 10px 28px -12px rgba(31,92,86,.6)',
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
                Reservar primera sesión →
              </a>
              <a
                href="#sobre-mi"
                className="hero-cta-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--sans)',
                  fontWeight: 680,
                  fontSize: '.95rem',
                  padding: '15px 28px',
                  borderRadius: 999,
                  background: 'transparent',
                  color: 'var(--teal)',
                  textDecoration: 'none',
                  border: '1.5px solid var(--teal)',
                  transition: 'background .15s, color .15s',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.background = 'var(--teal)'
                  t.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.background = 'transparent'
                  t.style.color = 'var(--teal)'
                }}
              >
                Conóceme
              </a>
            </motion.div>
          </div>

          {/* Card — ocultada por el momento (no se renderiza, se conserva el código) */}
          {false && (
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            className="hero-card"
            style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
              boxShadow: '0 22px 50px -28px rgba(36,53,49,.32)',
            }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              background: 'var(--sage-tint)',
              color: 'var(--teal-strong)',
              fontWeight: 680,
              fontSize: '.75rem',
              letterSpacing: '.05em',
              padding: '6px 13px',
              borderRadius: 999,
              marginBottom: 22,
            }}>
              <span style={{
                width: 7, height: 7,
                borderRadius: '50%',
                background: 'var(--sage)',
                display: 'inline-block',
              }} />
              Disponible para nuevas consultas
            </div>

            <h3 style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.28rem',
              fontWeight: 600,
              color: 'var(--teal-strong)',
              marginBottom: 6,
              lineHeight: 1.25,
            }}>
              Un espacio seguro, sin juicios
            </h3>

            <p style={{
              fontSize: '.93rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              marginBottom: 20,
            }}>
              Presencial en Barcelona (zona Plaza Cataluña) y online desde cualquier lugar.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
              {services.map(s => (
                <li key={s.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '.9rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                  <span style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    background: s.tint,
                    color: s.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 2,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {s.label}
                </li>
              ))}
            </ul>

            <div style={{ height: 1, background: 'var(--border)', margin: '0 0 18px' }} />

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[
                { label: 'Sesión', value: '45 min' },
                { label: 'Modalidad', value: 'Presencial · Online' },
                { label: 'Colegiado', value: 'COPC 35627' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '.68rem', fontWeight: 680, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--ink)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          )}
        </div>

        <TrustBar />
      </div>

      <style>{`
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { max-width: 360px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
