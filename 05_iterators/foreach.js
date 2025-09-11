// 1. forEach with function keyword
console.log("1. forEach with function keyword");
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num, index) {
  console.log("Index: " + index + ", Value: " + num);
});
console.log("\n");

// 2. forEach with arrow function
console.log("2. forEach with arrow function");
numbers.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
console.log("\n");

// 3. forEach with array of objects
console.log("3. forEach with array of objects");
let students = [
  { name: "Manvi", age: 22 },
  { name: "mir", age: 23 },
  { name: "ohe", age: 24 }
];

students.forEach(function(student, index) {
  console.log(`Student ${index + 1}: Name = ${student.name}, Age = ${student.age}`);
});
console.log("\n");

// 4. Same objects example with arrow function
console.log("4. forEach with arrow function (objects)");
students.forEach((student, index) => {
  console.log(`Student ${index + 1}: Name = ${student.name}, Age = ${student.age}`);
});