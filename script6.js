var lista = [2, 4, 6, 8];

var total = 0;
for (var f = 0; f < 4; f++) {
  var numero = lista[f];
  if (numero == 6) {
    continue;
  }
  total += numero;
}
alert("El total es: " + total); //14
// el ciclo no suma el elemento 6 de la lista a la variable total

var lista = [2, 4, 6, 8];

var total = 0;
for (var f = 0; f < 4; f++) {
  var numero = lista[f];
  if (numero == 6) {
    break;
  }
  total += numero;
}
alert("El total es: " + total); //6
//cuando los valores del if coinciden ejecuta la instruccion break y el bucle termina sin importar cuantos valores quedaban por leer, solo se suman los valores a antes del 6