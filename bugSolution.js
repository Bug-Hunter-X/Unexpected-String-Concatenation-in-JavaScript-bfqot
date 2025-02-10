function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Error: Operands must be numbers";
  }
}

console.log(foo(1, "2")); // Output: Error: Operands must be numbers

console.log(foo(1, 2)); // Output: 3

function bar(a, b) {
  return a + b; //Correct Addition
}

console.log(bar(1, 2)); // Output: 3