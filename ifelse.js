/* program related to if and else statement */

// Print the right age for driving
const prompt = require('prompt-sync')();
let a = Number(prompt("Enter your age = "));
if (a < 0) {
    console.log("this is invalid input");
}
 else if (a<18 && a>0) {
    console.log("Yes! You can't drive now");
} else {
    console.log("You can drive now");
}