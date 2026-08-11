import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/LegalPage'

export const Route = createFileRoute('/politica-de-cookies')({
  component: PoliticaCookies,
})

function PoliticaCookies() {
  return (
    <LegalPage title="Política de cookies" updated="julio de 2026">
      <p>
        Esta política de cookies explica qué son las cookies, cuáles utiliza este sitio web y cómo
        puedes gestionarlas, de conformidad con la Ley 34/2002 (LSSI-CE) y la normativa vigente en
        materia de protección de datos.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
        cuando los visitas. Sirven para recordar tus preferencias, facilitar la navegación y, en
        algunos casos, obtener información estadística sobre el uso del sitio.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>
      <h3>Cookies técnicas (necesarias)</h3>
      <p>
        Son imprescindibles para el correcto funcionamiento del sitio. Este sitio utiliza
        almacenamiento local del navegador para recordar tu decisión sobre el uso de cookies y no
        volver a mostrarte el aviso en cada visita. Estas cookies no requieren tu consentimiento.
      </p>

      <h3>Cookies analíticas (opcionales)</h3>
      <p>
        Permiten medir y analizar de forma anónima el uso del sitio web para mejorar su
        funcionamiento y contenidos. Solo se activan si prestas tu consentimiento.
      </p>

      <h3>Cookies de terceros (opcionales)</h3>
      <p>
        En caso de utilizar servicios externos (por ejemplo, herramientas de mensajería o
        analítica), estos podrían instalar sus propias cookies. Solo se activan si prestas tu
        consentimiento.
      </p>

      <h2>3. Gestión y desactivación de cookies</h2>
      <p>
        Al acceder por primera vez al sitio, se muestra un aviso que te permite aceptar todas las
        cookies, rechazarlas o configurar tus preferencias. Puedes cambiar tu decisión en cualquier
        momento borrando el almacenamiento del navegador.
      </p>
      <p>
        Además, puedes configurar tu navegador para bloquear o eliminar las cookies. Encontrarás las
        instrucciones en la ayuda de cada navegador:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        Ten en cuenta que la desactivación de las cookies técnicas puede afectar al correcto
        funcionamiento del sitio web.
      </p>

      <h2>4. Más información</h2>
      <p>
        Para más información sobre el tratamiento de tus datos, consulta nuestra{' '}
        <a href="/politica-de-privacidad">política de privacidad</a>.
      </p>
    </LegalPage>
  )
}
