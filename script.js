let age = prompt("Hi user! Please enter your age here:");
if (age < 0) {
    console.log("Error! Please, type a positive number.");
}
else if (age === 21) {
    console.log("Hey, happy 21st birthday! :D");
}
else if (age % 2 !== 0) {
    console.log("Wow, your age is odd!");
}
else if (age % Math.sqrt(age) === 0) {
    console.log("Hey, that is a perfect square, so cool! :)");
}
else {
    console.log(`So you are ${age} years old, very nice! :)`);
}