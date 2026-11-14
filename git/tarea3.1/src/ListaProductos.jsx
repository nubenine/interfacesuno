
export default function ListaProductos({ productos }) {
    return (
        <div>
            {productos.length > 0 ? (
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index}>
                            {producto}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Non se atoparon resultados.</p>
            )}
        </div>
    );
}

