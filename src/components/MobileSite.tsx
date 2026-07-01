import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import './mobile.css'

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
    title: 'Psicólogo, argentino - UBA',
    body: 'Soy psicólogo colegiado (COPC 35627) y me gradué en la Universidad de Buenos Aires. Acompaño a personas adultas y parejas en distintos momentos de dificultad emocional, relacional o vital, desde la escucha y el respeto por el tiempo de cada quien.',
  },
  {
    id: 'enfoque',
    label: 'Enfoque',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />
      </svg>
    ),
    title: 'Una práctica clínica integrativa',
    body: 'Integro herramientas de distintas corrientes psicológicas para ofrecer una comprensión amplia de cada situación y una intervención ajustada a las necesidades particulares de cada persona.',
  },
  {
    id: 'trabajo',
    label: 'Trabajo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
      </svg>
    ),
    title: 'Diversidad sexual, vínculos y trabajo',
    body: 'Mi doctorado en diversidad sexual y mi trayectoria en los estudios del trabajo me permiten abordar con especial sensibilidad la diversidad sexual y de género, la discriminación, los vínculos afectivos y el impacto del trabajo sobre la salud mental.',
  },
]

const credentials = [
  'Colegiado COPC nº 35627 — Col·legi Oficial de Psicologia de Catalunya',
  'Graduado en Psicología — Universidad de Buenos Aires (UBA)',
  'Doctor en Diversidad Sexual',
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
    items: ['Elección de estudios y carrera', 'Redefinición del rol profesional', 'Sentido del trabajo e incertidumbre'],
  },
  {
    titulo: 'Procesos migratorios',
    descripcion: 'Un espacio para elaborar el duelo migratorio y las transformaciones identitarias que trae el cambio de país.',
    items: ['Adaptación cultural', 'Desarraigo, soledad e incertidumbre', 'Cambios de identidad y vínculos'],
  },
]

const perspectivas = [
  {
    numero: '01',
    titulo: 'Perspectiva psicodinámica',
    descripcion: 'Presta atención a la historia personal, las experiencias significativas y los modos de relación que cada persona ha desarrollado a lo largo de su vida.',
    items: ['Historia personal y vínculos', 'Experiencias significativas y su huella', 'Modos habituales de relacionarse'],
  },
  {
    numero: '02',
    titulo: 'Perspectiva cognitiva',
    descripcion: 'Examina los patrones de pensamiento, las creencias y las formas de afrontamiento que influyen en cómo cada persona vive y responde a las situaciones.',
    items: ['Patrones de pensamiento y creencias', 'Formas de afrontamiento', 'Recursos y habilidades personales'],
  },
  {
    numero: '03',
    titulo: 'Perspectiva sistémica',
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
    a: 'Sí. Ofrezco sesiones tanto presenciales en Barcelona (zona Plaza Cataluña) como online. El formato online mantiene la misma calidad terapéutica y confidencialidad que la modalidad presencial.',
  },
  {
    q: '¿Con qué frecuencia se realizan las sesiones?',
    a: 'La frecuencia se acuerda con cada persona según sus necesidades. Habitualmente, al inicio del proceso se trabaja de forma semanal, lo que permite construir un ritmo constante y sostener el proceso.',
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

type Estado = 'idle' | 'enviando' | 'enviado'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEstado('enviando')
    await new Promise(r => setTimeout(r, 1200))
    setEstado('enviado')
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
        <p className="eyebrow green reveal">Psicoterapia · Barcelona &amp; Online</p>
        <h1 className="h-serif reveal">Un espacio para <em>comprender</em> lo que te sucede</h1>
        <p className="lead reveal">
          Cuando las herramientas de siempre dejan de alcanzar, la terapia abre un lugar para
          escuchar, entender y construir nuevas formas de vivir lo que te pasa.
        </p>
        <div className="hero-cta reveal">
          <a className="btn btn-primary" href="#contacto">Reservar primera sesión <span className="arr">→</span></a>
          <a className="btn btn-ghost" href="#sobre-mi">Conoce mi enfoque</a>
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

      {/* ENFOQUE */}
      <section className="sec-cream" id="enfoque">
        <div className="sec-head">
          <p className="eyebrow terra reveal">Mi enfoque de trabajo</p>
          <h2 className="h-serif reveal">Una mirada integrativa sobre las personas y sus vínculos</h2>
          <p className="lead reveal">
            El sufrimiento psicológico es complejo y no puede comprenderse desde una sola
            perspectiva. Por eso combino distintas miradas para acercarme a cada persona en su singularidad.
          </p>
        </div>

        <Carousel count={perspectivas.length}>
          {perspectivas.map(p => (
            <article className="card" key={p.numero}>
              <span className="num">{p.numero}</span>
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <div className="divider" />
              <ul className="feats">
                {p.items.map(it => <li key={it}><Check /> {it}</li>)}
              </ul>
            </article>
          ))}
        </Carousel>
      </section>

      {/* FAQ */}
      <section className="sec-warm faq-intro" id="faq">
        <p className="eyebrow terra reveal">Preguntas frecuentes</p>
        <h2 className="h-serif reveal" style={{ fontSize: 34 }}>Dudas habituales antes de comenzar</h2>
        <p className="lead reveal">Si tienes otra pregunta, puedes escribirme directamente y te responderé en breve.</p>

        <FaqList />
      </section>

      {/* CONTACTO */}
      <section className="sec-cream" id="contacto">
        <p className="eyebrow terra reveal">Contacto</p>
        <h2 className="h-serif reveal" style={{ fontSize: 36 }}>Solicita una primera entrevista</h2>

        <div className="contact-rows reveal">
          <div className="crow">
            <span className="cicon ci-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
            <div><p className="lbl">Presencial</p><p className="val">Ronda Sant Pere 11, Piso 1-1</p></div>
          </div>
          <div className="crow">
            <span className="cicon ci-peach"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg></span>
            <div><p className="lbl">Online</p><p className="val">Sesiones por videollamada</p></div>
          </div>
          <div className="crow">
            <span className="cicon ci-lilac"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /></svg></span>
            <div><p className="lbl">Colegiación</p><p className="val">COPC 35627</p></div>
          </div>
        </div>

        <details className="form-collapse reveal">
          <summary className="cred-toggle">
            Formulario de contacto
            <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
          </summary>
          <div className="form-card">
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
                <label htmlFor="m">Modalidad</label>
                <select id="m" name="modalidad" defaultValue="Presencial — Barcelona">
                  <option>Presencial — Barcelona</option>
                  <option>Online — videollamada</option>
                  <option>Aún no lo sé</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="msg">¿Qué te gustaría consultar?</label>
                <textarea id="msg" name="mensaje" placeholder="Cuéntame brevemente qué te trae por aquí (opcional)" />
              </div>
              <button className="btn btn-primary" type="submit" disabled={estado === 'enviando'}>
                {estado === 'enviando' ? 'Enviando…' : <>Reservar primera sesión <span className="arr">→</span></>}
              </button>
              <p className="privacy">Tus datos se tratan con confidencialidad. Al enviar aceptas la <Link to="/politica-de-privacidad">política de privacidad</Link>.</p>
            </form>
          )}
          </div>
        </details>
      </section>

      {/* FOOTER */}
      <footer>
        <p className="fbrand">Dr. Julián Ortega</p>
        <p>Psicoterapia · Barcelona &amp; Online</p>
        <nav className="flegal">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
          <Link to="/politica-de-cookies">Política de cookies</Link>
        </nav>
        <p className="fcred">Colegiado COPC 35627</p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <div className={`action-bar${showBar ? ' show' : ''}`}>
        <a className="wa-float" href="https://wa.me/34665011427?text=Hola,%20quer%C3%ADa%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" aria-label="Escribir una consulta por WhatsApp">
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
