const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [arr1, arr2];
const arr4 = [...arr1, ...arr1];
const obj1 = { name: "Devr" };
const obj2 = { age: 23 };
const obj3 = { obj1, obj2 };
const obj4 = { ...obj1, ...obj2 };
const arr5 = [{ ...obj1 }, { ...obj2 }];
const arr6 = [obj1, obj2];

const op = `
arr1 -> ${arr1};
arr2 -> ${arr2};
arr3 -> ${arr3};
arr4 -> ${arr4};
obj1 -> ${obj1};
obj2 -> ${obj2};
obj3 -> ${obj3};
obj4 -> ${obj4};
arr5 -> ${arr5};
arr6 -> ${arr6};
`;

console.log(op);
console.log("obj1 -> ", obj1);
console.log("obj2 -> ", obj2);
console.log("obj3 -> ", obj3);
console.log("obj4 -> ", obj4);
console.log("arr5 -> ", arr5);
console.log("arr6 -> ", arr6);

const arrFn1 = (age) => age ** 2;

console.log("perimeter(r) -> ", perimeter(4));
console.log("arrFn1 -> ", arrFn1(4));

function perimeter(r) {
  return 2 * 3.14 * r;
}

const arr4Square = arr4.map((item) => item ** 2);

console.log("arr4Square -> ", arr4Square);

const people1 = {
  age: 23,
  name: "Me1",
};

const people2 = {
  age: 24,
  name: "Me2",
};

const people3 = {
  age: 23,
  name: "Me3",
};

const people = [people1, people2, people3];

const arrFilter = people.filter((item) => item.age === 23);

const arrFind = people.find((item) => item.age === 23);

console.log("arrFilter -> ", arrFilter);
console.log("arrFind -> ", arrFind);

people.forEach((item) => console.log("people ->", item));
