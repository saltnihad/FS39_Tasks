// Task 1 

/*  let points = prompt("Enter your points (1 to 100):");

switch (true) {
  case (points >= 90):
    console.log("Your grade is: A, Passed");
    break;
  case (points >= 80 && points < 90):
    console.log("Your grade is: B, Passed");
    break;
  case (points >= 70 && points < 80):
    console.log("Your grade is: C, Passed");
    break;
  case (points >= 60 && points < 70):
console.log("Your grade is: D, Passed");
    break;
  case (points >= 50 && points < 60):
    console.log("Your grade is: E, Passed");
    break;
  case (points<50):
    console.log("Your grade is: F, Failed");
    break;
 default:
    console.log("Try again with proper points");
    break;
} */

// Task 2

/* let degree = prompt("Enter weather in °C:");

switch (true) {
  case (degree >= 25):
    console.log("It's hot outside");
    break;
  case (degree >= 10 && degree < 25):
    console.log("It's good outside");
    break;
  case (degree >= 0 && degree < 10):
    console.log("It's cold outside");
    break;
  case (degree < 0):
    console.log("It's freezing outside");
    break;
 default:
    console.log("Try again with proper °C");
    break;
} */

// Task 3

/* let input = prompt("Enter a number");

if (input === null || input === "" || isNaN(Number(input))) {
    console.log("That's not a valid number. Please enter a valid number.");
} else {
    let number = Number(input);
    if (number % 2 === 0) {
        console.log("It is an even number.");
    } else {
        console.log("It is an odd number.");
    }
} */

// Task 4

/* const userName = "Nihad";
const password = "007123";

const userNameInput = prompt("Username:");

if (userNameInput === null) {
    console.log("Canceled")
} else if (userNameInput === userName) {
    const userPasswordInput = prompt("Password:")

    if (userPasswordInput === null) {
        console.log("Canceled")
    }else if (userPasswordInput === password){
        console.log("Welcome")
    }else {
        console.log("Wrong Password")
    }
}else {
    console.log("Wrong Username")
} */