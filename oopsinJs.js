let car ={
    make : "toyota",
    model: "camry",
    year : 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    } ,
}

// console.log(car.start());


// prototype chain

function Animal(type){
    this.type = type
}

Animal.prototype.sound =  function(){
    return `${this.type} make the sound`
}

let dog = new Animal("dog");
// console.log(dog.sound());



class vehichal{
    constructor( make, model){
        this.make = make
        this.model = model
    }
    start(){
    return `${this.make} is a car form ${this.model}`;
}
}


class Car extends vehichal{
    drive(){
        return `${this.make} :this is an inheritance exmple`;
    }
}


let myCar = new Car("toyota", "city");
// console.log(myCar.start()); 




// encapsulation ************
class BankAccount {
    #balance = 0;

    deposit( amount){
        this.#balance+= amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance} is your current balance`;
    }
}

let account = new BankAccount();
account.deposit(4000);
//    console.log( account.getBalance());


   // Abstraction 
//    hide the complex implimentaion details;

class CoffeeMachine{
    start(){
        return `starting the machine`
    }
    brewCoffee(){
        return ` Brewing the coffee`
    }
}


let myCoffee = new CoffeeMachine();
// console.log(myCoffee.brewCoffee());

// polymorphism**
class Bird{
    fly(){
        return  `flying...`
    }
}

class Penuin extends Bird{
    fly(){
        return `penguin can't fly`
    }
}

let bird = new Bird();
let penguin = new Penuin();

// console.log(bird.fly());
// console.log(penguin.fly());



// static method 
class Calculator {
    static add(a, b ){
        return a+b
    }
}

// let minicla = new Calculator();
// console.log(minicla.add(2,3));

// console.log(Calculator.add(2,3));


// setter and getter function 
class Employee{
    #salary
    constructor(name, salary){
        this.name = name 
        this.#salary = salary

    }
    get salary(){
        return `you are not allow to see the salary `;
    }

    set salary(value ){
        if(value < 0 ){
            console.error("indvalid salary")

        }else{
            this. salary = value;

        }
    }
}

let emp = new Employee("alice", 20000);
console.log(emp.salary);