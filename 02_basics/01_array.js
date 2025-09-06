let arr = [10, 20, 30, 40, 50];

console.log("Original:", arr);

// --- Using slice ---
let sliced = arr.slice(1, 4);  // Copy elements from index 1 to 3
console.log("Slice result:", sliced);  // [20, 30, 40]
console.log("After slice:", arr);      // [10, 20, 30, 40, 50] (unchanged)

// --- Using splice ---
let spliced = arr.splice(1, 3);  // Remove 3 elements starting at index 1
console.log("Splice result:", spliced); // [20, 30, 40]
console.log("After splice:", arr);      // [10, 50] (changed)