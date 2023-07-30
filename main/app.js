import {valida} from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

textAreas.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        valida(input.target)
    })
})

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        valida(input.target)
    })
})