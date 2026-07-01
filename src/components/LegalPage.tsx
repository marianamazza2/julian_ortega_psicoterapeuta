import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Footer } from './Footer'

type LegalPageProps = {
  eyebrow?: string
  title: string
  updated?: string
  children: React.ReactNode
}

export function LegalPage({ eyebrow = 'Información legal', title, updated, children }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      {/* TOPBAR */}
      <header className="legal-topbar">
        <Link to="/" className="legal-brand">Dr. Julián Ortega</Link>
        <Link to="/" className="legal-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Volver al inicio
        </Link>
      </header>

      {/* CONTENIDO */}
      <main className="legal-main">
        <p className="legal-eyebrow">{eyebrow}</p>
        <h1 className="legal-title">{title}</h1>
        {updated && <p className="legal-updated">Última actualización: {updated}</p>}
        <article className="legal-body">{children}</article>
      </main>

      <Footer />

      <style>{`
        .legal-page {
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          flex-direction: column;
        }
        .legal-topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 32px;
          background: rgba(248, 245, 240, .88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .legal-brand {
          font-family: var(--serif);
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--teal);
          text-decoration: none;
        }
        .legal-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--sans);
          font-weight: 600;
          font-size: .9rem;
          color: var(--ink-soft);
          text-decoration: none;
          transition: color .16s ease;
        }
        .legal-back:hover { color: var(--teal); }

        .legal-main {
          flex: 1;
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 64px 32px 88px;
        }
        .legal-eyebrow {
          font-family: var(--sans);
          font-weight: 680;
          font-size: .74rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--coral);
          margin: 0 0 1rem;
        }
        .legal-title {
          font-family: var(--serif);
          font-size: clamp(2.1rem, 5vw, 3rem);
          font-weight: 430;
          line-height: 1.15;
          letter-spacing: -.01em;
          color: var(--teal);
          margin: 0 0 .8rem;
        }
        .legal-updated {
          font-size: .88rem;
          color: var(--ink-soft);
          margin: 0 0 2.6rem;
        }

        .legal-body { color: var(--ink); }
        .legal-body h2 {
          font-family: var(--serif);
          font-size: 1.6rem;
          font-weight: 500;
          color: var(--teal);
          line-height: 1.25;
          margin: 2.6rem 0 .9rem;
        }
        .legal-body h3 {
          font-family: var(--sans);
          font-size: 1.02rem;
          font-weight: 680;
          color: var(--ink);
          margin: 1.8rem 0 .5rem;
        }
        .legal-body p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--ink-soft);
          margin: 0 0 1.1rem;
        }
        .legal-body ul {
          margin: 0 0 1.3rem;
          padding-left: 1.2rem;
        }
        .legal-body li {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--ink-soft);
          margin-bottom: .5rem;
        }
        .legal-body a {
          color: var(--teal);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-body a:hover { color: var(--teal-strong); }
        .legal-body strong { color: var(--ink); font-weight: 640; }

        .legal-note {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 18px 20px;
          margin: 1.4rem 0;
          font-size: .92rem !important;
          line-height: 1.7 !important;
        }

        @media (max-width: 560px) {
          .legal-topbar { padding: 14px 20px; }
          .legal-brand { font-size: 1.15rem; }
          .legal-back span { display: none; }
          .legal-main { padding: 44px 22px 64px; }
        }
      `}</style>
    </div>
  )
}
