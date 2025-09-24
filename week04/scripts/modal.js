// primero se crean los elementsos seleccionando segun el ID de cada c
// elemento a modificar o que el script va a interarctuar
const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal')

modal.showModal()  // <--- ese codigo sirve para mostrar el modal con el SHOWMODAL()

closeModal.addEventListener('click', () => {
    modal.close();
}); // sirve para que ne un click el modal se cierre, 

//primero se coloca el elementoo y luego despues de un "," se coloca la accion o funcion a realizar
