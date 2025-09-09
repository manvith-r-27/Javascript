let marvel = ["Iron Man", "Thor", "Hulk"];
let dc = ["Batman", "Superman", "Flash"];

console.log("Original Arrays:");
console.log("Marvel:", marvel);
console.log("DC:", dc);

// --- 1. push without spread ---
// Adds the entire dc array as ONE element → nested array
let pushArr = [...marvel];  
pushArr.push(dc);
console.log("\nPush (no spread):", pushArr);
// ["Iron Man", "Thor", "Hulk", ["Batman", "Superman", "Flash"]]

// --- 2. push with spread ---
// Spread breaks dc into individual items and pushes them
let pushSpreadArr = [...marvel];  
pushSpreadArr.push(...dc);
console.log("Push (with spread):", pushSpreadArr);
// ["Iron Man", "Thor", "Hulk", "Batman", "Superman", "Flash"]

// --- 3. concat ---
// Creates a new array combining marvel and dc
let concatArr = marvel.concat(dc);
console.log("Concat:", concatArr);
// ["Iron Man", "Thor", "Hulk", "Batman", "Superman", "Flash"]

// --- 4. spread operator ---
// Modern and clean way to merge arrays
let spreadArr = [...marvel, ...dc];
console.log("Spread:", spreadArr);
// ["Iron Man", "Thor", "Hulk", "Batman", "Superman", "Flash"]
console.log("\n")
console.log("\n")

//////Concept of Flat///////

// Deeply nested array
let numbers = [1, [2, [3, [4, 5]]]];

console.log("Before flat:", numbers);
// [1, [2, [3, [4, 5]]]]

// Flatten completely
let flatNumbers = numbers.flat(Infinity);

console.log("After flat:", flatNumbers);
// [1, 2, 3, 4, 5]

console.log("\n")
console.log("\n")
///////// isArray from and of /////
// 1. Array.isArray() → check if value is an array
let numbers1 = [1, 2, 3];
let text = "Hello";

console.log("Is numbers an array?", Array.isArray(numbers)); // true
console.log("Is text an array?", Array.isArray(text));       // false

// 2. Array.from() → convert iterable/string/set into array

let str = "WORLD";
let strArr = Array.from(str);
console.log("Array.from on string:", strArr); 
// ['W', 'O', 'R', 'L', 'D']

let numSet = new Set([10, 20, 30]);
console.log("Array.from on Set:", Array.from(numSet)); 
// [10, 20, 30]

// 3. Array.of() → create array from arguments
let arr1 = Array.of(5, 10, 15);
console.log("Array.of:", arr1); 
// [5, 10, 15]

let arr2 = Array.of(7);
console.log("Array.of(7):", arr2); 
// [7]