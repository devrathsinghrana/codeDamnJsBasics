const evenNumbers = [];
const oddNumbers = [];

const skipNumber = (skipNum) => {
  for (let i = 0; i < 10; i++) {
    if (i === skipNum) {
      continue;
    }
    if (i % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }
  console.log("HI continue")
};

const breakNumber = (breakNum) => {
  for (let i = 0; i < 10; i++) {
    if (i === breakNum) {
      break;
    }
    if (i % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }
  console.log("HI break")
};

const returnNumber = (returnNum) => {
  for (let i = 0; i < 10; i++) {
    if (i === returnNum) {
      return;
    }
    if (i % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }
  console.log("HI return")
};

skipNumber(5);
console.log(
  "skipNumber(5)>>>",
  "evenNumbers>>>",
  evenNumbers,
  "oddNumbers>>>",
  oddNumbers
);
evenNumbers.length = 0;
oddNumbers.length = 0;
breakNumber(5);
console.log(
  "breakNumber(5)>>>",
  "evenNumbers>>>",
  evenNumbers,
  "oddNumbers>>>",
  oddNumbers
);
evenNumbers.length = 0;
oddNumbers.length = 0;
returnNumber(5);
console.log(
  "returnNumber(5)>>>",
  "evenNumbers>>>",
  evenNumbers,
  "oddNumbers>>>",
  oddNumbers
);
