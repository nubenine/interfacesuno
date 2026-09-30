//################################################################################
// El sistema de megafonía clasifica las pistas por la letra de su sector.
// Si la letra es una vocal (A, E, I, O, U) imprime 'PABELLÓN CUBIERTO',
// en caso contrario imprime 'PISTAS EXTERIORES'. El programa termina al introducir un espacio.
//################################################################################
// Escribe tu código aquí

const regexComercial = /^[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]+$/
let pista

do{
    pista = prompt("Introduce el nombre de una pista (espacio para terminar)")
    if (pista != " "){
        if (regexComercial.test(pista.charAt(0))){
        	console.log(`PABELLÓN CUBIERTO`)
    	} else {
        	console.log(`PISTAS EXTERIORES`)
    	}
    } else {
        console.log(`Acabouse`)
    }
    
}while (pista!=" ")