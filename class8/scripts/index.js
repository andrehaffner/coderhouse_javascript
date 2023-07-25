
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Getting elements ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

console.log(document);
console.dir(document);
console.dir(document.head);
console.dir(document.body);

let h1_title = document.getElementById("h1_title");
let h2_titles = document.getElementsByClassName("h2_title");
let h3_titles = document.getElementsByTagName("h3");

console.log(h1_title.innerHTML);
console.log(h2_titles[0].innerHTML);
console.log(h3_titles[0].innerHTML);

for (const h of h3_titles){
    console.log(h.innerHTML);
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Changing text of element ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

for (const h of h3_titles){
    h.innerText = "New innerText"
}

let paragraphs = document.getElementById("paragraphs");
console.log(paragraphs.innerHTML);
console.log(paragraphs.innerText);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Changing class of element ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

paragraphs_list = document.getElementsByTagName("p");
for (const paragraph of paragraphs_list) {
    paragraph.className = "class1"
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Creating new element on HTMl ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let new_paragraph = document.createElement("p");
let new_paragraph2 = document.createElement("p");

paragraphs = document.getElementById("paragraphs");

new_paragraph.innerText = "New paragraph on the area";
new_paragraph2.innerText = "New paragraph2 on the area";
paragraphs.append(new_paragraph);
paragraphs.append(new_paragraph2);

new_paragraph2.remove(); // This command removes any element from HTML


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Getting input values ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let name = document.getElementById("name");
name.value = "Enter your name";