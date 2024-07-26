function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Vehicle.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
  
  function Car(make, model, year, doors) {
    Vehicle.call(this, make, model, year);
    this.doors = doors;
  }
  
  Car.prototype = new Vehicle();
  Car.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)} - ${this.doors} doors`;
  };
  
  var myVehicle = new Vehicle('Toyota', 'Camry', 2020);
  var myCar = new Car('Ford', 'Mustang', 2022, 2);
  
  console.log(myVehicle.getDetails());
  console.log(myCar.getDetails());