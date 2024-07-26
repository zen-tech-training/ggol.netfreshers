//1 Creating and Using Objects
const car={
    name:"BMW",
    model:"R5",
    year:2021,
    color:"black",
    getCarInfo:function(){
        console.log("The car is "+this.name+" "+this.model+" of year "+this.year+" and color is "+this.color);
    }
}

car.getCarInfo()


//2 Prototypal Inheritance
function Animal(name,sound)
{
    this.name=name;
    this.sound=sound;

}

Animal.prototype.makeSound=function(){
    console.log(this.name +" is "+this.sound)
}
  
Dog.prototype=new Animal("Tommy","bark");
Dog.prototype.constructor=Dog;
 
function Dog()
{ 
    this.fetch=function(){
        console.log("Fetching");
    }

}


var a=new Dog();
a.fetch();
a.makeSound();

//3 Encapsulation and Private Variables

function BankAccount()
{
    var balance=100;

    this.deposit=function(amt){
        balance+=amt;
        
    }

    this.withdraw=function(amt){
        if(amt<=balance)
            {
                balance-=amt;
               
            }

            else console.log("insufficient balance");
    }


    this.getBalance=function(){
        console.log("Balance is "+balance);
    }
}

var bank= new BankAccount();
bank.getBalance();
bank.deposit(100);
bank.withdraw(50);
bank.getBalance();


//4 polymorphism

function Shape()
{
     
}

Shape.prototype.Area=function(){
    return 0;
}

Circle.prototype=new Animal(0);
Circle.prototype.constructor=Circle;

Rectangle.prototype=new Animal(0,0);
Rectangle.prototype.constructor=Rectangle;



function Circle(){}
function Rectangle(){}

Circle.prototype.Area=function(r){
    console.log("Area of circle is "+3.14*r*r)
}

Rectangle.prototype.Area=function(l,b){
    console.log("Area of Reactangle is "+l*b)
}

var c= new Circle();
c.Area(2);
var r = new Rectangle();
r.Area(2,3);

//5 Inheritance with Method Overriding

function Vehicle(model,year)
{
    this.model=model;
    this.year=year;
}

Vehicle.prototype.getDetails=function(){
    console.log(this.model+" " +this.year);
}

Car.prototype=new Vehicle("Audi",2018);
Car.prototype.constructor=Car;

function Car(model,year,doors)
{

    Vehicle.call(this,model,year);
    this.doors=doors;

}

Car.prototype.getDetails=function(){
    console.log(this.model+" " +this.year+" "+this.doors);
}


var v=new Vehicle("BMW",2020);
v.getDetails();
var c= new Car("BMW",2022,4);
c.getDetails();

//6Creating and Using Static Methods

function MathUtil(){
}

    //static
    MathUtil.Add=function(a,b){
         console.log("Addition is "+(a+b));
    }
    MathUtil.Subtract=function(a,b)
    {
         console.log("Subtraction is "+(a-b));
    }
    MathUtil.Multiply=function(a,b)
    {
         console.log("Multiplication is "+(a*b));
    }
    
    MathUtil.divide=function(a,b)
    {
         console.log("Division is "+(a/b));
    }

MathUtil.Add(2,2);
MathUtil.Subtract(2,2);
MathUtil.Multiply(2,2);
MathUtil.divide(2,2);

//7
function Book()
{
    var title="Deep work";
    var author="Cal Nelport";
    var year=2014;


    this.getSummary=function()
    {
        return ("The book is "+title +" "+author+" "+year);
    }


    this.setYear=function(y)
    {
        year=y;
    }
 

}

var b= new Book();
console.log(b.getSummary());
b.setYear(2013);
console.log(b.getSummary());


// 8: Composition Over Inheritance
function  User()
{
    this.username=username;
    this.password=password;
    

}


function Address()
{
    this.street=street;
    this.city=city;
    this.country=country;

}

User.prototype.getAddress=function(){
    return ("Address is "+this.street+" "+this.city+","+this.country);
}


//9
function Shape() {
    // No properties for Shape in this example
}


Shape.prototype.getArea = function() {
    return 0;
};


function Square(sideLength) {
    this.sideLength = sideLength;
}


Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;


Square.prototype.getArea = function() {
    return this.sideLength * this.sideLength;
};


function Triangle(base, height) {
    this.base = base;
    this.height = height;
}


Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// Override getArea method for Triangle
Triangle.prototype.getArea = function() {
    return 0.5 * this.base * this.height;
};


var square = new Square(5);
var triangle = new Triangle(4, 3);

console.log("Square Area:", square.getArea()); 
console.log("Triangle Area:", triangle.getArea()); 



//10 
var Flyable = {
    fly: function() {
        console.log("Flying!");
    }
};

var Swimmable = {
    swim: function() {
        console.log("Swimming!");
    }
};

function Duck(name) {
    this.name = name;
}

for (var mixin in Flyable) {
    Duck.prototype[mixin] = Flyable[mixin];
}

for (var mixin in Swimmable) {
    Duck.prototype[mixin] = Swimmable[mixin];
}

var duck = new Duck("Donald");

duck.fly(); 
duck.swim(); 