//////////////////////////////////////////Day 1//////////////////////////////////////////////

// Exercise 1 -- write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the numbers is 100

const numCheck = (a, b) => a === 100 || b === 100 || a + b === 100;

// Exercise 2 -- write a JS program to get the extension of a filename.

const getExtension = (str) => {
  str.slice(str.lastIndexOf("."));
};

// Exercise 3 -- write a JS program to replace every character in a given string with the character following it in the alphabet

// Method 1: Using String.fromCharCode and charCodeAt
const moveCharForward1 = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

// Method 2: Using Array.from and map
const moveCharForward2 = (str) =>
  Array.from(str, (char) => String.fromCharCode(char.charCodeAt(0) + 1)).join(
    ""
  );

// Method 3: Using a for loop
const moveCharForward3 = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return result;
};

/* Exercise 4 -- write a js program to get current date.
expected output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

const getDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}-${months}-${years}`;
};

/* Exercise 5 -- write a js program to create a new string adding "New!" in front of a given string. if the given string begins with "New!" already then return the original string. */

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

//////////////////////////////////////////Day 2//////////////////////////////////////////////

/* Exercise 1: write a js program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. the string length must be a 3 or more, if not, the original string is returned. */

const makeNewString = (str) =>
  str.length >= 3 ? str.slice(0, 3) + str.slice(-3) : str;

/* Exercise 2: write a program to extract the first half of a string of even length. */

const firstHalf = (str) =>
  str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;

/* Exercise 3: write program to concatenate two strings except their first character. */

const concatStr = (str1, str2) => str1.slice(1) + str2.slice(1);

/* Exercise 4: given two values, write a program to find out which one is nearest to 100 */
const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

/* Exercise 5: write a program to check a given string contains 2 to 4 occurences of a specified character. */

const contains2To4 = (str, char) => {
  const count = str.split("").filter((c) => c === char).length;
  return count >= 2 && count <= 4;
};

// Alternate way:
const countOccurences = (str, char) => {
  let count = 0;
  for (let letter of str) {
    if (letter === char) {
      count++;
    }
  }
  return count >= 2 && count <= 4;
};

//////////////////////////////////////////Day 3//////////////////////////////////////////////

/* Exercise 1: write a program to find the number of even digits in an array of integers. */
// Method 1: Using a for loop
const countEvenDigits1 = (arr) => {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Method 2: Using reduce
const countEvenDigits2 = (arr) => {
  return arr.reduce((acc, num) => (num % 2 === 0 ? acc + 1 : acc), 0);
};

// Method 3: Using filter and length
const countEvenDigits3 = (arr) => arr.filter((num) => num % 2 === 0).length;

/* Exercise 2: write a program to find the number of even values up to a given number. */

// Method 1: using for loop
const countEvenUpto = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Method 2:
const countEvenUpto2 = (num) => Math.floor(num / 2);

/* Exercise 3: write a program to check whether a given array of integers is sorted in ascending order. */

const isSortedAscending1 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

/* Exercise 4: write a program to get the largest even number from an array of integers. */

// Method 1:
const largestEvenInt1 = (arr) => {
  let largestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
};

// Method 2:
const largestEvenInt2 = (arr) => {
  return Math.max(...arr.filter((num) => num % 2 === 0));
};

/* Exercise 5: write a program to replace the first digit in a string (should contains at least a digit) with $ character. */

// Method 1:
const replaceFirstDigit1 = (str) => str.replace(/[0-9]/, "$");

// Method 2: Using a for loop
const replaceFirstDigit2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      return str.slice(0, i) + "$" + str.slice(i + 1);
    }
  }
  return str;
};

//////////////////////////////////////////Day 4//////////////////////////////////////////////

/*Exercise 1: given a year, report if it is a leap year.*/

// Method 1:
const isLeapYear1 = (year) => {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  if (year % 400 !== 0) return false;
  return true;
};

// Method 2:
const isLeapYear2 = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

/*Exercise 2: write a program to compare two objects to determine if the first one contains the same properties as the second one (whice may also have addiional properties).*/
// Method 1: Using a for loop
const containsSameProperties1 = (obj1, obj2) => {
  for (let key in obj2) {
    if (!(key in obj1)) {
      return false;
    }
  }
  return true;
};

// Method 2: Using Object.keys and every
const containsSameProperties2 = (obj1, obj2) =>
  Object.keys(obj2).every(
    (key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]
  );

/*Exercise 3: write a js program to convert a comma-separated values (csv) string to a 2D array. a new line indicates a new row in the array.*/

function csvToArray(csvString) {
  return csvString.split("\n").map((row) => row.split(","));
}

/*Exercise 4: write js program to generate a random hexadecimal color code.*/

// Method 1:
const randomHexColor1 = () => {
  const letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Method 2:

const randomHexNumber = () => Math.floor(Math.random() * 16).toString(16);
const randomHexColor2 = () =>
  "#" + Array.from({ length: 6 }).map(randomHexNumber).join("");

// Mehod 3:
const randomHexCode3 = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

// Method 4: receiving array of multiple hexcolors by inputting count
const randomHexCode4 = (count) =>
  Array.from(
    { length: count },
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );

/*Exercise 5: write a function that return true if the provided predicate function returns true for all elements in a collection, false otherwise.*/

//Method 1:
const isEveryElem1 = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
};

// Method 2:
const isEveryElem2 = (arr, fn) => arr.every(fn);

//////////////////////////////////////////Day 5//////////////////////////////////////////////

/*Exercise 1: write a js function that returns a passed string with letters in alphabetical order.
example string: 'webmaster'
expected output: 'abeemrstw'
*/

const alphabetOrder = (str) => str.split("").sort().join("");

/*Exercise 2: write a js function that accepts a string as a parameter and counts the number of vowels within the string.*/

// Method 1: for loop
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

// Method 2: Using regular expression
const countVowels2 = (str) => {
  if (!str) return 0;
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

// Method 3: Using filter
const countVowels3 = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;

/*Exercise 3: write a js function to convert an amount to coins.
Example input: 46 and possible coins 25, 10, 5, 2, 1
output: 25, 10, 10, 1*/

const convertToCoins = (amount, coins) => {
  let result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      result.push(coin);
      amount -= coin;
    }
  }
  return result;
};
// const coins = [25, 10, 5, 2, 1];
// console.log(convertToCoins(46, coins));

/*Exercise 4: write a js function to extract unique characters from a string.*/

/* Exercise 5: write a js function to find the first not repeated character.
example string: 'abacddbec'
expected output: 'e'
*/
