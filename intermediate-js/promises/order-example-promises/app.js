// checkInventory imported from library.js
const {checkInventory} = require('./library.js');

// order is an array of items and their desired quantity
const order = [['sunglasses', 1], ['bags', 2]];

// handleSuccess and handleFailure functions defined here:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
}

checkInventory(order).then(handleSuccess, handleFailure);

