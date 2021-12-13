// Comunicación síncrona: Un proceso desencadenado no va a permitir ejecutar otro hasta que este haya finalizado
let numero:number = 5;
if(numero == 1){
    console.log("El numero es 1");
}

if(numero == 2){
    console.log("El numero es 2");
}

if(numero == 3){
    console.log("El numero es 3");
}

if(numero == 4){
    console.log("El numero es 4");
}

if(numero == 5){
    console.log("El numero es 5");
}

// Comunicación asíncrona: Un proceso desencadenado si puede permitir ejecutar otro aunque no haya finalizado
async function funcionAsincrona() {
    try {
        var variable = await mostrarNombre();
        console.log(variable);
    }
    catch (err) {
        console.log('Error: ', err.message);
    }
}

// Promesa conectandose a una fuente de datos
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called:', res === 123); // Devuelve: true
});
promise.catch((err) => {
    // Nuca es utilizado
});


// Funciones
function mostrarNombre() {
    console.log("Óscar");

}

