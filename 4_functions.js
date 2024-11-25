let myAge = 23;
function addsToMyAge(incrementBy, multiplyBy) {
  console.log("multiplyBy>>", multiplyBy);
  myAge = (myAge + incrementBy) * multiplyBy;
}
addsToMyAge(5, 2);
console.log("myAge>>after addsToMyAge(5,2)>>", myAge);
addsToMyAge(5);
console.log("myAge>>after addsToMyAge(5)>>", myAge);

const age = 23;
let total = 2;

function addsToAge(incrementBy, multiplyBy) {
  return (age + incrementBy) * multiplyBy;
  total = total + 4;
}

const newAge = addsToAge(2, 5);
console.log("newAge>>", newAge, "age>>", age, "total>>", total);

/*
Calculator with function
In this lab, you're supposed to create 5 functions:

add(num1, num2)
This function should return the sum of num1 and num2

sub(num1, num2)
This function should subtract num2 from num1 (i.e. num2 - num1) and return the result

mul(num1, num2)
This function should multiply num1 and num2 and return the result

div(num1, num2)
This function should divide num2 by num1 (i.e. num2 / num1) and return the result

funky(num1, num2, num3)
This should multiply num2 and num3 and add num1 to this result. The final result should be returned.

All the best!
*/

// write your code below

const num1 = 2;
const num2 = 3;
const num3 = 4;

function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num2 - num1
}

function mul(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num2 / num1
}

function funky(num1, num2, num3) {
    return (num2 * num3) + num1
}

const addedNum = add(num1, num2);
const subtractedNum = sub(num1, num2);
const multipliedNum = mul(num1, num2);
const divisionNum = div(num1, num2);
const funkyNum = funky(num1, num2, num3);

console.log(addedNum);
console.log(subtractedNum);
console.log(multipliedNum);
console.log(divisionNum);
console.log(funkyNum);

