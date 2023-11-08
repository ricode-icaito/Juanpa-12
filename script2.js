var mitexto = "Hola Mundo";
alert(mitexto);

var mitexto = "Mi nombre es ";
mitexto = mitexto + "Juan";
alert(mitexto);

var mitexto = "Juan";
mitexto = "Mi nombre es " + mitexto;
alert(mitexto);

var mitexto = "El número es " + 3;
alert(mitexto);

/*Ojo con este ejemplo sumar una cadena con un numero*/
var mitexto = "20" + 3;
alert(mitexto); //"203"

/*
trabajemos con \r y \n son caracteres de escape
\r devuleve el cursor al comienzo de la linea
\n genera una nueva linea
desplegamos en una misma salida en dos lineas
*/
var mitexto = "Felicidad no es hacer lo que uno quiere\r\n";
mitexto = mitexto + "sino querer lo que uno hace."
alert(mitexto);

/* Booleanos */
var valido = true;
alert(valido);