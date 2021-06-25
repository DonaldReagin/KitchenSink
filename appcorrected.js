// Variables (I did fine)

let myName = "Donnie"; // Block scoped (cannot redeclare)
const numberOfStates = 50; // Block scoped (cannot redclare)
var isAlive = true; // Function scoped (can redeclare and accessible out of loop block scope)

// Operators (I did fine)

let sum = 5 + 4; // 9
let isGreater = 5 > 4; // true
let product = 231 * sum; // ^2000
let opposite = -product; // Returns opposite number (negative in this case)

console.log(opposite);

/*

multi-line 
comment

*/

// Functions (I was close)

function sayHello(/*parameters*/) {
    alert("Hello World");
}

sayHello();

function checkAge(name, age) {
    if(age < 21) {
        alert( `Sorry ${name}, you aren't old enough to view this page!`); // String interpolation
    }
}

checkAge("Jerry", 19);

// Objects (got arrays, bad at loops)

const favVeggies = ['green beans', 'collard greens', 'corn'];

// loop option 1
favVeggies.forEach((veggie) => {
    console.log(veggie);
});


// loop option 2
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}

// Loop Friends Objects
const friends = [
    {
        name: "Spain",
        age: 33
    },
    {
        name: "Amy",
        age: 30
    },
    {
        name: "Math",
        age: 31
    },
];

friends.forEach(function (friends) {
    checkAge(friends.name, friends.age);
});

// getLength Function

function getLength(word) {
    return word.length
}

let length = getLength("Hello World!");

if (length % 2 == 0) {
    console.log('The world is nice and even')
} else {
    console.log('The world is an odd place.')
}