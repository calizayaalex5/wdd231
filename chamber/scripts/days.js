const message = document.getElementById('days') //selecciona el item a mejorar

let lastVisit = localStorage.getItem('lastVisit') //saca el tiempo de la ultima visita
let now = Date.now() // saca el tiempo de ahora

if (!lastVisit) {
    message.textContent = "Bienvenido! Si tienes alguna pregunta no dudes en contactarte con nosotros"
} else {
    let diffMS = now - parseInt(lastVisit);
    let diffDays = Math.floor(diffMS / (1000 * 60 * 60 * 24)); //calculo del dia 

    //las condicionales del timepo
    if (diffDays < 1) {
        message.textContent = "Hola de nuevo! Que bueno que hayas vuelto!"
    } else if (diffDays === 1) {
        message.textContent = "Hola! Tu ultima visita fue hace 1 dia"
    } else {
        message.textContent = `Hola! Tu ultima visita fue hace ${diffDays} dias.`
    }
}

localStorage.setItem('lastVisit', now);