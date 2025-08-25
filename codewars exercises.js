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

// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// solution 1:

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

// solution 2:
const summation2 = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num;
    num--;
  }
  return sum;
};
