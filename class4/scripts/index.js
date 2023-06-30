
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions declaration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function greetings(){
    console.log("Hello world!");
}


greetings();


function get_name(){
    let name = prompt("What is your name?");
    console.log("Your name is " + name + "!");
}


get_name();


function print_parameters(parameter1, parameter2){
    console.log(parameter1 + " " + parameter2);
}


print_parameters("Andre", "Haffner")



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mixing functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


function sum_numbers(n1, n2){
    return n1 + n2;
}


function print(parameter){
    console.log(parameter);
}


let sum = sum_numbers(5, 4);
print(sum);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Calculator function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function calculator(n1, operator, n2){
    switch (operator){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        default:
            return "error";
    }
}

calculator(10, "+", 10);
calculator(10, "-", 10);
calculator(10, "*", 10);
calculator(10, "/", 10);
calculator(10, "@", 10);


// One line functions
function arrow_sum_function(n1, n2){return n1 + n2;}
console.log(arrow_sum_function(5, 10));
