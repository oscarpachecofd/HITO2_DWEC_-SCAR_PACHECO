// Explica qué tipado (débil o fuerte se aplica en Typescript)
// Typescript es un lenguaje con tipado estático lo que significa que la comprobación del tipado se realiza durante la compilación del programa, y no durante la ejecución. En javascript se realiza la comprobación en la ejecución mientras que en typescript se realiza la comprobación durante la compilación. En el tipado estático debemos decir al programa el tipo de dato que queremos introducir en cada variable. Ejemplo:
// En javascript se podría utilizar este código ==> let nombre = "Óscar";
// En typescript debemos utilizar este código ==> let nombre:string = "Óscar"; 

// Realiza un ejemplo con declaración de diferentes variables: texto, numéricas, booleanas, y de listas. Identifica correctamente el tipo de dato de cada una.

let nombreAlumno:string = "Óscar";
let edadAlumno:number = 19;
let notaAlumno:number = 7.5;
let aprobado:boolean = true;
let listaAsignaturas:string[] = ["Desarrollo de Entono Cliente", "Desarrollo de Entorno Servidor", "Despliegue de Aplicaciones Web", "Diseño de Interfaces Web"];

console.log("El valor de la variable nombreAlumno es " + nombreAlumno + " y es de tipo " + typeof(nombreAlumno));
console.log("El valor de la variable edadAlumno es " + edadAlumno + " y es de tipo " + typeof(edadAlumno));
console.log("El valor de la variable notaAlumno es " + notaAlumno + " y es de tipo " + typeof(notaAlumno));
console.log("El valor de la variable aprobado es " + aprobado + " y es de tipo " + typeof(aprobado));
console.log("El valor de la variable listaAsignaturas es " + listaAsignaturas + " y es de tipo " + typeof(listaAsignaturas));


// Explica la diferencia entre let,var, y const con un ejemplo

// Bloque de código realizado con var
// Explicación variables Var: Mediante la palabra reservada var creamos una variable local y se hereda a scopes diferentes. Si la variable se declara fuera de una función tendrá un ámbito global, aunque si creas una variable con var dentro de una funcion, no existirá fuera de esa función.
var edadPersona:number = 19;
console.log(edadPersona); // Su valor es 19

if(true){
    var edadPersona:number = 30;
    console.log(edadPersona); // Su valor es 30
}

console.log(edadPersona); // Su valor es 30

var textoPrueba:string = "Salida 1";
console.log(textoPrueba); // Su valor es "Salida 1"

if(true){
    var textoPrueba:string = "Salida 2"; 
    console.log(textoPrueba); // Su valor es "Salida 2"
}

console.log(textoPrueba); // Su valor es "Salida 2"


// Bloque de código realizado con let
// Explicación variables let: Si declaras una variable con la palabra reservada let en un scope global o en una función, la variable siempre pertenecerá al ámbito en el que la variable haya sido creada. Por ejemplo si creamos una variable con let en un ámbito global (fuera de una función), la variable tendrá un ámbito global. Pero si dentro de una función creamos una variable con el mismo nombre y cambiamos su valor, ese valor solo podremos utilizarlo dentro de ese bloque de código. Cuando salgamos de ese bloque de código la variable volverá a tener el valor global.
let edadPersona1:number = 19;
console.log(edadPersona1); // Su valor es 19

if(true){
    let edadPersona1:number = 30;
    console.log(edadPersona1); // Su valor es 30
}

console.log(edadPersona1); // Su valor es 19

let textoPrueba1:string = "Salida 1";
console.log(textoPrueba1); // Su valor es "Salida 1"

if(true){
    let textoPrueba1:string = "Salida 2";
    console.log(textoPrueba1); // Su valor es "Salida 2"
}

console.log(textoPrueba1); // Su valor es "Salida 1"


// Bloque de código realizado con const
const numeroPi = 3.14;
console.log("El número pi es " + numeroPi); // Su valor es 3.14

// Las líneas de código escritas debajo no funcionarían debido a que const representa un valor constante que siempre tiene que ser el mismo, no puede ser modificado.

//numeroPi = 3.16;
//console.log(numeroPi);