/*
    Leer un numero y mostrar su tabla de multiplicar
*/

var x = parseInt(prompt("Ingrese un numero"));
var aux = 0;

for (var i = 0; i <= 10; i++) 
{
    aux = x * i;
    
    document.write(x + ' x ' + i + ' = ' + aux + '</br>');
}