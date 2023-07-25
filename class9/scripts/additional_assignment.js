
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", createDynamicContent);

function createDynamicContent(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const dynamicSection = document.getElementById("dynamicSection");
    dynamicSection.innerHTML = `<h2>Hello, my name is ${name} and I am ${age} years old.</h2>`;
}
