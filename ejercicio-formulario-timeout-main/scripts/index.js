// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"
// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
- Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
en internet frases como "Validar email con Javascript o similar".

- Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
estilos predefinidos para ayudarte a completar la actividad.

- También te dejamos algunos mensajes que te pueden ser de utilidad:

Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>
Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";
¡Manos a la obra!
*/
const emailUsuario = document.getElementById("email-input");
const passUsuario = document.getElementById("password-input");
const form = document.querySelector("form");
const cajaErrores = document.getElementById("error-container");
const mensajeSesion = document.getElementById("loader");
const mensajeInicial = document.querySelector("h1");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  iniciarSesion();
});

function iniciarSesion() {
  const errores = validarInfoForm();
  if (errores === "") {
    mensajeSesion.classList.remove("hidden");
    setTimeout(()=>{
      form.remove();
      mensajeInicial.innerHTML = "<h1> Bienvenido al sitio 😀 </h1>";
    }, 3000)
  } else {
    renderizarMensaje(errores);
  }
}

function validarInfoForm() {
  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const isValidEmail = emailRegex.test(emailUsuario.value);

  let errores = "";

  if (!isValidEmail) {
    errores += "El email ingresado no es válido. ";
  }
  const usuarioRegistrado = baseDeDatos.usuarios.find(user => user.email === emailUsuario.value && user.password === passUsuario.value);
  if (!usuarioRegistrado) {
    errores += "Los datos ingresados no corresponden a un usuario registrado. ";
  }
  return errores.trim();
}

function renderizarMensaje(texto) {
  cajaErrores.innerHTML = `<small>${texto}</small>`;
  cajaErrores.classList.remove("hidden");
}