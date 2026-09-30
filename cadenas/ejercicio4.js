//################################################################################
// Un cliente introduce las observaciones o requisitos especiales para su reserva en una frase.
// Realiza un programa que cuente e imprima cuántas palabras contiene dicha frase.
//################################################################################
// Escribe tu código aquí


let frase = prompt("Introduce una frase: ")
let palabras = frase.split(" ")
let contadorPalabras = 0
for (let i = 0; i < palabras.length; i++) {
    palabras[i].replaceAll(" ","")
    if (palabras[i]!=""&&palabras[i]!=null){
        contadorPalabras++
    }
}
console.log(`La frase tiene ${contadorPalabras} palabra/s`)