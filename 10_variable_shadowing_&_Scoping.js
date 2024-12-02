// Shadowing

const myAge = 23;

function printAge() {
  const myAge = 24;
  console.log("myAge>>>", myAge);
}

printAge();

// Scoping
function x() {
  let x = 100;
  for (; x < 110; x++) {
    console.log(x);
  }
  console.log(x);

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  if (true) {
    const y = 200;
    console.log(y);
  }
  console.log(y);
}

x();
console.log(x, i);


