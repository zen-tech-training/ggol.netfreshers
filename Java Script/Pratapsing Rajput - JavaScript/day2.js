//********************* Javascript Object Oriented Programming *********************//

/*
1: Creating and Using Objects

Create a Simple Object:
- Create an object `car` with properties `make`, `model`, and `year`.
- Add a method `getCarInfo` that returns a string with the car's information.
*/
const car = {
  name: "Mercedes",
  model: "Maybach",
  year: 2021,
  getCarInfo() {
    return `${this.name} ${this.model} ${this.year}`;
  },
};

console.log(car.getCarInfo());

/*
2: Prototypal Inheritance

Animal and Dog Classes:
- Create a constructor function `Animal` with properties `name` and `sound`.
- Add a method `makeSound` to the `Animal` prototype that logs the sound.
- Create a constructor function `Dog` that inherits from `Animal`.
- Add a method `fetch` to the `Dog` prototype.
*/

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, name, sound);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function () {
  console.log(`${this.name} is fetching!`);
};

const myDog = new Dog("Rex", "Woof!");
myDog.makeSound();
myDog.fetch();

/*
3: Encapsulation and Private Variables

Bank Account:
- Create a constructor function `BankAccount` with a private variable `balance`.
- Add methods `deposit`, `withdraw`, and `getBalance` to manage the balance.
*/

// BankAccount constructor function
function BankAccount(initialBalance) {
  let balance = initialBalance;

  // Method to deposit money
  this.deposit = function (amount) {
    balance += amount;
  };

  // Method to withdraw money
  this.withdraw = function (amount) {
    if (amount <= balance) {
      balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  };

  // Method to got curent balance
  this.getBalance = function () {
    return balance;
  };
}

// Example usage
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(300);
console.log(myAccount.getBalance()); // 1200

/*
4: Polymorphism

Shapes:
- Create a base constructor function `Shape` with a method `getArea` that returns 0.
- Create derived constructor functions `Circle` and `Rectangle` that override the `getArea` method to calculate the area of the shape.
*/

// Shapes:

// Base Shape constructor function
function Shape() {}

// Method to get area (default returns 0)
Shape.prototype.getArea = function () {
  return 0;
};

// Circle constructor function
function Circle(radius) {
  this.radius = radius;
}

// Inherit Shape's prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Override getArea method
Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

// Rectangle constructor function
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Inherit Shape's prototype
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Override getArea method
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

// Example usage
const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);
console.log(circle.getArea()); // 314.1592653589793
console.log(rectangle.getArea()); // 200

/*
5: Inheritance with Method Overriding

Vehicle and Car:
- Create a constructor function `Vehicle` with properties `make`, `model`, and `year`.
- Add a method `getDetails` to the `Vehicle` prototype that returns a string with the vehicle's details.
- Create a constructor function `Car` that inherits from `Vehicle` and adds a property `doors`.
- Override the `getDetails` method in the `Car` prototype to include the number of doors.
*/

// Vehicle constructor function
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Method to get vehicle details
Vehicle.prototype.getDetails = function () {
  return `${this.make} ${this.model} ${this.year}`;
};

function Car(make, model, year, doors) {
  Vehicle.call(this, make, model, year);
  this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Override getDetails method
Car.prototype.getDetails = function () {
  return `${Vehicle.prototype.getDetails.call(this)}, ${this.doors} doors`;
};

// Example usage
const myCar = new Car("BMW", "M8", 2022, 2);
console.log(myCar.getDetails());

/*
6: Creating and Using Static Methods

Math Utilities:

- Create a constructor function `MathUtil`.
- Add a static method `add` that takes two numbers and returns their sum.
- Add a static method `subtract` that takes two numbers and returns their difference.
- Add a static method `multiply` that takes two numbers and returns their product.
- Add a static method `divide` that takes two numbers and returns their quotient.
*/

function MathUtil() {}

MathUtil.add = function (a, b) {
  return a + b;
};

MathUtil.subtract = function (a, b) {
  return a - b;
};

MathUtil.mult = function (a, b) {
  return a * b;
};

MathUtil.divide = function (a, b) {
  if (b === 0) {
    throw new Error("Can't divide by zero");
  }
  return a / b;
};

// Example usage
console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.subtract(5, 3)); // 2
console.log(MathUtil.mult(5, 3)); // 15
console.log(MathUtil.divide(5, 3)); // 1.6666666666666667

/*
7: Using Getters and Setters

Book:
- Create a constructor function `Book` with properties `title`, `author`, and `year`.
- Add a getter method `getSummary` that returns a summary string of the book.
- Add a setter method `setYear` that updates the year and logs a message when the year is set.
*/
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this._year = year;
}

// Getter method to get a summary of the book
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Define getter and setter for year
Object.defineProperty(Book.prototype, "year", {
  get: function () {
    return this._year;
  },
  set: function (newYear) {
    this._year = newYear;
    console.log(`Year updated to ${newYear}`);
  },
});

// Example usage
const myBook = new Book("1984", "George Orwell", 1949);
console.log(myBook.getSummary());
myBook.year = 1950;
console.log(myBook.getSummary());

/*
8: Composition Over Inheritance

User with Address:
- Create a constructor function `User` with properties `username` and `password`.
- Create a constructor function `Address` with properties `street`, `city`, and `country`.
- Add an `address` property to the `User` constructor that holds an `Address` instance.
- Add a method `getAddress` to the `User` prototype that returns the user's address as a formatted string.
*/

// Constructor function for Address
function Address(street, city, country) {
  this.street = street;
  this.city = city;
  this.country = country;
}

// Constructor function for User
function User(username, password, address) {
  this.username = username;
  this.password = password;
  this.address = address;
}

// Add getAddress method to User prototype
User.prototype.getAddress = function () {
  return `${this.address.street}, ${this.address.city}, ${this.address.country}`;
};

// Example usage
let myAddress = new Address("123 Main St", "Springfield", "USA");
let myUser = new User("john_doe", "securepassword", myAddress);

console.log(myUser.getAddress()); // Output: 123 Main St, Springfield, USA

/*
9: Implementing Polymorphism

Shape and Specific Shapes:
- Create a constructor function `Shape` with a method `getArea` that returns 0.
- Create a constructor function `Square` that inherits from `Shape` and has a property `sideLength`.
- Override the `getArea` method in `Square` to return the area of the square.
- Create a constructor function `Triangle` that inherits from `Shape` and has properties `base` and `height`.
- Override the `getArea` method in `Triangle` to return the area of the triangle.
*/

// Base constructor function Shape
function Shape() {}

// Add getArea method to Shape prototype
Shape.prototype.getArea = function () {
  return 0;
};

// Constructor function for Square
function Square(sideLength) {
  this.sideLength = sideLength;
}

// Inherit from Shape
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// Override getArea method for Square
Square.prototype.getArea = function () {
  return this.sideLength * this.sideLength;
};

// Constructor function for Triangle
function Triangle(base, height) {
  this.base = base;
  this.height = height;
}

// Inherit from Shape
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// Override getArea method for Triangle
Triangle.prototype.getArea = function () {
  return 0.5 * this.base * this.height;
};

// Example usage
let shape1 = new Shape();
// console.log(shape1.getArea()); // Output: 0

let square = new Square(4);
// console.log(square.getArea()); // Output: 16

let triangle = new Triangle(4, 5);
// console.log(triangle.getArea()); // Output: 10

/*
10: Using Mixins

Flyable and Swimmable Mixins :
- Create a mixin `Flyable` that adds a method `fly` to an object.
- Create a mixin `Swimmable` that adds a method `swim` to an object.
- Create a constructor function `Duck` that uses both mixin
*/

// Flyable mixin
let Flyable = {
  fly: function () {
    console.log(`${this.name} is flying!`);
  },
};

// Swimmable mixin
let Swimmable = {
  swim: function () {
    console.log(`${this.name} is swimming!`);
  },
};

// Constructor function for Duck
function Duck(name) {
  this.name = name;
}

// Apply the mixins to Duck prototype
Object.assign(Duck.prototype, Flyable);
Object.assign(Duck.prototype, Swimmable);

// Example usage
let myDuck = new Duck("Donald duck");
myDuck.fly(); // Output: Donald duck is flying!
myDuck.swim(); // Output: Donald duck is swimming!
