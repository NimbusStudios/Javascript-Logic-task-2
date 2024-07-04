// 2. Given an array with elements
const array = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

// Function to get all numbers in the array using a for loop
function getNumbers(arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}

// Function to get all strings in the array using a while loop
function getStrings(arr) {
    const strings = [];
    let j = 0;
    while (j < arr.length) {
        if (typeof arr[j] === "string") {
            strings.push(arr[j]);
        }
        j++;
    }
    return strings;
}

// Function to get the sum of all numbers in the array using a do while loop
function getSum(arr) {
    let sum = 0;
    let k = 0;
    do {
        if (typeof arr[k] === "number") {
            sum += arr[k];
        }
        k++;
    } while (k < arr.length);
    return sum;
}

// Function to create a greeting from all strings in the array using a for loop
function createGreeting(arr) {
    let greeting = "Hello";
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            greeting += ", " + arr[i];
        }
    }
    return greeting;
}

// Function to remove all non-number values in the array using a for loop
function removeNonNumbers(arr) {
    const numbersOnly = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            numbersOnly.push(arr[i]);
        }
    }
    return numbersOnly;
}

// Logging the results
console.log("Numbers:", getNumbers(array));
console.log("Strings:", getStrings(array));
console.log("Sum of Numbers:", getSum(array));
console.log("Greeting:", createGreeting(array));
console.log("Numbers Only Array:", removeNonNumbers(array));
