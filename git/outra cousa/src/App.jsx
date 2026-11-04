
import './App.css'
import Toolbar from './Toolbar'
import Galeria from './Galeria'
import Button from './Button'


export default function Html(){

	return (
		<>
			<Toolbar onPelicula={() => alert("Reproducindo!")} onImaxe={() => alert("sicseben")}></Toolbar>
			<Galeria></Galeria>
		</>
		
	)
}