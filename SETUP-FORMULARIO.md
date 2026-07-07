# Cómo conectar el formulario a Google Sheets (gratis)

Con esto, cada envío del formulario de contacto se guardará como una fila nueva
en una Hoja de Cálculo de Google. No necesitas tarjeta de crédito ni servidor propio.

## 1. Crea la hoja de cálculo

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
2. Llámala, por ejemplo, **"Contactos Raíz"**.

## 2. Añade el script

1. En la hoja, ve a **Extensiones → Apps Script**.
2. Borra el contenido de `Código.gs` y pega el contenido del archivo
   `google-apps-script.gs` (incluido junto a este documento).
3. Guarda el proyecto (icono de disquete). Ponle un nombre si te lo pide, por
   ejemplo "Formulario Raíz".

## 3. Publica el script como aplicación web

1. Arriba a la derecha, pulsa **Implementar → Nueva implementación**.
2. En "Selecciona el tipo", elige el icono de engranaje y selecciona **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** Cualquier usuario
4. Pulsa **Implementar**. Google te pedirá autorizar permisos la primera vez:
   acepta (es tu propio script, es seguro).
5. Copia la **URL de la aplicación web** que te muestra. Tiene esta forma:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Conéctala con la web

1. Abre el archivo `script.js`.
2. Sustituye esta línea:
   ```js
   const GOOGLE_SCRIPT_URL = "PEGA_AQUI_TU_URL_DE_APPS_SCRIPT";
   ```
   por tu URL real, por ejemplo:
   ```js
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
3. Guarda el archivo y vuelve a subir la web (o refresca si ya la tienes en tu hosting).

## 5. Pruébalo

1. Abre `index.html` en el navegador, rellena el formulario de contacto y envíalo.
2. Vuelve a tu Hoja de Cálculo: debería aparecer una fila nueva con la fecha y
   los datos enviados. La primera vez que se use, el script crea automáticamente
   una pestaña llamada "Contactos" con las cabeceras.

## Notas importantes

- **Es gratis** mientras uses tu cuenta personal de Google; no tiene límites
  prácticos para el volumen de un formulario de contacto.
- Si en algún momento cambias de opinión y prefieres una base de datos "de
  verdad" (Postgres), la migración natural es **Supabase** (tiene plan gratuito
  generoso). Dímelo y adapto el formulario para que envíe ahí en vez de a Sheets.
- El formulario usa `mode: "no-cors"` al enviar los datos. Esto es intencional:
  Apps Script no siempre permite leer la respuesta desde el navegador, pero el
  envío y guardado en la hoja funcionan igualmente. Por eso el mensaje de éxito
  se muestra de forma optimista tras el envío.
- Si quieres recibir también un correo o notificación de WhatsApp cada vez que
  alguien rellena el formulario, se puede añadir `MailApp.sendEmail(...)` dentro
  del script — pídemelo y lo añado.
