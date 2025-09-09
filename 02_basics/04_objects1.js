// Concept of Object Destructuring

// Object with both short and long property names
let user = {
  name: "Alice",
  age: 25,
  user_account_city_location: "New York",
  user_professional_job_title: "Engineer"
};


//  Destructuring with renaming (shortening long names)
let {
  user_account_city_location: city,
  user_professional_job_title: job
} = user;

console.log("\nDestructuring with renaming:");
console.log("City:", city); // New York
console.log("Job:", job);   // Engineer