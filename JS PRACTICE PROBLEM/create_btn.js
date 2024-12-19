// ques = create a button dynamicaly and add it to the web page;

let container = document.getElementById('container')
let button = document.createElement("button")
button.textContent = "Click "
container.appendChild(button)