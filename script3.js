var miarray = ["verde", "rojo", "amarillo"];
alert(miarray);

/*Podemos pedir una posición especifica del array*/
var miarray = ["verde", "rojo", "amarillo"];
alert(miarray[0]);

/*combinemos el contenido del array, diferentes tipos*/
var miarray = ["verde", 50, "JavaScript es funcional"];
alert(miarray[0]);
alert(miarray[1]);
alert(miarray[2]);

/*reservar el espacio a una varibale indefinida que utilizaremos mas adelante*/
var miarray = ["verde", undefined, 55];
alert(miarray[1]);

/*
otra manejar es el uso de null, diferencia con undefined es que undefined indica que la variable fue declarada pero que ningun valor le fue asigando, y null indica que existe un valor pero es nulo
*/
var miarray = ["verde", 60, null];
alert(miarray[2]);

/*
podemos realizar operaciones en los valores de un array y almacenar los resultados, como hemos hecho antes con variables sencillas
*/
var miarray = [65, 30];
miarray[1] = miarray[1] + 10;
alert("El valor actual es " + miarray[1]); //40

/*arrays multidimensionales, declarar arrays de arrays*/
var miarray = [[10, 20, 30], [5, 15], [80, 90]];
alert(miarray[1]); /*vemos el array completo en la pos1*/

var miarray = [[10, 20, 30], [5, 15], [80, 90]];
alert(miarray[1][0]); /*vemos el array en la pos1 elemnto0*/

/*borrar el contenido de un array*/
var miarray = [3, 9, 12];
miarray = [] //volviendo vacio el array
alert(miarray[1]); //undefined

/* regresar a PowerPoint
crear el index7.html y script4.js
*/