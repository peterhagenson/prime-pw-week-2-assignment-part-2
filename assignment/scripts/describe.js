// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called "name" whose value is the string "Dane"
// We check to see if the value of that variable is the string "Mary"
// If so, we console.log "Hi, Mary!"
// If it is not, we console.log "How do you do?"
// In this case, the value that will get logged to the console is "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Initialize new variable "secret" without a value for later use
// Initialize new variable "code" with the value of type number 123
// Create a conditional function that sets assings the value of string "super" to the variable "sectre", and multiples the value of variable "code" by two if the variable code is strictly equal to the number 123.
// If the vale of variable "code" is greater than the number 250, the variable "secret" will be set to the string "duper"
// the value of variable "secret" will be logged to the console at the end of the function.
// In this case, the value that will be logged to the console will be "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Initialize 3 variables: isStudent with the boolean value of true, age with the numerical value of 34, and zip with the numerical value of 55407
// Create a conditional function that logs the string "You're a student on the West Coast!" if the variable isStudent is true AND the variable zip is greater than 80000
// If the previous condition is not met, the function will log the string "What are your hoppies?" if the variable isStudent is false OR the variable age has a value less than 30
// If the previous condition is not met, the function will log the string "Welcome to Prime!" if the variable isStudent is true
// If none of the previous conditions are met, the funciton logs "How about the weather?"
// In this case, "Welcome to Prime!" will be logged to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - the values of colorOne and colorTwo are switched. colorOne should be changed to string "blue" and color two should be changed to string "red"
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - color who also needs to be set to "purple"
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX - The description says we are checking for both conditions in the conditional function, but the function is using the OR operator. Instead of || we should have &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - I believe the way the condition is written will work fine, but it would more closely match the wording of the description to write it like this: (age >= minAge)
if(minAge <= age) {
FIX - This will not log the value "enter" as the description says. If age is greater than or equal to minAge, this will log "no entry". We should change this line to console.log("enter")
  console.log('no entry');
} else {
  console.log('enter');
}
*/
