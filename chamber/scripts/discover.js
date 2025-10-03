import { places } from "../data/location.mjs";

const placesInIquique = document.querySelector("#placesIquique")

function display(places) {
    places.forEach((place) => {
        let card = document.createElement("div");

        let name = document.createElement("h2");
        name.textContent = place.titulo;
        card.appendChild(name);

        let address = document.createElement("p");
        const theAddress = document.createElement('address')
        theAddress.textContent = place.direccion;
        card.appendChild(theAddress);

        let description = document.createElement("p");
        description.textContent = place.descripcion;
        card.appendChild(description);

        let image = document.createElement("img");
        image.src = `images/imagenes/${place.imagen_url}`;
        image.alt = place.titulo;
        card.appendChild(image);

        placesInIquique.appendChild(card)
    });
}
display(places);