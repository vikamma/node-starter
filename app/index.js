const customer = {
  firstName: "Viktoriia",
  lastName: "Matsiuk",
  id: 33,
  phoneNumber: "123456",
  email: "vikama@ukr.net",
};

const address = {
  street: "Locks Ride",
  city: "London",
  state: "London",
  zipCode: "30456",
};

customer.address;
console.log(`Welcome, ${customer.firstName} ${customer.lastName}`);

const product = {
  name: "Cat",
  price: 200,
  description: "Good cat",
  quantity: 10,
};

const total = product.price * 7;
console.log(`Total: ${total}`);

if(total>100)
 {console.log("True")};
 else {console.log("False")};

 product.quantity=3;