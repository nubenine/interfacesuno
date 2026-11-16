
export default function ListaProductos({ products }) {
    return (
        <div>
            {products.length > 0 ? (
                <ul>
                    {products.map((producto, id) => (
                        <li key={id}>
                            {producto.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Non se atoparon resultados.</p>
            )}
        </div>
    );
}

