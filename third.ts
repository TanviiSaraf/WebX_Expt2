// Define an interface
interface Shape {
    calculateArea(): number;
}

// Define a class with access specifiers and implementing Shape interface
class Rectangle implements Shape {
    private width: number;
    private height: number;

    
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Public method to calculate area
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Derived class with inheritance
class Square extends Rectangle {
    
    constructor(side: number) {
        // Call the constructor of the base class
        super(side, side);
    }
}

// Create instances
const rectangle = new Rectangle(5, 10);
const square = new Square(5);

// Calculate and display areas
console.log("Rectangle Area:", rectangle.calculateArea()); 
console.log("Square Area:", square.calculateArea()); 
