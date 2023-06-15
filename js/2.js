let cart = {
    item1: {
      name: "Product 1",
      price: 10.99,
      quantity: 2,
      isAvailable: true
    },
    item2: {
      name: "Product 2",
      price: 19.99,
      quantity: 1,
      isAvailable: false
    },
    item3: {
      name: "Product 3",
      price: 5.49,
      quantity: 5,
      isAvailable: true
    }
  };
  
  console.log(cart.item1.name);
  console.log(cart.item2.price);
  console.log(cart.item3.quantity);
  console.log(cart.item1.isAvailable);