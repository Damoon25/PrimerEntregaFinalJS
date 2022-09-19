class burguer {
    constructor(id, tipo, medida, descripcion, guarnicion, precio) {
        this.id = id,
            this.tipo = tipo,
            this.medida = medida,
            this.descripcion = descripcion,
            this.guarnicion = guarnicion,
            this.precio = precio
    }
    datosBurguer() {
        console.log(` ID : ${this.id} \n TIPO: ${this.tipo} \n TAMAÑO: ${this.medida} \n DESCRIPCION: ${this.descripcion} \n ACOMPAÑAMIENTO: ${this.dips} \n PRECIO: ${this.precio}`)

    }
}

// pizzas agregadas mediante un push()  en un array datosPizza = [];


const cheeseBurga = new burguer(1, "Cheese Burga", "doble", "carne, queso cheddar", "papas", 700)
const blueBurga = new burguer(2, "Blue Burga", "doble", "carne, queso azul, nueces", "papas", 1000)
const laLuisito = new burguer(3, "La Luisito", "triple", "carne, ajies, queso Provolone, guacamole", "nachos", 1500)
const rotaBurga = new burguer(4, "La Rota Burga", "triple", "carne, queso tybo, huevo planchados, tomates confitados", "papas", 1350)
const baconFrito = new burguer(5, "Bacon Frito", "doble", "carne, panceta frita, cebolla caramelizada", "papas", 1050)
const xxl = new burguer(6, "XXL", "doble", "carne 250gr, mozzarella, chorizo picado", "aros de cebolla", 1600)
const vegeta = new burguer(7, "Vegeta", "doble", "medallon de quinoa, queso vegano Milkaut, ali oli, morrones asados", "papas", 1300)

const datosBurguer = [cheeseBurga, blueBurga, laLuisito, rotaBurga, baconFrito, xxl, vegeta];


// funcion ver catalogo
function catalogoBurguers() {
    let sectionProductos = document.getElementById(`seccionProductos`)
    sectionProductos.innerHTML = ""
    datosBurguer.forEach((burguer) => {
        let nuevoProducto = document.createElement(`div`)
        nuevoProducto.classList.add(`${burguer.tipo}`)
        nuevoProducto.innerHTML = `
                            <div id="${burguer.id} " class="card mx-2 my-3">
                                <img src="public/img/${burguer.imagen}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h2 class="card-title text-left">${burguer.tipo}</h2>
                                    <p>${burguer.descripcion}</p>
                                    <p> <strong>Medida</strong>: ${burguer.medida}</p>
                                    <small>Guarnición<strong>ESPECIAS</strong>: ${burguer.queso}</small>
                                    <p>ESPECIAS: <strong>${burguer.precio}</strong><p>
                                    <div class="col-sm-12 mt-3">
                                        <a href="#" class="btn btn-primary">AGREGAR AL CARRITO</a>
                                    </div>
                                </div>
                            </div>`
        sectionProductos.appendChild(nuevoProducto)



    })
    const aumentarCarrito = document.getElementById(`aumentarCarrito`)
    let contador = 0

    sectionProductos.addEventListener(`click`, (e) => {
        if (e.target.classList.contains(`btn-primary`))
            contador++
        aumentarCarrito.innerHTML = contador

    })

}

//funcion encontrarPizza() mediante find() el cual tiene nombre especifico

function encontrarPizza() {
    let divCheeseBurga = document.getElementsByClassName(`cheeseBurga`)
    divCheeseBurga.innerHTML = ""
    let buscarBurguer = document.getElementById(`cheeseBurga`)

    let burguerEncontrada = datosBurguer.filter((burguer) => burguer.tipo == buscarBurguer)
    console.log(burguerEncontrada)
    if (burguerEncontrada == undefined) {
        alert("El nombre de la pizza que tratas de buscar no se encuntra en nuestro catalogo ")
    } else {
        console.log(`encontramos tu pizza y es:`)
        console.log(burguerEncontrada)
    }

}

// filtrar por pizza
let mostarTodo = document.getElementById(`mostrarTodo`)
mostarTodo.addEventListener(`click`, mostrarTodasPizza)
let pizzaHawaiana = document.getElementById(`hawaiana`)
pizzaHawaiana.addEventListener(`click`, encontrarPizza)
/*let pizzaPeperono = document.getElementById(`peperoni`)
pizzaPeperono.addEventListener(`click`, mostrarPorPizza2)
let pizzaChampiñones = document.getElementById(`champiñones`)
pizzaChampiñones.addEventListener(`click`, mostrarPorPizza3)
let pizzaMexicana = document.getElementById(`mexicana`)
pizzaMexicana.addEventListener(`click`, mostrarPorPizza4)
let pizzaPollo = document.getElementById(`pollo`)
pizzaPollo.addEventListener(`click, `, mostrarPorPizza5)
let pizzaVegetariana = document.getElementById(`vegetariana`)
pizzaVegetariana.addEventListener(`click`, mostrarPorPizza6)
let pizzaMixta = document.getElementById(`mixta`)
pizzaMixta.addEventListener(`click`, mostrarPorPizza7)*/