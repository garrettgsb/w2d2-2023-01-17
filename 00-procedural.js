function getRandomDiner(diners) {
  return Math.floor(Math.random() * diners.length);
}

const totalBill = 83.50;
const taxRate = 0.14;
const diners = [
  "Alice",
  "Bob",
  "Carol",
  "Dean",
];
const randomIndex = getRandomDiner(diners);
console.log(`${diners[randomIndex]} will get the bill, which comes to ${totalBill * (1 + taxRate)}, plus the tip.`);
