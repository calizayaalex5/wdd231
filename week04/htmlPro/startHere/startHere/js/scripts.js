// primero se crea la variable que queremos editar o interpretar o simplemente desde la varible
// URLSearchParams ponemo 'window.location.cearch'
//const getString = window.location.search;
//console.log(getString) // esto muestra la vairable en la consola y esto significa que si la consola lo ejecuta y reconoce

//asi creamos el parametro del URL
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo) // con esto se muestera los parametros de la URL

//usar el get para conceguir datos de la URL
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinance'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
//este console.log sirve para guiarnos cuando queremos usar estos datos y no estamos seguros del contenido
//pero no es necesario que esten presentes

//condicion por si el usuario no agrego telefono
if (myInfo.get('phone') === ""){
    myInfo.set('phone', 'No phone registered :(')
} else {
    myInfo.get('phone')
}


// Ahora si queremos usar los resultados de nuestro formulario desde el html podemos usar estos condigos
// junto con el inner HTML y crear nuevo HTML para mostrar un mensajed reactivo
document.querySelector('#results').innerHTML = `
    <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
    <p>Your Phone: ${myInfo.get('phone')} </p>
    <p>Your email: ${myInfo.get('email')} </p>`