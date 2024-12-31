// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

const innerFunc = (a, b) => a * b;

const outerFunc = () => {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));

  const result = innerFunc(num1, num2);
  console.log(`The multiplication of ${num1} and ${num2} is: ${result}`);
};

outerFunc();
