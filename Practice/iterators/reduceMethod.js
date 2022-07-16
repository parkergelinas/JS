const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return currentValue + accumulator;
}, 10);

console.log(newSum);

// const numbers = [1, 2, 4, 10];
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })

// console.log(summedNums) // Output: 17

// numbers is an array that contains numbers.
// summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
// numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
// The callback function has two parameters, accumulator and currentValue.
// The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element.
// To see the value of accumulator and currentValue change, review the chart above.
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration,
// currentValue takes on the value of the current element in the looping process.
