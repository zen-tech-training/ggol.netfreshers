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
        // Check if the product already exists in the cart
        var existingProduct = cart.find(function(item) {
          return item.productId === productId;
        });
  
        if (existingProduct) {
          // Product already exists, increase quantity
          existingProduct.quantity += quantity;
        } else {
          // Add new product to the cart
          var newProduct = new Product(productId, name, price, quantity);
          cart.push(newProduct);
        }
      },
  
      removeItem: function(productId) {
        // Remove all items with matching productId from the cart
        cart = cart.filter(function(item) {
          return item.productId !== productId;
        });
      },
  
      getAllItems: function() {
        // Return a copy of all items in the cart
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
        // Calculate total price of all items in the cart
        var totalPrice = cart.reduce(function(total, item) {
          return total + (item.price * item.quantity);
        }, 0);
  
        return totalPrice.toFixed(2); // Return as string with 2 decimal places
      }
    };
  })();
  
  // Add items to the cart
  shoppingCart.addItem(1, 'Laptop', 1200.00, 1);
  shoppingCart.addItem(2, 'Mouse', 20.00, 2);
  shoppingCart.addItem(1, 'Laptop', 1200.00, 1); // Adding Laptop again should increase quantity
  
  console.log('All Items in Cart:');
  console.log(shoppingCart.getAllItems());
  
  console.log('Total Price:', shoppingCart.getTotalPrice());
  shoppingCart.removeItem(2);
  console.log('All Items in Cart after removing Mouse:');
  console.log(shoppingCart.getAllItems());
  console.log('Total Price after removing:', shoppingCart.getTotalPrice());