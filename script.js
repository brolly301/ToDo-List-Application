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
    task.appendChild(undoButton());
    input.value = "";
    clearButton.style.display = 'inline-block'
    document.getElementById("newTasks").style.display = 'block'
  }
}

//Creating delete button
function deleteButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "delete";
  icon.id = "delete";
  icon.contentEditable = false;
  return icon;
}

//Creating confirm button
function confirmButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "check_circle";
  icon.id = "confirm";
  icon.contentEditable = false;
  return icon;
}

//Creating edit button
function editButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "edit";
  icon.id = "edit";
  icon.contentEditable = false;
  return icon;
}

//Creating the edit confirm button 
function editConfirmButton() {
  icon = document.createElement("i");
  icon.className = "material-symbols-outlined";
  icon.innerHTML = "check";
  icon.id = "check";
  icon.contentEditable = false;
  return icon;
}

//Creating the undo button 
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
        this.previousSibling.style.display = 'none'
        this.previousSibling.previousSibling.style.display = 'none'
        editConfirmFunction(this);
      }
    };
  }
}

//Confirms if the user is finished editing while in edit mode
function editConfirmFunction(edit) {
  const editConfirmButton = document.querySelectorAll("#check");
  for (let i = 0; i < editConfirmButton.length; i++) {
    editConfirmButton[i].onclick = function (e) {
      response = confirm("Are you sure you are finished editing this task?");
      if (response) {
        this.parentElement.contentEditable = false;
        this.parentElement.style.backgroundColor = "";
        deleteButton().remove()
        this.remove();
        edit.style.display = 'inline-block'
        edit.previousSibling.style.display = 'inline-block'
        edit.previousSibling.previousSibling.style.display = 'inline-block'
      }
    };
  }
}

//Confirms the task, updates its CSS and stores it in the completed section
function confirmFunction() {
  const confirmButton = document.querySelectorAll("#confirm");
  for (let i = 0; i < confirmButton.length; i++) {
    confirmButton[i].onclick = function () {
      response = confirm("Are you sure you want to mark this task as complete?")
      if (response) {
        this.parentElement.style.textDecoration = "line-through";
        this.parentElement.style.backgroundColor = "green";
        this.nextElementSibling.nextElementSibling.style.display = 'inline-block'
        this.nextElementSibling.style.display = 'none'
        this.previousElementSibling.style.display = 'none'
        completeList(this)
        this.style.display = 'none';
      }
    };
  }
}

//Reverts the completed task back to the original task list 
function undoFunction() {
  const undoButton = document.querySelectorAll("#undo");
  for (let i = 0; i < undoButton.length; i++) {
    undoButton[i].onclick = function () {
      response = confirm("Are you sure you want to mark this task as undo?")
      if (response) {
        this.parentElement.style.textDecoration = "";
        this.parentElement.style.backgroundColor = "";
        this.previousElementSibling.style.display = 'inline-block'
        this.previousElementSibling.previousElementSibling.style.display = 'inline-block'
        this.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'inline-block'
        undoList(this)
        this.style.display = 'none';
      }
    };
  }
}

//Appends the completed task to the new task list 
function completeList(task) {
  document.getElementById("completedList").appendChild(task.parentNode);
  document.getElementById("completedTitle").style.display = 'block'
}

//Appends the completed task back to the original task list
function undoList(task) {
  document.getElementById("ul").appendChild(task.parentNode);
  if (document.getElementById("completedList").getElementsByTagName("li").length < 1) {
    document.getElementById("completedTitle").style.display = 'none'
  }
}

//Deletes all the contents of both the completed and uncompleted task list
function clearList() {
  const clearButton = document.querySelector('#clear')
  clearButton.onclick = function () {
    response = confirm('Are you sure you want to clear all your tasks?')
    if (response) {
      document.getElementById("ul").innerHTML = "";
      document.getElementById("completedList").innerHTML = "";
      document.getElementById("completedTitle").style.display = "none";
      document.getElementById("newTasks").style.display = "none";
      this.style.display = 'none'
    }
  }
}


//TESTING
function addNoNewTasks() {
  if (document.getElementById("ul").getElementsByTagName("li").length < 1) {
    enterTask = document.createElement('li')
    enterTask.id = 'taskRemove'
    enterTask.innerHTML = 'No New Tasks..'
    list.appendChild(enterTask)
    clearButton.style.display = 'none'
  }
}

function removeNoNewTasks() {
  if (document.getElementById("ul").getElementsByTagName("li").length > 0) {
    const enterTask = document.querySelectorAll('#taskRemove')
    enterTask.innerHTML = ''

  }
}



createList();