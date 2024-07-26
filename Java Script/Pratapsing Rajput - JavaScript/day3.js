/******************** Function Overloading ********************/

/*
1. Write an overloaded function in javascript that would take care of

Addition of 2 numbers
Addition of 3 numbers and
Addition of 4 numbers.
*/

function add() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length == 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else if (arguments.length === 4) {
    return arguments[0] + arguments[1] + arguments[2] + arguments[3];
  } else {
    throw new Error("Invalid number of arguments");
  }
}

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));

/*
2. Write an overloaded function in javascript that would take care of

· Function with two strings
· Function with two numbers
· Function with three numbers
· Function with one String and one number
· And common implementation for the rest of all combinations.
*/

function overloadedFunction() {
  if (arguments.length === 2) {
    if (typeof arguments[0] === "string" && typeof arguments[1] === "string") {
      return `Two strings: ${arguments[0]} and ${arguments[1]}`;
    } else if (
      typeof arguments[0] === "number" &&
      typeof arguments[1] === "number"
    ) {
      return `Sum of two numbers: ${arguments[0] + arguments[1]}`;
    } else if (
      (typeof arguments[0] === "string" && typeof arguments[1] === "number") ||
      (typeof arguments[0] === "number" && typeof arguments[1] === "string")
    ) {
      return `String and number: ${arguments[0]} and ${arguments[1]}`;
    } else {
      return `Default implementation for: ${arguments[0]} and ${arguments[1]}`;
    }
  } else if (
    arguments.length === 3 &&
    typeof arguments[0] === "number" &&
    typeof arguments[1] === "number" &&
    typeof arguments[2] === "number"
  ) {
    // Function with three numbers
    return `Sum of three numbers: ${
      arguments[0] + arguments[1] + arguments[2]
    }`;
  } else {
    return "Default implementation for other combinations";
  }
}

console.log(overloadedFunction("Hello", "World"));
console.log(overloadedFunction(1, 2));
console.log(overloadedFunction(1, 2, 3));
console.log(overloadedFunction("Hello", 5));
console.log(overloadedFunction(5, "Hello"));
console.log(overloadedFunction("Hello", "World", "!"));
console.log(overloadedFunction(1));
console.log(overloadedFunction(1, 2, "3"));

/******************** Dunder Proto, Object.create and Object.setPrototypeOf and Object.getPrototypeOf ********************/

/*
1. Create Pseudo classical Inheritance by using Object.create and Object.setPrototypeOf for

Human – Base / Super Class
name – string

Prototype Level Method
Speak
Introduction

Student
College – string
Courses – string []

Prototype Level Method
Introduction (overridden)
takeExams
*/

function Human(name) {
  this.name = name;
}

Human.prototype.speak = function () {
  console.log(`${this.name} is speaking.`);
};

Human.prototype.introduction = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

function Student(name, college, courses) {
  Human.call(this, name);
  this.college = college;
  this.courses = courses;
}

Student.prototype = Object.create(Human.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduction = function () {
  console.log(
    `Hello, my name is ${this.name} and I study at ${
      this.college
    }. I am taking the following courses: ${this.courses.join(", ")}.`
  );
};

Student.prototype.takeExams = function () {
  console.log(
    `${this.name} is taking exams for courses: ${this.courses.join(", ")}.`
  );
};
// Create  Human instance
const human = new Human("Alice");
human.speak();
human.introduction();

// Create  Student instance
const student = new Student("Pratap", "VIIT", ["Math", "C++", "JavaScript"]);
student.speak();
student.introduction();
student.takeExams();

/*
2. Create a Class Hierarchy between

Person – Base / Super
Developer - Derived / Sub
Display Both objects / classes prototype, __proto__ and getPrototypeO
*/

// Person constructor function
function Person(name) {
  this.name = name;
}

// Developer constructor function
function Developer(name, language) {
  Person.call(this, name);
  this.language = language;
}

// Inherit Person's prototype
Developer.prototype = Object.create(Person.prototype);
Object.setPrototypeOf(Developer.prototype, Person.prototype);

// Example usage
const person = new Person("Pratap");
const developer = new Developer("Ishani", "JavaScript");

console.log(person.__proto__);
console.log(developer.__proto__);
console.log(Object.getPrototypeOf(developer));

/******************** Module Pattern ********************/

/*
1. Create a Shopping Cart Module, which would allow user to deal with cart data,

Product in Shopping Cart would be with following details.
    productId, name, price, quantity

Methods provided by Module are,
    addItem – Add Item would add one product item, if again called for the same product
    id, it would increase the quantity.
    removeItem – Remove product (all quantities by product id)
    getAllItems – Get all products details.
    getTotalPrice - Total Price of all items in the cart
*/

const ShoppingCart = (function () {
  const cart = [];

  function findItem(productId) {
    return cart.find((item) => item.productId === productId);
  }

  // Self invoking function should always be used here
  return {
    addItem: function (productId, name, price, quantity = 1) {
      const existingItem = findItem(productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({ productId, name, price, quantity });
      }
    },

    removeItem: function (productId) {
      const index = cart.findIndex((item) => item.productId === productId);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    },

    getAllItems: function () {
      return cart.slice();
    },

    getTotalPrice: function () {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  };
})();

ShoppingCart.addItem(1, "Apple", 0.5, 3);
ShoppingCart.addItem(2, "Banana", 0.3, 2);
ShoppingCart.addItem(1, "Apple", 0.5, 1);

console.log(ShoppingCart.getAllItems());

ShoppingCart.removeItem(2);

console.log(ShoppingCart.getAllItems());
console.log(ShoppingCart.getTotalPrice());

/*
1. Go for Base class Vehicle.

function Vehicle (make, model) {
    this.make = make;
    this.model = model;
}

And 2 derived classes

function Car (make, model) {
    this.wheels = 4;
}

function Bike (make, model) {
    this.wheels = 2;
}

Do the inheritance with Vehicle and Car as well as on Vehicle and Bike

Instantiate Car and Bike

· Use type of to check the type of the Car and Bike Object
· Use instance of to check Car Object is of type Vehicle, Car, or Bike
· Use instance of to check Bike Object is of type Vehicle, Car, or Bike

Use constructor property to see whether,

· CarObject.constructor property pointing to also check whether,
· BikeObject.constructor property pointing to

Also check,

· getPrototypeOf(carObj) is equal to Car.Prototype and
· getPrototypeOf(bikeObj) is equal to Bike.Prototype
*/

// Base class Vehicle
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

// Derived class Car
function Car(make, model) {
  Vehicle.call(this, make, model);
  this.wheels = 4;
}

// Inherit Vehicle's prototype
Car.prototype = Object.create(Vehicle.prototype);
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

// Derived class Bike
function Bike(make, model) {
  Vehicle.call(this, make, model);
  this.wheels = 2;
}

// Inherit Vehicle's prototype
Bike.prototype = Object.create(Vehicle.prototype);
Object.setPrototypeOf(Bike.prototype, Vehicle.prototype);

// Instantiate Car and Bike
const carObj = new Car("Mercedes", "G-Wagon");
const bikeObj = new Bike("Suzuki", "Hayabusa");

// Use typeof to check this type
console.log(typeof carObj);
console.log(typeof bikeObj);

// Use instanceof to check types
console.log(carObj instanceof Vehicle);
console.log(carObj instanceof Car);
console.log(carObj instanceof Bike);

console.log(bikeObj instanceof Vehicle);
console.log(bikeObj instanceof Car);
console.log(bikeObj instanceof Bike);

// Use constructor property
console.log(carObj.constructor === Car);
console.log(bikeObj.constructor === Bike);

// Use constructor property
console.log(Object.getPrototypeOf(carObj) === Car.prototype);
console.log(Object.getPrototypeOf(bikeObj) === Bike.prototype);
