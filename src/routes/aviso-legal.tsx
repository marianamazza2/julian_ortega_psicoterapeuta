import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/LegalPage'

export const Route = createFileRoute('/aviso-legal')({
  component: AvisoLegal,
})

function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal" updated="julio de 2026">
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos
        identificativos del titular de este sitio web.
      </p>

      <h2>1. Datos identificativos</h2>
      <ul>
        <li><strong>Titular:</strong> Julián Ortega</li>
        <li><strong>Actividad:</strong> Psicólogo colegiado — COPC nº 35627 (Col·legi Oficial de Psicologia de Catalunya)</li>
        <li><strong>Domicilio profesional:</strong> Ronda Sant Pere 11, Piso 1-1, 08010 Barcelona</li>
        <li><strong>Teléfono:</strong> +34 665 011 427</li>
        <li><strong>Correo electrónico:</strong> hola@julianortega.com</li>
        <li><strong>NIF:</strong> Y7620697Y</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web, cuya finalidad es ofrecer información
        sobre los servicios profesionales de psicoterapia prestados por el titular, así como
        facilitar el contacto con las personas interesadas.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y la navegación por este sitio web atribuyen la condición de usuario e implican
        la aceptación de las condiciones recogidas en este aviso legal. El usuario se compromete a
        hacer un uso adecuado de los contenidos y a no emplearlos para incurrir en actividades
        ilícitas, contrarias a la buena fe o al orden público.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, diseño,
        logotipos y código fuente) son titularidad del titular o de terceros que han autorizado su
        uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda
        prohibida su reproducción, distribución o comunicación pública, total o parcial, sin
        autorización expresa.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños o perjuicios derivados del acceso o uso de
        la información contenida en el sitio web. Asimismo, no garantiza la ausencia de errores en
        los contenidos ni la disponibilidad permanente del sitio, pudiendo suspenderlo temporalmente
        por motivos técnicos o de mantenimiento.
      </p>
      <p>
        La información publicada en este sitio tiene carácter meramente divulgativo y no sustituye,
        en ningún caso, una consulta o valoración psicológica individualizada.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        Este sitio web puede contener enlaces a páginas de terceros. El titular no asume ninguna
        responsabilidad sobre los contenidos ni las políticas de privacidad de dichos sitios.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la resolución de cualquier
        controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a
        derecho.
      </p>
    </LegalPage>
  )
}
