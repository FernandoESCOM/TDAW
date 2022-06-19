/*
    Leer una secuencia de n numeros almacenarlos en un arreglo y mostrar la posicion donde se encuentra el mayor valor leido
*/

var secuencia = prompt("Ingrese una secuencia de numeros separados por un espacio. ej: 1 4 5 4");

var arregloSec = secuencia.split(" ");
var aux = 0;

for (var i = 0; i <= arregloSec.length; i++)
{
    if(parseInt(arregloSec[i]) < parseInt(arregloSec[i + 1])) 
    {
        aux++;
    }
}  

document.write("Cadena ingresada: [ ");

for(var i = 0; i <= (arregloSec.length - 1); i++)
{
    document.write(arregloSec[i] + " ");
}

document.write("]");
document.write("<b>" + "<br>Posicion del mayor valor leido: " + aux + "</b>");

document.write("<br>Mayor valor leido: " + arregloSec[aux]);