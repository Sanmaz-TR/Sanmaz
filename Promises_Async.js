function winner() {
    return new Promise((resolve, reject) => {
        var val = Math.round(Math.random()*1);
          val ? resolve("I win") : reject("You win");
                }
            )
        }
async function output() {
    try {
        var output = await winner();
        console.log(output);
        } catch(err) {
            console.log(err);
            }
}
output();
output();
output();

function resolveIn3(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    })
}
var add = async function(x) {
    let a = await resolveIn3(10);
    let b = await resolveIn3(20);
    return x + a + b;
}
add(20).then(y => {
console.log(y);
})

function convertUpper(x) {
    return new Promise((resolve, reject) => {
        resolve(x.toUpperCase());
    })
}
async function message(y) {
    try {
        var verdict = await convertUpper(y);
        console.log(verdict);
} catch(err) {
    console.log("Convert to String");
}}
message("Hello");
message(23);