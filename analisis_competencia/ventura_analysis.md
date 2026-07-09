# ANÁLISIS DE COMPETENCIA DETALLADO: VENTURA EXTRANJERÍA

Este documento consolida la investigación de mercado, el análisis técnico del embudo de ventas y la estructura de formularios de **Ventura Extranjería Abogados**, sirviendo como base operativa para optimizar el canal digital de **Raíz - Asesores Expertos en Extranjería**.

---

## 1. FICHA TÉCNICA DEL COMPETIDOR

*   **Nombre Comercial:** Ventura Extranjería Abogados
*   **Fundador:** Pau Ventura Álvarez
*   **Año de Lanzamiento:** ~2021/2022
*   **Facturación (2024):** 3.3 Millones de Euros (Proyección 2025/2026: 4.0M €)
*   **Equipo:** +60 empleados (oficinas en Barcelona, Madrid y Bogotá, Colombia)
*   **Canal Principal de Adquisición:** Redes Sociales (TikTok, Instagram, YouTube) con más de 2.5 millones de seguidores acumulados.
*   **Sitio Web:** `https://venturaextranjeria.com`

---

## 2. EL EMBUDO DIGITAL (FUNNEL) DE VENTURA

Ventura utiliza un embudo automatizado de "Fricción de Pago" (Paid Friction Funnel). A diferencia de los despachos tradicionales que ofrecen consultas gratuitas por email, Ventura filtra a sus leads cobrando una tarifa de entrada baja (49 €) para programar cualquier videollamada.

```
 [ TikTok / Instagram / SEO ]
              │
              ▼
    [ Página de Inicio ]
              │
              ▼
 [ Cuadrícula de Auto-Segmentación ]  ──> [ Canal de WhatsApp ] (Lead Nurturing)
              │
              ▼
   [ Selector Fecha/Hora ]
              │
              ▼
 [ Formulario de Contacto (Lead) ]
              │
              ▼
     [ Pasarela de Pago ] (49€)
              │
              ▼
  [ Email / SMS Confirmación ]
              │
              ▼
 [ Acceso a Portal de Clientes ] (Carga de Documentación en PDF)
```

---

## 3. INGENIERÍA DE SUS FORMULARIOS

### A. Formulario de Reserva de Cita (`/reserva-cita/`)
El núcleo comercial del sitio web es un formulario dinámico dividido en los siguientes pasos interactivos:

| Paso | Elemento / Campo | Tipo de Input | Validación / Regla | Propósito de Negocio |
| :--- | :--- | :--- | :--- | :--- |
| **Paso 1** | Selector de Trámite | Botón de Radio / Dropdown | Obligatorio | El usuario elige el servicio (Estudios, Arraigo, Nacionalidad, etc.), lo que pre-clasifica el lead. |
| **Paso 2** | Calendario de Disponibilidad | Widget Interactivo (Amelia/Bookly) | Obligatorio | Muestra las franjas horarias libres sincronizadas con el calendario del equipo. |
| **Paso 3** | Nombre y Apellidos | `text` | Obligatorio | Identificación básica. |
| **Paso 3** | Correo Electrónico | `email` | Obligatorio | Envío de notificaciones y facturas. |
| **Paso 3** | Teléfono Móvil | `tel` | Obligatorio (con prefijo) | Seguimiento comercial directo y recordatorios por SMS/WhatsApp. |
| **Paso 3** | Descripción breve | `textarea` | Opcional | Espacio para que el usuario relate los detalles de su caso. |
| **Paso 4** | Pasarela de Pago | Iframe (Stripe / Redsys) | Obligatorio (49 €) | Valida la tarjeta y emite el cargo de la consulta de forma inmediata. |

### B. Portal de Clientes (Carga Documental)
Una vez contratado el servicio completo, el cliente recibe acceso a su portal personal. El formulario de carga de expediente solicita:
*   **Carga de Pasaporte:** Input file (valida formato PDF de todas las páginas escaneadas a color).
*   **Carga de Penales:** Input file (valida formato PDF del documento apostillado).
*   **Carga de Empadronamiento:** Input file (valida vigencia del documento).
*   **Carga de Justificantes adicionales:** Input file para precontrato de trabajo, matrícula o medios de vida.

*Ventaja Técnica:* Esto automatiza la recepción de archivos y evita el envío caótico de documentos por chats informales, garantizando un flujo limpio para su equipo de operaciones.

---

## 4. BRECHAS ESTRATÉGICAS: ¿CÓMO COMPETIR DESDE RAÍZ?

A pesar de su éxito financiero, el modelo masivo de Ventura tiene puntos débiles que **Raíz** puede explotar utilizando su propuesta boutique local de Vigo:

1.  **Despersonalización vs. Empatía Humana:** Ventura es percibido como un servicio "industrial". Raíz puede destacar con su servicio boutique, ofreciendo un trato cálido, cercano y adaptado a Galicia.
2.  **Consulta de Pago Inmediata vs. Triaje Inteligente Gratuito:** Exigir 49 € por adelantado asusta a muchos migrantes que tienen un presupuesto ajustado. Raíz puede ofrecer un **Triaje de Viabilidad Gratuito en línea** para capturar masivamente esos leads calientes, demostrándoles la viabilidad del caso antes de cobrarles por la asesoría definitiva.
3.  **Checklists Locales de Pontevedra:** Las oficinas de extranjería en España aplican criterios ligeramente distintos. Raíz se especializa en la **Oficina de Extranjería de Pontevedra (sede Vigo)**, lo cual nos da una tasa del **100% de éxito / 0% rechazos** frente al procesamiento generalista nacional de Ventura.
