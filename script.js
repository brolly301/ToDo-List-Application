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
    li.appendChild(confirmButton());
    li.appendChild(deleteButton());
    li.appendChild(editButton());
    input.value = "";
  }
}

function deleteButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "delete";
  icon.id = "delete";
  return icon;
}

function confirmButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "check_circle";
  icon.id = "confirm";
  return icon;
}

function editButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "edit";
  icon.id = "edit";
  return icon;
}

createList();
