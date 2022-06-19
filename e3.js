/*
    Leer dos numeros y realizar el producto mediante sumas
*/

var x = parseInt(prompt("Ingrese el valor de x"));
var y = parseInt(prompt("Ingrese el valor de y"));

var aux = 0;

for (var i = 1; i <= y; i++) 
{
    aux = aux + x;
}

document.write(aux);