function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.makeSound = function() {
    console.log(this.sound);
  };
  
  function Dog(name, sound) {
    Animal.call(this, name, sound);
  }
  
  Dog.prototype = new Animal();
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.fetch = function() {
    console.log(this.name + " fetches the ball!");
  };
  
  var myAnimal = new Animal("Lion", "Roar");
  myAnimal.makeSound();
  
  var myDog = new Dog("Buddy", "Woof");
  myDog.makeSound();
  myDog.fetch();