//################################################################################
// El módulo de subida de archivos de ReservaYa debe comprobar el tipo de documento
// adjuntado por el usuario (justificantes de pago, normas, etc.).
// Dada la extensión del archivo (reconocida tanto en mayúsculas como en minúsculas):
//  * txt -> "Archivo de texto"
//  * exe -> "Archivo ejecutable"
//  * pdf -> "Archivo PDF"
// Si no tiene extensión o es otra, mostrará "Archivo de tipo desconocido".
//################################################################################
// Escribe tu código aquí


const extension = prompt("Introduce el nombre del archivo: ").split(".")

switch (extension[1].toLowerCase()){
    case "txt":
        console.log("Archivo de texto")
	//... continuar asi
}