const transactions = [
  { product: "Laptop", type: "purchase", quantity: 10 },
  { product: "Mobile", type: "purchase", quantity: 20 },
  { product: "Laptop", type: "sale", quantity: 4 },
  { product: "Mobile", type: "sale", quantity: 5 },
  { product: "Tablet", type: "purchase", quantity: 7 },
  { product: "Laptop", type: "purchase", quantity: 3 },
];

const quant = new Map();

transactions.forEach((item) => {
  if (!quant.has(item.product)) {
    quant.set(item.product, 0);
  }
  if (item.type === "purchase")
    quant.set(item.product, quant.get(item.product) + item.quantity);
  else quant.set(item.product, quant.get(item.product) - item.quantity);
});

console.log(quant);

// const quant = new Map();

// function getQuantity(transactions){
//     transactions.forEach((item)=>{
//     if(!quant.has(item.product)){
//         quant.set(item.product,0);
//     }
//     if(item.type ==='purchase')
//         quant.set(item.product,quant.get(item.product)+item.quantity);
//     else
//         quant.set(item.product,quant.get(item.product)-item.quantity);
// });
// }
// getQuantity(transactions);
// console.log(quant);
