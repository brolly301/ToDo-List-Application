const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const inputValidation = document.getElementById("input");

function createList() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    isEmpty();
  });
}

function isEmpty() {
  inputValue = input.value;
  li = document.createElement("li");

  if (inputValidation !== null && inputValidation.value === "") {
    alert("You have not entered a task. Please enter one to continue.");
  } else {
    ul.appendChild(li);
    li.innerText = `${inputValue}`;
    input.value = "";
  }
}

createList();
