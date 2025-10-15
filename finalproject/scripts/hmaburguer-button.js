// hmabuerguer button

const navButton = document.querySelector('#nav-button');

// navigation bar
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});



// Obtener el año actual
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Obtener la fecha de última modificación del documento
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = document.lastModified;
