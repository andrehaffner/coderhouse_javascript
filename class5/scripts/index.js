
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Objects declaration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let user1 = {
    first_name: 'andre',
    last_name: 'haffner',
    height: 1.9
}

console.log(user1);
console.log("User1 name is:", user1.first_name);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Constructor objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function User(first_name, last_name, height) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.height = height;
    this.full_name = first_name + " " + last_name;
}

user1 = new User("andre", "haffner", 1.9);
console.log(user1.first_name);
console.log(user1.last_name);
console.log(user1.full_name);
console.log(user1.height);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Personalized methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //


function User2(first_name, last_name) {
    this.full_name = first_name + " " + last_name;
    this.talk = function () {
        console.log("Hey, I am", this.full_name);
    }
}

user1 = new User2("andre", "haffner");
user1.talk();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Classes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //\

class User3{
    constructor(first_name, last_name, height){
        this.full_name = first_name + " " + last_name;
        this.height = height;
    }
    talk () {
        console.log("Hey, my name is ", this.full_name);
    }
    tall() {
        return this.height > 1.8;;
    }
}

user1 = new User3("andre", "haffner");
user1.talk();
console.log(user1.tall());
