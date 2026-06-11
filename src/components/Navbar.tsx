import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: 'rgba(248, 245, 240, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px -12px rgba(36,53,49,.12)' : 'none',
        transition: 'border-color .3s, box-shadow .3s',
      }}
    >
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 400,
              fontSize: '1.12rem',
              color: 'var(--teal-strong)',
              textDecoration: 'none',
              lineHeight: 1.15,
              display: 'flex',
              flexDirection: 'column',
              whiteSpace: 'nowrap',
            }}
          >
            Julián Ortega
            <span style={{
              fontFamily: 'var(--sans)',
              fontSize: '.67rem',
              fontWeight: 680,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
            }}>
              Psicólogo · COPC 35627
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '.9rem',
                  fontWeight: 500,
                  color: 'var(--ink-soft)',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: 999,
                  transition: 'color .15s, background .15s',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--teal)'
                  t.style.background = 'var(--bg-alt)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.color = 'var(--ink-soft)'
                  t.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* CTA */}
            <a
              href="#contacto"
              className="hidden-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--sans)',
                fontWeight: 680,
                fontSize: '.88rem',
                padding: '10px 22px',
                borderRadius: 999,
                background: 'var(--teal-cta)',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: '0 6px 18px -8px rgba(31,92,86,.5)',
                transition: 'background .15s, transform .15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget
                t.style.background = 'var(--teal-cta-strong)'
                t.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const t = e.currentTarget
                t.style.background = 'var(--teal-cta)'
                t.style.transform = 'translateY(0)'
              }}
            >
              Reservar sesión →
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="show-mobile"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: 5,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 6,
              }}
              aria-label="Abrir menú"
            >
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .18 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '16px 32px 24px',
              borderBottom: '1px solid var(--border)',
              background: 'rgba(248, 245, 240, .97)',
            }}
          >
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '.95rem',
                  fontWeight: 500,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
                fontFamily: 'var(--sans)',
                fontWeight: 680,
                fontSize: '.95rem',
                padding: '13px 24px',
                borderRadius: 999,
                background: 'var(--teal-cta)',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Reservar sesión →
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
