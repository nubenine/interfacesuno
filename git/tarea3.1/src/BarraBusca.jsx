
export default function BarraBusca({ textoBusca, setTextoBusca }) {
    return (
        <input
            type="text"
            placeholder="Buscar productos..."
            value={textoBusca}
            onChange={(e) => setTextoBusca(e.target.value)}
        />
    );
}

