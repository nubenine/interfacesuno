//################################################################################
// Diseña un panel de gestión para el recepcionista de ReservaYa.
// Muestra un menú por pantalla que se repita mientras el usuario no elija salir:
// 1. Ver estado de pistas
// 2. Crear nueva reserva
// 3. Cancelar reserva
// 4. Salir
//################################################################################
// Escribe tu código aquí

const menu = `
Elige una opcion: 
1. Ver estado de pistas
2. Crear nueva reserva
3. Cancelar reserva
4. Salir
`
let opcion = 0


do{
    opcion = parseInt(prompt(menu))
}while (opcion!=4)

console.log("Acabouse")