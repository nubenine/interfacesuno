//################################################################################
// ReservaYa audita las solicitudes de cancelación de reservas.
// Se pide por teclado la cantidad de solicitudes a revisar.
// El programa debe informar de cuántos balances son positivos (cobro de penalización),
// cuántos son negativos (devolución al cliente) y cuántos son iguales a 0 (cancelación neutra).
//################################################################################
// Escribe tu código aquí


let cantidad = parseInt(prompt("Dime la cantidad de solicitudes a revisar"))
let balances = new Array(cantidad)
let positivos = 0
let negativos = 0
let cero = 0

for (let i = 0; i < cantidad; i++) {
    let balance = parseInt(prompt("Dime un balance (positivo, negativo o cero)"))
    balances.push(balance)
 	if (balance>0){
        positivos++
    } else if(balance<0){
        negativos++
    } else {
        cero++
    }
}

console.log(`Balances positivos ${positivos}`)
console.log(`Balances negativos: ${negativos}`)
console.log(`Balances iguales a cero: ${cero}`)