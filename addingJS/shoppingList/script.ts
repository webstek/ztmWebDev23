// Click event
var addButton = document.getElementById("addButton");
var inputField = document.getElementById("userinput") as HTMLInputElement;
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function createListElement(list: HTMLElement, text: string): void {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    list.appendChild(li);
}

addButton.addEventListener("click", function() {
    if (inputField.value.length > 0) {
        createListElement(ul, inputField.value);
        inputField.value = "";
    }
});

inputField.addEventListener("keypress", function(event) {
    if (inputField.value.length > 0 && event.code === "Enter") {
        createListElement(ul, inputField.value);
        inputField.value = "";
    }
});

