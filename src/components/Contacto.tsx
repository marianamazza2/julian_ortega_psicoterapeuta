import { motion } from 'framer-motion'
import { useState } from 'react'

const EMAIL_CONTACTO = 'julianortega.ar@gmail.com'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/moeaplkb'

const infoItems: {
  icon: React.ReactNode
  label: string
  valor: string
  href?: string
  color: string
  tint: string
}[] = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Presencial',
    valor: 'Barcelona Centro',
    color: 'var(--teal)',
    tint: 'var(--sage-tint)',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'Online',
    valor: 'Sesiones por videollamada',
    color: 'var(--coral)',
    tint: 'var(--coral-tint)',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
    label: 'Teléfono',
    valor: '+34 665 011 427',
    href: 'tel:+34665011427',
    color: 'var(--coral)',
    tint: 'var(--coral-tint)',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 6l10 7 10-7" />
      </svg>
    ),
    label: 'Email',
    valor: EMAIL_CONTACTO,
    href: `mailto:${EMAIL_CONTACTO}`,
    color: 'var(--lilac)',
    tint: 'var(--lilac-tint)',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

type Estado = 'idle' | 'enviando' | 'enviado' | 'error'

const MODALIDADES = ['Presencial — Barcelona', 'Online — videollamada', 'Aún no lo sé']

const camposIniciales = { nombre: '', email: '', modalidad: MODALIDADES[0], mensaje: '' }

export function Contacto() {
  const [estado, setEstado] = useState<Estado>('idle')
  const [campos, setCampos] = useState(camposIniciales)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setCampos(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(campos),
      })
      if (res.ok) {
        setEstado('enviado')
        setCampos(camposIniciales)
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section
      id="contacto"
      className="section-y"
      style={{
        padding: '96px 0',
        background: 'var(--bg-alt)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="contacto-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 520px',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left: info */}
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
              Contacto
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
              Solicita una primera entrevista
            </motion.h2>

            <motion.p
              {...fadeUp(0.14)}
              className="contacto-intro"
              style={{
                fontSize: '1.02rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.75,
                margin: '0 0 2rem',
                maxWidth: '46ch',
              }}
            >
              Si estás atravesando una situación que genera malestar o deseas consultar sobre
              la posibilidad de iniciar un tratamiento psicológico, puedes escribirme para
              concertar una primera entrevista.
            </motion.p>

            {/* Info items */}
            <motion.div
              {...fadeUp(0.2)}
              style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
            >
              {infoItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: item.tint,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--sans)',
                      fontWeight: 680,
                      fontSize: '.82rem',
                      color: 'var(--ink-soft)',
                      margin: 0,
                      letterSpacing: '.05em',
                      textTransform: 'uppercase',
                    }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: '.95rem',
                          color: 'var(--ink)',
                          margin: '3px 0 0',
                          fontWeight: 500,
                          textDecoration: 'none',
                          display: 'block',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--teal)' }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink)' }}
                      >
                        {item.valor}
                      </a>
                    ) : (
                      <p style={{
                        fontSize: '.95rem',
                        color: 'var(--ink)',
                        margin: '3px 0 0',
                        fontWeight: 500,
                      }}>
                        {item.valor}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: formulario */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 32px',
              boxShadow: '0 18px 44px -24px rgba(36,53,49,.18)',
            }}
          >
            {estado === 'enviado' ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 999,
                    background: 'var(--sage-tint)',
                    color: 'var(--teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  margin: '0 0 10px',
                }}>
                  Mensaje enviado
                </h3>
                <p style={{
                  fontSize: '.95rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  Gracias por escribir. Me pondré en contacto contigo en breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 680,
                  fontSize: '.72rem',
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-soft)',
                  margin: '0 0 4px',
                }}>
                  Formulario de contacto
                </p>

                {/* Nombre */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={labelStyle}>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    value={campos.nombre}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--sage-tint)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={labelStyle}>Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    value={campos.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--sage-tint)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Modalidad */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={labelStyle}>Modalidad</label>
                  <select
                    name="modalidad"
                    value={campos.modalidad}
                    onChange={handleChange}
                    style={selectStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--sage-tint)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    {MODALIDADES.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={labelStyle}>Mensaje</label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Cuéntame brevemente qué te trae o qué consultas tienes..."
                    value={campos.mensaje}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--sage-tint)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={estado === 'enviando'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontFamily: 'var(--sans)',
                    fontWeight: 680,
                    fontSize: '.95rem',
                    padding: '14px 24px',
                    borderRadius: 999,
                    background: estado === 'enviando' ? 'var(--ink-soft)' : 'var(--teal-cta)',
                    color: '#fff',
                    border: 'none',
                    cursor: estado === 'enviando' ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 22px -10px rgba(31,92,86,.5)',
                    transition: 'background .15s, transform .15s',
                  }}
                  onMouseEnter={e => {
                    if (estado !== 'enviando') {
                      e.currentTarget.style.background = 'var(--teal-cta-strong)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = estado === 'enviando' ? 'var(--ink-soft)' : 'var(--teal-cta)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje →'}
                </button>

                {estado === 'error' && (
                  <p style={{
                    fontSize: '.85rem',
                    color: 'var(--coral)',
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: 1.5,
                  }}>
                    No se pudo enviar el mensaje. Vuelve a intentarlo o escríbeme directamente a{' '}
                    <a href={`mailto:${EMAIL_CONTACTO}`} style={{ color: 'var(--coral)' }}>{EMAIL_CONTACTO}</a>
                  </p>
                )}

                <p style={{
                  fontSize: '.78rem',
                  color: 'var(--ink-soft)',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.5,
                }}>
                  Tus datos se tratan con total confidencialidad y no se comparten con terceros.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contacto-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contacto-intro { display: none !important; }
        }
      `}</style>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontWeight: 620,
  fontSize: '.86rem',
  color: 'var(--ink)',
}

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontSize: '.95rem',
  color: 'var(--ink)',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color .15s, box-shadow .15s',
  width: '100%',
}

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  cursor: 'pointer',
  paddingRight: 40,
  backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B7B76' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  backgroundSize: '16px 16px',
}
