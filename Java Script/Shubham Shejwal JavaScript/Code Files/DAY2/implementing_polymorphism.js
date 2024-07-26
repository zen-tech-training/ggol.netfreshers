function Shape() {
    this.getArea = function() {
      return 0;
    };
  }
  
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
  
  Triangle.prototype.getArea = function() {
    return 0.5 * this.base * this.height;
  };
  
  var square = new Square(5);
  var triangle = new Triangle(4, 3);
  
  console.log("Square Area:", square.getArea());
  console.log("Triangle Area:", triangle.getArea());