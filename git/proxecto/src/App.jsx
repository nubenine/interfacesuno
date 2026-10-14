//perfil

const nombre = "Nate Higgers"
const foto = "/foto.jpg"
const edad = 19
const pais = "España"

export default function Perfil(){
	return (
		<>
			
			<h1>{nombre}</h1>
			<img src={foto} alt={nombre + ", " + edad + " años"}  width={100} style={{alignSelf:'center', position:'relative'}}/>
			<p className="edad">Edad: {edad}</p>
			<p className="pais">Pais: {pais}</p>
			<p>Experiencia laboral: </p>
			<ul className="experienciaLaboral">
				<li></li>
			</ul>
		
		
		
		
		
		
		
		
		
		
		
		
		
		</>
	);
}