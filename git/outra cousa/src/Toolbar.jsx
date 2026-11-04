import Button from "./Button"

export default function Toolbar({onPelicula, onImaxe}){
 return (
    <div>
        <Button onClick={onPelicula}>
            Reproducir Película
        </Button>
        <Button onClick={onImaxe}>
            Cargar Imaxe
        </Button>

    </div>
 )
}