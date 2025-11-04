//CALLBACK HELL

// const cart = ["tshirt", "shoes", "jeans"];

// API.createOrder(cart, function () {
//   API.paymentPage(function () {
//     API.orderSuccess(function () {
//       API.updateWallet(function () {
//         //code
//       });
//     });
//   });
// });

setTimeout(() => {
  console.log("Step 1: Fetching user...");
  setTimeout(() => {
    console.log("Step 2: Getting user posts...");
    setTimeout(() => {
      console.log("Step 3: Getting comments...");
    }, 1000);
  }, 1000);
}, 1000);

// INVERSION OF CONTROL
