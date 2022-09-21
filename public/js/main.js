class burguer {
    constructor(id, tipo, medida, descripcion, guarnicion, precio, imagen) {
        this.id = id,
            this.tipo = tipo,
            this.medida = medida,
            this.descripcion = descripcion,
            this.guarnicion = guarnicion,
            this.precio = precio
        this.imagen = imagen
    }
    datosBurguerInicial() {
        console.log(` ID : ${this.id} \n TIPO: ${this.tipo} \n TAMAÑO: ${this.medida} \n DESCRIPCION: ${this.descripcion} \n ACOMPAÑAMIENTO: ${this.dips} \n PRECIO: ${this.precio}`)

    }
}

// pizzas agregadas mediante un push()  en un array datosPizza = [];


const cheeseBurga = new burguer(1, "CheeseBurga", "doble", "carne, queso cheddar", "papas", 700, "burguer.jpg")
const blueBurga = new burguer(2, "BlueBurga", "doble", "carne, queso azul, nueces", "papas", 1000, "burguer.jpg")
const laLuisito = new burguer(3, "LaLuisito", "triple", "carne, ajies, queso Provolone, guacamole", "nachos", 1500, "burguer.jpg")
const rotaBurga = new burguer(4, "LaRotaBurga", "triple", "carne, queso tybo, huevo planchados, tomates confitados", "papas", 1350, "burguer.jpg")
const baconFrito = new burguer(5, "BaconFrito", "doble", "carne, panceta frita, cebolla caramelizada", "papas", 1050, "burguer.jpg")
const xxl = new burguer(6, "XXL", "doble", "carne 250gr, mozzarella, chorizo picado", "aros de cebolla", 1600, "burguer.jpg")
const vegeta = new burguer(7, "Vegeta", "doble", "medallon de quinoa, queso vegano Milkaut, ali oli, morrones asados", "papas", 1300, "burguer.jpg")

const datosBurguer = [cheeseBurga, blueBurga, laLuisito, rotaBurga, baconFrito, xxl, vegeta];

// function agregarBurguer() {
//     const tipoIngresado = prompt("Cual tipo desea?")
//     const medidaIngresada = prompt("De que medida la quieres?")
//     const descripcionIngresada = prompt("Que ingredientes va a tener su burguer?")
//     const guarnicionIngresada = prompt("Ahora decime, que guarnición va a tener?")
//     const precioIngresado = parseInt(prompt("Ingresá el valor de la burguer"))
//     burguerIngresada = new burguer(datosBurguer.length + 1, tipoIngresado, medidaIngresada, descripcionIngresada, guarnicionIngresada, precioIngresado)
//     datosBurguer.push(burguerIngresada)
//     console.log(burguerIngresada)
// }

function mostrarBurguers() {
    let sectionProductos = document.getElementById(`seccionProductos`)
    sectionProductos.innerHTML = ""
    datosBurguer.forEach((burguer) => {
        let nuevoProducto = document.createElement(`div`)
        nuevoProducto.classList.add(`${burguer.tipo}`)
        nuevoProducto.innerHTML = `
                            <div id="${burguer.id}" class="card rounded-4 mx-2 my-3">
                                <img src="../img/${burguer.imagen}" alt="${burguer.imagen}" class="card-img-top">
                                <div class="card-body">
                                    <h2 class="card-title text-left mb-3">${burguer.tipo}</h2>
                                    <p style="color:#707070;"><strong>Descripción</strong>: ${burguer.descripcion}</p>
                                    <p style="color:#707070;"><strong>Tamaño</strong>: ${burguer.medida}</p>
                                    <p style="color:#707070;"><strong>Guarnición</strong>: ${burguer.guarnicion}</p>
                                    <p><strong style="color:#707070;">PRECIO: </strong> $${burguer.precio}</strong><p>
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

function encontrarBurguer() {
    let divCheeseBurga = document.getElementsByClassName(`cheeseBurga`)
    divCheeseBurga.innerHTML = ""
    let buscarBurguer = document.getElementById(`cheeseBurga`)

    let burguerEncontrada = datosBurguer.filter((burguer) => burguer.tipo == buscarBurguer)
    console.log(burguerEncontrada)
    if (burguerEncontrada == undefined) {
        alert("El nombre de la burguer que tratas de buscar no se encuntra en nuestro catalogo ")
    } else {
        console.log(`encontramos tu burguer y es:`)
        console.log(burguerEncontrada)
    }

}

// filtrar por burguer
let mostarTodo = document.getElementById(`mostrarTodo`)
mostarTodo.addEventListener(`click`, mostrarBurguers)
let cheeseBurguer = document.getElementById(`cheeseBurga`)
cheeseBurguer.addEventListener(`click`, encontrarBurguer)
// let blueBurguer = document.getElementById(`blueBurga`)
// blueBurguer.addEventListener(`click`, encontrarBurguer2)
// let laLuisitoBurguer = document.getElementById(`laLuisito`)
// laLuisitoBurguer.addEventListener(`click`, mostrarPorPizza3)
// let rotaBurguer = document.getElementById(`rotaBurga`)
// rotaBurguer.addEventListener(`click`, mostrarPorPizza4)



function catalogoBurguers() {
    alert("Mira nuestro catalogo de pizzas personal  por la consola")
    datosBurguer.forEach(catalogo => {
        catalogo.datosBurguerInicial()
    });
}

//funcion  agregarBurguer desde el dom con imputs que estan en el html 

function guardarBurga() {
    let tipoInput = document.getElementById(`tipoInput`)
    let medidaInput = document.getElementById(`medidaInput`)
    let descripcionInput = document.getElementById(`descripcionInput`)
    let guarnacionInput = document.getElementById(`guarnicionInput`)
    let precioInput = document.getElementById(`precioInput`)
    burgaCreada = new PizzaPersonal(datosBurguer.length + 1, tipoInput.value, medidaInput.value, descripcionInput.value, guarnacionInput.value, precioInput.value, "burguer.jpg")
    datosBurguer.push(burgaCreada)
    console.log(burgaCreada);
}
let btnGuardar = document.getElementById(`guardar`)
btnGuardar.addEventListener(`click`, () => {
    guardarBurga(datosBurguer)
    mostrarBurguers()

})

// funcion eliminar pizza
function eliminarBurga() {
    const nombreBurga = prompt("Cual es la Burguer que quieres eliminar, dame el nombre")
    datosPizza.splice(nombreBurga, 1)
    alert(`Has eliminado ${nombreBurga}`)
    console.log(datosBurguerInicial.length)
    console.log(datosBurguerInicial)

}

