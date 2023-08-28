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

    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            objetoInformacion.hobbies.push(hobbies[i].id);
        }
    };

    for (let i = 0; i < nacionalidad.length; i++) {
        if (nacionalidad[i].checked) {
            objetoInformacion.nacionalidad = nacionalidad[i].id;
            break; // Si solo se puede seleccionar una nacionalidad, podemos detener el ciclo después de encontrar una seleccionada
        }
    }
    
    return objetoInformacion
    console.log(objetoInformacion);
    console.log(objetoInformacion.hobbies);
}
capturarDatosFormulario();

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

})




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
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
