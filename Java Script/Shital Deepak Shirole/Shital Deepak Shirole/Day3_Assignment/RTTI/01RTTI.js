function vehicle(make,model){
    this.make=make;
    this.model=model;
}

Car.prototype=Object.create(vehicle.prototype);
Car.prototype.constructor=Car;

function Car (make, model) {
    vehicle.call(this,make.model);
    this.wheels = 4;
}

Bike.prototype=Object.create(vehicle.prototype);
Bike.prototype.constructor=Bike;

function Bike (make, model) {
    vehicle.call(this,make.model);
    this.wheels = 2;
}

let carobj=new Car("toyota","corolla");
let bikeobj=new Bike("Yamah","MY-09");

// Use type of to check the type of the Car and Bike Object:
// check why it is Object type -wrong here
console.log(typeof carobj);
console.log(typeof bikeobj);

// Use instance of to check Car Object is of type Vehicle, Car, or Bike 
console.log(carobj instanceof vehicle);
console.log(carobj instanceof Car);
console.log(carobj instanceof Bike);

// // Use instance of to check Bike Object is of type Vehicle, Car, or Bike 
console.log(bikeobj instanceof vehicle);
console.log(bikeobj instanceof Car);
console.log(bikeobj instanceof Bike);


// // Use constructor property to see whether,
// // CarObject.constructor property pointing to also check whether,
// // BikeObject.constructor property pointing to

console.log(carobj.constructor===Car);
console.log(bikeobj.constructor===Bike);

// // getPrototypeOf(carObj) is equal to Car.Prototype and 
// // getPrototypeOf(bikeObj) is equal to Bike.Prototype

console.log(Object.getPrototypeOf(carobj)===Car.prototype);
console.log(Object.getPrototypeOf(bikeobj)===Bike.prototype);

