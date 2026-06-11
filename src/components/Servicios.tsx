import { motion } from 'framer-motion'

const servicios = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: 'var(--teal)',
    tint: 'var(--sage-tint)',
    titulo: 'Psicoterapia individual',
    descripcion: 'Un espacio de escucha y acompañamiento para atravesar momentos de malestar emocional o vital.',
    items: [
      'Ansiedad y estrés',
      'Dificultades vinculares, autoestima y crisis',
      'Malestar laboral, cambios y pérdidas',
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'var(--coral)',
    tint: 'var(--coral-tint)',
    titulo: 'Terapia de pareja',
    descripcion: 'Trabajo conjunto para mejorar la comunicación, gestionar conflictos y fortalecer el vínculo.',
    items: [
      'Conflictos recurrentes',
      'Distanciamiento, celos y crisis',
      'Procesos de separación',
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
      </svg>
    ),
    color: 'var(--lilac)',
    tint: 'var(--lilac-tint)',
    titulo: 'Atención al colectivo LGBTIQ+',
    descripcion: 'Práctica afirmativa y especializada que reconoce y acompaña las vivencias de las diversidades sexuales y de género.',
    items: [
      'Identidad y orientación sexual',
      'Discriminación y estigma',
      'Aislamiento, consumos y chemsex',
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    color: 'var(--amber)',
    tint: 'var(--amber-tint)',
    titulo: 'Orientación vocacional y laboral',
    descripcion: 'Acompañamiento en la toma de decisiones relacionadas con el estudio, la carrera y el bienestar en el trabajo.',
    items: [
      'Elección de estudios y carrera',
      'Redefinición del rol profesional',
      'Sentido del trabajo, satisfacción e incertidumbre',
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: 'var(--sky)',
    tint: 'var(--sky-tint)',
    titulo: 'Acompañamiento en procesos migratorios',
    descripcion: 'Un espacio para elaborar el duelo migratorio y las transformaciones identitarias que trae el cambio de país.',
    items: [
      'Adaptación cultural',
      'Desarraigo, soledad e incertidumbre',
      'Cambios de identidad y vínculos',
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

export function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        padding: '96px 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
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
            Servicios
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
              margin: '0 auto',
              maxWidth: '18ch',
            }}
          >
            En qué puedo ayudarte
          </motion.h2>
        </div>

        {/* Grid */}
        <div
          className="servicios-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.07 + i * 0.07)}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 26px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                boxShadow: '0 4px 20px -12px rgba(36,53,49,.12)',
                transition: 'box-shadow .2s, transform .2s',
              }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: s.tint,
                  color: s.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.2rem',
                  fontWeight: 450,
                  color: 'var(--teal)',
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {s.titulo}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '.93rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {s.descripcion}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)' }} />

              {/* Items */}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 9,
                      fontSize: '.88rem',
                      color: 'var(--ink)',
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: 3,
                        width: 16,
                        height: 16,
                        borderRadius: 999,
                        background: s.tint,
                        color: s.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          {...fadeUp(0.42)}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--sans)',
              fontWeight: 680,
              fontSize: '.95rem',
              padding: '14px 28px',
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
            Solicitar primera sesión →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .servicios-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .servicios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
