


class Transport {

    name;
    model;
    maxSpeed;
    seatsCount;

    constructor(name, model, maxSpeed, seatsCount) {
        this.name = name;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.seatsCount = seatsCount;
        console.log(`I am a ${name}. My model is ${model} and my maximum speed is ${maxSpeed} km/h. The number of seats reserved for passengers is  ${seatsCount}...`);
    }

    move() {
        console.log(`The ${this.name} is moving`);
    }

}

class Cars extends Transport {
    #wheel = 4;
    #doors = 4;

    constructor(name, model, maxSpeed, seatsCount) {
        super(name, model, maxSpeed, seatsCount);
    }

    drive() {
        console.log(`I am driven...I have  ${this.#wheel} wheel. And I have  ${this.#doors} doors . `);
    }

    set Doors(doorsCount) {
        this.#doors = doorsCount;
    }
    get Doors() {
        return this.#doors;
    }

}

class Trains extends Transport {
    wagon;

    constructor(name, model, maxSpeed, seatsCount, wagon) {
        super(name, model, maxSpeed, seatsCount);
        this.wagon = wagon;
    }
    addition() {
        console.log(` I have typically  ${this.wagon} wagons. `);
    }

}

class Airplains extends Transport {

    #wings = 2;

    constructor(name, model, maxSpeed, seatsCount) {
        super(name, model, maxSpeed, seatsCount);
    }
    fly() {
        console.log(`I am flying.... I have  ${this.#wings} wings. `);
    }

}

class Ships extends Transport {

    #propeller = 1;

    constructor(name, model, maxSpeed, seatsCount) {
        super(name, model, maxSpeed, seatsCount);
    }

    set Propeller(propellerCount) {
        this.#propeller = propellerCount;
    }
    get Propeller() {
        return this.#propeller;
    }

    sail() {
        console.log(`I am sailing... I have  ${this.#propeller} propeller. `);
    }
}

class Bicycle extends Transport {
    wheel;
    #pedals = 2;

    constructor(name, model, maxSpeed, seatsCount, wheel) {
        super(name, model, maxSpeed, seatsCount);
        this.wheel = wheel;
    }
    drive() {
        console.log(`I have  ${this.wheel} wheel and I have  ${this.#pedals} pedals.`);
    }
}

console.log("CARS");

let car1 = new Cars("car", "BMW M5", 250, 4);
car1.drive();
let car2 = new Cars("car", "Porsche 911 Turbo S", 330, 3);
car2.Doors = 2;
car2.drive();

console.log(" ");
console.log("TRAINS");

let train = new Trains("train", "Shinkansen (Japan) N700", 300, 1500, 16);
train.addition();
train.move();

console.log(" ");
console.log("AIRPLANES");

let airplane = new Airplains("airplane", "Gulfstream G650", 1140, 19);
airplane.fly();

console.log(" ");
console.log("SHIPS");

let ship = new Ships("ship", "Norwegian Encore (Norwegian Cruise Line)", 4000, 19);
ship.Propeller = 2;
ship.sail();

console.log(" ");
console.log("BICYCLE");

let bicycle = new Bicycle("bicycle", "Cannondale Quick", 40, 0);
bicycle.drive();
bicycle.move();



