/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

let validacionTexto = "";
do {
  datosPersona.nombre = prompt(validacionTexto + "\n Ingresa tu nombre").toLowerCase();
  validacionTexto = esTextoValido(datosPersona.nombre);
} while (validacionTexto !== true);
console.log(validacionTexto);

let validacionAnio = "";
do {
  let anioNacimiento = prompt(validacionAnio + "\n Ingresa tu año de nacimiento");
  validacionAnio = esAnioValido(anioNacimiento);
  if (validacionAnio === true) {
    datosPersona.edad = y - anioNacimiento;
  }
} while (validacionAnio !== true);

validacionTexto = "";
do {
  datosPersona.ciudad = prompt(validacionTexto + "\n Ingresa tu Ciudad").toLowerCase();
  validacionTexto = esTextoValido(datosPersona.ciudad);  
} while (validacionTexto !== true);

datosPersona.interesPorJs = confirm("Tiene interes por Javascript?");
}

/*VALIDACIONES GENERALES DE LOS DATOS INGRESADOS*/
function esTextoValido (texto) {
  let str = texto.trim();
  if (str.length > 3 && isNaN(texto)) {
    return true;
  }
  return "Error, no es un dato valido";
}
const y = new Date().getFullYear();

function esAnioValido(anio) {
  if (!isNaN(anio) && anio < y && anio > 1900) {
    return true;
  }
  return "Error, el formato del año debe ser con 4 números";
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  console.log(datosPersona);
  let nombres = datosPersona.nombre.split(" ");
  usuario = nombres.map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1));

  let ciudad = datosPersona.ciudad.split(" ");
  nombreCiudad = ciudad.map((ciudad) => ciudad.charAt(0).toUpperCase() + ciudad.slice(1));

  const cardPersonalInfo = document.querySelector(".card-header");
  cardPersonalInfo.innerHTML = `
    <h3>Nombre: <span id="nombre">${usuario.join(" ")}</span></h3>
    <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
    <h3>Ciudad: <span id="ciudad">${nombreCiudad.join(" ")}</span></h3>
    <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs ? "Si" : "No"}</span></h3>
  `;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

