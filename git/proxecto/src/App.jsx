//perfil (funcions en maiusculas) 
// function chearBotons(ou){
// 	const botons = []
// 	for (let i = 0; i < 3; i++){
// 		botons.push(<button className="square">{ou}</button>)
// 		ou++
// 	}
	
// 	return botons
// }
// export default function Perfil(){
// 	let ou = 1
// 	return (
// 		<>
// 	<img src="/foto.jpg"/>
//     <div className="board-row">
// 		{chearBotons(ou)}
//     </div>
//     <div className="board-row">    
//         {chearBotons(ou+=3)}
//     </div>
//     <div className="board-row">
//         {chearBotons(ou+=3)}
//     </div>        

// 		</>
// 	);
//}

import Traduccion from "./traduccion";
import './reserva.css'
export default function Traducir(){
	return Traduccion()
}