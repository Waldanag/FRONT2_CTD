const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
const listadoJson = JSON.parse(jsonData);
const heroes = listadoJson.members;
const ulMiembros = document.getElementById("miembros");

function recorrerMiembros() {
  // Opción con forEach
    // heroes.forEach(heroe => {
    //   const heroeAgregar = document.createElement("li");
    //   heroeAgregar.textContent = heroe.name;
    //   ulMiembros.appendChild(heroeAgregar);
    // });

  // Opcion con .map
    // const heroesListItem = heroes.map(heroe => {
    //   const agregarHeroe = document.createElement("li");
    //   agregarHeroe.textContent = heroe.name;
    //   return agregarHeroe
    // });
    // ulMiembros.append(...heroesListItem);

  // Opcion con fragment para construir una lista y despues agregarla al DOM
  const fragment = document.createDocumentFragment();
  for (const heroe of heroes) {
    const agregarHeroe = document.createElement("li");
    agregarHeroe.textContent = heroe.name;
    fragment.appendChild(agregarHeroe);
  };
  ulMiembros.appendChild(fragment);
};
recorrerMiembros();



