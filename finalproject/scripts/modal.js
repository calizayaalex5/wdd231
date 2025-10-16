const openCatModal = document.getElementById('openCatModal');
const closeCatModal = document.getElementById('closeCatModal');
const catModal = document.getElementById('catModal');

// Abrir modal
openCatModal.addEventListener('click', () => {
  catModal.classList.add('show');
});

// Cerrar modal
closeCatModal.addEventListener('click', () => {
  catModal.classList.remove('show');
});

// Cerrar al hacer clic fuera
catModal.addEventListener('click', (e) => {
  if (e.target === catModal) {
    catModal.classList.remove('show');
  }
});