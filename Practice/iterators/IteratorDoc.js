const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

const interestingWords = words.filter((word) => {
  return word.length > 5;
});

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples
