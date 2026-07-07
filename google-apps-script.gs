/**
 * Script de Google Apps Script para el formulario de contacto de Raíz.
 *
 * Instrucciones completas en SETUP-FORMULARIO.md.
 *
 * 1. Pega este código en Extensiones → Apps Script de tu Hoja de Cálculo.
 * 2. Impleméntalo como aplicación web (Ejecutar como: Yo / Acceso: Cualquier usuario).
 * 3. Copia la URL resultante en GOOGLE_SCRIPT_URL dentro de script.js.
 */

const SHEET_NAME = 'Contactos';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Fecha', 'Nombre', 'Teléfono', 'Email', 'Situación', 'Mensaje']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date(),
      data.nombre || '',
      data.telefono || '',
      data.email || '',
      data.situacion || '',
      data.mensaje || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función de prueba opcional: ejecútala manualmente desde el editor
 * (botón ▶) para comprobar que el script escribe en la hoja correctamente,
 * sin necesidad de desplegarlo todavía.
 */
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Prueba Nombre',
        telefono: '600000000',
        email: 'prueba@example.com',
        situacion: 'Arraigo social',
        mensaje: 'Esto es una prueba.'
      })
    }
  };
  doPost(fakeEvent);
}
