const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const counter = document.querySelector("#counter");
const body = document.querySelector("body");
const ul = document.createElement("ul");
ul.innerHTML = "<h2>Counter sentence list</h2>";
body.appendChild(ul);
let counterValue = 0;

function incrementValue() {
  counterValue++;
  counter.innerText = counterValue;
  const li = document.createElement("li");
  const b = document.createElement("b");
  const sentence = document.createTextNode(`Sentence `);
  b.appendChild(sentence);
  const counterText = document.createTextNode(counterValue);
  li.appendChild(b);
  li.appendChild(counterText);
  ul.appendChild(li);
}

function decrementValue() {
  if (counterValue === 0) return;
  counterValue--;
  counter.innerText = counterValue;
}

incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);
