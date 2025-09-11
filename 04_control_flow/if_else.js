let age = 18;
let name = "Manvith";
let marks = 75;
let username = "admin";
let password = "1234";

// 1. Basic if
if (true) {
  console.log("✅ This always runs (basic if).");
}
console.log("\n");

// 2. if...else
if (age >= 18) {
  console.log("✅ You are an adult (if...else).");
} else {
  console.log("❌ You are a minor.");
}
console.log("\n");

// 3. if...else if...else (multiple conditions)
if (marks >= 90) {
  console.log("🎉 Grade A");
} else if (marks >= 60) {
  console.log("🙂 Grade B");
} else {
  console.log("😐 Grade C");
}
console.log("\n");

// 4. Nested if
if (username === "admin") {
  if (password === "1234") {
    console.log("🔓 Login successful (nested if).");
  } else {
    console.log("❌ Wrong password.");
  }
} else {
  console.log("❌ User not found.");
}
console.log("\n");

// 5. Truthy / Falsy (implicit conditions)
if (name) {   // non-empty string is truthy
  console.log("✅ Name exists: " + name);
}

let emptyStr = "";
if (!emptyStr) {   // empty string is falsy
  console.log("⚠️ Name is empty (falsy value).");
}
console.log("\n");

// Common falsy values in JS: false, 0, "", null, undefined, NaN
let testValues = [false, 0, "", null, undefined, NaN];

for (let value of testValues) {
  if (value) {
    console.log(value + " is truthy");
  } else {
    console.log(String(value) + " is falsy");
  }
}