//################################################################################
// Un sistema de lector óptico de tarjetas de socio lee los nombres con las mayúsculas
// y minúsculas invertidas. Realiza un programa que lea la cadena y convierta las
// mayúsculas a minúsculas y las minúsculas a mayúsculas.
//################################################################################
// Escribe tu código aquí

let nombre = prompt("Introduce el nombre de un socio: ")
const regexMayus = /^[A-Z]+$/
for (let i = 0; i < nombre.length; i++) {
    if(regexMayus.test(nombre[i])){
        nombre[i].toLowerCase()
    } else {
        nombre[i].toUpperCase()
    }
}
console.log(`${nombre}`)