function Shape() {
    this.getArea = function() {
      return 0;
    };
  }
  
  function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
      return Math.PI * Math.pow(this.radius, 2);
    };
  }
  
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
      return this.width * this.height;
    };
  }
  
  var circle = new Circle(5);
  var rectangle = new Rectangle(4, 6);
  
  console.log("Area of the Circle:", circle.getArea().toFixed(2));
  console.log("Area of the Rectangle:", rectangle.getArea());