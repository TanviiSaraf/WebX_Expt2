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
// Base class with access specifiers
var Engine = /** @class */ (function () {
    function Engine(fuel) {
        this.fuel = fuel;
    }
    Engine.prototype.ignite = function () {
        console.log("Igniting the ".concat(this.fuel, " engine"));
    };
    return Engine;
}());
// Derived class that inherits from Engine and implements Vehicle interface
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, fuel) {
        var _this = _super.call(this, fuel) || this;
        _this.brand = brand;
        return _this;
    }
    Car.prototype.start = function () {
        this.ignite();
        console.log("".concat(this.brand, " car is started"));
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.brand, " car is stopped"));
    };
    Car.prototype.drive = function () {
        console.log("".concat(this.brand, " car is on the move"));
    };
    return Car;
}(Engine));
// Create an instance of the Car class
var myCar = new Car('Toyota', 'Petrol');
// Accessing public methods
myCar.start();
myCar.drive();
myCar.stop();
