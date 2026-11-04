import './App.css'
import{ useState } from "react"
import Button from './Button.jsx'
import { sculptureList } from './data.jsx'


export default function Galeria(){
    
    const [index, setIndex] = useState(0)
    const [boolean, setBoolean] = useState(false)
    function onSeguinteClick(){
        if (index < sculptureList.length -1 ){
            setIndex(index+1)
        } else {
            setIndex(0)
        }
        console.log(index)
    }
    let escultura = sculptureList[index]
    function onDetalles(){
        if(!boolean){
            setBoolean(true)
        } else {
            setBoolean(false)
        }
    }
    function MostrarDetalles(){
        return (
            <>
                <p>{escultura.description}</p>
                <img src={escultura.url} alt={escultura.alt} style={{width: '120px', height: '120px'}} />
            </>
        )
    }
    
    return(
        <>
             <Button onClick={onSeguinteClick}>Seguinte</Button>
             <h2>{escultura.name}</h2>
             <Button onClick={onDetalles}>Amosar detalles</Button>
             <div>
                {boolean ? 
                    <MostrarDetalles/> : <img src={escultura.url} alt={escultura.alt} style={{width: '120px', height: '120px'}} />
                }
                {console.log(boolean)}
             </div>
             
             
             <p>imaxe {index +1} de {sculptureList.length}</p>
          </>
        
    )
}

