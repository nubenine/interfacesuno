
import Pavillon from "./pavillon.jsx";
import './reserva.css'
function CrearInstalacion(nombre,img,emoji,descripcion,precio,dataInstalacion, disponibilidad){
    var instalacion = {
    	nombre: nombre,
    	img: img,
        emoji: emoji,
    	descripcion: descripcion,
		precio: precio,
    	dataInstalacion: dataInstalacion,
		disponibilidad: disponibilidad
	}
    return instalacion
}
const instalacion = {
    	nombre: "a",
    	img: "foto.jpg",
        emoji: "🏟️",
    	descripcion: "s",
		precio: 12,
    	dataInstalacion: "aai",
		disponibilidad: false
}
const pavillon = CrearInstalacion("Pavillón Municipal", "foto.jpg", "🏟️", "Espazo deportivo cuberto para fútbol sala, baloncesto e outras actividades.",
		5.00, "pabellon", true)
let pistas = [instalacion,pavillon,pavillon,pavillon]
let tarjetas = []

export default function Html(){
	let key = 1
	return (
		pistas.map(pista => (
			<div key={key +=1}>
				<Pavillon instalacion={pista} ></Pavillon>
			</div>
		))
	)
}