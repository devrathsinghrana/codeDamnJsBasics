/*
INSTRUCTIONS
CHALLENGES (0/13)
DISCUSSIONS
Chaining If Else Statements
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"

num < 10 - return "Small"

num < 15 - return "Medium"

num < 20 - return "Large"

num >= 20 - return "Huge"
*/

function testSize(num) {
  // Only change code below this line
  let reqNum;
  if (num < 5) {
    reqNum = "Tiny";
  } else if (num < 10) {
    reqNum = "Small";
  } else if (num < 15) {
    reqNum = "Medium";
  } else if (num < 20) {
    reqNum = "Large";
  } else {
    reqNum = "Small";
  }
  return reqNum;
  // Only change code above this line
}
console.log(testSize(7));

/*
Basic calculator with parameters
In this lab, we will practice for loop with an array and functions and conditionals. Your task for this lab is to:

Create a function named performMath that accepts three parameters - number1, number2 and operation
If operation is '+', add the numbers and return the result
If operation is '*', multiply the numbers and return the result
All the best
*/

// write your code below

function performMath(number1, number2, operation) {
  if (operation == "+") {
    return number1 + number2;
  } else if (operation == "*") {
    return number1 * number2;
  }
}

console.log(performMath(1, 2, "*"));
