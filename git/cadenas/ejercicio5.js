//################################################################################
// Un usuario introduce su nombre y dos apellidos para el registro de ReservaYa.
// Crea un programa que extraiga e imprima las iniciales en mayúsculas para generar
// su avatar de perfil.
//################################################################################
// Escribe tu código aquí

let nombre = prompt("Introduce to nombre: ")
let ape1 = prompt("Introduce tu primer apellido: ")
let ape2 = prompt("Introduce tu segundo apellido: ")

console.log(`Iniciales: ${nombre.charAt(0).toUpperCase()}${ape1.charAt(0).toUpperCase()}${ape2.charAt(0).toUpperCase()}`)