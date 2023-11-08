var total = 0;
for (var f = 0; f <5; f++) {
  total += 10;
}
alert("El total es: " + total); //50
/*
iniciamos en f = 0 para inicializar
este ejemplo compruena que f sea menor que 5
de ser verdadera se ejecuta el código en llaves
el interprete ejecuta el último parámetro de la instrucción for
suma 1 al valor actual de f (f++) y comprueba la condición nuevamente
en cada ciclo f se incrementa en 1
si es verdadera la condicion se ejecuta nuevamente
hasta que f alcance el valor 5
lo cual se vuelve falsa la condición (5 no es menor que 5)
el bucle se interrumpe
se incremento la variable total en 10 x 5 veces, se cuenta la vuelta 0
*/

var total = 0;
var lista = [25, 50, 100, 150];
for (var f = 0; f < 4; f++) {
  total += lista[f];
}
alert("El total de la lista es: " + total); //325

//regresar a PowerPoint y explicar while

var contador = 0;
while(contador < 100) {
  contador++;
}
alert("El valor es: " + contador); //100
/*
El bucle se ejecutara 100 veces
cuando el valor de contador es 99, la instruccion se ejecuta una vez más, y finaliza la variable en 100
cuando la condición ya es falsa, nunca se ejecuta el bucle.
*/

//regresar a PowerPoint y explicar do while

var contador = 150;
do {
  contador++;
} while(contador < 100);
alert("El contador es: " + contador); //151

//regresar a PowerPoint y explicar transferencia de control
/* regresar a PowerPoint
crear el index9.html y script6.js
*/