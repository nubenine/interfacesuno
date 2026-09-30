//################################################################################
// El sistema de códigos promocionales de ReservaYa necesita sustituir un carácter
// obsoleto por uno nuevo dentro del código de cupón.
// Pide el código y dos caracteres alfabéticos (valida que sean letras únicas) y
// reemplaza todas las apariciones del primer carácter por el segundo.
//################################################################################
// Escribe tu código aquí


let codigo = prompt("Dime un codigo promocional: ")
let c1 = prompt("Dime un solo caracter alfabetico: ")
let c2 = prompt("Dime otro solo caracter alfabetico (que no sea igual al primero): ")
do {
    c2 = prompt("Dime otro solo caracter alfabetico (que no sea igual al primero): ")
    if (c2.toLowerCase()==c1.toLowerCase()){
        console.log(`Error, los caracteres no pueden ser iguales`)
    }
}while (c2.toLowerCase()==c1.toLowerCase())
codigo = codigo.replaceAll(c1,c2)
console.log(`Codigo modificado: ${codigo}`)



