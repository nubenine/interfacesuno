//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################


//farenheit = (temp * 1.8) + 32
// Fórmula: Math.random() * (max - min) + min

/*
let temperaturas = []
let temperatura
let farenheit
while (temperaturas.length<7){
    temperatura = Math.random() * (35 - (-5)) + (-5)
   	temperaturas.push(Math.round(temperatura))
}

for (let i = 0; i < temperaturas.length; i++) {
    farenheit = (temperaturas[i] * 1.8) + 32
    
    if (temperaturas[i] >=28){
        console.log(`${temperaturas[i]}ºC en farenheit: ${farenheit} (fai calor)`)
    } else if (temperaturas[i] <28&&temperaturas[i] >10){
        console.log(`${temperaturas[i]}ºC en farenheit: ${farenheit} (estase ben che)`)
    } else if(temperaturas[i] <= 10){
        console.log(`${temperaturas[i]}ºC en farenheit: ${farenheit} (brrrr que frio fai leñe)`)
    }    
}
*/

//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################

/*
let cadenas = []

while (cadenas.length<1) {
    cadenas.push(prompt("Introduce una palabra o una frase"))
}

let cadenasInvertidas = cadenas.map(cadena => {
	return cadena.split("").reverse().join("")
})

console.log(cadenas)
console.log(cadenasInvertidas)
*/


//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################
/*
let notas = []
let total = 0
let media
let contNotas = 0
let aprobadas = 0

while (notas.length<1){
    notas.push(parseInt(prompt("Introduce una nota del 0-10")))
    total += notas[contNotas]
    contNotas++
    if (notas[contNotas]>=5){
        aprobadas++
    }
}

media = total / contNotas
console.log(`Media total: ${media}`)
console.log(`Notas aprobadas: ${aprobadas}`)
console.log(`Nota mas alta: ${Math.max(...notas)}`)
console.log(`Nota mas baja: ${Math.min(...notas)}`)

*/


//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################

/*

function checknull(numero) {
    return isNaN()
}
const vector = new Array(7)
let numero, suma = 0
while (vector.every(checknull)&&numero!=0) {
    numero = parseInt(prompt("Introduce un numero: "))
    if (numero!=0) {
        vector.push(numero)
        suma += numero
    }
}
for (let i = 0; i < vector.length; i++) {
    if (vector[i]!=null){
        console.log(vector[i])
    }
}
console.log(`Suma total: ${suma}`)

*/

//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################

let numeros = Array.from({length:7}, () => Math.floor(Math.random() * 51))
let suma = 0, media
numeros.sort((a, b) => a - b)
numeros.forEach(numero => {
	suma += numero
    console.log(numero)
})
media = (suma / numeros.length).toFixed(4)
console.log(`Media total: ${media}`)


//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semana
// o día laborable, usando un vector.
//################################################################################



//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################



//################################################################################
// EJERCICIO H
// Matriz 4x4 con valores aleatorios (1-9). Calcular la suma de la diagonal
// principal y de la diagonal secundaria.
//################################################################################
