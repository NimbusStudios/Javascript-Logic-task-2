

let array = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// A.) Sort the numbers from lowest to highest
let sortedAsc = array.sort((a, b) => a - b);

// B.) Sort the numbers from highest to lowest
let sortedDesc = array.sort((a, b) => b - a);

// C.) Return an array of unique numbers. If a number is repeated, it should not occur twice in the returned array.
let uniqueNumbers = [...new Set(array)];

// D.) Calculate the sum of the numbers in the array referred to in the problem statement
let sum = array.reduce((a, b) => a + b, 0);

// E.) Return a new array with elements that are less than or equal to 100
let lessThanOrEqualTo100 = array.filter(num => num <= 100);

// F.) Return a new array with elements that are greater than 50
let greaterThan50 = array.filter(num => num > 50);

// G.) Return a new array with elements that are divisible by 2
let divisibleBy2 = array.filter(num => num % 2 === 0);

// H.) Return a new array with elements that are divisible by 3
let divisibleBy3 = array.filter(num => num % 3 === 0);

// I.) Return a new array with elements that are neither divisible by 2 or 3, if they exist. Otherwise return an empty array.
let notDivisibleBy2Or3 = array.filter(num => num % 2 !== 0 && num % 3 !== 0);

// J.) Declare a variable that counts how many elements are in the original array
let count = array.length;

// K.) Declare a new array that contains the same elements as the original array, but reversed. The array should start at 980 and end at 3.
let reversedArray = array.slice().reverse();
