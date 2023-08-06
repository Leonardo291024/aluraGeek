import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const contrasena = document.querySelector('[data-pasword]').value;

    console.log(nombre, " ", email, " ", contrasena);

    clientServices.crearCliente(nombre, email).then(() =>{
        alert("REGISTRO COMPLETADO");
        window.location.href = './nuevoProducto.html';
    }).catch((err) => console.log(err));
});