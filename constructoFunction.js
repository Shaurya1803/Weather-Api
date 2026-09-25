
//constructor function
function Person (name, age ){
    this.name = name
    this.age = age

}


function Car( make , model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", " Camry");
// console.log(myCar);

let myNewcar = new Car("Tata", "safari");
// console.log(myNewcar);


function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}


let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());


function Animal(spicies){
    this.species= spicies
    
}


Animal.prototype.sound= function(){
    return `${this.species} make the sound`
}


let dog = new Animal("Dog");
// console.log(dog.sound());



function Drink(name){

    if(!new.target){
    throw new Error("Drink must be called with new ");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = new Drink("coffee")
console.log(coffee);


