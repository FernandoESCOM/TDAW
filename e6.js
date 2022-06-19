/*
    Calcular la media de una secuencia de numeros proporcionado por el usuario
*/

var sec = prompt("Ingrese una secuencia de numeros separados por un espacio. ej: 1 4 5 4");
var arraySec = sec.split(" ");

var aux = 0;

for(let i = 0; i <= (arraySec.length - 1); i++)
{
    aux = aux + parseInt(arraySec[i]);
}

var media = aux / parseInt(arraySec.length); 

document.write("Media aritmetica: " + media);