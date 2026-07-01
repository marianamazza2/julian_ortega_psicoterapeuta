import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/LegalPage'

export const Route = createFileRoute('/politica-de-privacidad')({
  component: PoliticaPrivacidad,
})

function PoliticaPrivacidad() {
  return (
    <LegalPage title="Política de privacidad" updated="julio de 2026">
      <p>
        La presente política de privacidad regula el tratamiento de los datos personales que
        facilitas a través de este sitio web, de conformidad con el Reglamento (UE) 2016/679
        (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y
        garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> Julián Ortega — Psicólogo colegiado COPC nº 35627</li>
        <li><strong>Domicilio:</strong> Ronda Sant Pere 11, Piso 1-1, 08010 Barcelona</li>
        <li><strong>Teléfono:</strong> +34 665 011 427</li>
        <li><strong>Correo electrónico:</strong> [correo@ejemplo.com]</li>
      </ul>
      <p className="legal-note">
        Sustituye [correo@ejemplo.com] por el correo real de contacto para el ejercicio de derechos
        antes de publicar el sitio.
      </p>

      <h2>2. Finalidad del tratamiento</h2>
      <p>Tratamos la información que nos facilitas con las siguientes finalidades:</p>
      <ul>
        <li>Atender las consultas y solicitudes de información realizadas a través del formulario de contacto o de otros canales (teléfono, WhatsApp o correo electrónico).</li>
        <li>Gestionar la solicitud de una primera entrevista y, en su caso, la prestación de los servicios de psicoterapia.</li>
        <li>Mantener la comunicación necesaria durante el proceso terapéutico.</li>
      </ul>

      <h2>3. Legitimación</h2>
      <p>La base legal para el tratamiento de tus datos es:</p>
      <ul>
        <li><strong>El consentimiento</strong> que otorgas al enviar el formulario o contactar por cualquier medio.</li>
        <li><strong>La ejecución de la relación</strong> profesional o precontractual cuando solicitas los servicios.</li>
        <li>El cumplimiento de las obligaciones legales aplicables al ejercicio de la profesión sanitaria.</li>
      </ul>
      <p>
        Los datos relativos a la salud tratados en el marco de la atención psicológica se consideran
        categorías especiales de datos y se tratan con la máxima confidencialidad, amparados por el
        secreto profesional.
      </p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Los datos se conservarán mientras se mantenga la relación profesional y, posteriormente,
        durante los plazos legalmente exigidos para atender posibles responsabilidades. Los datos de
        las consultas que no deriven en una relación profesional se conservarán únicamente el tiempo
        necesario para gestionarlas.
      </p>

      <h2>5. Destinatarios</h2>
      <p>
        No se cederán datos a terceros, salvo obligación legal. Los proveedores de servicios
        tecnológicos (por ejemplo, alojamiento web o herramientas de comunicación) que puedan
        acceder a los datos actúan como encargados del tratamiento conforme a la normativa vigente.
      </p>

      <h2>6. Derechos de las personas usuarias</h2>
      <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
      <ul>
        <li>Acceso a tus datos personales.</li>
        <li>Rectificación de los datos inexactos.</li>
        <li>Supresión de los datos cuando ya no sean necesarios.</li>
        <li>Limitación u oposición al tratamiento.</li>
        <li>Portabilidad de los datos.</li>
        <li>Retirar el consentimiento prestado en cualquier momento.</li>
      </ul>
      <p>
        Para ejercerlos, escribe a [correo@ejemplo.com] indicando el derecho que deseas ejercer.
        Asimismo, si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una
        reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Seguridad</h2>
      <p>
        El responsable adopta las medidas técnicas y organizativas necesarias para garantizar la
        seguridad, integridad y confidencialidad de los datos personales, evitando su alteración,
        pérdida o acceso no autorizado.
      </p>
    </LegalPage>
  )
}
