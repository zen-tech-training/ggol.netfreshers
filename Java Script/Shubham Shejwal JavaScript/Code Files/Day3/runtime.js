// Base class Vehicle
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

// Derived class Car
function Car(make, model) {
    Vehicle.call(this, make, model); // Call base class constructor
    this.wheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Derived class Bike
function Bike(make, model) {
    Vehicle.call(this, make, model); // Call base class constructor
    this.wheels = 2;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

// Instantiate Car and Bike
var carObj = new Car('Toyota', 'Camry');
var bikeObj = new Bike('Honda', 'CBR');

console.log(carObj); // Check Car object
console.log(bikeObj); // Check Bike object

// Check type of Car and Bike objects
console.log(typeof carObj); // "object"
console.log(typeof bikeObj); // "object"

// Check instanceof relationships
console.log(carObj instanceof Vehicle); // true (Car is a Vehicle)
console.log(carObj instanceof Car);     // true (Car is an instance of Car)
console.log(carObj instanceof Bike);    // false (Car is not a Bike)

console.log(bikeObj instanceof Vehicle); // true (Bike is a Vehicle)
console.log(bikeObj instanceof Car);     // false (Bike is not a Car)
console.log(bikeObj instanceof Bike);    // true (Bike is an instance of Bike)

// Check constructor property
console.log(carObj.constructor === Vehicle); // false (CarObject.constructor is Car)
console.log(carObj.constructor === Car);     // true
console.log(carObj.constructor === Bike);    // false

console.log(bikeObj.constructor === Vehicle); // false (BikeObject.constructor is Bike)
console.log(bikeObj.constructor === Car);     // false
console.log(bikeObj.constructor === Bike);    // true

// Check prototype relationships
console.log(Object.getPrototypeOf(carObj) === Car.prototype);    // true
console.log(Object.getPrototypeOf(carObj) === Vehicle.prototype); // false

console.log(Object.getPrototypeOf(bikeObj) === Bike.prototype);    // true
console.log(Object.getPrototypeOf(bikeObj) === Vehicle.prototype); // false