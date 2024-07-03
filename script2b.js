



// 2.Given an array with elements: 7, 10, “Clentan”, 13, 89, true, 45, false, “Jerry”, “Vukona”, “Reabetswe”, 600. 
const array = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

//

// A.) Using a for loop and a variable to return all values that are numbers
const numbers = [];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        numbers.push(array[i]);
    }
}
console.log(numbers);

// B.) Using a while loop and a variable to return all the values that are a string
const strings = [];
let j = 0;
while (j < array.length) {
    if (typeof array[j] === "string") {
        strings.push(array[j]);
    }
    j++;
}
console.log(strings);

//C.)Using a do while loop and if statement to return the sum of all values in the array
let sum = 0;
let k = 0;
do {
    if (typeof array[k] === "number") {
        sum += array[k];
    }
    k++;
} while (k < array.length);
console.log(sum)

// D.)Using a for loop and a variable to combine all the strings to form a proper greeting
let greeting = "Hello";
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
        greeting += ", " + array[i];
    }
}
console.log(greeting);


//E.) Using a for loop and a new variable to remove all the values in the array
const removedArray = [];
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
        removedArray.push(array[i]);
    }
}
console.log(removedArray)
