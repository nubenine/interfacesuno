
export default function Pavillon({instalacion}){
    return (
		<>
        	<article className="instalacion">

                {/* <img src="https://picsum.photos/seed/pabellon-vila-verde/800/450" alt="Pavillón Municipal"/> */}
                <img src={instalacion.img} />

                <div className="instalacion-contenido">

                    <div className="tarjeta-icono">

                        {instalacion.emoji}

                    </div>

                    <h3>
                        {instalacion.nombre}
                    </h3>

                    <p>
                        {instalacion.descripcion}
                    </p>

                    <div className="precio-destacado">

                        <strong>
                            {instalacion.precio} €
                        </strong>

                        <span>
                            por persoa / hora
                        </span>

                    </div>

                    <button className={instalacion.disponibilidad ? "boton-verde" : "boton-gris"} data-instalacion={instalacion.dataInstalacion}>

                        {instalacion.disponibilidad ? "Reservar" : "No disponible"}

                    </button>

                </div>

            </article>
        </>
    );
}