// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

console.log(add(2, 3));      // 5
console.log(addArrow(2, 3)); // 5

////////////////////////////////////////////////////////////////////////////////

console.log(`\n Why "this" works differently in Arrow Functions \n`)

const obj = {
  value: 10,
  normalFunc: function () {
    console.log("Normal:", this.value); // works, 'this' refers to obj
  },
  arrowFunc: () => {
    console.log("Arrow:", this.value); // undefined, 'this' refers to outer scope (not obj)
  }
};

obj.normalFunc(); // Normal: 10
obj.arrowFunc();  // Arrow: undefined


////////////////////////////////////////////////////////////////////////////////


console.log(`\n Implicit Return in Arrow Functions \n`)

// Explicit return
const square = (n) => {
  return n * n;
};

// Implicit return
const squareImplicit = (n) => n * n;

console.log(square(5));          // 25
console.log(squareImplicit(5));  // 25

////////////////////////////////////////////////////////////////////////////////

console.log(`\n Returning Objects in Implicit Return \n`)

// Wrong: treated as block, not object
const makeUserWrong = (name) => { name: name };

// Correct: wrap object in ()
const makeUser = (name) => ({ name: name });

// Even shorter (shorthand object property)
const makeUserShort = (name) => ({ name });

console.log(makeUser("Tony"));       // { name: 'Tony' }
console.log(makeUserShort("Steve")); // { name: 'Steve' }