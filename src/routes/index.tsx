import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'
import { SobreMi } from '../components/SobreMi'
import { Servicios } from '../components/Servicios'
import { Enfoque } from '../components/Enfoque'
import { FAQ } from '../components/FAQ'
import { Contacto } from '../components/Contacto'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
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
