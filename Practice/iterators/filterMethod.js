const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter((num) => num < 250);
console.log(smallNumbers);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});
console.log(longFavoriteWords);

// const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
// const shortWords = words.filter(word => {
//  return word.length < 6;
// });

// words is an array that contains string elements.
// const shortWords = declares a new variable that will store the returned array from invoking .filter().
// The callback function is an arrow function that has a single parameter, word. Each element in the words array will be passed to this function as an argument.
// word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
