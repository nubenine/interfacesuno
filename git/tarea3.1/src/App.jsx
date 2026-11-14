import { useState } from 'react';
import BarraBusca from './BarraBusca.jsx';
import ListaProductos from './ListaProductos.jsx';

const PRODUCTOS = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];

export default function App() {

  const [textoBusca, setTextoBusca] = useState('');

  const productosFiltrados = PRODUCTOS.filter((producto) =>
    producto.toLowerCase().includes(textoBusca.toLowerCase())
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