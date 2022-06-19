var aux1 = prompt("Ingrese 1er numero:")
var aux2 = prompt("Ingrese 2do numero:")
var aux3 = prompt("Ingrese 3er numero:")

var dato1 = parseInt(aux1);
var dato2 = parseInt(aux2);
var dato3 = parseInt(aux3);

document.write ('<b>El mayor entre ' + dato1 + ', ' + dato2 + ' y ' + dato3 + ': </b>');

if(dato1 > dato2)
{
    if(dato1 > dato3)
    {
        document.write('<b>'+ dato1 +'</b>');
    }

    else
    {
        document.write('<b>'+ dato3 +'</b>');
    }
}

else  
{
    if(dato2 > dato3)
    {
        document.write('<b>'+ dato2 +'</b>');
    }
    else
    {
        document.write('<b>'+ dato3 +'</b>');
    }
}


