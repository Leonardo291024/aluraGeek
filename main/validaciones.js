//const inputNcimiento = document.querySelector("#birth");

export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").inerrHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").inerrHTML = mostrarMensjeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
     'customError'
]

const mensajesError = {
     nombre: {
        valueMissing: "Este campo nombre no puede estar vacio"
     },

     nacimiento: {
        valueMissing: "Este campo nacimiento no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
     },

     email: {
        valueMissing: "Este campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
     }, 

     password: {
        valueMissing: "Este campo contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12 caracteres debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales"
     }
}

const validadores = {
    nacimiento: input => validarNcimiento(input)
}

/*inputNcimiento.addEventListener("blur", (evento) =>{
    validarNcimiento(evento.target);
});*/

function mostrarMensjeError(tipoDeInput, input){
    let mensje = ""
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error)
            console.log(error)
            console.log(input.validity[error])
            console.log(mensajesError[tipoDeInput][error])
            mensje = mensajesError[tipoDeInput][error]
        }
    })

    return mensje
}

function validarNcimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    }
    

   input.setCustomValidity(mensaje);
}

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}
