//Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

// solution 1:
const getAverage = (array) => {
  if (array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const result = sum / array.length;
    return result;
  } else {
    return 0;
  }
};

// solution 2:
const findAverage = (array) =>
  array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toUpperCase(str) {
  return str
    .split(/[-_]/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(toUpperCase("The_Stealth_Warrior"));
