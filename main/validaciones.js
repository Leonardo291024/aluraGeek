//const inputNcimiento = document.querySelector("#birth");

const bntEnviarMensaje = document.getElementById('btnMensaje');

bntEnviarMensaje.addEventListener('click', enviarMensaje);


export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensjeError(tipoDeInput, input);
    }

   
}

function enviarMensaje(){

    let name = document.getElementById('name').value;
    let msj = document.getElementById('mensaje').value.trim();

    if(name === "" || msj === ""){
       alert("Debes llenar los campos")
    }else{
       alert("Mensaje enviado")
    }

    document.getElementById('name').value = ""
    document.getElementById('mensaje').value = ""
    
  
   
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
     "customError",
]

const mensajesError = {
     nombre: {
        valueMissing: "Este campo no puede estar vacio"
     },

     email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
     },

     password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12 caracteres debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales"
     }
}

const validadores = {
    nacimiento: (input) => validarInput(input)
}

/*inputNcimiento.addEventListener("blur", (evento) =>{
    validarNcimiento(evento.target);
});*/

function mostrarMensjeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesError[tipoDeInput][error]);
            mensaje = mensajesError[tipoDeInput][error];
        }
    });
    return mensaje;
}



/*function validarNcimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){
        mensaje = ""
    }
    

   input.setCustomValidity(mensaje);
}

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}*/
