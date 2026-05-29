const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// this is the function that will be used to create the promise
const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    // the setTimeout is used to simulate a delay in response from a database or server
    setTimeout(() => {
        // We create inStock. The order.every() method will return true if the callback function returns a truthy value for every item in the order array. Otherwise, it will return false.
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

module.exports = { checkInventory };