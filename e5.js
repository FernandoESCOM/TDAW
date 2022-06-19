/*
    Dados dos vectores A y B de n elementos cada uno, obtener un arreglo C donde la posicion i se almacene la suma de A[i] + B[i]
*/

var secA = prompt("Ingrese una secuencia de numeros separados por un espacio. ej: 1 4 5 4");
var secB = prompt("Ingrese otra secuencia de numeros separados por un espacio. ej: 1 4 5 4");

var arrayA = secA.split(" ");
var arrayB = secB.split(" ");

if(arrayA.length > arrayB.length)
{
    var arrayC = [arrayA.length - 1];

    for(let i = 0; i <= (arrayA.length - 1); i++)
    {
        arrayC[i] = 0;
    }

    for(let i = 0; i <= (arrayB.length - 1); i++)
    {
        arrayC[i] = parseInt(arrayA[i]) + parseInt(arrayB[i]);
    }
}
else
{
    var arrayC = [arrayB.length - 1];

    for(let i = 0; i <= (arrayB.length - 1); i++)
    {
        arrayC[i] = 0;
    }

    for(let i = 0; i <= (arrayA.length - 1); i++)
    {
        arrayC[i] = parseInt(arrayA[i]) + parseInt(arrayB[i]);
    }
}

document.write("Arreglo A: ");
for(let i = 0; i <= (arrayA.length - 1); i++)
{
    document.write(arrayA[i] + " ");
}

document.write("</br>");

document.write("Arreglo B: ");
for(let i = 0; i <= (arrayB.length - 1); i++)
{
    document.write(arrayB[i] + " ");
}

document.write("</br>");

document.write("Arreglo C: ");
for(let i = 0; i <= (arrayC.length - 1); i++)
{
    document.write(arrayC[i] + " ");
}