export class Vehicle {

    constructor (type) {
        this.type = type;
    }

    getType() {
        return `${this.type}`;
    }
}

class Car extends Vehicle {

    numberOfWheels = 4;

    constructor (type, name) {
        super(type);
        this.name = name;
        
    }

    showInfo () {
        console.log(`I am a ${this.type}, my name is ${this.name} and i have ${this.numberOfWheels} wheels.`)
    }
}

const car = new Vehicle("Traktor");
car.getType();
console.log(car.getType());

const car2 = new Car("Traktor", "Janusz");
car2.showInfo();