// Numbers and its methods

const num1 = 5000
console.log(num1)

const num2 = new Number(100)
console.log(num2);

console.log(num2.toFixed(2))

const hundereds = 10000000
console.log(hundereds.toLocaleString('en-IN'))

// +++++++++++++++++++++++++++++ MATH FUNCTIONS +++++++++++++++++++++++++++++++

console.log(Math.round(5.566))
console.log(Math.abs(-5))

//Math.random gives values between 0 and 1

// To get values between x and y we can use below method

const min = 10
const max = 50

const value = Math.floor((Math.random()*(max-min+1))+min)
console.log(value)