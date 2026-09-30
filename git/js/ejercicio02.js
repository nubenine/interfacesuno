//################################################################################
// Simula el proceso de verificación de pago de una reserva. Mediante un bucle while,
// simula una petición en la que se comprueba el estado de la reserva.
// El bucle debe continuar pidiendo confirmación hasta que el estado cambie a "confirmada".
//################################################################################
// Escribe tu código aquí

let confirmacion = false 

do{

	let reserva = parseInt(prompt("Esta todo correcto e queres confirmar a reserva? 0 para non/ 1 para si"))
    if (reserva===1){
        confirmacion=true
        console.log("Reserva confirmada")
    } else {
        console.log("Reserva non condirmada")
    }

}while (!confirmacion)

