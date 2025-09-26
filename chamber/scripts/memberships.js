const membresias = [
  {
    nombre: "Non Profit Member",
    descripcion: "Este es el servicio gratuito con costo 0, enfocado para empresas sin fines de lucro, como organizaciones, ONGs, otros.",
    precio: "$0 / mes",
    clase: "NPmember"
  },
  {
    nombre: "Bronze Member",
    descripcion: "Servicio básico con beneficios limitados.",
    precio: "$100000 / mes",
    clase: "BMember"
  },
  {
    nombre: "Silver Member",
    descripcion: "Servicio intermedio con beneficios ampliados.",
    precio: "$500000 / mes",
    clase: "SMember"
  },
  {
    nombre: "Golden Member",
    descripcion: "Servicio completo con todos los beneficios premium.",
    precio: "$1000000 / mes",
    clase: "GMember"
  }
];


const dialog = document.querySelector("#member-description")
const title = document.querySelector("#member-title")
const text = document.querySelector("#member-text")
const price = document.querySelector('#member-cost')
const close = document.querySelector("#close-description")

const tarjetas = document.querySelectorAll(".membresiaWeb")

tarjetas.forEach((tarjeta, index) => {
    tarjeta.addEventListener('click', () => {
        const miembro = membresias[index];
        title.textContent = miembro.nombre;
        text.textContent = miembro.descripcion;
        price.textContent = miembro.precio;
        dialog.showModal()
    });
});


close.addEventListener('click', () => {
    dialog.close()
})