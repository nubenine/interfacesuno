//################################################################################
// Para generar un token codificado de confirmación de pista, el sistema toma el
// nombre de la pista y genera una nueva cadena invirtiendo todos sus caracteres.
//################################################################################
// Escribe tu código aquí

let nombrePista = prompt("Introduce el nombre de la pista: ")
let codigo = ""

for (let i = nombrePista.length; i >= 0; i--) {
    if(nombrePista[i]!=undefined){
        codigo+=nombrePista[i]
    }
}

console.log(`Token codificado: ${codigo}`)