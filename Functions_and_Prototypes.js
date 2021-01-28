// Constructor function
function Person (first, last, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
}

var myFriend = new Person ("Mike", "Watts", "blue");

// Creating new property
myFriend.birthYear = 1980
console.log(myFriend.birthYear);

// Creating new Object
var myCousin = new Person("Jane", "Doe", "green")
console.log(myCousin);

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
