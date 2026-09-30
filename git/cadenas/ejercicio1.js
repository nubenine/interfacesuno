//################################################################################
// El terminal de control del marcador electrónico de una pista necesita procesar
// el código identificador de una reserva escribiendo en consola cada carácter
// en una línea independiente mediante un bucle for.
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Dime el codigo identificador")
console.log(`procesando...`)

for (const c in codigo) {
    console.log(`${codigo[c]}`)
}