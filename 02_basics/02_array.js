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