// [Variable Naming]

// Camel Case
const veryLongVariableName = 0;

// Snake Case
const very_long_variable_name = 1;

//-------------------------------------------------------------------

// [Variable]

// const = Never Changed
// let = You Can Changed
// var = Old Variable Type

// Dynamic Change of (let) Data Type
let a = true;
a = 1;
a = "test";

// Always const, Sometimes let, Never use var (Basic Rules)

//-------------------------------------------------------------------

// [Arrays]

const daysOfWeek = ["mon", "tue", "wed", "thu", 'fri', "sat", "sun"];
console.log(daysOfWeek[2]);

// Arrays can put things that whatever you want of Data Type.
const testOfArray = [1, "2", true, null, undefined];
console.log(testOfArray);

//-------------------------------------------------------------------

// [Objects]

// Seems like JSON Data Format
const player = {
    name : "Nico",
    points : 12312,
    fat : true
}

console.log(player);

//-------------------------------------------------------------------

// Function

function testFunc(number) {
    number += 1;
    return number;
}

console.log(testFunc(1));

let data = 4;

function dataTestFunc(data) {
    data = 5;
}

function objTestFunc(obj) {
    obj.name = "modified";
}

dataTestFunc(data);
console.log(data);      // Not Modified
objTestFunc(player);
console.log(player);    // Modified

function plusTest(a, b) {
    console.log(a + b);
}

plusTest(1, 2);
plusTest("hello ", "world");
plusTest(1, "2");

//-------------------------------------------------------------------

// Conditionals

const age = prompt("input");
const changeTypeOfAge = parseInt(age);
console.log(typeof changeTypeOfAge);