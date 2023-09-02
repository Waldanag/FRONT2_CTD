/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    // Establecemos un objeto vacío para después rellenarlo
    const objetoInformacion = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: "",
    }

    // Capturar todos los nodos
    // Fieldset de datos
    const nom = document.querySelector("#nom");
    const pass = document.querySelector("#pass");
    const tel = document.querySelector("#tel");
    // Fieldset de listado-hobbies
    const hobbies = document.querySelector("[name=hobbies]");
    // Fieldset de listado-nacionalidad
    const nacionalidad = document.querySelector("[name=nacionalidad]");

    // Rellenar el objeto informacion con la info correspondiente
    // Form de datos
    objetoInformacion.nombre = nom.value;
    objetoInformacion.password = pass.value;
    objetoInformacion.telefono = tel.value;

    /*for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            objetoInformacion.hobbies.push(hobbies[i].id);
        }
    };

    for (let i = 0; i < nacionalidad.length; i++) {
        if (nacionalidad[i].checked) {
            objetoInformacion.nacionalidad = nacionalidad[i].id;
            break; // Si solo se puede seleccionar una nacionalidad, podemos detener el ciclo después de encontrar una seleccionada
        }
    }*/
    // Recorrer el la lista de checkbox para selecionar los que tengan la propiedad checked en true
    hobbies.forEach(function (hobbie) {
        if (hobbie.checked) {
            // Cada hobbie seleccionado lo sumamos al listado de hobbies
            objetoInformacion.hobbies.push(hobbie.id)
        }
    })

    // Recorrer el la lista de radio button este selecciona siun elemento
    nacionalidad.forEach(function (nacion) {
        if (nacion.checked) {
            // Cada hobbie seleccionado lo sumamos al listado de hobbies
            objetoInformacion.nacionalidad = nacion.id
        }
    })

    
    return objetoInformacion
}

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const form = document.querySelector("form");

form.addEventListener("submit", ev => {
    // Prevenir el comportamiento por defecto del HTML
    ev.preventDefault();
    // Funcion para captura de los datos
    const datos = capturarDatosFormulario();
    console.log(datos);

    // Almacenamos los errores
    const errores = validarInformacion(datos);
    console.log("Errores " + errores);

    // Renderizar un span de errores
    renderizarErrores(errores);

    // Renderizar un span de exito

})


/* -------------------------------------------------------------------------- */
/*                       [3] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    const cajaErrores = document.querySelector("#errores");

    // Si ya existe la caja de errores, debemos eliminar la caja del DOM
    if (cajaErrores) {
        cajaErrores.remove();
    }

    if (listado.length > 0) {
        const divTemplate = document.createElement("div");
        divTemplate.setAttribute("id", "errores");
        divTemplate.style = "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: red;margin: .5em 0;";
        listado.forEach(error => {
            divTemplate.innerHTML += `<p><spam>${error}</spam></p>`;
        });
        form.appendChild(divTemplate);
    }
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [4] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    // 👇 desarrollar aqui la funcion

    return errores;
}
