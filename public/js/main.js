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
    alert("Mira nuestro catalogo de burguers por la consola")
    datosBurguer.forEach(catalogo => {
        catalogo.datosBurguer()
    });
}

//funcion  agregarPizza
function agregarBurguer() {
    const tipoIngresado = prompt("Cual tipo desea?")
    const medidaIngresada = prompt("De que medida la quieres?")
    const descripcionIngresada = prompt("Que ingredientes va a tener su burguer?")
    const guarnicionIngresada = prompt("Ahora decime, que guarnición va a tener?")
    const precioIngresado = parseInt(prompt("Ingresá el valor de la burguer"))
    burguerIngresada = new burguer(datosBurguer.length + 1, tipoIngresado, medidaIngresada, descripcionIngresada, guarnicionIngresada, precioIngresado)
    datosBurguer.push(burguerIngresada)
    console.log(burguerIngresada)
}

// funcion eliminar pizza
function eliminarBurguer() {
    const nombreBurguer = prompt("Cual es la burguer que vas a eliminar, por favor especificame el nombre?")
    datosBurguer.splice(nombreBurguer, 1)
    alert(`Has eliminado ${nombreBurguer}`)
    console.log(datosBurguer.length)
    console.log(datosBurguer)

}




//funcion encontrarPizza() mediante find() el cual tiene nombre especifico
function encontrarBurguer() {
    const buscarBurguer = prompt("Ingresá el nombre de la Burguer: (ejemplo : cheeseBurga)")
    const burguerEncontrada = datosBurguer.find((burguer) => burguer.tipo.toLowerCase() === buscarBurguer.toLowerCase())
    console.log(burguerEncontrada)
    if (burguerEncontrada == undefined) {
        alert("El nombre de la burguer que estas intentando buscar no se encuntra en nuestro catalogo ")

    } else {
        console.log(`Felicidades! encontramos tu burguer y es:`)
        console.log(burguerEncontrada)
    }
}

//funcion buscarPizzaEpecia() mediante filter()
function buscarBurguerMedida() {
    const buscarMedida = prompt("Estamos por buscar la burguer por el tamaño ingresado")
    const medidaEncontrada = datosBurguer.filter((medidas) => medidas.medida.toLowerCase() == buscarMedida.toLowerCase())
    if (medidaEncontrada.length == 0) {
        alert("ninguna burguer tiene ese tipo de tamaño")

    } else {
        alert("Estas son las burguers con ese tamaño")
        for (const busqueda of medidaEncontrada) {
            busqueda.datosBurguer()

        }

    }
}




// opciones  por numero mediante la coneccione de un parseInt que conecte al switch(opcionSeleccionar)
function seleccionarOpcion() {
    const opcionValor = parseInt(prompt(`Porfavor ingrese el numero que desea realizar:
                                    1:  Ver catalogo de burguers.
                                    2:  Agregar burguer al catalogo .
                                    3:  Eliminar.
                                    4:  Encontrar burguer por nombre.
                                    5:  Buscar burguer por tamaño.
                                    0:  Salir.`))
    menuOpciones(opcionValor)
}


// funciones del menu por switch
function menuOpciones(opcionSeleccionar) {
    switch (opcionSeleccionar) {
        case 0:
            salir = true
            alert("Esperamos que vuelvas a visitarnos")

            break;

        case 1:
            catalogoBurguers()
            break;

        case 2:
            agregarBurguer()
            break;

        case 3:
            eliminarBurguer()
            break;

        case 4:
            encontrarBurguer()
            break;

        case 5:
            buscarBurguerMedida()
            break;

        default:
            alert("No escogiste ninguna de las opciones, vuelve a intentarlo")
            break;
    }

}

let salir
// Ciclo while donde se invoca preguntar opcion, si responde case 0 sale (salir == true)
while (salir != true) {
    seleccionarOpcion()
}