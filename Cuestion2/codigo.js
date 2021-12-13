// Crea una clase llamada Animal. Esta clase tiene como propiedades nombreAnimal, numeroPatas, carnivoro y edad.
var Animal = /** @class */ (function () {
    function Animal(nombreAnimal, numeroPatas, carnivoro, edad) {
        this.nombreAnimal = nombreAnimal;
        this.numeroPatas = numeroPatas;
        this.carnivoro = carnivoro;
        this.edad = edad;
    }
    Animal.prototype.setnombreAnimal = function (nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    };
    Animal.prototype.setnumeroPatas = function (numeroPatas) {
        this.numeroPatas = numeroPatas;
    };
    Animal.prototype.setCarnivoro = function (carnivoro) {
        this.carnivoro = carnivoro;
    };
    Animal.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Animal;
}());
// Crea un array que guarde tres animales y los muestras en una caja de texto
var animal1 = new Animal("Perro", 4, true, 10);
var animal2 = new Animal("Gato", 4, true, 5);
var animal3 = new Animal("Nutria", 4, true, 3);
var listaAnimales = [animal1, animal2, animal3];
console.log(listaAnimales);
var caja = document.getElementById("cajaTexto");
console.log(caja);
caja.innerHTML = "El animal1 es " + animal1 + " y el animal2 es " + animal2 + " y el animal3 es " + animal3;
