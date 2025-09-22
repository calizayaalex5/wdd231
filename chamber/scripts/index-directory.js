const url = "data/members.json";
const cardsIndex = document.querySelector("#cards-index");

async function getLevel2and3Members() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        let selectedMembers = data.members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
        selectedMembers = shuffleArray(selectedMembers);
        selectedMembers = selectedMembers.slice(0, 3);
        displayCards(selectedMembers);
    } catch (error) {
        console.error("Error al cargar miembros:", error);
        cardsIndex.textContent = "No se pudo cargar las empresas.";
    } 
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambio
    }
    return array;
}

function displayCards(members) {
    cardsIndex.innerHTML = ""; 

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("card");

        const name = document.createElement("h2");
        name.textContent = member.name;

        const logo = document.createElement("img");
        logo.src = member.imageOrIcon;
        logo.alt = `Logo de ${member.name}`;
        logo.loading = "lazy";
        logo.width = 150;

        const services = document.createElement("p");
        services.textContent = `${member.services}`;

        const website = document.createElement("a");
        website.href = member.websiteURL;
        website.target = "_blank";
        website.textContent = "Visitar sitio web";

        services.appendChild(document.createElement("br"));
        services.appendChild(website);

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(services);

        cardsIndex.appendChild(card);
    });
}


getLevel2and3Members();