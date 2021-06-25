
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

const sayHello = function() {
    alert("Hello World!");
};

console.log(sayHello);

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