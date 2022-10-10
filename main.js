/* Ejercicio Pre Entrega 2.- Estim - Ignacio Lozano*/


alert("Bienvenidos a Estim!");

//Clase Producto

class producto {
    constructor(juego, precio){
        this.juego = juego;
        this.precio = precio;
    }
}

const eldenRing = new producto ("Elden Ring", 4999);
const modernWarefare2 = new producto ("Call of Duty: Modern Warefare 2", 7999);
const fifa23 = new producto ("FIFA 23", 7999);
const legoStarWars = new producto ("Lego Star Wars: The Skywalker Saga", 6999);

let stockProductos = []
stockProductos.push(eldenRing);
stockProductos.push(modernWarefare2);
stockProductos.push(fifa23);
stockProductos.push(legoStarWars);
console.log(stockProductos);

stockProductos.forEach(producto => console.log(producto));

//Métodos de Búsqueda:

const buscado = stockProductos.find(producto => producto.juego === "FIFA 23");

console.log("Juego buscado: (Find)");
console.log(buscado);

//Método de Filtrado:

const stockProductosMenosDe7000 = stockProductos.filter(producto => producto.precio < 7000);

console.log("Filtro para juegos que valen menos de $7000: (Filter)")
console.log(stockProductosMenosDe7000)

//Menú interactivo:

//Función con el menú de opciones:

const autorizacion = "empezar";

let usuario = prompt('Ingrese "empezar" para iniciar');
    if (usuario == autorizacion){
        function menu() {
            alert("Bienvenido");
            let opcion = parseInt(prompt("Ingrese una opción: \n 1) Calculadora de impuestos \n 2) Productos \n 3) Salir"));
            return opcion;
        }

        //Función que calcula impuestos:

        function calculadoraDeImpuestos() {
            let precioJuego = parseInt(prompt("Ingrese el precio del juego deseado para calcular los impuestos:"));

            for(let i = 0; i < precioJuego; i++) {
                let precioFinal = calcularImpuesto(precioJuego);
                alert("El precio total del juego es: " + precioFinal);
                alert("Usted está siendo robado!");
                break;
            }
        }
        
        //Función para ver los productos:

        function verProductos() {
            precioJuego = prompt("Estos son los juegos que tenemos:\n" + "\n" + eldenRing.juego + " - $" + eldenRing.precio + "\n" + modernWarefare2.juego + " - $" + modernWarefare2.precio + "\n" + fifa23.juego + " - $" + fifa23.precio + "\n" + legoStarWars.juego + " - $" + legoStarWars.precio + "\n" + "\nIngrese el precio del juego deseado para calcular los impuestos:" + "\n");
            
            for(let i = 0; i < precioJuego; i++) {
                let precioFinal = calcularImpuesto(precioJuego);
                alert("El precio total del juego es: " + precioFinal);
                alert("Usted está siendo robado!");
                break;
            }
        }

        //Función para salir de Estim:

        function salir() {
            alert("Gracias por visitar Estim!");
        }

        //Ejecución del menú:

let opcion = menu();
switch (opcion) {
    case 1:
        calculadoraDeImpuestos();
        break;
    case 2:
        verProductos();
        break;
    case 3:
        salir();
        break;
    default:
        alert("Opción incorrecta Reynaldo, dale refresh para probar de nuevo :D");
        break;
}
        
    } 

//Alert por si ingresaste otra cosa en vez de "empezar"

while (usuario != autorizacion){
    alert('Tenés que escribir "empezar" crack, no ' + '"' + usuario + '"' + '. Dale al refresh para probar de nuevo ;)');
    break;
} 

//Función para caluclar el impuesto:

function calcularImpuesto(precioJuego)
{
    let precioFinal = (precioJuego) * 1.75;
    return precioFinal;
}

