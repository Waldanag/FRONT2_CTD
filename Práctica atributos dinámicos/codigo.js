//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
const card = document.getElementById("tarjeta");
console.log(card);
card.classList.add("card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
const logo = document.getElementById("logo");
console.log(logo);
logo.setAttribute('src', "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo
const titulo = document.querySelector("h1");
titulo.classList.remove("titulo-feo");

//4- Chequear si el link a youtube posee o no el atributo href
const linkYoutube = document.getElementById("link_youtube");
linkYoutube.hasAttribute("href");
console.log(linkYoutube.hasAttribute("href"));

//5- Obtener el href del link a wikipedia y mostrarlo por consola
const linkWiki = document.getElementById("link_wikipedia").getAttribute("href");
console.log(linkWiki);

