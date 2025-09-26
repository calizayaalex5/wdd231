
const info = new URLSearchParams(window.location.search)
console.log(info)


if (info.get('b-web') === ""){
    info.set('b-web', "Pagina no registrada :(")
}

if (info.get('b-field') === ""){
    info.set('b-field', "Rubro no registrado :(")
}


document.querySelector("#resultados").innerHTML = `
    <p><span>Nombre de la Empresa:</span> ${info.get('b-name')}
    <p><span>Direccion:</span> ${info.get('b-direction')}
    <p><span>Rubro:</span> ${info.get('b-field')}
    <p><span>Telefono:</span> ${info.get('b-phone')}
    <p><span>Correo:</span> ${info.get('b-email')}
    <p><span>Pagina Web:</span> ${info.get('b-web')}`


function capitalizar(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1)
}

const nombre = document.querySelector("#nombre");
if (nombre) {
    const fname = info.get('f-name') || "Nombre no registrado";
    nombre.innerHTML = capitalizar(fname)
}