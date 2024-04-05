let inputField = document.getElementById("inputField");
let submitButton = document.getElementById("submitButton");
let listContainer = document.getElementById("listContainer");

window.addEventListener("load", function() {
    let storedData = localStorage.getItem("listItems");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
});

submitButton.addEventListener("click", function() {
    let inputData = inputField.value;
    
    inputField.textContent = "Enter Task";

    let listItem = document.createElement("li");
    listItem.textContent = inputData;

    let removeButton = document.createElement("button");
    removeButton.className = "x-icon";
    removeButton.addEventListener("click", function(){
        listItem.remove();
        saveList();
    }); 

    let strikeButton = document.createElement("button");
    strikeButton.className = "checkmark";
    strikeButton.addEventListener("click", function(){
        listItem.style.textDecoration = "line-through";
        saveList();
    }); 

    listItem.appendChild(removeButton);
    listItem.appendChild(strikeButton);
    listContainer.appendChild(listItem);
});

function saveList(){
    localStorage.setItem("listItems",listContainer.innerHTML);
}