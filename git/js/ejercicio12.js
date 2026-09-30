//################################################################################
// El sistema de taquillas automáticas de ReservaYa necesita generar N códigos
// de acceso seguros. Un código seguro es aquel número que solo se puede dividir
// exactamente por 1 y por sí mismo (números primos).
// Solicita al usuario por teclado cuántos códigos de taquilla desea mostrar.
//################################################################################
// Escribe tu código aquí


let n = parseInt(prompt("Dime un numero: "))
let numeroCodigos = 1
let codigos = ""
console.log(`Codigos de taquilla seguros: `)
for (let i = 2; numeroCodigos < n; i++) {
    let esPrimo = true
    if(i===2){
        codigos+=`${i} `
    } else {
        for (let j = 2; j < i; j++) {
        	if(i % j === 0){
                esPrimo = false
            }
    	}
        if (esPrimo){
			codigos+=`- ${i} `
            numeroCodigos++
        }
    }
}
console.log(codigos)