// Crea una clase llamada Animal. Esta clase tiene como propiedades nombreAnimal, numeroPatas, carnivoro y edad.
class Animal{
    private nombreAnimal:string;
    private numeroPatas:number;
    private carnivoro:boolean;
    private edad:number;

    constructor(nombreAnimal:string, numeroPatas:number, carnivoro:boolean, edad:number){
        this.nombreAnimal = nombreAnimal;
        this.numeroPatas = numeroPatas;
        this.carnivoro = carnivoro;
        this.edad = edad;
    }

    public setnombreAnimal(nombreAnimal:string):any{
        this.nombreAnimal = nombreAnimal
    }

    public setnumeroPatas(numeroPatas:number):any{
        this.numeroPatas = numeroPatas
    }

    public setCarnivoro(carnivoro:boolean):any{
        this.carnivoro= carnivoro
    }

    public setEdad(edad:number):any{
        this.edad = edad
    }


}


// Crea un array que guarde tres animales y los muestras en una caja de texto
let animal1:object = new Animal("Perro", 4, true, 10);
let animal2:object = new Animal("Gato", 4, true, 5);
let animal3:object = new Animal("Nutria", 4, true, 3);
let listaAnimales:object[] = [animal1, animal2, animal3];

console.log(listaAnimales);

let caja = document.getElementById("cajaTexto");
console.log(caja);

caja.innerHTML = "El animal1 es " + animal1 + " y el animal2 es " + animal2 + " y el animal3 es " + animal3;