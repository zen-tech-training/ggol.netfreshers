function Address(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
  
  function User(username, password, street, city, country) {
    this.username = username;
    this.password = password;
    this.address = new Address(street, city, country);
  }
  
  User.prototype.getAddress = function() {
    return this.username + "'s address: " + this.address.street + ", " + this.address.city + ", " + this.address.country;
  };
  
  var user1 = new User('john_doe', 'password123', '123 Main St', 'Anytown', 'USA');
  console.log(user1.getAddress());