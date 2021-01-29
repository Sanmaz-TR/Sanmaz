// Add
var add = (a, b) => {
    return a + b;
}
console.log(add(5, 10));

// Divide
var divide = (a, b) => {
    return a / b;
}
console.log(divide(5, 5));

var data = (func) => {
    // get data from user or other external source
    var num1 = 10;
    var num2 = 20;
    return func(num1, num2);
}

console.log(data(add));       

var addData = (func) => {
    var num1 = 10;
    var num2 = 20;
    return func(num1, num2)
}
console.log(addData(add));

var dividedata = (func) => {
    var num1 = 5;
    var num2 = 5;
    return func(num1, num2)
}
console.log(dividedata(divide));

// Function returning functions
var multiply = (integer) => (anotherInteger) => integer * anotherInteger;
var subtract = (integer) => (anotherInteger) => integer - anotherInteger;
var result1 = multiply(100)(100);
var result2 = subtract(20)(-21);
console.log(result1);
console.log(result2);

var sum = x => y => z => x + y + z;
var finalRes = sum(1)(2)(3);
console.log(finalRes);
