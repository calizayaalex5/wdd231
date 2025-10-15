
const info = new URLSearchParams(window.location.search)
console.log(info)

const nombreElem = document.querySelector('#nombre');
const emailElem = document.querySelector('#email');
const asuntoElem = document.querySelector('#asunto');
function capitalizar(text) {
    return text
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

if (nombreElem) {
    const name = info.get('name') || "";
    nombreElem.textContent = capitalizar(name.trim()) || "Nombre no registrado";
}

if (emailElem) {
    const email = info.get('email') || "";
    emailElem.textContent = email || "Correo no registrado";
}

if (asuntoElem) {
    const asunto = info.get('asunto') || "";
    asuntoElem.textContent = capitalizar(asunto.trim()) || "Asunto no registrado";
}