import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const preguntas = [
  {
    pregunta: '¿Cuánto dura una sesión?',
    respuesta:
      'Las sesiones tienen una duración aproximada de 45 minutos. Este tiempo está pensado para que pueda desarrollarse un trabajo terapéutico significativo con la profundidad necesaria.',
  },
  {
    pregunta: '¿La terapia puede realizarse online?',
    respuesta:
      'Sí. Ofrezco sesiones tanto presenciales en Barcelona como online. El formato online permite mantener la misma calidad terapéutica y confidencialidad que en la modalidad presencial, con la comodidad de conectarse desde cualquier lugar.',
  },
  {
    pregunta: '¿Con qué frecuencia se realizan las sesiones?',
    respuesta:
      'La frecuencia se acuerda con cada persona según sus necesidades y el tipo de trabajo que se realice. Habitualmente, al inicio del proceso se trabaja de forma semanal, lo que permite construir un ritmo constante y sostener el proceso terapéutico.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

export function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null)

  const toggle = (i: number) => setAbierto(prev => (prev === i ? null : i))

  return (
    <section
      id="faq"
      className="section-y"
      style={{
        padding: '96px 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="faq-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 560px',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left: header */}
          <div style={{ position: 'sticky', top: 120 }}>
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
              Preguntas frecuentes
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
                margin: '0 0 1.3rem',
              }}
            >
              Dudas habituales antes de comenzar
            </motion.h2>

            <motion.p
              {...fadeUp(0.14)}
              style={{
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.72,
                margin: '0 0 2rem',
              }}
            >
              Si tienes alguna otra pregunta, puedes escribirme directamente y te responderé
              en breve.
            </motion.p>

            <motion.div {...fadeUp(0.2)}>
              <a
                href="#contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--sans)',
                  fontWeight: 680,
                  fontSize: '.9rem',
                  padding: '12px 22px',
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
                Escribir una consulta →
              </a>
            </motion.div>
          </div>

          {/* Right: acordeón */}
          <motion.div
            {...fadeUp(0.1)}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {preguntas.map((p, i) => {
              const isOpen = abierto === i
              return (
                <div
                  key={i}
                  style={{
                    background: '#fff',
                    border: `1px solid ${isOpen ? 'var(--teal)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    transition: 'border-color .2s',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      padding: '22px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 620,
                        fontSize: '1rem',
                        color: isOpen ? 'var(--teal)' : 'var(--ink)',
                        lineHeight: 1.35,
                        transition: 'color .2s',
                      }}
                    >
                      {p.pregunta}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        background: isOpen ? 'var(--teal)' : 'var(--sage-tint)',
                        color: isOpen ? '#fff' : 'var(--teal)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background .2s, color .2s',
                      }}
                    >
                      <motion.svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </motion.svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontSize: '.95rem',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.72,
                            margin: 0,
                            padding: '0 24px 24px',
                          }}
                        >
                          {p.respuesta}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .faq-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .faq-layout > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
