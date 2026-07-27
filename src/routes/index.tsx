import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { SobreMi } from '../components/SobreMi'
import { Servicios } from '../components/Servicios'
import { Enfoque } from '../components/Enfoque'
import { FAQ } from '../components/FAQ'
import { Contacto } from '../components/Contacto'
import { PhotoBand } from '../components/PhotoBand'
import { MobileSite } from '../components/MobileSite'
import { CookieConsent } from '../components/CookieConsent'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

const MOBILE_QUERY = '(max-width: 820px)'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isMobile
}

function Home() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <>
        <MobileSite />
        <CookieConsent />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <SobreMi />
      <Servicios />
      <PhotoBand
        src="/julian-escritorio.jpg"
        alt="Julián Ortega tomando notas durante una sesión de trabajo clínico"
        caption="Cada proceso empieza por escuchar con atención lo que traes."
        background="var(--bg-alt)"
      />
      <Enfoque />
      <FAQ />
      <PhotoBand
        src="/julian-sofa.jpg"
        alt="Julián Ortega en su consulta, sentado en el sofá"
        caption="Un espacio tranquilo donde poder pensar en voz alta."
        focus="center 42%"
        background="var(--bg-alt)"
      />
      <Contacto />
      <Footer />
      <a
        className="wa-float"
        href="https://wa.me/34665011427?text=Hola%20Juli%C3%A1n.%20Quiero%20hacer%20una%20consulta%20sobre%20psicoterapia."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <span className="wa-float-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.94 7.92 0 1.4.37 2.76 1.07 3.96L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79.97h.01c4.38 0 7.93-3.55 7.94-7.92a7.87 7.87 0 0 0-2.33-5.62m-5.55 12.2h-.01a6.6 6.6 0 0 1-3.35-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.53 6.53 0 0 1-1-3.49c0-3.63 2.96-6.59 6.6-6.59a6.56 6.56 0 0 1 6.59 6.6c0 3.63-2.96 6.58-6.6 6.58m3.62-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.4 5.4 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.06-.13.03-.25-.02-.35s-.45-1.08-.62-1.48c-.16-.39-.33-.34-.45-.34l-.38-.01a.74.74 0 0 0-.53.25c-.18.2-.7.68-.7 1.66 0 .98.72 1.93.82 2.06.1.13 1.4 2.15 3.4 3.02.48.2.85.33 1.14.42.48.15.91.13 1.25.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.85.11-.94-.05-.08-.18-.13-.38-.23" /></svg>
        </span>
        <span className="wa-float-label">Escríbeme</span>
      </a>
      <CookieConsent />
    </>
  )
}
