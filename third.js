var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define a class with access specifiers and implementing Shape interface
var Rectangle = /** @class */ (function () {
    // Constructor
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // Public method to calculate area
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Derived class with inheritance
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    // Constructor
    function Square(side) {
        // Call the constructor of the base class
        return _super.call(this, side, side) || this;
    }
    return Square;
}(Rectangle));
// Create instances
var rectangle = new Rectangle(5, 10);
var square = new Square(5);
// Calculate and display areas
console.log("Rectangle Area:", rectangle.calculateArea()); // 50
console.log("Square Area:", square.calculateArea()); // 25
