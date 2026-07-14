# CRONOGRAMA DE LANZAMIENTO — Raíz (14 jul – 15 ago 2026)

Documento maestro: qué hacer cada semana hasta el lanzamiento del **15 de agosto de 2026**, combinando las 3 áreas del negocio (Operativa, Administrativa, Marketing y Ventas) en un solo calendario. Marca cada casilla `[ ]` a medida que se completa.

**Documentos relacionados:**
*   Checklists de viabilidad, tablas por país y SOPs por departamento → `PLAN_OPERATIVO_ETAPAS.md`
*   Pilares de contenido y estructura de guión TikTok → `TIKTOK_STRATEGY.md`
*   Ficha de entrevista del asesor (nueva) → `TEMPLATES/FICHA_ENTREVISTA_ASESOR_TEMPLATE.md`
*   Matriz de radicación por expediente (nueva) → `TEMPLATES/MATRIZ_RADICACION_TEMPLATE.md`
*   Informe de concepto jurídico de viabilidad → `TEMPLATES/CONCEPTO_VIABILIDAD_TEMPLATE.md`
*   Contrato de mandato de representación → `TEMPLATES/CONTRATO_MANDATO_REPRESENTACION.md`
*   Calendario de videos de la campaña de expectativa (nuevo) → `TEMPLATES/CAMPANA_EXPECTATIVA_JUL-AGO2026.csv`
*   Calendario de contenido de régimen normal (post-lanzamiento) → `TEMPLATES/TIKTOK_CONTENT_CALENDAR.csv`

**Nota sobre el formulario de contacto:** el triaje web (nombre, teléfono, email, país de origen, tiempo de estancia, antecedentes, medios económicos) **ya está construido y en producción** en `index.html` — no hace falta crear uno nuevo. Lo que falta es conectar el pago y la reserva de cita automática al final de ese flujo (ver Semana 1–2).

---

## Semana 1 · 14–20 jul — Documentar el proceso y arrancar cuentas
- [ ] Redactar `TEMPLATES/FICHA_ENTREVISTA_ASESOR_TEMPLATE.md` (ya creada como plantilla base — revisar y ajustar con el equipo).
- [ ] Redactar `TEMPLATES/MATRIZ_RADICACION_TEMPLATE.md` (ya creada como plantilla base — revisar y ajustar con el equipo).
- [ ] Crear cuenta en **Stripe** (o confirmar Bizum de empresa) para cobrar la consulta inicial (50 €). Configurar un link/producto de pago único.
- [ ] Crear cuenta en **Cal.com o Calendly**, tipo de evento "Consulta de viabilidad (30 min)", con el pago de Stripe como paso previo obligatorio a la confirmación de la cita.
- [ ] Configurar **WhatsApp Business** (perfil, mensaje de bienvenida, catálogo de servicios) y reemplazar el número placeholder `34600000000` que hoy está hardcodeado en `index.html` (CTA de cabecera, menú móvil, formulario de triaje y modal de artículos) por el número real de la línea de negocio.
- [ ] Redactar los 9 guiones de la campaña de expectativa (`TEMPLATES/CAMPANA_EXPECTATIVA_JUL-AGO2026.csv`), siguiendo la estructura Hook (0-3s) / Problema (3-15s) / Solución (15-45s) / CTA (45-60s) de `TIKTOK_STRATEGY.md` §3.

## Semana 2 · 21–26 jul — Integrar pago+cita y grabar en lote
- [ ] Probar de principio a fin el flujo Stripe → Cal.com/Calendly con un pago de prueba (reembolsable).
- [ ] Editar `index.html`: añadir el botón "Reservar cita y pagar consulta (50 €)" en el paso 4 del formulario de triaje, junto al botón de WhatsApp ya existente, enlazando al flujo Stripe/Cal.com recién configurado.
- [ ] Grabar los 9 videos de la campaña en 1–2 sesiones de batch recording.
- [ ] Editar y programar los 9 videos en el calendario de publicación de TikTok.
- [ ] Prueba interna: correr un caso ficticio completo por el embudo operativo — formulario web → `FICHA_ENTREVISTA_ASESOR_TEMPLATE.md` → `CONCEPTO_VIABILIDAD_TEMPLATE.md` → `MATRIZ_RADICACION_TEMPLATE.md` — para detectar huecos antes de tener clientes reales.

## Semana 3 · 27 jul – 2 ago — Arranca la campaña de expectativa
- [ ] **Lun 27 jul** — Video 1 (Autoridad/BTS): teaser sin revelar la marca, "algo se viene a Vigo el 15 de agosto".
- [ ] **Mié 29 jul** — Video 2 (Educación Urgente): el problema real del migrante (miedo/incertidumbre del trámite).
- [ ] **Vie 31 jul** — Video 3 (Educación Urgente): primer tip de valor gratuito sobre antecedentes penales y vigencias por país.
- [ ] Piloto beta: ofrecer 3–5 asesorías gratuitas a conocidos (Tercera Etapa de `PLAN_OPERATIVO_ETAPAS.md`) para generar los primeros testimonios y reseñas antes del lanzamiento.

## Semana 4 · 3–9 ago — Construir autoridad y revelar la marca
- [ ] **Lun 3 ago** — Video 4 (Autoridad/BTS): fundadores trabajando, radicando expedientes.
- [ ] **Mié 5 ago** — Video 5 (Mitos vs. Realidades): se revela el nombre "Raíz", desmintiendo el mito del "abogado carísimo".
- [ ] **Vie 7 ago** — Video 6 (Educación Urgente): cómo va a funcionar el proceso paso a paso una vez abran.
- [ ] Radicar (si aplica) los primeros expedientes reales del piloto en Mercurio usando ya la `MATRIZ_RADICACION_TEMPLATE.md`, validando el flujo de pago por hitos (`CONTRATO_MANDATO_REPRESENTACION.md`) y el checklist de "cero rechazos".

## Semana 5 · 10–15 ago — Cuenta regresiva final y lanzamiento
- [ ] **Lun 10 ago** — Video 7 (Casos de Éxito/Comercial): anuncio oficial de la fecha + incentivo early-bird.
- [ ] **Mié 12 ago** — Video 8 (Casos de Éxito): cuenta regresiva pública + testimonios del piloto.
- [ ] **Vie 14 ago** — Video 9 (Comercial): último aviso "mañana abrimos" + CTA directo al link.
- [ ] Verificación final end-to-end: formulario web → botón de pago/cita → Stripe → Cal.com/Calendly → WhatsApp → Google Sheets, con un pago real de prueba (no dejar esta prueba para el mismo día 15).
- [ ] **Sáb 15 ago — LANZAMIENTO**: publicación de apertura oficial, web y WhatsApp activos para recibir clientes reales.

---

## Verificación
- Cada documento de este cronograma debe poder abrirse y usarse directamente, sin explicación adicional (el equipo no es técnico).
- Antes del 15 de agosto, correr al menos un caso de principio a fin (piloto beta) usando las plantillas nuevas para confirmar que sirven en la práctica.
- Probar el flujo Stripe → Cal.com/Calendly con un pago real de prueba antes de la semana de lanzamiento.
- Confirmar en el navegador que el botón "Reservar cita y pagar consulta" añadido a `index.html` aparece correctamente en el paso 4 del triaje y enlaza al flujo configurado.
