// 1. Ternary Operator (? :)
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary result: " + status);

let marks = 85;
let grade = (marks >= 90) ? "A" 
           : (marks >= 60) ? "B" 
           : "C";
console.log("Ternary grade: " + grade);

console.log("\n");

// 2. Nullish Coalescing Operator (??)
let username = null;
let displayName = username ?? "Guest";
console.log("Display name: " + displayName);

console.log(0 ?? 100);          // keeps 0 (not null/undefined)
console.log("" ?? "Default");   // keeps "" (not null/undefined)
console.log(undefined ?? "Hi"); // replaces undefined