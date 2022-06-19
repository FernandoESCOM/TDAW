var dato1 = 17;
var dato3 = parseInt(prompt('Ingresa tu edad: '));

if(dato1 > dato3)
{
    document.write('tienes '+ dato3 + ' no puedes votar');
}

else if(dato3 > dato1)
{
    document.write('tienes '+ dato3 + ' , puedes votar!!');
}