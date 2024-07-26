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