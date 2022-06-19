/*
    Dado una secuencia de numeros leidos y almacenados en un arreglo A, mostrar dichos numeros en orden
*/

var sec = prompt("Ingrese una secuencia de numeros separados por un espacio. ej: 1 4 5 4");
var arraySec = sec.split(" ");

var aux = [arraySec.length-1];

for(let i = 0; i <= (arraySec.length - 1); i++)
{
    aux[i] = parseInt(arraySec[i]);
}

document.write("Arreglo ingresado: ");

for(let i = 0; i <= (aux.length - 1); i++)
{
    document.write(aux[i] + " ");
} 

aux.sort((a, b) => {
    if(a < b) {
        return - 1;
    }

    if(a > b) {
        return 1;
    }
} );

document.write("</br>Arreglo ordenado: ")

for(let i = 0; i <= (aux.length - 1); i++)
{
    document.write(aux[i] + " ");
} 