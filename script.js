function processNumbers(numbers) {
  // Sort the numbers from lowest to highest
  const sortedAscending = numbers.slice().sort((a, b) => a - b);

  // Sort the numbers from highest to lowest
  const sortedDescending = numbers.slice().sort((a, b) => b - a);

  // Return an array of unique numbers
  const uniqueNumbers = [...new Set(numbers)];

  // Calculate the sum of the numbers
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return {
    sortedAscending,
    sortedDescending,
    uniqueNumbers,
    sum
  };
}

const numbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];

const result = processNumbers(numbers);
console.log(result);