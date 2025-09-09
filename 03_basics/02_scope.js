// ================= SCOPE =================
let globalVar = "I am Global"; // global scope

if (true) {
  let blockVar = "I am Block Scoped (inside if)";
  var funcScopedVar = "I am Function Scoped (var leaks outside)";
  console.log(blockVar); // works here
  console.log(globalVar); // works here (global is accessible)
}

console.log(globalVar);    // works (global accessible everywhere)
// console.log(blockVar);  // ❌ error: blockVar not defined outside if
console.log(funcScopedVar); // works (var is NOT block scoped)

console.log("\n \n")
// ================= FUNCTION SCOPE + NESTED FUNCTION =================
function outerFunction() {
  let outerVar = "I am from Outer Function";

  function innerFunction() {
    let innerVar = "I am from Inner Function";
    console.log(outerVar); // inner function can access outer
    console.log(innerVar); // works inside inner
  }

  innerFunction();
  // console.log(innerVar); // ❌ error: innerVar not accessible here
}

outerFunction();

console.log("\n \n")
// ================= HOISTING =================

// Function declaration (hoisted fully)
hoistedFunction(); // ✅ works before declaration
function hoistedFunction() {
  console.log("I am a hoisted function declaration!");
}

// Function expression assigned to variable (not hoisted the same way)
// greet(); // ❌ error: Cannot access 'greet' before initialization
let greet = function() {
  console.log("I am a function expression (not hoisted)!");
};

greet(); // ✅ works after declaration