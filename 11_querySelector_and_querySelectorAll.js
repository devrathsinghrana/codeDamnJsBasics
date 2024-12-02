const heading = document.querySelector("h1");
const listItems = document.querySelectorAll("ul li");

heading.innerText = "Devrath";

let i = 0;
while (i < listItems.length) {
  const listItem = listItems[i];
  listItem.innerText = "YOO";
  i++;
}
