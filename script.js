
let array = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

// A. Sort the numbers from lowest to highest
function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

// B. Sort the numbers from highest to lowest
function sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

// C. Return an array of unique numbers
function getUniqueNumbers(arr) {
    return [...new Set(arr)];
}

// D. Calculate the sum of the numbers in the array
function calculateSum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// E. Return a new array with elements that are less than or equal to 100
function filterLessThanOrEqualTo100(arr) {
    return arr.filter(num => num <= 100);
}

// F. Return a new array with elements that are greater than 50
function filterGreaterThan50(arr) {
    return arr.filter(num => num > 50);
}

// G. Return a new array with elements that are divisible by 2
function filterDivisibleBy2(arr) {
    return arr.filter(num => num % 2 === 0);
}

// H. Return a new array with elements that are divisible by 3
function filterDivisibleBy3(arr) {
    return arr.filter(num => num % 3 === 0);
}

// I. Return a new array with elements that are neither divisible by 2 or 3
function filterNotDivisibleBy2Or3(arr) {
    return arr.filter(num => num % 2 !== 0 && num % 3 !== 0);
}

// J. Count how many elements are in the original array
function getCount(arr) {
    return arr.length;
}

// K. Return a new array that contains the same elements as the original array, but reversed
function reverseArray(arr) {
    return [...arr].reverse();
}

// Logging the results
console.log("Sorted Ascending:", sortAscending(array));
console.log("Sorted Descending:", sortDescending(array));
console.log("Unique Numbers:", getUniqueNumbers(array));
console.log("Sum:", calculateSum(array));
console.log("Less Than Or Equal To 100:", filterLessThanOrEqualTo100(array));
console.log("Greater Than 50:", filterGreaterThan50(array));
console.log("Divisible By 2:", filterDivisibleBy2(array));
console.log("Divisible By 3:", filterDivisibleBy3(array));
console.log("Not Divisible By 2 Or 3:", filterNotDivisibleBy2Or3(array));
console.log("Count:", getCount(array));
console.log("Reversed Array:", reverseArray(array));
