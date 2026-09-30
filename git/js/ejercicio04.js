//################################################################################
// Tienes un array con los importes recaudados por cada reserva durante una jornada:
// const ingresos = [15, 20, 15, 30, 25, 15, 40];
// Utiliza un bucle para calcular la recaudación total del día y la media de ingresos.
//################################################################################
// Escribe tu código aquí


const ingresos = [15, 20, 15, 30, 25, 15, 40];

let total = 0
let media = 0
let numIngresos = 0

for (const ingreso of ingresos) {
	
    total += ingreso
    numIngresos++

}

media = (total / numIngresos).toFixed(2)

console.log(`Los ingress totales del dia son: ${total}`)
console.log(`La media de los ingresos es: ${media}`)