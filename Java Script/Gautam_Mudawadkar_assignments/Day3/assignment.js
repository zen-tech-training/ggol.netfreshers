//1
function Human(name) {
    this.name = name;
  }
  
  Human.prototype.speak = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  Human.prototype.introduction = function() {
    console.log(`I am a human named ${this.name}`);
  };
  function Student(name, college, courses) {
    Human.call(this, name); // Call the Human constructor
    this.college = college;
    this.courses = courses;
  }
  Student.prototype = Object.create(Human.prototype);
  
  Object.setPrototypeOf(Student.prototype, Student);
  
  Student.prototype.introduction = function() {
    console.log(`I am a student named ${this.name} from ${this.college}`);
  };
  
  Student.prototype.takeExams = function() {
    console.log(`I am taking exams for ${this.courses.join(', ')}`);
  };
  
  const student = new Student('John Doe', 'MIT', ['Math', 'Science', 'English']);
  
  student.speak(); // Output: Hello, my name is John Doe
  student.introduction(); // Output: I am a student named John Doe from MIT
  student.takeExams(); // Output: I am taking exams for Math, Science, English
  

  //2

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name + ".");
  };

  function Developer(name, age, skills) {
    // Call the superclass constructor
    Person.call(this, name, age);
    this.skills = skills;
  }

  // Set up prototype chain for inheritance
  Developer.prototype = Object.create(Person.prototype);
  Developer.prototype.constructor = Developer;

  // Developer-specific method
  Developer.prototype.code = function () {
    console.log(this.name + " is coding with skills: " + this.skills.join(", ") + ".");
  };
  var person1 = new Person("Alice", 30);
  var developer1 = new Developer("Bob", 25, ["JavaScript", "React"]);

  // Display prototypes and inheritance
  console.log("Prototype of Person:");
  console.log(Person.prototype);

  console.log("Prototype of Developer:");
  console.log(Developer.prototype);

  console.log("__proto__ of person1:");
  console.log(person1.__proto__); 

  console.log("__proto__ of developer1:");
  console.log(developer1.__proto__); 

  console.log("---");

  console.log("Using Object.getPrototypeOf:");
  console.log(Object.getPrototypeOf(person1)); 
  console.log(Object.getPrototypeOf(developer1)); 


  //3
  function Product(productId, name, price, quantity) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  var shoppingCart = (function() {
    var cart = [];

    return {
      addItem: function(productId, name, price, quantity) {
        var existingProduct = cart.find(function(item) {
          return item.productId === productId;
        });

        if (existingProduct) {
          existingProduct.quantity += quantity;
        } else {
          var newProduct = new Product(productId, name, price, quantity);
          cart.push(newProduct);
        }
      },

      removeItem: function(productId) {
        cart = cart.filter(function(item) {
          return item.productId !== productId;
        });
      },

      getAllItems: function() {
        return cart.map(function(item) {
          return {
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          };
        });
      },

      getTotalPrice: function() {
      
        var totalPrice = cart.reduce(function(total, item) {
          return total + (item.price * item.quantity);
        }, 0);

        return totalPrice.toFixed(2); 
      }
    };
  })();


shoppingCart.addItem(1, 'Laptop', 1200.00, 1);
shoppingCart.addItem(2, 'Mouse', 20.00, 2);
shoppingCart.addItem(1, 'Laptop', 1200.00, 1); 

console.log('All Items in Cart:');
console.log(shoppingCart.getAllItems());

console.log('Total Price:', shoppingCart.getTotalPrice());
shoppingCart.removeItem(2);
console.log('All Items in Cart after removing Mouse:');
console.log(shoppingCart.getAllItems());
console.log('Total Price after removing:', shoppingCart.getTotalPrice());


//4

function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

function Car(make, model) {
    Vehicle.call(this, make, model); // Call base class constructor
    this.wheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Bike(make, model) {
    Vehicle.call(this, make, model); // Call base class constructor
    this.wheels = 2;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

var carObj = new Car('Toyota', 'Camry');
var bikeObj = new Bike('Honda', 'CBR');

console.log(carObj); // Check Car object
console.log(bikeObj); // Check Bike object


console.log(typeof carObj); // "object"
console.log(typeof bikeObj); // "object"


console.log(carObj instanceof Vehicle);    
console.log(carObj instanceof Car);   
console.log(carObj instanceof Bike);   

console.log(bikeObj instanceof Vehicle); 
console.log(bikeObj instanceof Car);     
console.log(bikeObj instanceof Bike);    


console.log(carObj.constructor === Vehicle); 
console.log(carObj.constructor === Car);    
console.log(carObj.constructor === Bike);    

console.log(bikeObj.constructor === Vehicle); 
console.log(bikeObj.constructor === Car);     
console.log(bikeObj.constructor === Bike);    

// Prototype relationships
console.log(Object.getPrototypeOf(carObj) === Car.prototype);    
console.log(Object.getPrototypeOf(carObj) === Vehicle.prototype);

console.log(Object.getPrototypeOf(bikeObj) === Bike.prototype);    
console.log(Object.getPrototypeOf(bikeObj) === Vehicle.prototype);