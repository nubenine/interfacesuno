//################################################################################
// El departamento de seguridad exige validar los límites de aforo autorizados.
// Pide el límite inferior y superior del aforo (si el inferior es mayor, vuelve a pedirlo).
// A continuación introduce el número de espectadores de cada partido hasta pulsar 0.
// El programa informará de:
//  * La suma total de espectadores dentro del intervalo abierto.
//  * Cuántos partidos quedaron fuera del rango.
//  * Si algún partido registró exactamente el aforo de los límites.
//################################################################################
// Escribe tu código aquí

let total = 0
let outOfRange = 0
let exacto = 0

let inf = parseInt(prompt("Dime el limite inferior del aforo: "))
do{
	let sup = parseInt(prompt("Dime el limite superior del aforo: "))
    if (sup<inf){
        console.log(`Cantidad invalida, introduce un limite superior menor al inferior`)
    }
} while (sup< inf)

do {
	let espectadores = parseInt(prompt("Introduce el numero de espectadores de un partido: "))
    if (espectadores!=0){
        if (espectadores>sup||espectadores<inf){
            outOfRange++
        } else if (espectadores===sup){
            exacto++
            total+=espectadores
        } else if (espectadores<sup&&espectadores>inf){
            total+=espectadores
        }
    }

}while (espectadores != 0)

console.log(`Espectadores totales dentro del intervalo: ${total}`)
console.log(`Partidos que quedaron fuera del rango: ${outOfRange}`)
console.log(`Partidos que registraron exactamente los limites de aforo: ${exacto}`)

