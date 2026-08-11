import { Link } from '@tanstack/react-router'

const legalLinks = [
  { to: '/aviso-legal', label: 'Aviso legal' },
  { to: '/politica-de-privacidad', label: 'Política de privacidad' },
  { to: '/politica-de-cookies', label: 'Política de cookies' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-name">Dr. Julián Ortega</p>
          <p className="site-footer-tag">Psicoterapia Online y Presencial en Barcelona</p>
          <p className="site-footer-cred">Psicólogo colegiado — COPC 35627</p>
        </div>

        <nav className="site-footer-nav" aria-label="Enlaces legales">
          {legalLinks.map(l => (
            <Link key={l.to} to={l.to} className="site-footer-link">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-footer-bottom">
        <span>© {year} Julián Ortega. Todos los derechos reservados.</span>
      </div>

      <style>{`
        .site-footer {
          background: var(--teal-strong);
          color: #DCE6E1;
        }
        .site-footer-inner {
          max-width: 1060px;
          margin: 0 auto;
          padding: 56px 32px 32px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          flex-wrap: wrap;
        }
        .site-footer-name {
          font-family: var(--serif);
          font-size: 1.7rem;
          font-weight: 500;
          color: #fff;
          margin: 0 0 6px;
        }
        .site-footer-tag {
          margin: 0;
          font-size: .95rem;
          opacity: .85;
        }
        .site-footer-cred {
          margin: 14px 0 0;
          font-size: .72rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          opacity: .6;
        }
        .site-footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: right;
        }
        .site-footer-link {
          color: #DCE6E1;
          text-decoration: none;
          font-size: .95rem;
          opacity: .85;
          transition: opacity .16s ease, color .16s ease;
        }
        .site-footer-link:hover {
          opacity: 1;
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .site-footer-bottom {
          border-top: 1px solid rgba(255,255,255,.12);
          padding: 20px 32px;
          text-align: center;
          font-size: .8rem;
          opacity: .6;
        }
        @media (max-width: 620px) {
          .site-footer-inner { flex-direction: column; gap: 28px; padding: 44px 24px 26px; }
          .site-footer-nav { text-align: left; }
        }
      `}</style>
    </footer>
  )
}
