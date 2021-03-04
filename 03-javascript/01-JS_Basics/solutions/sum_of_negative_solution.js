const sumOfNegative = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sum += number;
    }
  });
  return sum;
};

// More advanced solution:
// const sumOfNegative = numbers => numbers.reduce((sum, n) => (n < 0 ? sum + n : sum), 0);

module.exports = sumOfNegative; // Do not remove.
