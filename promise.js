const shoeBrands = ["nike", "asics", "converse", "adidas"];

// createOrder(shoeBrands, function (orderId) {
//     proceedToPayment(orderId, function (paymentInfo) {
//         orderSummary(paymentInfo, function (paymentInfo) {
//             updateWallet(paymentInfo);
//         });
//     });
// });


//Using Promise

function createOrder(shoeBrands) {
  const pro = new Promise((resolve, reject) => {
    if (!validateOrder(shoeBrands)) {
      const err = new Error("Order is not Valid or Retry!");
      reject(err);
    }

    console.log("Creating Order...");

    const orderId = "87654";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pro;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Payment Received!"), 2000)
  );
}

function orderSummary(paymentInfo) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Order Summary - " + shoeBrands.length + " items"), 2000)
  );
}

function walletUpdate(orderInfo) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Wallet Updated!"), 2000)
  );
}

function validateOrder(shoeBrands) {
  return shoeBrands != 0;
}

createOrder(shoeBrands)
  .then(function (orderId) {
    console.log("Order Successful -", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .then(function (paymentInfo) {
    return orderSummary(paymentInfo);
  })
  .then(function (orderInfo) {
    console.log(orderInfo);
    return orderInfo;
  })
  .then(function (orderInfo) {
    return walletUpdate(orderInfo);
  })
  .then(function (wallet) {
    console.log(wallet);
  })
  .catch(function (err) {
    console.log(err.message);
  });
