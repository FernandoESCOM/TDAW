/*
    Leer un numero y mostrar si dicho numero es o no es par
*/

var x = parseInt(prompt("Ingrese un numero"));

if ((x % 2) == 0)
{
    document.write('El numero ' + x + ' es par');
} 

else
{
    document.write('El numero ' + x + ' es impar');
}