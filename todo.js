let inputField = document.getElementById("inputField");
let submitButton = document.getElementById("submitButton");
let displayArea = document.getElementById("displayArea");


submitButton.addEventListener("click", function() {
    let inputData = inputField.value;
    let jsonData = {
        "inputData": inputData
    };
    displayArea.jsonData = JSON.stringify(jsonData);
});
