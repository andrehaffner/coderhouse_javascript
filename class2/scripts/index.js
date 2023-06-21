
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Booleans ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let bool = true;
const bool2 = false;

let bool3 = (1 > 2) // boolean false
const bool4 = (2 > 1) // boolean false


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ if, elif and else structures ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let condition = true;
if (condition){
    console.log("You will see this message!");
}


condition = false;
if (condition){
    console.log("You will not see this message!");
}

let number = 5;
if (number === 5) {
    console.log("You will see this message!");
}
if (number === 4) {
    console.log("You will not this message!");
}

let color = 'red';
if (color==='blue'){
    console.log("Color is blue!");
}
else{
    console.log("Color is not blue");
}

let username = prompt("Insert username");
if (username === "") {
    alert("Blank username");
}
else {
    alert("Username:" + username);
}


let price = 100.5;
if (price < 20) {
    alert("The price is cheaper than $20.");
}
else if (price < 50) {
    alert("The price is cheaper than $50.");
}
else if (price < 100) {
    alert("The price is cheaper than $100.");
}
else {
    alert("The price is more expensive than $100.");
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ javascript operators ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

//           == ...................... equal
//           === ..................... strictly equal
//           != ...................... different
//           !== ..................... strictly different
//           <, <=, >=, > ............ minor, minor-equal, greater-equal, greater
//           && ...................... and
//           || ...................... or
//           ! ....................... not
