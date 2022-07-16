const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);
////////////////////////////////////////////////
// The flowers array that has 3 elements.
// The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
// We call addFlower() with an argument of flowers which will execute the code inside addFlower.
// We check the value of flowers and it now includes the 'lily' element! The array was mutated!

const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
