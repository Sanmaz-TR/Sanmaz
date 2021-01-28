// Number
var number = 10;
console.log(typeof number);

// Condition
var condition = false;
console.log(typeof condition);

// String
var string = "Hello World";
console.log(typeof string);
var toNum = Number("50");
console.log(typeof toNum);

// Undefined
var noAssignment;
console.log(typeof noAssignment);

// Object
var myCar =  {
    model: "Tesla", 
    color: "Black",
    make: 2018
}
console.log(typeof myCar);
console.log(myCar.model);

// Sum
function sum(a, b){
    return a + b;
}
console.log(`5 + 5 = ${sum(5, 5)}.`);

// Accessing characters
var str = "Hello";
console.log(str[1]);

var str2 = "Hello";
for(let char of str2) {
    console.log(char);
}

// to Uppercase/Lowercase
console.log("Hello".toUpperCase());
console.log("Hello".toLowerCase());

// Find index
let newStr = "Hello World again";
if (newStr.indexOf("World")!= -1) {
    console.log("We found it");
}

// Startswith/EndsWith
console.log("Widget". includes("id"));
console.log("Widget". includes("bye"));
console.log("Widget". includes("id", 1));
console.log("Widget". startsWith("id"));
console.log("Widget". endsWith("et"));
