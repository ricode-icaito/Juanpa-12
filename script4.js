var mivariable = 9;
if (mivariable < 10) {
  alert("El número es menor que 10");
}

//regresar a PowerPoint y explicar operadores de comparación

var mivariable = 9;
if (!(mivariable < 10)) {
  alert("El número es menor que 10");
}

//comparamos dos condiciones y ambas deben ser verdaderas
var inteligente = "SI";
var edad = 19;
if (edad < 21 && inteligente == "SI") {
  alert("Juan está autorizado");
}

//podemos usar un operador boolean para la variable
var inteligente = true;
var edad = 19;
if (edad < 21 && inteligente) {
  alert("Juan está autorizado");
}

//ejemplo no se ejecuta por valor cero, se considera falsa
var edad = 0;
if (edad) {
  alert("Juan está autorizado")
}

//regresar a PowerPoint y explicar if else

var mivariable = 21;
if (mivariable < 15) {
  alert("El número es menor que 15");
} else {
  alert("El número es igual o mayor que 15");
}

//regresar a PowerPoint y explicar swtich
var mivariable = 8;
switch(mivariable) {
  case 5:
    alert("El número es cinco");
    break;
  case 8:
    alert("El número es ocho");
    break;
  case 10:
    alert("El número es diez");
    break;
  default:
    alert("El número es " + mivariable);
}
//break se usa al encontrar la coincidencia transifera el control del programa al siguiente bloque de codigo fuera del evaluador de expresión

//regresar a PowerPoint y explicar for y while, ciclos repetitivos
/* regresar a PowerPoint
crear el index8.html y script5.js
*/