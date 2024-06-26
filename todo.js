//I tried to follow the video but it didn't work for some reason so we struggled alot for like 3 days with this code then a friends Veronica and Mercy finally figured it out and helped explain what was wrong with mine to me

let inputField = document.getElementById("inputField");
let submitButton = document.getElementById("submitButton");
let listContainer = document.getElementById("listContainer");

// Empty array to store list items
let todoList = []; 

window.addEventListener("load", function () {
  let storedData = localStorage.getItem("todoList");//retrieves data stored in json
  if (storedData) {
    todoList = JSON.parse(storedData); // Load stored list items into the array
    renderList(); // Display the loaded list items
  }
});

submitButton.addEventListener("click", function () {
  let inputData = inputField.value.trim(); //retrievs items added into inputField and assigns it to inputData Variable, .trim() removes any leading or trailing whitespace from the input.
  if (inputData !== "") {
    todoList.push({ task: inputData, strike: false }); // Add new task to the array
    renderList(); // Display the updated list
    saveList(); // Save the list to local storage
    inputField.value = ""; // Clear the input field
  }
});

function renderList() {
  listContainer.innerHTML = ""; // Clear previous list items
  todoList.forEach(function (item, index) {
    let listItem = document.createElement("li");
    listItem.textContent = item.task;
    if (item.strike) {
      listItem.style.textDecoration = "line-through";
    }
    let strikeButton = document.createElement("button");
    strikeButton.textContent = "strike";
    strikeButton.className = "listbuttons";
    strikeButton.addEventListener("click", function () {
      todoList[index].strike = !todoList[index].strike; // Toggle task completion status
      renderList(); // Update the UI
      saveList(); // Save the updated list
    });

    let removeButton = document.createElement("button"); // Create remove button
    removeButton.textContent = "remove";
    removeButton.className = "listbuttons";
    removeButton.addEventListener("click", function () {
      todoList.splice(index, 1); // Remove item from array
      renderList(); // Update the UI
      saveList(); // Save the updated list
    });

    listItem.appendChild(strikeButton);
    listItem.appendChild(removeButton); // Append remove button
    listContainer.appendChild(listItem);
  });
}

function saveList() {
  localStorage.setItem("todoList", JSON.stringify(todoList)); // Save the list array to local storage
}
