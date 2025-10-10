// === Fetch JSON ===
const url = "./data/projects.json"; 
const cardList = document.querySelector("#cards"); 
const modal = document.getElementById("proyecto-description");
let projects = [];

async function getProjects() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("No se pudo cargar el archivo");

        const data = await response.json();
        projects = data.projects;
        displayProjects(projects);
        setupCarousel(); // inicializa carrusel después de generar tarjetas
    } catch (error) {
        console.error("Error al obtener los datos", error);
        cardList.innerHTML = "<p>Lo siento, no se pudieron cargar los proyectos en este momento.</p>";
    }
}

// === Generar tarjetas ===
function displayProjects(projects) {
    projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${project.img}" alt="Imagen de ${project.name}" loading="lazy">
            <h2>${project.name}</h2>
        `;

        // Abrir modal al hacer clic
        card.addEventListener("click", () => {
            modal.innerHTML = `
                <button id="closeModal">❌</button>
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Ver proyecto</a>
            `;
            modal.showModal();

            document.getElementById("closeModal").addEventListener("click", () => {
                modal.close();
            });
        });

        cardList.appendChild(card);
    });
}

// === Carrusel con puntos ===
function setupCarousel() {
    const cardsContainer = document.querySelector(".cardList"); // tu contenedor #cards
    const puntos = document.querySelectorAll(".punto");
    const cardsPerView = 3; // número de tarjetas visibles
    const cardWidthPercent = 100 / cardsPerView;

    puntos.forEach((cadaPunto, i) => {
        cadaPunto.addEventListener("click", () => {
            const operacion = i * -cardWidthPercent;
            cardsContainer.style.transform = `translateX(${operacion}%)`;

            puntos.forEach(p => p.classList.remove("activo"));
            cadaPunto.classList.add("activo");
        });
    });
}

getProjects();