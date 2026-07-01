import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'jo-cookie-consent'

type Consent = 'accepted' | 'rejected'

function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(STORAGE_KEY) as Consent | null
  } catch {
    return null
  }
}

function storeConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* almacenamiento no disponible */
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Pequeña espera para que el cartel entre después del render inicial
    const t = window.setTimeout(() => {
      if (!readConsent()) setVisible(true)
    }, 550)
    return () => window.clearTimeout(t)
  }, [])

  function decide(value: Consent) {
    storeConsent(value)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <motion.div
            className="cookie-card"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="cookie-eyebrow" id="cookie-title">
              Cookies
            </span>

            <p className="cookie-desc">
              Este sitio solo usa cookies técnicas, imprescindibles para que
              funcione correctamente. Podés consultar la{' '}
              <Link to="/politica-de-cookies" className="cookie-link">
                política de cookies
              </Link>
              .
            </p>

            <button
              type="button"
              className="cookie-btn cookie-btn-primary"
              onClick={() => decide('accepted')}
            >
              Aceptar
            </button>

            <div className="cookie-btn-row">
              <button
                type="button"
                className="cookie-btn cookie-btn-ghost"
                onClick={() => decide('rejected')}
              >
                Rechazar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
