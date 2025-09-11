// 1. Basic for loop (counting)
console.log("1. Basic for loop");
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
console.log("\n");

// 2. Iterating an array using index
console.log("2. For loop with array (using index)");
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit " + i + ": " + fruits[i]);
}
console.log("\n");

// 3. for...of (directly get array values)
console.log("3. for...of loop with array (values directly)");
for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}
console.log("\n");

// 4. for...in with array (gives indexes)
console.log("4. for...in loop with array (indexes)");
for (let index in fruits) {
  console.log("Index: " + index + ", Value: " + fruits[index]);
}
console.log("\n");

// 5. Iterating over object with for...in
console.log("5. for...in loop with object (keys & values)");
let person = { name: "Manvith", age: 22, city: "Bangalore" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
console.log("\n");

// 6. Nested for loop (matrix example)
console.log("6. Nested for loop (matrix)");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log("Row " + row + ", Col " + col + " = " + matrix[row][col]);
  }
}
console.log("\n");

// 7. Break & Continue inside for loop
console.log("7. Break and Continue");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping number 3 (continue)");
    continue;  // skips this iteration
  }
  if (i === 5) {
    console.log("Breaking at number 5");
    break;     // stops the loop
  }
  console.log("Number: " + i);
}