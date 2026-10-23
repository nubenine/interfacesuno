

function CrearInstalacion(nombre,img,emoji,descripcion,precio,dataInstalacion){
    var instalacion = {
    	nombre: nombre,
    	img: img,
        emoji: emoji,
    	descripcion: descripcion,
		precio: precio,
    	dataInstalacion: dataInstalacion
	}
    return instalacion
}



export default function Traduccion(){
    const pavillon = CrearInstalacion("Pavillón Municipal", "/foto.jpg", "🏟️", "Espazo deportivo cuberto para fútbol sala, baloncesto e outras actividades.",
		5.00, "pabellon")
    return (
		<>
        	<article className="instalacion">

                {/* <img src="https://picsum.photos/seed/pabellon-vila-verde/800/450" alt="Pavillón Municipal"/> */}
                <img src={pavillon.img}/>

                <div className="instalacion-contenido">

                    <div className="tarjeta-icono">

                        {pavillon.emoji}

                    </div>

                    <h3>
                        {pavillon.nombre}
                    </h3>

                    <p>
                        {pavillon.descripcion}
                    </p>

                    <div className="precio-destacado">

                        <strong>
                            {pavillon.precio} €
                        </strong>

                        <span>
                            por persoa / hora
                        </span>

                    </div>

                    <button className="
                            boton-verde
                            boton-reservar
                        " data-instalacion={pavillon.dataInstalacion}>

                        Reservar

                    </button>

                </div>

            </article>
        </>
    );
}