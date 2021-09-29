const stock = { mcbook: 2, iphone: 4 };

const processPayment = (itemName) => {
  itemName === "mcbook" ? (stock.mcbook -= 1) : (stock.iphone -= 1);
  console.log("Payment is being processed for item " + itemName);
};

const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log(`Payment is not being processed`);
};

const processOrder = (itemName, callbackPayment, callbackError) => {
  console.log(`Verifying the stock of ${itemName}`);
  stock[itemName] !== 0 ? callbackPayment(itemName) : callbackError(itemName);
};

main = () => {
  let itemName = window.prompt(
    "Please enter the item you would like to purchase (Macbook, iPhone)"
  );
  if (stock.hasOwnProperty(itemName)) {
    processOrder(
      itemName.toLowerCase(),
      (itemName) => processPayment(itemName),
      (itemName) => processError(itemName)
    );
  } else {
    alert("Product not available");
  }
};

main();