import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
            Dr. Julián Ortega
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
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span style={{
                display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2,
                transition: 'transform .22s ease, opacity .22s ease',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2,
                transition: 'opacity .22s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, background: 'var(--ink)', borderRadius: 2,
                transition: 'transform .22s ease, opacity .22s ease',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2 }}
            style={{
              position: 'fixed',
              top: 68,
              left: 0,
              right: 0,
              bottom: 0,
              height: 'calc(100dvh - 68px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              padding: '24px 32px calc(24px + env(safe-area-inset-bottom))',
              background: 'var(--bg)',
              overflowY: 'auto',
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
                  padding: '10px 0',
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
                marginTop: 'auto',
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
