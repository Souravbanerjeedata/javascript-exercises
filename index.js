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
