const { act } = require("react");

const avenger = {
    nome: 'Steve',
    clave: 'Capitan america',
    poder: 'Dogra'
};

console.log(avenger.nome)
console.log(avenger.clave)
console.log(avenger.poder)

let {nombre, clave, poder}

console.log(avenger.nome)
console.log(avenger.clave)
console.log(avenger.poder)

const extraer = (avenger) => {
    let {nombre, clave, poder} = avenger
}

extraer(avenger)

const extraer2 = ({nome, clave, poder}) => {
    console.log(nome)
    console.log(clave)
}

//extraer2(avenger)

const avengers = ['Thor', 'Ironman', 'Spiderman']
//console.log(avengers[0])
//console.log(avengers[1])
//console.log(avengers[2])

const [thor, ironman, Spiderman] = avengers
console.log(thor)
console.log(ironman)
console.log(Spiderman)

const [,, spidi] = avengers
console.log(spidi)

const extraerArray = ([t, i, s]) =>  {
    console.log(t)
    console.log(i)
    console.log(s)
}

extraerArray(avengers)

function activar(quien, objeto) {
    console.log(`${quien} activou o sinal ${objeto}`)
}

activar("Gordon", "alarma")
activar("Gordon")