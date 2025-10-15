const url = "./data/projects.json"; //adquiere datos del json
const directory = document.querySelector("#cards"); // selecciona el contenedor en el html

let projects = [];

async function getProjects() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo");
        }

        const data = await response.json();
        projects = data.projects
        displayProjects(projects);
    } catch (error) {
        console.error("Error al obtner los datos", error);
        directory.innerHTML = "<p>Lo siento, no se pudieron cargar los proyectos en este momento.</p>";    
    }
}

// === Generar tarjetas ===
function displayProjects(projects) {
    projects.forEach((project) => {
        let card = document.createElement("div");
        card.classList.add("cardsList");
        
        let name = document.createElement("h2");
        name.textContent = `${project.name}`;

        let image = document.createElement("img");
        image.setAttribute("src", project.img);
        image.setAttribute("alt", `Imagen de ${project.name}`);
        image.setAttribute("loading", "lazy");

        let description = document.createElement("p");
        description.textContent = `${project.description}`;

        let link = document.createElement("a");
        link.setAttribute("href", project.link);
        link.setAttribute("target", "_blank");
        link.textContent = "Ver proyecto";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(link);

        directory.appendChild(card);
    });
} //crea los elementos en el html y los añade al contenedor

getProjects(); //llama a la funcion


//crea dos maneras de mostrar el listado de los proyectos

const completeButton = document.querySelector('#grid')
const resumeButton = document.querySelector('#list')
const display = document.querySelector('#cards')

//se selecciona la acction      accion  ||  funcion por activar
completeButton.addEventListener('click', showComplete)
resumeButton.addEventListener("click", showList);

//las funciones cambian la clase del contendor si es "complete" o "list"
function showComplete() {
    display.classList.add("complete");
    display.classList.remove("list");
}

function showList() {
    display.classList.add('list');
    display.classList.remove('complete')
}
