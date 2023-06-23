function isEvenOrOdd(number: number): string {
  for (let i = 0; i <= 100; i++) {
    if (number === i) {
      return i % 2 === 0 ? "even" : "odd";
    }
  }

  throw new Error("Number is not between 0 and 100");
}
