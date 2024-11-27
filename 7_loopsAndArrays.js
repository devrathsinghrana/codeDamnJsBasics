const friends = [];

for (let i = 0; i < 10; i++) {
  friends.push(`Mae ${i}`);
}

console.log(friends, "friendsPushed");

for (let i = 0; i < 10; i++) {
  friends.pop();
}

console.log(friends, "friendsPopped");

for (let i = 0; i < 3; i++) {
  friends.unshift(`Mae ${i}`);
}

console.log(friends, "friendsUnshifted");

for (let i = 0; i < 2; i++) {
  friends.shift();
}

console.log(friends, "friendsShifted");
