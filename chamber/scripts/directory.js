
const url = "data/members.json";
const directory = document.querySelector("#directory");

let members = [];
async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    members = data.members;
    displayMembers(members);
}

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        name.textContent = `${member.name}`;

        let logo = document.createElement("img");
        logo.setAttribute("src", member.imageOrIcon);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "70%");
        logo.setAttribute("height", "auto");

        let address = document.createElement("p");
        address.textContent = `Direccion: ${member.address}`;
        address.setAttribute("class", "direction");

        let service = document.createElement("p");
        service.textContent = `Rubro: ${member.services}`;

        let website = document.createElement("a");
        website.setAttribute("href", member.websiteURL);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit Website";
        service.appendChild(document.createElement("br"));
        service.appendChild(website);

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(service);
        card.appendChild(website);

        directory.appendChild(card);
    });
    
}

getMembersData();


//layout list and grit 

const gridbutton = document.querySelector("#grid")
const listbutton = document.querySelector("#list")
const display = document.querySelector("#directory")

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");

}
