// Always use string interpolation 
const name = "Manvith"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

// One more method of declaring sting

const newName = new String("Sathvik")
console.log(typeof newName) //object

//Now we can use string methods on newName

console.log(newName.length)
console.log(newName.toUpperCase())
console.log(newName.charAt(2))
console.log(newName.indexOf('t'))

// Using trim

const newName1 = "    karthik     "
console.log(newName1)
console.log(newName1.trim())

//Using replace 

const url = "https//:manvith.com%20shetty"
console.log(url.replace('%20','-'))

const text = "I love Javascipt"
const parts = text.split(" ")
console.log(parts)
console.log(parts[2]) // Javascript
