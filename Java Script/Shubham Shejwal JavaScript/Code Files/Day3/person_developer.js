function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sayHello = function() {
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
  Developer.prototype.code = function() {
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
  console.log(person1.__proto__); // Should be Person.prototype
  
  console.log("__proto__ of developer1:");
  console.log(developer1.__proto__); // Should be Developer.prototype