
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Event listeners ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let button = document.getElementById("button");
button.addEventListener("click", onButtonClick);
function onButtonClick() {
    alert("You clicked on the button!")
}

// Second option
button.onclick = () => { alert("You clicked on the button! (second option)")};

// Other functionalities
let button2 = document.getElementById("button2");
button2.onmousemove = () => { alert("This is the button 2!") };

// Keyboard events
let text_input = document.getElementById("text_input");
text_input.onkeyup = () => {console.log(text_input.value)};

let number_input = document.getElementById("number_input");
number_input.onkeydown = () => {console.log(number_input.value)};

let text_input2 = document.getElementById("text_input2");
text_input2.onchange = () => {console.log(text_input2.value)};