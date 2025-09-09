// link del array

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

//funcion busqueda de datos
async function getProphetData() {
    const response = await fetch(url)
    const data = await response.json();
    //console.table(data.prophets)
    displayProphets(data.prophets);
}
//funcion muestra de datos
    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
            let card = document.createElement('section')

            let fullName = document.createElement("h2")
            fullName.textContent = `${prophet.name} ${prophet.lastname}`

            let portrait = document.createElement("img")
            portrait.setAttribute("src", prophet.imageurl);
            portrait.setAttribute ("alt",`${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute("loading", "lazy");
            portrait.setAttribute("width", "260");
            portrait.setAttribute("height", "340");

            card.appendChild(fullName);
            card.appendChild(portrait);

            cards.appendChild(card);
        });
    }


getProphetData()

//nota: una funcion no puede estar ednto de otra funcion, si no el 
//sistema me da un error.