import { useState } from 'react';
import BarraBusca from './BarraBusca.jsx';
import ListaProductos from './ListaProductos.jsx';
import { products } from './productos.jsx';



export default function App() {

  const [textoBusca, setTextoBusca] = useState('');

  let productosFiltrados = []
  productosFiltrados = products.filter((producto) =>
    producto.details.specifications.color.toLowerCase().includes(textoBusca)||producto.details.specifications.connection.toLowerCase().includes(textoBusca)
  );

  return (
      <div className="app">
          <h1>Buscador de productos</h1>

          <BarraBusca textoBusca={textoBusca} setTextoBusca={setTextoBusca}/>

          {productosFiltrados.length > 0 ? (<ListaProductos productos={productosFiltrados} />) : (
              <p>
                  Non se atoparon resultados para: {textoBusca}
              </p>
          )}
      </div>
  );
}