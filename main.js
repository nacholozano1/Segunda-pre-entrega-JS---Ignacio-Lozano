alert("Bienvenido a la calculadora de impuestos de los juegos de steam");

const autorizacion = "empezar";


let usuario = prompt("Ingrese 'empezar' para iniciar");
    if (usuario == autorizacion){
        alert("Bienvenido!")
        
        let precioJuego = parseInt(prompt("Ingrese el precio del juego:"));

        for(let i = 0; i < precioJuego; i++) {
            let precioFinal = calcularImpuesto(precioJuego);
            alert("El precio total del juego es: " + precioFinal);
            alert("Usted está siendo robado!");
            break;
        }
    } 
    
    while (usuario != autorizacion){
        alert("Tenés que escribir 'empezar' crack, no " + "'" + usuario + "'" + ". Dale al refresh para probar de nuevo ;)");
        break;
        } 

function calcularImpuesto(precioJuego)
{
    let precioFinal = (precioJuego) * 1.75;
    return precioFinal;
}
