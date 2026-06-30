import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'
import { SobreMi } from '../components/SobreMi'
import { Servicios } from '../components/Servicios'
import { Enfoque } from '../components/Enfoque'
import { FAQ } from '../components/FAQ'
import { Contacto } from '../components/Contacto'
import { MobileSite } from '../components/MobileSite'

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
    return <MobileSite />
  }

  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <SobreMi />
      <Servicios />
      <Enfoque />
      <FAQ />
      <Contacto />
    </>
  )
}
