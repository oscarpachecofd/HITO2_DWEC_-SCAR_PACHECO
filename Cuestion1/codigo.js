// Explica qué tipado (débil o fuerte se aplica en Typescript)
// Realiza un ejemplo con declaración de diferentes variables: texto, numéricas, booleanas, y de listas. Identifica correctamente el tipo de dato de cada una.
var nombreAlumno = "Óscar";
var edadAlumno = 19;
var notaAlumno = 7.5;
var aprobado = true;
var listaAsignaturas = ["Desarrollo de Entono Cliente", "Desarrollo de Entorno Servidor", "Despliegue de Aplicaciones Web", "Diseño de Interfaces Web"];
console.log("El valor de la variable nombreAlumno es " + nombreAlumno + " y es de tipo " + typeof (nombreAlumno));
console.log("El valor de la variable edadAlumno es " + edadAlumno + " y es de tipo " + typeof (edadAlumno));
console.log("El valor de la variable notaAlumno es " + notaAlumno + " y es de tipo " + typeof (notaAlumno));
console.log("El valor de la variable aprobado es " + aprobado + " y es de tipo " + typeof (aprobado));
console.log("El valor de la variable listaAsignaturas es " + listaAsignaturas + " y es de tipo " + typeof (listaAsignaturas));
// Explica la diferencia entre let,var, y const con un ejemplo
// Bloque de código realizado con var
var edadPersona = 19;
console.log(edadPersona); // Su valor es 19
if (true) {
    var edadPersona = 30;
    console.log(edadPersona); // Su valor es 30
}
console.log(edadPersona); // Su valor es 30
var textoPrueba = "Salida 1";
console.log(textoPrueba); // Su valor es "Salida 1"
if (true) {
    var textoPrueba = "Salida 2";
    console.log(textoPrueba); // Su valor es "Salida 2"
}
console.log(textoPrueba); // Su valor es "Salida 2"
// Bloque de código realizado con let
var edadPersona1 = 19;
console.log(edadPersona1); // Su valor es 19
if (true) {
    var edadPersona1_1 = 30;
    console.log(edadPersona1_1); // Su valor es 30
}
console.log(edadPersona1); // Su valor es 19
var textoPrueba1 = "Salida 1";
console.log(textoPrueba1); // Su valor es "Salida 1"
if (true) {
    var textoPrueba1_1 = "Salida 2";
    console.log(textoPrueba1_1); // Su valor es "Salida 2"
}
console.log(textoPrueba1); // Su valor es "Salida 1"
// Bloque de código realizado con const
var numeroPi = 3.14;
console.log("El número pi es " + numeroPi); // Su valor es 3.14
// Las líneas de código escritas debajo no funcionarían debido a que const representa un valor constante que siempre tiene que ser el mismo, no puede ser modificado.
//numeroPi = 3.16;
//console.log(numeroPi);
