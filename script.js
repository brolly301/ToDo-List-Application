const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#ul");
const inputValidation = document.getElementById("input");
const clearButton = document.getElementById("clear");

//Creates the event listener for the form and the submit button and holds all the functions
function createList() {

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    isEmpty();
    deleteFunction();
    editFunction();
    confirmFunction();
    undoFunction()

    clearList();

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
  } else {
    list.appendChild(task);
    task.innerHTML = `${inputValue}`;
    task.appendChild(deleteButton());
    task.appendChild(confirmButton());
    task.appendChild(editButton());
    tArray(task)
    input.value = "";
    clearButton.style.display = 'inline-block'
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
  icon.contentEditable = false;
  return icon;
}

//Creates edit icon
function editButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "edit";
  icon.id = "edit";
  icon.contentEditable = false;
  return icon;
}

function editConfirmButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "check";
  icon.id = "check";
  icon.contentEditable = false;
  return icon;
}

function undoButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "undo";
  icon.id = "undo";
  icon.contentEditable = false;
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
    editButton[i].onclick = function (e) {
      response = confirm("Are you sure you are want to edit this task?");
      if (response) {
        this.parentElement.contentEditable = true;
        this.parentElement.style.backgroundColor = "rgb(218, 218, 218)";
        this.parentElement.appendChild(
          editConfirmButton()
        ).contentEditable = false;
        this.style.display = 'none'
        editConfirmFunction(this);
      }
    };
  }
}

function editConfirmFunction(edit) {
  const editConfirmButton = document.querySelectorAll("#check");
  for (let i = 0; i < editConfirmButton.length; i++) {
    editConfirmButton[i].onclick = function (e) {
      response = confirm("Are you sure you are finished editing this task?");
      if (response) {
        this.parentElement.contentEditable = false;
        this.parentElement.style.backgroundColor = "";
        this.remove();
        edit.style.display = 'inline-block'
      }
    };
  }
}

//Confirms the task and updates its CSS
function confirmFunction() {
  const confirmButton = document.querySelectorAll("#confirm");
  for (let i = 0; i < confirmButton.length; i++) {
    confirmButton[i].onclick = function () {
      response = confirm("Are you sure you want to mark this task as complete?")
      if (response) {
        this.parentElement.style.textDecoration = "line-through";
        this.parentElement.style.backgroundColor = "green";
        this.nextElementSibling.remove();
        this.previousElementSibling.remove();
        completeList(this)
        this.parentElement.appendChild(undoButton())
        this.remove();
      }
    };
  }
}

function undoFunction() {
  const undoButton = document.getElementById("#undo");
  for (let i = 0; i <= undoButton.length; i++) {
    undoButton[i].onclick = function () {
      response = confirm("Are you sure you want to mark this task as complete?")
      if (response) {
        this.parentElement.style.textDecoration = "";
        this.parentElement.style.backgroundColor = "";
        undoList(this)
        this.remove();
      }
    };
  }
}

function completeList(task) {
  document.getElementById("completedList").appendChild(task.parentNode);
  document.getElementById("completedTitle").innerHTML = "Completed Tasks"
}

function undoList(task) {
  document.getElementById("ul").appendChild(task.parentNode);
  document.getElementById("completedTitle").innerHTML = ""
}

function clearList() {
  const clearButton = document.querySelector('#clear')
  clearButton.onclick = function () {
    response = confirm('Are you sure you want to clear all your tasks?')
    if (response) {
      document.getElementById("ul").innerHTML = "";
      document.getElementById("completedList").innerHTML = "";
      document.getElementById("completedTitle").innerHTML = "";
      this.style.display = 'none'
    }
  }
}

function taskArray() {
  const task = document.querySelectorAll('li')
  const tArray = []
  for (let i = 0; i < task.length; i++) {
    tArray.push(task[i].innerText)
  }
}

function tArray(task) {
  const tArray = []
  tArray.push(task.innerText)
  tArray.forEach(element => console.log(element))
}

createList();