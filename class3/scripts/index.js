
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ For loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

for (let i = 0; i < 10; i++){
    console.log(i);
}


// Multiplication table

let insert_number = parseInt(prompt("Choose a number:"));

for (let i = 1; i <= 10; i++){
    console.log(String(insert_number) + " x " + String(i) + " = " + String(insert_number * i));
}


// Break clause | Multiplication table (max value 100)

insert_number = parseInt(prompt("Choose a number:"))

for (let i = 1; i <= 10; i++){
    if (insert_number * i > 100){
        break;
    }
    console.log(String(insert_number) + " x " + String(i) + " = " + String(insert_number * i));
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ While loop ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



let input = String(prompt("Insert a text to print:"))

while (input !== "esc"){
    console.log(input + " (insert esc to stop loop)")
    input = String(prompt("Insert a text to print:"))
}


// Do While structure (at least one time)

do{
    input = String(prompt("Insert a text to print:"))
    console.log(input + " (insert esc to stop loop)")
}while (input !== "esc")


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Switch case ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

input = String(prompt("Enter a number from 1 to 5:"))

switch (input){
    case "1":
        console.log("You chose number 1")
        break
    case "2":
        console.log("You chose number 2")
        break
    case "3":
        console.log("You chose number 3")
        break
    case "4":
        console.log("You chose number 4")
        break
    case "5":
        console.log("You chose number 5")
        break
    break
}