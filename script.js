const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const inputValidation = document.getElementById("input");

//Creates the event listener for the form and the submit button and holds all the functions
function createList() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    isEmpty();
    deleteFunction();
    editFunction();
    confirmFunction();
  });
}

//Checks if the input box is empty, if so it will alert the user of an error,
//otherwise the task will be added to the list
function isEmpty() {
  inputValue = input.value;
  task = document.createElement("li");
  task.id = "task";

  if (inputValidation !== null && inputValidation.value === "") {
    alert("You have not entered a task. Please enter one to continue.");
  } else if (inputValue.length >= 36) {
    alert("Task name too long. Please enter up to 35 characters.");
  } else {
    list.appendChild(task);
    task.innerText = `${inputValue}`;
    task.appendChild(deleteButton());
    task.appendChild(confirmButton());
    task.appendChild(editButton());
    input.value = "";
  }
}

//Creates delete icon
function deleteButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "delete";
  icon.id = "delete";
  icon.contentEditable = false;
  return icon;
}

//Creates confirm icon
function confirmButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "check_circle";
  icon.id = "confirm";
  return icon;
}

//Creates edit icon
function editButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "edit_note";
  icon.id = "edit";
  return icon;
}

//Deletes the task from the list
function deleteFunction() {
  const deleteButton = document.querySelectorAll("#delete");
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function () {
      response = confirm("Are you sure you want to delete this task?");
      if (response) {
        this.parentElement.remove();
      }
    };
  }
}

//Allows for the task to be edited
function editFunction() {
  const editButton = document.querySelectorAll("#edit");
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].onclick = function () {
      this.parentElement.contentEditable = true;
      this.previousElementSibling.contentEditable = false;
      this.previousElementSibling.previousElementSibling.contentEditable = false;
      this.contentEditable = false;

      editButton[i].onclick = function () {
        response = confirm("Would you like to finish editing?");
        if (response) {
          this.parentElement.contentEditable = false;
        }
      };
    };
  }
}

//Confirms the task and updates its CSS
function confirmFunction() {
  const confirmButton = document.querySelectorAll("#confirm");
  for (let i = 0; i < confirmButton.length; i++) {
    confirmButton[i].onclick = function () {
      this.parentElement.style.textDecoration = "line-through";
      this.parentElement.style.backgroundColor = "green";
      this.nextElementSibling.remove();
      this.remove();
    };
  }
}

function liArray() {
  li = document.querySelectorAll("li");
  const liarray = [li];

  for (let i = 0; i < li.length; i++) {
    liarray[i].appendChild;
  }
}

liArray();

createList();
