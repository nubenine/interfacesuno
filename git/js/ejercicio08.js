//################################################################################
// La tarifa de penalización por cancelación en ReservaYa se calcula con un
// multiplicador progresivo B (base real) elevado a E (exponente entero positivo) tramos.
// Pide por teclado la base B y el exponente E y calcula el resultado mediante un
// bucle (sin utilizar el operador ** ni Math.pow).
//################################################################################
// Escribe tu código aquí

let b = parseInt(prompt("Dime una base: "))
let e = parseInt(prompt("Dime un exponente: "))
let resultado = 1

for (let i = 0; i < e; i++) {
    resultado *= b
}

console.log(`Resultado: ${resultado}`)