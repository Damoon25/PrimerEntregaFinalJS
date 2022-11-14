
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

class Burguer {
    constructor(id, tipo, medida, cantidad, descripcion, guarnicion, precio, img) {
        this.id = id,
            this.tipo = tipo,
            this.medida = medida,
            this.cantidad = cantidad,
            this.descripcion = descripcion,
            this.guarnicion = guarnicion,
            this.precio = precio,
            this.img = img

    }
    datosBurguer() {
        console.log(` ID : ${this.id} \n TIPO: ${this.tipo} \n MEDIDA: ${this.medida} \n CANTIDAD: ${this.cantidad} \n DESCRIPCIÓN: ${this.precio} \n GUARNICIÓN: ${this.precio} \n PRECIO: ${this.precio}`)

    }
}

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

let datosBurguer = []
let traerProductos = async () => {
    const response = await fetch("/public/json/stockProductos.json")
    const data = await response.json()
    console.log(data);
    for (let productos of data) {
        let nuevoProducto = new Burguer(productos.id, productos.tipo, productos.medida, productos.cantidad, productos.descripcion, productos.guarnicion, productos.precio, productos.img)
        datosBurguer.push(nuevoProducto)
    }
    datosBurguer.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('rounded-4')
        div.classList.add('producto')
        div.innerHTML = `
        <div class="card-header">
            <img src=${producto.img} class="card-img-top" alt= "">
        </div>
        <div class="card-body">
            <h3>${producto.tipo}</h3>
            <p><strong>Descripción</strong>: ${producto.descripcion}</p>
            <p><strong>Tamaño</strong>: ${producto.medida}</p>
            <p class="precioProducto">Precio: $ ${producto.precio}</p>
            <button class="btn btn-primary rounded-pill" id="agregar${producto.id}">Agregar <i class="fas fa-shopping-cart"></i></button>
        </div>
        `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
            //
        })
    })
}
traerProductos();

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.id === prodId) //compruebar que el elemento ya existe en el carro

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = datosBurguer.find((prod) => prod.id === prodId)// Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito()
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)
    // un elemento 
    actualizarCarrito()
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.tipo}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}