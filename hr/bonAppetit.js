function bonAppetit(bill, k, b) {
  const removeK = bill.splice(k, 1);
  const sharedItemTotal = bill.reduce((a, b) => a + b);
  const annaCost = sharedItemTotal / 2;

  if (annaCost == b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaCost);
  }
}
