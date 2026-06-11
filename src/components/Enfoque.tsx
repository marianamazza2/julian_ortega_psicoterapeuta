import { motion } from 'framer-motion'

const perspectivas = [
  {
    numero: '01',
    color: 'var(--teal)',
    tint: 'var(--sage-tint)',
    titulo: 'Perspectiva psicodinámica',
    descripcion:
      'Presta atención a la historia personal, las experiencias significativas y los modos de relación que cada persona ha desarrollado a lo largo de su vida.',
    items: [
      'Historia personal y vínculos tempranos',
      'Experiencias significativas y su huella',
      'Modos habituales de relacionarse',
    ],
  },
  {
    numero: '02',
    color: 'var(--coral)',
    tint: 'var(--coral-tint)',
    titulo: 'Perspectiva cognitiva',
    descripcion:
      'Examina los patrones de pensamiento, las creencias y las formas de afrontamiento que influyen en cómo cada persona vive y responde a las situaciones.',
    items: [
      'Patrones de pensamiento y creencias',
      'Formas de afrontamiento',
      'Recursos y habilidades personales',
    ],
  },
  {
    numero: '03',
    color: 'var(--sky)',
    tint: 'var(--sky-tint)',
    titulo: 'Perspectiva sistémica',
    descripcion:
      'Considera los vínculos, los contextos familiares, laborales y sociales en los que cada persona está inmersa y que dan forma a su experiencia.',
    items: [
      'Vínculos y dinámicas familiares',
      'Contextos laborales y sociales',
      'Redes de apoyo y pertenencia',
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

export function Enfoque() {
  return (
    <section
      id="enfoque"
      style={{
        padding: '96px 0',
        background: 'var(--bg-alt)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ maxWidth: '52ch', marginBottom: 64 }}>
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
            Mi enfoque de trabajo
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
              margin: '0 0 1.3rem',
            }}
          >
            Una mirada integrativa sobre las personas y sus vínculos
          </motion.h2>

          <motion.p
            {...fadeUp(0.14)}
            style={{
              fontSize: '1.05rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            El sufrimiento psicológico es una experiencia compleja que no puede comprenderse
            desde una sola perspectiva. Por eso trabajo de forma integrativa, combinando
            distintas miradas para acercarme a cada persona en su singularidad.
          </motion.p>
        </div>

        {/* Perspectivas */}
        <div
          className="enfoque-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 56,
          }}
        >
          {perspectivas.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.09)}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px 26px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                boxShadow: '0 4px 20px -12px rgba(36,53,49,.1)',
              }}
            >
              {/* Número */}
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '2.2rem',
                  fontWeight: 450,
                  color: p.tint,
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                }}
              >
                {p.numero}
              </span>

              {/* Título */}
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.2rem',
                  fontWeight: 450,
                  color: p.color,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {p.titulo}
              </h3>

              {/* Descripción */}
              <p
                style={{
                  fontSize: '.93rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {p.descripcion}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)' }} />

              {/* Items */}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.items.map((item, j) => (
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
                        background: p.tint,
                        color: p.color,
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

        {/* Cierre integrador */}
        <motion.div
          {...fadeUp(0.38)}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 20,
            background: '#fff',
            border: '1px solid var(--border)',
            borderLeft: '4px solid var(--teal)',
            borderRadius: 'var(--radius)',
            padding: '28px 30px',
            boxShadow: '0 4px 20px -12px rgba(36,53,49,.1)',
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'var(--sage-tint)',
              color: 'var(--teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            </svg>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontWeight: 680,
                fontSize: '.93rem',
                color: 'var(--teal-strong)',
                margin: '0 0 6px',
              }}
            >
              La integración como principio
            </p>
            <p
              style={{
                fontSize: '.95rem',
                color: 'var(--ink)',
                lineHeight: 1.72,
                margin: 0,
                maxWidth: '72ch',
              }}
            >
              La combinación de estas perspectivas me permite construir una comprensión más
              completa de cada situación y adaptar el tratamiento a las necesidades particulares
              de cada persona, en lugar de aplicar un modelo rígido a todas las consultas.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .enfoque-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .enfoque-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
