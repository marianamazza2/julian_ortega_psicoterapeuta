# Plan de implementación — Web Julián Ortega, Psicólogo

## Estado general
Proyecto React + Vite + TypeScript con TanStack Router y Framer Motion.
Ruta principal: `src/routes/index.tsx` monta los componentes en orden vertical.

---

## Secciones completadas ✅

### 1. Navbar (`src/components/Navbar.tsx`)
- Logo con nombre y número de colegiación (COPC 35627)
- Links de navegación: Inicio · Sobre mí · Servicios · Blog · Contacto
- CTA "Reservar sesión →" en desktop
- Menú hamburguesa animado para mobile
- Comportamiento sticky con blur y sombra al hacer scroll

### 2. Hero (`src/components/Hero.tsx`)
- Eyebrow: "Psicoterapia · Barcelona & Online"
- Titular principal con palabra clave en cursiva verde
- Párrafo introductorio del copy de `contenido.md`
- Dos CTA: "Reservar primera sesión →" y "Conóceme"
- Tarjeta lateral con: badge de disponibilidad, lista de 5 servicios con checkmarks, mini-stats (duración · modalidad · colegiación)
- Responsive: tarjeta se oculta en mobile

### 3. TrustBar (`src/components/TrustBar.tsx`)
- Franja de confianza con 4 badges: Colegiado COPC 35627 · Primera sesión orientativa · Presencial & Online · Práctica inclusiva y afirmativa
- Separadores entre badges, se ocultan en mobile

---

## Secciones pendientes ❌

### 4. ~~Sobre mí (`src/components/SobreMi.tsx`) — anchor: `#sobre-mi`~~ ✅
Contenido a incluir:
- Título de sección: "Sobre mí"
- Subtítulo: "Una práctica clínica integrativa y comprometida con la diversidad"
- Texto biográfico: psicólogo colegiado COPC 35627, argentino, graduado en Psicología (UBA)
- Doctorado en diversidad sexual
- Trayectoria académica en estudios del trabajo y organizaciones
- Compromiso con práctica psicológica inclusiva, afirmativa hacia diversidades sexuales, afectivas y de género
- Posible elemento visual: foto o ilustración a la derecha del texto

### ~~5. Servicios (`src/components/Servicios.tsx`) — anchor: `#servicios`~~ ✅
Título: "En qué puedo ayudarte"
5 tarjetas de servicio, cada una con título, descripción y lista de ítems:

| Servicio | Ítems |
|---|---|
| Psicoterapia individual | Ansiedad, estrés · Dificultades vinculares, autoestima, crisis · Malestar laboral, cambios, pérdidas |
| Terapia de pareja | Conflictos recurrentes · Distanciamiento, celos, crisis · Procesos de separación |
| Atención al colectivo LGBTIQ+ | Identidad y orientación sexual · Discriminación / estigma · Aislamiento, consumos, chemsex |
| Orientación vocacional y laboral | Elección de estudios / carrera · Redefinición del rol profesional · Sentido del trabajo, satisfacción, incertidumbre |
| Acompañamiento en procesos migratorios | Adaptación cultural · Desarraigo, soledad, incertidumbre · Cambios de identidad y vínculos |

### ~~6. Enfoque de trabajo (`src/components/Enfoque.tsx`) — sin anchor dedicado (puede ir dentro de Servicios o como sección propia)~~ ✅
- Título: "Mi enfoque de trabajo"
- Subtítulo: "Una mirada integrativa sobre las personas y sus vínculos"
- Párrafo introductorio sobre el sufrimiento psicológico como experiencia compleja
- 3 tarjetas o columnas de perspectivas:
  - **Psicodinámica**: historia personal, experiencias significativas, modos de relación
  - **Cognitiva**: patrones de pensamiento, formas de afrontamiento
  - **Sistémica**: vínculos, contextos familiares, laborales y sociales
- Cierre: cómo la integración permite adaptar el tratamiento a cada persona

### ~~7. Preguntas frecuentes (`src/components/FAQ.tsx`)~~ ✅
3 preguntas con respuesta (acordeón o lista):
1. ¿Cuánto dura una sesión? → ~45 minutos
2. ¿La terapia puede realizarse online? → Sí, con confidencialidad y calidad garantizadas
3. ¿Con qué frecuencia se realizan las sesiones? → Según el caso; habitualmente semanal al inicio

### ~~8. Contacto (`src/components/Contacto.tsx`) — anchor: `#contacto`~~ ✅
- Título: "Contacto — Solicita una primera entrevista"
- Texto introductorio del copy de `contenido.md`
- Formulario de contacto (nombre, email, mensaje, botón de envío) o enlace a agenda/calendario
- Recordatorio: atención presencial Barcelona (zona Plaza Cataluña) y online
- Número de colegiación COPC 35627

### 9. Footer
- Nombre y colegiación
- Links de navegación rápida
- Aviso legal / política de privacidad (requerido legalmente en España para webs de servicios de salud)

---

## Tareas transversales pendientes

- [ ] Registrar todas las secciones nuevas en `src/routes/index.tsx`
- [ ] Verificar que los anchors `#sobre-mi`, `#servicios`, `#contacto` coinciden entre Navbar y los `id` de cada sección
- [ ] Revisar responsive en todas las secciones nuevas
- [ ] El link "Blog" en el Navbar no tiene sección correspondiente en `contenido.md` — decidir si se elimina, se oculta o se deja como página futura
- [ ] Aviso de cookies / política de privacidad (obligatorio en España para formularios de contacto con datos personales)
