import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import './mobile.css'

// TODO: reemplazar por el email real de Julián
const EMAIL_CONTACTO = 'hola@julianortega.com'

// TODO: reemplazar TU_FORM_ID por el ID del formulario de Formspree (formspree.io)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TU_FORM_ID'

/* ----------------------------- Data (contenido real del sitio) ---------------------------- */

const tabs = [
  {
    id: 'quien',
    label: 'Quién soy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
    title: 'Psicólogo, egresado de la UBA',
    body: 'Soy psicólogo egresado de la Universidad de Buenos Aires. Acompaño a personas adultas y parejas en distintos momentos de dificultad emocional, relacional o vital.',
  },
  {
    id: 'enfoque',
    label: 'Enfoque',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />
      </svg>
    ),
    title: 'Una mirada integral',
    body: 'Trabajo desde un enfoque integrador, articulando distintos recursos clínicos para ofrecerte un acompañamiento ajustado a tus necesidades.',
  },
  {
    id: 'trabajo',
    label: 'Diversidad',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
      </svg>
    ),
    title: 'Una clínica con perspectiva de género',
    body: 'Mi doctorado en Psicología, centrado en diversidad sexual y trabajo, me ha llevado a profundizar en los cruces entre la identidad y el entorno social. Desde esta perspectiva, ofrezco una escucha atenta a tu singularidad frente a las demandas del contexto.',
  },
]

const modalidades = [
  'Presencial — Barcelona',
  'Online — videollamada',
  'Aún no lo sé',
]

const credentials = [
  'Doctor en Psicología — Universidad de Buenos Aires',
  'Máster en Ciencias Sociales del Trabajo — Universidad de Buenos Aires',
  'Graduado en Psicología — Universidad de Buenos Aires',
  'Psicólogo general sanitario (Homologación)',
  'Profesional colegiado (COPC 35627)',
  'Práctica integrativa y afirmativa LGBTIQ+',
]

const servicios = [
  {
    titulo: 'Psicoterapia individual',
    descripcion: 'Un espacio de escucha y acompañamiento para atravesar momentos de malestar emocional o vital.',
    items: ['Ansiedad y estrés', 'Dificultades vinculares, autoestima y crisis', 'Malestar laboral, cambios y pérdidas'],
  },
  {
    titulo: 'Terapia de pareja',
    descripcion: 'Trabajo conjunto para mejorar la comunicación, gestionar conflictos y fortalecer el vínculo.',
    items: ['Conflictos recurrentes', 'Distanciamiento, celos y crisis', 'Procesos de separación'],
  },
  {
    titulo: 'Atención al colectivo LGBTIQ+',
    descripcion: 'Práctica afirmativa y especializada que reconoce y acompaña las vivencias de las diversidades sexuales y de género.',
    items: ['Identidad y orientación sexual', 'Discriminación y estigma', 'Aislamiento, consumos y chemsex'],
  },
  {
    titulo: 'Orientación vocacional y laboral',
    descripcion: 'Acompañamiento en la toma de decisiones relacionadas con el estudio, la carrera y el bienestar en el trabajo.',
    items: ['Elección de estudios y carrera', 'Redefinición del rol profesional', 'Sentido del trabajo y satisfacción'],
  },
  {
    titulo: 'Procesos migratorios',
    descripcion: 'Un espacio para elaborar el duelo migratorio y las transformaciones identitarias que trae el cambio de país.',
    items: ['Adaptación cultural', 'Desarraigo, soledad e incertidumbre', 'Cambios de identidad y vínculos'],
  },
]

const perspectivas = [
  {
    numero: '1',
    titulo: 'Perspectiva psicodinámica',
    descripcion: 'Presta atención a la historia personal, las experiencias significativas y los modos de relación que cada persona ha desarrollado a lo largo de su vida.',
    items: ['Historia personal y vínculos', 'Experiencias significativas y su huella', 'Modos habituales de relacionarse'],
  },
  {
    numero: '2',
    titulo: 'Teoría cognitiva',
    descripcion: 'Examina los patrones de pensamiento, las creencias y las formas de afrontamiento que influyen en cómo cada paciente vive y responde a las situaciones.',
    items: ['Patrones de pensamiento y creencias', 'Formas de afrontamiento', 'Recursos y habilidades personales'],
  },
  {
    numero: '3',
    titulo: 'Enfoque sistémico',
    descripcion: 'Considera los vínculos, los contextos familiares, laborales y sociales en los que cada persona está inmersa y que dan forma a su experiencia.',
    items: ['Vínculos y dinámicas familiares', 'Contextos laborales y sociales', 'Redes de apoyo y pertenencia'],
  },
]

const preguntas = [
  {
    q: '¿Cuánto dura una sesión?',
    a: 'Las sesiones tienen una duración aproximada de 45 minutos. Este tiempo está pensado para que pueda desarrollarse un trabajo terapéutico significativo con la profundidad necesaria.',
  },
  {
    q: '¿La terapia puede realizarse online?',
    a: 'Sí. Ofrezco sesiones tanto presenciales en Barcelona como online. El formato online mantiene la misma calidad terapéutica y confidencialidad que la modalidad presencial.',
  },
  {
    q: '¿Con qué frecuencia se realizan las sesiones?',
    a: 'La frecuencia se acuerda con cada paciente según sus necesidades. Habitualmente, al inicio se trabaja de forma semanal, lo que permite construir un ritmo constante y sostener el proceso.',
  },
]

const Check = () => (
  <span className="check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
  </span>
)

/* ------------------------------------ Carrusel ------------------------------------- */

function Carousel({ children, count, hint }: { children: React.ReactNode; count: number; hint?: string }) {
  const railRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const rail = railRef.current
    if (!rail) return
    const idx = Math.round(rail.scrollLeft / (rail.scrollWidth / count))
    setActive(Math.min(idx, count - 1))
  }

  return (
    <>
      <div className="rail" ref={railRef} onScroll={onScroll}>
        {children}
      </div>
      <div className="dots">
        {Array.from({ length: count }).map((_, i) => (
          <i key={i} className={i === active ? 'on' : ''} />
        ))}
      </div>
      {hint && (
        <div className="swipe-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
          {hint}
        </div>
      )}
    </>
  )
}

/* ---------------------------------------- FAQ -------------------------------------- */

function FaqList() {
  const [open, setOpen] = useState(-1)
  return (
    <div className="faq">
      {preguntas.map((p, i) => (
        <details className="qa" key={p.q} open={open === i}>
          <summary
            onClick={e => {
              e.preventDefault()
              setOpen(prev => (prev === i ? -1 : i))
            }}
          >
            {p.q}
            <span className="qi"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg></span>
          </summary>
          <p className="ans">{p.a}</p>
        </details>
      ))}
    </div>
  )
}

/* -------------------------------------- Site --------------------------------------- */

type Estado = 'idle' | 'enviando' | 'enviado' | 'error'

export function MobileSite() {
  const [shrunk, setShrunk] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [estado, setEstado] = useState<Estado>('idle')
  const heroRef = useRef<HTMLElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  /* Scroll: shrink topbar + reveal sticky action bar tras el hero */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShrunk(y > 30)
      const hero = heroRef.current
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight
        setShowBar(y > heroBottom - 240)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Reveal on scroll */
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll('.reveal')
    if (!els) return
    const io = new IntersectionObserver(
      entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) } }),
      { threshold: 0.12 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* Bloquear scroll de fondo con el menú abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setEstado('enviando')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setEstado('enviado')
        form.reset()
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="m-site" ref={rootRef}>
      {/* TOPBAR */}
      <div className={`topbar${shrunk ? ' shrunk' : ''}`}>
        <a href="#top" className="brand" onClick={closeMenu}>Dr. Julián Ortega</a>
        <button className="menu-btn" aria-label="Abrir menú" onClick={() => setMenuOpen(true)}><span /></button>
      </div>

      {/* HERO */}
      <header className="hero" id="top" ref={heroRef}>
        <p className="eyebrow green reveal">Psicoterapia Online y Presencial en Barcelona</p>
        <h1 className="h-serif reveal">Un espacio para <em>ponerle palabras</em> a lo que te sucede</h1>
        <p className="lead reveal">
          Todos atravesamos momentos en los que las herramientas que utilizamos habitualmente
          dejan de ser suficientes. La psicoterapia ofrece un espacio de escucha y reflexión
          donde explorar aquello que genera sufrimiento y construir nuevas formas de afrontarlo.
        </p>
        <div className="hero-cta reveal">
          <a className="btn btn-primary" href="#contacto">Reservar primera sesión <span className="arr">→</span></a>
          <a className="btn btn-ghost" href="#sobre-mi">Conoce mi enfoque</a>
        </div>
        <div className="hero-photo reveal">
          <img src="/julian-ortega.png" alt="Dr. Julián Ortega" />
        </div>
      </header>

      {/* SOBRE MÍ */}
      <section className="sec-cream" id="sobre-mi">
        <p className="eyebrow terra reveal">Sobre mí</p>
        <h2 className="h-serif reveal" style={{ fontSize: 32 }}>
          Una práctica clínica integrativa, comprometida con la diversidad
        </h2>

        <div className="seg reveal" role="tablist" aria-label="Sobre mí">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {tabs.map((t, i) => (
          <div key={t.id} className={`panel${activeTab === i ? ' active' : ''}`}>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </div>
        ))}

        <details className="cred">
          <summary className="cred-toggle">
            Formación y credenciales
            <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
          </summary>
          <div className="cred-body">
            <ul>
              {credentials.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="cred-cta">
            <a className="btn btn-primary btn-block" href="#contacto">Reservar primera sesión <span className="arr">→</span></a>
          </div>
        </details>
      </section>

      {/* SERVICIOS */}
      <section className="sec-warm" id="servicios">
        <div className="sec-head center">
          <p className="eyebrow terra reveal">Servicios</p>
          <h2 className="h-serif reveal">En qué puedo ayudarte</h2>
        </div>

        <Carousel count={servicios.length}>
          {servicios.map(s => (
            <article className="card" key={s.titulo}>
              <h3>{s.titulo}</h3>
              <p>{s.descripcion}</p>
              <div className="divider" />
              <ul className="feats">
                {s.items.map(it => <li key={it}><Check /> {it}</li>)}
              </ul>
            </article>
          ))}
        </Carousel>
      </section>

      {/* FOTO — trabajo clínico */}
      <section className="sec-cream photo-band-sec">
        <figure className="photo-band reveal">
          <img src="/julian-escritorio.jpg" alt="Julián Ortega tomando notas durante una sesión de trabajo clínico" loading="lazy" />
        </figure>
      </section>

      {/* ENFOQUE */}
      <section className="sec-cream" id="enfoque">
        <div className="sec-head">
          <p className="eyebrow terra reveal">Mi enfoque de trabajo</p>
          <h2 className="h-serif reveal">Una mirada integrativa sobre las personas y sus vínculos</h2>
          <p className="lead reveal">
            El malestar psicológico es una experiencia compleja que no puede reducirse a una
            sola mirada. Por eso propongo un enfoque integrador, combinando distintas
            intervenciones para acompañar a cada persona en su singularidad.
          </p>
        </div>

        <div className="stack">
          {perspectivas.map(p => (
            <article className="card reveal" key={p.numero}>
              <span className="num">{p.numero}</span>
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <div className="divider" />
              <ul className="feats">
                {p.items.map(it => <li key={it}><Check /> {it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-warm faq-intro" id="faq">
        <p className="eyebrow terra reveal">Preguntas frecuentes</p>
        <h2 className="h-serif reveal" style={{ fontSize: 34 }}>Dudas habituales antes de comenzar</h2>
        <p className="lead reveal">Si tienes otra pregunta, puedes escribirme directamente y te responderé en breve.</p>

        <FaqList />
      </section>

      {/* FOTO — consulta */}
      <section className="sec-cream photo-band-sec">
        <figure className="photo-band reveal">
          <img src="/julian-sofa.jpg" alt="Julián Ortega en su consulta, sentado en el sofá" loading="lazy" style={{ objectPosition: 'center 42%' }} />
        </figure>
      </section>

      {/* CONTACTO */}
      <section className="sec-cream" id="contacto">
        <p className="eyebrow terra reveal">Contacto</p>
        <h2 className="h-serif reveal" style={{ fontSize: 36 }}>Solicita una primera entrevista</h2>

        <div className="contact-rows reveal">
          <div className="crow">
            <span className="cicon ci-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
            <div><p className="lbl">Presencial</p><p className="val">Barcelona Centro</p></div>
          </div>
          <div className="crow">
            <span className="cicon ci-peach"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg></span>
            <div><p className="lbl">Online</p><p className="val">Sesiones por videollamada</p></div>
          </div>
          <a className="crow" href="tel:+34665011427">
            <span className="cicon ci-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" /></svg></span>
            <div><p className="lbl">Teléfono</p><p className="val">+34 665 011 427</p></div>
          </a>
          <a className="crow" href={`mailto:${EMAIL_CONTACTO}`}>
            <span className="cicon ci-lilac"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg></span>
            <div><p className="lbl">Email</p><p className="val">{EMAIL_CONTACTO}</p></div>
          </a>
        </div>

        <div className="form-card reveal">
          <h3>Formulario de contacto</h3>
          {estado === 'enviado' ? (
            <div className="form-sent">
              <div className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg></div>
              <h4>Mensaje enviado</h4>
              <p>Gracias por escribir. Me pondré en contacto contigo en breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="n">Nombre</label>
                <input id="n" name="nombre" type="text" required placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label htmlFor="e">Correo electrónico</label>
                <input id="e" name="email" type="email" required placeholder="tu@correo.com" />
              </div>
              <div className="field">
                <span className="glabel" id="lbl-modalidad">Modalidad</span>
                <div className="mopts" role="radiogroup" aria-labelledby="lbl-modalidad">
                  {modalidades.map((m, i) => (
                    <label className="mopt" key={m}>
                      <input type="radio" name="modalidad" value={m} defaultChecked={i === 0} />
                      <span className="dot" aria-hidden="true" />
                      <span className="txt">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="field">
                <label htmlFor="msg">Mensaje</label>
                <textarea id="msg" name="mensaje" required placeholder="Cuéntame brevemente qué te trae o qué consultas tienes…" />
              </div>
              <button className="btn btn-primary" type="submit" disabled={estado === 'enviando'}>
                {estado === 'enviando' ? 'Enviando…' : <>Reservar primera sesión <span className="arr">→</span></>}
              </button>
              {estado === 'error' && (
                <p className="form-error">
                  No se pudo enviar el mensaje. Vuelve a intentarlo o escríbeme directamente a{' '}
                  <a href={`mailto:${EMAIL_CONTACTO}`}>{EMAIL_CONTACTO}</a>
                </p>
              )}
              <p className="privacy">Tus datos se tratan con confidencialidad. Al enviar aceptas la <Link to="/politica-de-privacidad">política de privacidad</Link>.</p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p className="fbrand">Dr. Julián Ortega</p>
        <p>Psicoterapia Online y Presencial en Barcelona</p>
        <p className="fcred">Psicólogo colegiado — COPC 35627</p>
        <nav className="flegal">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
          <Link to="/politica-de-cookies">Política de cookies</Link>
        </nav>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <div className={`action-bar${showBar ? ' show' : ''}`}>
        <a className="wa-float" href="https://wa.me/34665011427?text=Hola%20Juli%C3%A1n.%20Quiero%20hacer%20una%20consulta%20sobre%20psicoterapia." target="_blank" rel="noopener noreferrer" aria-label="Escribir una consulta por WhatsApp">
          <span className="wa-float-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.2.3.7 2.6-2.7-.7-.3.2A8.2 8.2 0 1 1 12 3.8zm-3 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7s1.6-.6 1.8-1.3c.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-1.6-.8c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1s-1.1-.4-2-1.2c-.7-.6-1.2-1.4-1.3-1.6s0-.4.1-.5l.4-.5c.1-.2.1-.3.2-.5s0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4z" /></svg>
          </span>
          <span className="wa-float-label">Escríbeme</span>
        </a>
      </div>

      {/* MENU SHEET */}
      <div className={`sheet${menuOpen ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) closeMenu() }}>
        <div className="sheet-inner">
          <div className="sheet-top">
            <span className="brand">Dr. Julián Ortega</span>
            <button className="x" aria-label="Cerrar menú" onClick={closeMenu}>✕</button>
          </div>
          <nav>
            <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#enfoque" onClick={closeMenu}>Enfoque</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
          </nav>
          <a className="btn btn-primary" href="#contacto" onClick={closeMenu}>Reservar primera sesión <span className="arr">→</span></a>
        </div>
      </div>
    </div>
  )
}
