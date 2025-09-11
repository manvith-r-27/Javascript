let numbers = [1, 2, 3, 4, 5, 6];

// 1. map() → transforms each element, returns a new array
console.log("1. map() - Transform values");
let squares = numbers.map(function(num) {
  return num * num;
});
console.log("Squares:", squares);

let doubles = numbers.map(num => num * 2);
console.log("Doubles:", doubles);
console.log("\n");

// 2. filter() → keeps only elements that match condition
console.log("2. filter() - Select values");
let evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("Even numbers:", evens);

let greaterThanThree = numbers.filter(num => num > 3);
console.log("Numbers > 3:", greaterThanThree);
console.log("\n");

// 3. reduce() → combine array into single value
console.log("3. reduce() - Reduce to single value");

// Sum of numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Product of numbers
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product:", product);

// Find max
let max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log("Max:", max);
console.log("\n");

// 4. Real-world example: Array of objects
console.log("4. Working with objects");
let students = [
  { name: "Manvith", marks: 90 },
  { name: "Aamir", marks: 75 },
  { name: "Sohel", marks: 60 },
  { name: "Ravi", marks: 45 }
];

// map → get names
let names = students.map(s => s.name);
console.log("Names:", names);

// filter → only pass marks >= 60
let passed = students.filter(s => s.marks >= 60);
console.log("Passed students:", passed);

// reduce → calculate total marks
let totalMarks = students.reduce((acc, s) => acc + s.marks, 0);
console.log("Total marks:", totalMarks);

// reduce → average marks
let average = totalMarks / students.length;
console.log("Average marks:", average);