/*
    Dado una secuencia de textos proporcionados por el usuario visualizar: la longitud, en minusculas, en mayusculas, cada uno de ellas
*/

var texto = prompt("Ingrese una cadena de texto:");

document.write("</br>Cadena de texto ingresada: " + texto);
document.write("</br>Longitud: " + texto.length);
document.write("</br>Cadena de texto en minusculas: " + texto.toLowerCase());
document.write("</br>Cadena de texto en mayusculas: " + texto.toUpperCase());


