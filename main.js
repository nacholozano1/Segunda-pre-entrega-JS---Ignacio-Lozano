alert("Bienvenido a la calculadora de impuestos de los juegos de steam");

const autorizacion = "empezar";

let usuario = prompt("Ingrese 'empezar' para iniciar");

for( let i = 0; i < 1; i++){
    if (usuario == autorizacion){
        alert("Bienvenido!")
        let precioJuego = parseInt(prompt("Ingrese el precio del juego:"));
        for(let i = 0; i < precioJuego; i++) {
            let precio = calcularImpuesto(precioJuego);
            alert("El precio total del juego es: " + precio);
            alert("Usted está siendo robado!");
        }
        if (precioJuego) NaN;
        {
            alert("Pone un número durazno. Dale refresh para volver a intentarlo ;)")
            break;
        } 

    } else (usuario == autorizacion) 
    {
        alert("Tenés que escribir 'empezar' crack, no " + "'" + usuario + "'" + ". Dale al refresh para probar de nuevo ;)");
    }
}

function calcularImpuesto(precioJuego)
{
    let precio = (precioJuego) * 1.75;
    return precio;
}
