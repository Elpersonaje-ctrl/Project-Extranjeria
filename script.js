// ============================================================
// CONFIGURACIÓN DEL FORMULARIO DE CONTACTO
// ------------------------------------------------------------
// Pega aquí la URL de tu Google Apps Script Web App una vez
// desplegada (ver instrucciones en SETUP-FORMULARIO.md).
// Ejemplo: "https://script.google.com/macros/s/AKfycb.../exec"
// ============================================================
const GOOGLE_SCRIPT_URL = "PEGA_AQUI_TU_URL_DE_APPS_SCRIPT";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const statusEl = document.getElementById("form-status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            nombre: form.nombre.value.trim(),
            telefono: form.telefono.value.trim(),
            email: form.email.value.trim(),
            situacion: form.situacion.value,
            mensaje: form.mensaje.value.trim(),
        };

        if (!data.nombre || !data.telefono || !data.email || !data.situacion) {
            setStatus("Por favor, completa los campos obligatorios.", "error");
            return;
        }

        if (GOOGLE_SCRIPT_URL.includes("PEGA_AQUI")) {
            setStatus(
                "El formulario aún no está conectado. Sigue las instrucciones de SETUP-FORMULARIO.md para activarlo.",
                "error"
            );
            return;
        }

        const submitBtn = form.querySelector("button[type=submit]");
        submitBtn.disabled = true;
        setStatus("Enviando...", "");

        try {
            // Se usa mode: "no-cors" porque Google Apps Script no siempre
            // responde con cabeceras CORS legibles desde el navegador.
            // El envío igualmente llega y se guarda en la Hoja de Cálculo;
            // simplemente no podemos leer la respuesta de vuelta.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(data),
            });

            form.reset();
            setStatus("¡Gracias! Hemos recibido tus datos, te contactaremos en menos de 2 horas hábiles.", "success");
        } catch (err) {
            setStatus("Hubo un problema al enviar. Escríbenos directamente por WhatsApp.", "error");
        } finally {
            submitBtn.disabled = false;
        }
    });

    function setStatus(message, type) {
        statusEl.textContent = message;
        statusEl.className = "form-status" + (type ? " " + type : "");
    }
});
