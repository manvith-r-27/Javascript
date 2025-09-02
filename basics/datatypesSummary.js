/* Two types of datatypes 1) Primitive 2) Non primitive
Primitive - Call by Value
String, Boolean, Null, Undefined, Symbol, Number, BigInt

Non Primitive (call by refernce)
Array object functions
*/

// Call by value example

function changeValue(a) {
  a = 50;
}

let num = 10;
changeValue(num);
console.log(num); // Output: 10 (unchanged)

//Call by reference example
function changeValue(obj) {
  obj.name = "Krithik";
}

let person = { name: "Manvith" };
changeValue(person);
console.log(person.name); // Output: Krithik (changed!)