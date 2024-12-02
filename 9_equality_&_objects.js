const myObj = {
  "keyName 1": 123,
  keyName2: 456,
};

console.log("myObj['keyName 1']>>>", myObj["keyName 1"]);
console.log("myObj.keyName2>>>", myObj.keyName2);

console.log("1" == 1);
console.log("1" === 1);

/*
Build JavaScript objects
In this lab, you have to build a JS object.

This object should be named 'myOwnObject'
You should have a property called myAge which should be a number
You should have a property called myName which should be a string
You should have another property call myFriend which should be an object that should include myFriendAge as a property with their age as a number
All the best!
*/

// write your code below
const myOwnObject = {
  myAge: 23,
  myName: "DEV",
  myFriend: {
    myFriendAge: 18,
  },
};

console.log("myOwnObject>>>", myOwnObject);

// CALL by reference and value

const firstProfile = {
  name: "Devtr",
  age: 23,
};

function primitiveMutate(primitiveValue) {
  primitiveValue++;
  console.log("primitiveMutate()>>>", primitiveValue);
}

function mutate(obj) {
  obj.age++;
  console.log("mutate()>>>", obj);
}

let num = 100;
primitiveMutate(num);
console.log("num>>>", num);
mutate(firstProfile);
console.log("firstProfile>>>", firstProfile);
