//################################################################################
// El equipo de mantenimiento debe pasar la máquina cepilladora solo por las pistas
// con número par ubicadas entre dos delimitadores introducidos por el usuario.
// Pide los dos números de pista e imprime todos los números pares del intervalo.
//################################################################################
// Escribe tu código aquí

let n1 = parseInt(prompt("Dime el numero con el que empieza un intervalo: "))
let n2 = parseInt(prompt("Dime el numero con el que acaba el intervalo: "))

for (let i = n1; i <= n2; i++) {
    if (i % 2 == 0){
        console.log(`Pista ${i}`)
    }
}