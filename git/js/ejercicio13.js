//################################################################################
// El recepcionista introduce los cobros en metálico de la jornada en el TPV de ReservaYa.
// El programa pide importes en euros hasta que se introduce un 0.
// Al terminar, debe imprimir la recaudación total y el ticket medio por cobro.
//################################################################################
// Escribe tu código aquí

let cobrosTotale = 0
let mediaCobros = 0
let numeroCobros = 0
let cobro = parseInt(prompt("Dime un cobro en metalico de la jornada en euros: "))

do{
	cobrosTotale += cobro
    numeroCobros++
	cobro = parseInt(prompt("Dime un cobro en metalico de la jornada en euros (0 para salir): "))
}while(cobro!=0)

mediaCobros = Math.round(cobrosTotale / numeroCobros)

console.log(`Recaudacion total: ${cobrosTotale}`)
console.log(`Media de cobros: ${mediaCobros}`)