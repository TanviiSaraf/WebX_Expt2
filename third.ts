// Define an interface
interface Vehicle {
    start(): void;
    stop(): void;
}

// Base class with access specifiers
class Engine {
    private fuel: string;

    constructor(fuel: string) {
        this.fuel = fuel;
    }

    protected ignite(): void {
        console.log(`Igniting the ${this.fuel} engine`);
    }
}

// Derived class that inherits from Engine and implements Vehicle interface
class Car extends Engine implements Vehicle {
    private brand: string;

    constructor(brand: string, fuel: string) {
        super(fuel);
        this.brand = brand;
    }

    start(): void {
        this.ignite();
        console.log(`${this.brand} car is started`);
    }

    stop(): void {
        console.log(`${this.brand} car is stopped`);
    }

    drive(): void {
        console.log(`${this.brand} car is on the move`);
    }
}

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Petrol');

// Accessing public methods
myCar.start();
myCar.drive();
myCar.stop();
