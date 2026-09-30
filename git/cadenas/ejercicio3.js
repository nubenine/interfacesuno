//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí

let codigo = prompt("Introduce el codigo de seguridad de una taquilla")
let caracter = prompt("Introduce un caracter alfabetico")
let apariciones = 0

for (const c in codigo) {
    if (caracter.toLowerCase()===codigo.charAt(c).toLowerCase()){
		apariciones++
    } 
}

console.log(`Cantidad de apariciones de la letra ${caracter} en el codigo: ${apariciones}`)