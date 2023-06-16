
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Declarations let, const and function console.log() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let name = 'Andre';
console.log(name);

const gender = 'male';
let age = 21;
let height = '190cm';
console.log(age)
console.log(height);

age = 22;
console.log(age, gender);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions prompt() and alert() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let input = prompt("Type anything...");
console.log(input);
alert("This is an alert!")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mathematics ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const number1 = 2;
const number2 = 5;

console.log("Sum of number1 and number2:", number1 + number2);
console.log("Subtraction of number1 and number2:", number1 - number2);
console.log("Multiplication of number1 and number2:", number1 + number2);
console.log("Division and number2:", number1 - number2);
console.log("number1 raised to number2:", number1 ** number2)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Transforming variables ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// Function parseInt()
let a = prompt("Enter an integer 'a':");
let b = prompt("Enter an integer 'b':");
a = parseInt(a);
b = parseInt(b);
console.log("Sum of a and b:", a+b);

// Function Number()
a = Number(prompt("Enter an integer 'a':"));
b = Number(prompt("Enter an integer 'b':"));
a = parseInt(a);
b = parseInt(b);
console.log("Second sum of a and b:", a+b);

// Function .toString()
a = prompt("Enter a number:")
console.log("Your number as string:", a.toString())
