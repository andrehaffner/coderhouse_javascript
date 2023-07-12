
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Arrays declaration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


let array1 = [];
let array2 = [0, 1, 2];
let array3 = ["A", "B", "C"];
let array4 = [true, true, false, false];
let array5 = [0, "G", false, 7.9123];

console.log(array2[0]); // 0
console.log(array2[1]); // 1
console.log(array3[2]); // C
console.log(array4[3]); // false
console.log(array5[3]); // 7.9123

console.log(array3.length); // 3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Looping an array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

for (let index=0; index<array3.length; index++){
    console.log(array3[index]);
}

for (const letter of array3) {
    console.log(letter)
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Adding/Deleting elements to an array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

array3.push("D");
console.log(array3);

array2.unshift(-1);
array2.unshift(-2);
console.log(array2);


let array6 = [-2, -1, 0, 1, 2];

array6.shift();
console.log(array6); // [-1, 0, 1, 2]

array6.pop();
console.log(array6); // [-1, 0, 1]

array6 = [-2, -1, 0, 1, 2];

array6.splice(1, 2);
console.log(array6); // [-2, 1, 2]


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Usefully methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let array7 = ["avocado", "banana", "apple"];
let array8 = ["pineapple", "blueberry"];

// ~~~~~ join method
let message = array7.join("#");
console.log(message); // avocado#banana#apple

// ~~~~~ concat method
let new_array = array7.concat(array8);
console.log(new_array); // ["avocado", "banana", "apple", "pineapple", "blueberry"]

//  ~~~~~ slice method
new_array = new_array.slice(1, 3)
console.log(new_array) // ["banana", "apple"]

// ~~~~~ indexOf method
let array9 = ["andre", "haffner"];
i = array9.indexOf("andre");
console.log(i); // 0

// ~~~~~ includes method
let includes_andre = array9.includes("andre");
let includes_bailey = array9.includes("bailey");
console.log(includes_andre); // true
console.log(includes_bailey); // false

// ~~~~~ reverse method

let array10 = array9.reverse();
console.log(array10); // ["haffner", "andre"]
