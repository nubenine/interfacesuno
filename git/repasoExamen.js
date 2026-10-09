
// ================================================================================
//                     EJERCICIOS DE PRACTICA - 2º DAM
//                          JAVASCRIPT / INTERFACES
// ================================================================================

// CONCEPTOS A PRACTICAR:
// - Funciones flecha
// - map()
// - filter()
// - sort()
// - reduce()
// - Desestructuracion de objetos
// - Desestructuracion de arrays
// - Spread Operator (...)
// - No modificar arrays ni objetos originales


// ================================================================================
// EJERCICIO 1 - GESTOR DE VIDEOJUEGOS
// ================================================================================

// const videojuegos = [
//   { id: 1, titulo: 'Elden Ring', precio: 60, genero: 'RPG', stock: 5 },
//   { id: 2, titulo: 'FIFA 26', precio: 70, genero: 'Deportes', stock: 0 },
//   { id: 3, titulo: 'Minecraft', precio: 30, genero: 'Sandbox', stock: 12 },
//   { id: 4, titulo: 'Cyberpunk 2077', precio: 50, genero: 'RPG', stock: 3 }
// ];


// 1. APLICAR DESCUENTO

// Crea una funcion flecha `aplicarDescuentoRPG` que reciba un array de videojuegos.

// Usa `.map()` para devolver un NUEVO array donde los videojuegos del genero
// 'RPG' tengan un descuento del 20%.

// Utiliza `...` para evitar modificar los objetos originales.


// 2. GENERAR INFORMACION

// Crea una funcion flecha `generarInformacion` que reciba un array.

// Usa `.map()` y desestructuracion de objetos para obtener `titulo` y `precio`.

// Debe devolver un array de textos con este formato:

// "Elden Ring cuesta 60€"


// 3. OBTENER DISPONIBLES

// Crea `obtenerDisponibles`.

// Utiliza `.filter()` y desestructuracion para obtener unicamente los
// videojuegos cuyo `stock` sea mayor que 0.


// 4. ORDENAR POR PRECIO

// Crea `ordenarPorPrecio`.

// Debe devolver una copia del array ordenada de mayor a menor precio.

// El array original NO puede modificarse.


// 5. VALOR DEL INVENTARIO

// Crea `calcularValorInventario`.

// Utiliza `.reduce()` para calcular:

// precio * stock

// de todos los videojuegos.



// ================================================================================
// EJERCICIO 2 - PEDIDOS DE UNA PIZZERIA
// ================================================================================

// const pedidos = [
//   { id: 1, cliente: 'Ana', producto: 'Pizza Carbonara', precio: 12, cantidad: 2 },
//   { id: 2, cliente: 'Luis', producto: 'Pizza Barbacoa', precio: 14, cantidad: 1 },
//   { id: 3, cliente: 'Marta', producto: 'Pizza 4 Quesos', precio: 13, cantidad: 3 },
//   { id: 4, cliente: 'Pedro', producto: 'Pizza Margarita', precio: 10, cantidad: 1 }
// ];


// 1. CREAR RESUMEN DE PEDIDOS

// Crea `generarResumenPedidos`.

// Utiliza `.map()` y desestructuracion para obtener:

// - cliente
// - producto
// - cantidad

// Debe devolver un array de textos como:

// "Ana ha pedido 2 Pizza Carbonara"


// 2. CALCULAR PRECIO DE CADA PEDIDO

// Crea `calcularTotalPedidos`.

// Debe utilizar `.map()` para devolver nuevos objetos añadiendo una propiedad:

// total

// El total sera:

// precio * cantidad

// No debes modificar los objetos originales.


// 3. FILTRAR PEDIDOS GRANDES

// Crea `pedidosGrandes`.

// Utiliza `.filter()` para obtener unicamente los pedidos cuya cantidad sea
// mayor o igual que 2.

// Desestructura `cantidad` directamente en los parametros.


// 4. ORDENAR PEDIDOS

// Crea una funcion que devuelva una copia de los pedidos ordenada por cantidad,
// de mayor a menor.

// El array original no debe modificarse.


// 5. FACTURACION

// Utiliza `.reduce()` para calcular cuanto dinero se obtiene con todos los pedidos.



// ================================================================================
// EJERCICIO 3 - PLATAFORMA DE PELICULAS
// ================================================================================

// const peliculas = [
//   { titulo: 'Interstellar', año: 2014, puntuacion: 9, genero: 'Ciencia Ficcion' },
//   { titulo: 'Shrek', año: 2001, puntuacion: 8, genero: 'Animacion' },
//   { titulo: 'Matrix', año: 1999, puntuacion: 9, genero: 'Ciencia Ficcion' },
//   { titulo: 'Barbie', año: 2023, puntuacion: 7, genero: 'Comedia' }
// ];


// 1. PELICULAS RECOMENDADAS

// Crea `obtenerRecomendadas`.

// Utiliza `.filter()` para obtener peliculas con una puntuacion mayor o igual que 8.


// 2. CREAR TITULOS

// Crea `generarTitulos`.

// Utiliza `.map()` y desestructuracion para devolver unicamente textos con este formato:

// "Interstellar (2014)"


// 3. MEJORAR PUNTUACIONES

// Crea `mejorarPuntuaciones`.

// Utiliza `.map()` para devolver nuevos objetos aumentando en 1 punto la puntuacion
// de cada pelicula.

// No debes modificar el array original.


// 4. ORDENAR PELICULAS

// Crea `ordenarPorPuntuacion`.

// Debe devolver una copia ordenada de mayor a menor puntuacion.


// 5. DESESTRUCTURACION DE ARRAYS

// Dado:

// const peliculasFavoritas = [
//     'Interstellar',
//     'Matrix',
//     'Shrek',
//     'Barbie'
// ];

// Obtén mediante desestructuracion:

// - favorita1 -> primera pelicula
// - favorita3 -> tercera pelicula

// Debes ignorar la segunda.



// ================================================================================
// EJERCICIO 4 - GESTOR DE GIMNASIO
// ================================================================================

// const socios = [
//   { id: 1, nombre: 'Carlos', edad: 22, cuota: 30, activo: true },
//   { id: 2, nombre: 'Laura', edad: 31, cuota: 40, activo: false },
//   { id: 3, nombre: 'Miguel', edad: 19, cuota: 25, activo: true },
//   { id: 4, nombre: 'Sara', edad: 27, cuota: 35, activo: true }
// ];


// 1. SOCIOS ACTIVOS

// Crea `obtenerSociosActivos`.

// Utiliza `.filter()` y desestructuracion para obtener unicamente los socios activos.


// 2. APLICAR AUMENTO

// Crea `aumentarCuotas`.

// Utiliza `.map()` para aumentar un 10% la cuota de todos los socios.

// Debes devolver nuevos objetos.


// 3. AÑADIR INFORMACION

// Crea `agregarCategoriaEdad`.

// Añade una propiedad:

// categoriaEdad

// Sera:

// - "Joven" si tiene menos de 25 años.
// - "Adulto" si tiene 25 años o mas.


// 4. ORDENAR SOCIOS

// Crea `ordenarPorCuota`.

// Ordena de mayor a menor cuota sin modificar el array original.


// 5. INGRESOS MENSUALES

// Utiliza `.reduce()` para calcular cuanto dinero ingresaria el gimnasio si
// TODOS los socios pagasen su cuota.



// ================================================================================
// EJERCICIO 5 - COLECCION MUSICAL
// ================================================================================

const canciones = [
  { titulo: 'Blinding Lights', artista: 'The Weeknd', duracion: 200, reproducciones: 5000000 },
  { titulo: 'Numb', artista: 'Linkin Park', duracion: 185, reproducciones: 3000000 },
  { titulo: 'As It Was', artista: 'Harry Styles', duracion: 167, reproducciones: 4500000 },
  { titulo: 'Believer', artista: 'Imagine Dragons', duracion: 204, reproducciones: 4000000 }
];


// 1. OBTENER CANCIONES POPULARES

// Crea `obtenerPopulares`.

// Utiliza `.filter()` para obtener las canciones con mas de 4.000.000
// de reproducciones.

const obtenerPopulares =(canciones) =>{
    return canciones.filter(({reproducciones}) => reproducciones>4000000)
}


// 2. CREAR LISTA DE CANCIONES

// Crea `generarLista`.

// Utiliza `.map()` y desestructuracion.

// Debe devolver:

// "Blinding Lights - The Weeknd"

const generarLista = (canciones) =>{
    return canciones.map(({titulo, artista}) => {
        return `${titulo} - ${artista}`
    })
}


// 3. AÑADIR DURACION EN MINUTOS

// Crea `agregarDuracionMinutos`.

// Utiliza `.map()` y `...`.

// Añade una propiedad:

// duracionMinutos

// calculada a partir de `duracion`, que esta expresada en segundos.


const agregarDuracionMinutos = (canciones) => {
    return canciones.map((cancion) =>{
        return {
            ...cancion,
            duracionMinutos: cancion.duracion / 60
        }
    } )
}

// 4. CANCION MAS LARGA

// Crea una funcion que utilice `.sort()` para ordenar las canciones de
// mayor a menor duracion.

// IMPORTANTE: no puedes modificar el array original.

const ordenarCancion = (canciones) => {
    return [...canciones].sort((a,b) => b.duracion - a.duracion)
}


// 5. REPRODUCCIONES TOTALES

// Utiliza `.reduce()` para calcular el numero total de reproducciones
// de todas las canciones.

const calcularReproduccionesTotales = (canciones) => {
    return canciones.reduce((reproduccionesTotales, index) => {
        return reproduccionesTotales + index.reproducciones
    }, 0)
}

// ================================================================================
// EJERCICIO 6 - MINI EXAMEN
// ================================================================================

const productos = [
  { id: 1, nombre: 'Teclado', precio: 45, categoria: 'Perifericos', stock: 10 },
  { id: 2, nombre: 'Monitor', precio: 180, categoria: 'Pantallas', stock: 4 },
  { id: 3, nombre: 'Raton', precio: 25, categoria: 'Perifericos', stock: 0 },
  { id: 4, nombre: 'Portatil', precio: 900, categoria: 'Ordenadores', stock: 3 }
];


// 1. DESCUENTO

// Crea `aplicarDescuento`.

// Los productos de categoria `Perifericos` tendran un 15% de descuento.

// Utiliza `.map()` y `...`.

const aplicarDescuento = (productos) =>{
    return productos.map((producto) => {
        return (producto.categoria==='Perifericos')? {...producto, precio: producto.precio * 0.85}: producto
    })
}


// 2. PRODUCTOS DISPONIBLES

// Crea `obtenerDisponibles`.

// Utiliza `.filter()` y desestructuracion.

// Solo deben aparecer productos con `stock > 0`.


const obtenerDisponibles = (canciones) => {
    return canciones.filter(({stock}) => stock > 0)
}

// 3. MOSTRAR PRODUCTOS

// Crea `mostrarProductos`.

// Utiliza `.map()` y desestructuracion para obtener `nombre` y `precio`.

// Debe devolver:

// "Teclado: 45€"

const mostrarProductos = (productos) => {
    return productos.map(({nombre, precio}) => {
        return `${nombre}: ${precio}€`
    })
}


// 4. ORDENAR

// Crea `ordenarPorPrecio`.

// Devuelve una copia ordenada de mayor a menor precio.


const ordenarPorPrecio = (productos) => {
    return [...productos].sort((a,b) => b.precio - a.precio)
}

// 5. ESTADO DEL PRODUCTO

// Crea `agregarEstado`.

// Añade una propiedad:

// enStock

// Sera:

// true -> si stock > 0
// false -> si stock <= 0

const agregarEstado = (productos) => {
    return productos.map((producto) => {
        return {
            ...producto,
            agregarEnStock: (producto.stock >0)? true : false
        }
    })
}

// 6. VALOR TOTAL
// Crea `calcularValorTotal`.

// Utiliza `.reduce()` para calcular:

// precio * stock

// de todos los productos.

const crearValorTotal = (productos) => {
    return productos.reduce((valorTotal, producto) => valorTotal + (producto.precio * producto.stock), 0)
}
// 7. NUEVOS PRODUCTOS

// Tenemos:

const nuevosProductos = [
  { id: 5, nombre: 'Webcam', precio: 70, categoria: 'Perifericos', stock: 6 }
];

// Crea `inventarioCompleto` utilizando `...` para combinar ambos arrays.

const inventarioCompleto = [...productos, ...nuevosProductos]


// 8. DESESTRUCTURACION DE ARRAYS

// Tenemos:

const categorias = [
    'Perifericos',
    'Pantallas',
    'Ordenadores',
    'Moviles'
];

// Obtén mediante desestructuracion:

// - primeraCategoria
// - terceraCategoria

// Debes ignorar la segunda.



// ================================================================================
// EJERCICIO 7 - MODO EXAMEN
// ================================================================================

// En este ejercicio NO se indica que metodo utilizar.

// Debes decidir tu mismo que metodo necesitas en cada apartado.


const empleados = [
  { nombre: 'Ana', departamento: 'Informatica', salario: 1800, experiencia: 3 },
  { nombre: 'Luis', departamento: 'Ventas', salario: 1500, experiencia: 1 },
  { nombre: 'Marta', departamento: 'Informatica', salario: 2200, experiencia: 5 },
  { nombre: 'Pedro', departamento: 'Ventas', salario: 1700, experiencia: 4 },
  { nombre: 'Sara', departamento: 'RRHH', salario: 1900, experiencia: 6 }
];


// A. EMPLEADOS DE INFORMATICA

// Crea una funcion que devuelva unicamente los empleados del departamento
// "Informatica".

const empleadosInformatica = (empleados) => {
    return empleados.filter(({departamento}) => departamento==='Informatica')
}


// B. AUMENTAR SALARIOS

// Crea una funcion que aumente un 5% el salario de todos los empleados.

// No debes modificar los objetos originales.

const aumentarSalario = (empleados) => {
    return empleados.map((empleado) => {
        return ({...empleado, salario: empleado.salario*1.05})
    })
}

// C. EMPLEADOS CON EXPERIENCIA

// Crea una funcion que devuelva los nombres de los empleados con mas de
// 3 años de experiencia.

const empleadosExperiencia = (empleados) => {
    return empleados.filter(({experiencia}) => experiencia>3).map(({nombre}) => nombre)
}

// D. ORDENAR EMPLEADOS

// Crea una funcion que ordene los empleados de mayor a menor salario.

// No debes modificar el array original.


const ordenarEmpleados = (empleados) =>{
    return [...empleados].sort((a,b) => b.salario - a.salario)
}

// E. COSTE TOTAL DE SALARIOS

// Calcula el coste total de salarios de todos los empleados.

const calcularSalarios = (empleados) => {
    return empleados.reduce((costeTotal, empleado) => costeTotal + empleado.salario), 0
}


// F. AÑADIR PROPIEDAD SENIOR

// Añade una propiedad:

// senior

// Sera:

// true -> experiencia mayor o igual a 5
// false -> experiencia menor que 5

const agregarSenior = (empleados) =>{
    return empleados.map((empleado) => {
        return{
            ...empleado,
            senior: (empleado.experiencia>=5) ? true: false
        }
    })
}


// G. DESESTRUCTURACION DE ARRAYS

// Dado:

const departamentos = [
    'Informatica',
    'Ventas',
    'RRHH',
    'Marketing'
];

// Utiliza desestructuracion para obtener:

// - primer departamento
// - cuarto departamento

// Debes ignorar los elementos intermedios.

const [dep1,,,dep4] = departamentos

// H. AÑADIR NUEVOS EMPLEADOS

// Llegan nuevos empleados:

const nuevosEmpleados = [
    { nombre: 'Jorge', departamento: 'Informatica', salario: 2000, experiencia: 2 }
];

// Crea un nuevo array con todos los empleados utilizando Spread Operator.


const agregarEmpleados = [...empleados, ...nuevosEmpleados]


// ================================================================================
//                          MODO EXAMEN
// ================================================================================

// Cuando hagas los ejercicios intenta seguir estas reglas:

// 1. No modificar los arrays originales.
// 2. Utilizar funciones flecha.
// 3. Utilizar desestructuracion cuando el enunciado lo pida.
// 4. Utilizar Spread Operator cuando se necesite crear copias.
// 5. Recordar que `.sort()` modifica el array sobre el que se aplica.
// 6. Recordar poner `0` como valor inicial en `.reduce()` cuando corresponda.
// 7. Intentar hacer primero los ejercicios sin mirar apuntes.
// 8. Si te atascas, identifica primero QUÉ quiere conseguir el ejercicio.

// PISTAS GENERALES:

// - Transformar cada elemento -> map()
// - Quedarse con determinados elementos -> filter()
// - Ordenar elementos -> sort()
// - Obtener un unico resultado acumulado -> reduce()
// - Copiar un array -> [...array]
// - Copiar un objeto -> {...objeto}
// - Sacar propiedades de un objeto -> desestructuracion
// - Sacar elementos concretos de un array -> desestructuracion
// - Crear funciones cortas -> funciones flecha


// ================================================================================
//                          FIN DE LOS EJERCICIOS
// ================================================================================
