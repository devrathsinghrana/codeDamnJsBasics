const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const counter = document.querySelector("#counter");

let counterValue = 0;

function incrementValue() {
  counterValue++;
  counter.innerText = counterValue;
}

function decrementValue() {
  if (counterValue === 0) return;
  counterValue--;
  counter.innerText = counterValue;
}

incrementBtn.addEventListener("click", incrementValue)
decrementBtn.addEventListener("click", decrementValue)
