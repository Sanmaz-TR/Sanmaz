// Function Declaration
function showMessage() {
    let message = "Hey There";
    console.log(message);
}
showMessage();

// Outer Variable
let userName = "John";
function greet() {
    let greetMessage = "Hello " + userName;
    console.log(greetMessage);
}
greet();

// Functions with Parameters
function sender(text, from) {
    console.log(text + " from " + from);
}
sender('Hello', 'Ana');

function emptyMessage(text) {
    if(text == undefined) {
        console.log('Text is empty');
    }
}
emptyMessage();

// Returning Value
function sum(a, b){
    return a + b
}
var sumVal = sum(2, 3);
console.log(sumVal)

// Conditions
function chkAge(age) {
    if(age >= 18) {
        console.log('Access granted')} else {
            console.log('Access denied');
        }
    } 
    
    chkAge(32);
    chkAge(17);

    