
// Variables

var myName = "Donnie";

const numOfStates = 50;

let twoPets = true;

// Operators

var addition = 4 + 5;
console.log(addition);

var greaterThan = 5 > 4;
console.log(greaterThan);

var multiplication = 231 * 4;
console.log(multiplication);

// Functions

function sayHello() {
    alert("Hello World!");
};

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        return ("Sorry" + name + ", you aren't old enough to view this page!");
    };
};

console.log(checkAge("Charles", 21));
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// Objects
let favoriteVeggies = ['Asparagus', 'Bell Peppers', 'Spinach', 'Cucumber'];

for(let i = 0; i < 5; i++) {
    console.log(favoriteVeggies.forEach);
}


const person1 = {
    name: "Dre",
    age: 29,
}
const person2 = {
    name: "Spain",
    age: 33,
}
const person3 = {
    name: "Cristina",
    age: 29,
}
const person4 = {
    name: "Amy",
    age: 30,
}
const person5 = {
    name: "Math",
    age: 31,
}

let people = [person1, person2, person3, person4, person5]

