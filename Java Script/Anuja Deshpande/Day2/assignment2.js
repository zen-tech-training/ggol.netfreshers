

//ps 1 

car = {
    make: 'Mustang',
    model: 'Shelby',
    year: '1997',
    getCarInfo: function(){
        return "Car Information - Make: " + this.make + " and Model: " + this.model + " year is: " + this.year;
    }
};

// console.log(car.getCarInfo());
//______________________________________________________________________________________________

//ps 2

function Animal(name, sound){

    this.name = name;
    this.sound = sound;

}

Animal.prototype.makeSound = function(){
    console.log("This animal " + this.name + " makes sound of " + this.sound);
}

function Dog(){};

Dog.prototype = new Animal('Mark', 'bark');
Dog.prototype.constructor = Dog;

// var mydog = new Dog();

// mydog.makeSound();

Dog.prototype.fetch = function(){
    console.log("Woof, I love to fetch!");
}

// mydog.fetch();

//______________________________________________________________________________________________


// ps 3

function BankAccount(){
    var balance = 0;

    this.deposit = function(amount){
        console.log("Your balance is: " + balance + " and you are adding amount of: " + amount);
        balance += amount;
        console.log("Balance after transaction: " + balance);
    }

    this.withdrawal = function(amount){
        console.log("Your balance is: " + balance + " and you are withdrawing amount of: " + amount);
        balance -= amount;
        console.log("Balance after transaction: " + balance);
    }

    this.getBalance = function(){
        console.log("Current Account balance is: " + balance);
    }
}

var acc1 = new BankAccount();
// acc1.deposit(5000);
// acc1.withdrawal(100);
// acc1.getBalance();

//______________________________________________________________________________________________


// ps 4

// was this supposed to be classical or prototypal?

function Shape(){

    this.default = 'default';

    // this.getArea = function(){
    //     return 0;
    // }
}

Shape.prototype.getArea = function(){
    return 0;
}

function Circle(radius){
    Shape.call(this);

    this.radius = radius;

    // this.getArea = function(){
    //     return 3.14 * this.radius * this.radius;
    // }
}

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;

Circle.prototype.getArea = function(){
    return 3.14 * this.radius * this.radius;
}

function Rectangle(len, breadth){
    Shape.call(this);

    this.len = len;
    this.breadth = breadth;

    // this.getArea = function(){
    //     return this.len * this.breadth;
    // }
}

Rectangle.prototype.getArea = function(){
    return this.len * this.breadth;
}

var myshape = new Shape();
var circ1 = new Circle(10);
var rectangle1 = new Rectangle(10,10);

// console.log(myshape.getArea());
// console.log(circ1.getArea());
// console.log(rectangle1.getArea());
// console.log(circ1.default);

//______________________________________________________________________________________________


// ps 5

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getDetails = function(){
    return "Vehicle Information - Make: " + this.make + " and Model: " + this.model + " year is: " + this.year;
}

function Car(doors, make, model, year){

    Vehicle.call(this, make, model, year);
    this.doors = doors;

}

Car.prototype.getDetails = function(){
    return "Car Information - Make: " + this.make + " and Model: " + this.model + " year is: " + this.year + " and number of doors: " + this.doors;
}

var vehicle1 = new Vehicle('Fiat', '11', 1990);
var car1 = new Car(4, 'BMW', '7 Sedan', 2010);

// console.log(vehicle1.getDetails());
// console.log(car1.getDetails());

//______________________________________________________________________________________________


// ps 6

function MathUtils(){

}

MathUtils.add = function(a,b){
    return a+b;
}

MathUtils.subtract = function(a,b){
    return a-b;
}

MathUtils.multiply = function(a,b){
    return a*b;
}

MathUtils.divide = function(a,b){
    return a/b;
}

// console.log(MathUtils.add(2,3));
// console.log(MathUtils.subtract(2,3));
// console.log(MathUtils.multiply(2,3));
// console.log(MathUtils.divide(6,3));

//______________________________________________________________________________________________


// ps 7

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return "Title of your book is: " + this.title + " and author is: " + this.author + " and year is: " + this.year;
    }

    this.setYear = function(year){
        this.year = year;

        console.log("Year updated to: " + year + " for the book - " + this.title);
    }
}

var book1 = new Book('Harry Potter', 'J.K Rowling', '1990');
// console.log(book1.getSummary());
// book1.setYear(2000);


//______________________________________________________________________________________________


// ps 9

function Shape(){

}

Shape.prototype.getArea = function(){
    return 0;
}

function Square(sideLength){
    this.sideLength = sideLength;
}

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype.getArea = function(){
    return this.sideLength * this.sideLength;
}

function Triangle(base, height){
    this.base = base;
    this.height = height;
}

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function(){
    return 0.5 * this.base * this.height;
}

var shape1 = new Shape();
var sq1 = new Square(10);
var tr1 = new Triangle(10,10);

// console.log(shape1.getArea());
// console.log(sq1.getArea());
// console.log(tr1.getArea());

//______________________________________________________________________________________________


// ps 8

function User(username, password, address){
    this.username = username;
    this.password = password;
    this.address = address;
}

User.prototype.getAddress = function(){
    return "User " + this.username + "'s address is: " + this.address.street + " " + this.address.city + " " + this.address.country;
}

function Address(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
}

var addr = new Address('Lowell', 'Mumbai', 'India');
var user1 = new User('Diana', '1234', addr);

// console.log(user1.getAddress());


//______________________________________________________________________________________________


// ps 10

var Flyable = {
    fly(){
        console.log("Imma fly");
    }
}

var Swimmable = {
    swim(){
        console.log("Imma swim");
    }
}

function Duck(){

}

Duck.prototype.fly = Flyable.fly;
Duck.prototype.swim = Swimmable.swim;

var duck1 = new Duck();
duck1.fly();
duck1.swim();