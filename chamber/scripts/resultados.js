
const info = new URLSearchParams(window.location.search)
console.log(info)


if (info.get('b-web') === ""){
    info.set('b-web', "Pagina no registrada :(")
}

if (info.get('b-field') === ""){
    info.set('b-field', "Rubro no registrado :(")
}


document.querySelector("#resultados").innerHTML = `
    <p><span>Nombre de la Empresa:</span> ${info.get('b-name')}</p>
    <p><span>Direccion:</span> ${info.get('b-direction')}</p>
    <p><span>Rubro:</span> ${info.get('b-field')}</p>
    <p><span>Telefono:</span> ${info.get('b-phone')}</p>
    <p><span>Correo:</span> ${info.get('b-email')}</p>
    <p><span>Pagina Web:</span> ${info.get('b-web')}</p>`


const nombre = document.querySelector("#nombre");
if (nombre) {
    const fname = info.get('f-name') || "";
    const lname = info.get('l-name') || "";

    function capitalizar(text) {
        return text.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }

    nombre.innerHTML = capitalizar(`${fname} ${lname}`.trim()) || "Nombre no registrado";
}