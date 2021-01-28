// Constructor function
function Person (first, last, eye, birthYear) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
    this.birthYear = birthYear;
}

var myFriend = new Person ("Mike", "Watts", "blue", 1980);

// Creating new Object
var myCousin = new Person("Jane", "Doe", "green", 1990)
console.log(myCousin);
var emp1 = new Person("Andrew", "Jones", "black", 1977);
console.log(emp1);

document.getElementById('display1').innerHTML = "I have a friend " + myFriend.firstName + " " + myFriend.lastName + " who has " + myFriend.eyeColor + " eyes.";
document.getElementById('display2').innerHTML = "I have a cousin " + myCousin.firstName + " " + myCousin.lastName + " who has " + myCousin.eyeColor + " eyes.";

// Adding function to prototype
var calculateAge = function() {
    console.log("My friend is " + (2021-(myFriend.birthYear)) + " years old");
} ();

// Sum function
function sumAll() {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.getElementById('sum').innerHTML = sumAll(1, 123, 500, 115, 44, 88);
