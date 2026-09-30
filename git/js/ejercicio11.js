//################################################################################
// ¡Promoción ReservaYa! Si adivinas el número de la Pista Mágica (del 1 al 100)
// obtienes una reserva gratuita. Tienes un máximo de 10 intentos.
// Tras cada intento, el sistema te indicará si el número buscado es mayor o menor.
// El programa termina cuando acertaste o al agotar los 10 intentos.
//################################################################################
// Escribe tu código aquí

let pistaMagica = Math.floor(Math.random()*100)+1
let intentos = 10
let acertado = false

do{
	let chance = parseInt(prompt("Dime un numero del uno al cien"))
    if(chance!=pistaMagica){
        if (chance>pistaMagica){
            console.log(`El numero que has puesto es mayor al que estoy pensando`)
        } else if (chance<pistaMagica){
            console.log(`El numero que has puesto es menor al que estoy pensando`)
        }
        intentos--
        console.log(`Intentos restantes: ${intentos}`)
    } else if (chance===pistaMagica){
        console.log(`Has acertado!`)
        acertado = true
    }
}while (intentos>0&&!acertado)