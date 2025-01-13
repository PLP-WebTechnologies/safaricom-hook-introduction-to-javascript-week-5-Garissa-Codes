// Variables and Data Types
// Declaring variables of different types
let name = "Daniel Ndeto";         // String
let age = 25;                  // Number
let isStudent = true;          // Boolean
let hobbies = ["reading", "coding", "gaming"]; // Array
let person = {                 // Object
    firstName: "Daniel",
    lastName: "Ndeto",
    age: 25
};

// Printing values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2) || !['+', '-', '*', '/'].includes(operation)) {
        alert("Invalid input! Please try again.");
        return;
    }

    let result;
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = num1 / num2; break;
    }
    alert(`Result: ${result}`);
}
calculator();

// Greeting Function
function greetUser(name) {
    return `Hey,  ${name}! 🌟 Welcome to the coolest website on the internet! 😎🚀`;
}
// If Statements:
function displayGreeting() {
    const userName = prompt("What is your name?");
    if (userName) {
        const greetingMessage = greetUser(userName);
        document.getElementById("greeting").textContent = greetingMessage;
    } else {
        alert("Please enter a valid name.");
    }
}
displayGreeting();

// Voting Eligibility
function checkVoteEligibility() {
    const userAge = parseInt(prompt("Please enter your age:"));
    const eligibilityMessage = (userAge >= 18)
        ? "You are eligible to vote!"
        : "You are not eligible to vote yet.";
    document.getElementById("eligibilityMessage").textContent = eligibilityMessage;
}
checkVoteEligibility();

// Displaying Numbers
 // Function to display numbers from 1 to 10
 function displayNumbers() {
    const numberList = document.getElementById('numberList');

    // Looping from 1 to 10 and create <li> for each number
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
}

// Calling the displayNumbers function to run when the page is loaded
window.onload = displayNumbers;

// DOM Manipulation
// Changing the text of the <h1> element
document.querySelector('h1').textContent = "JavaScript in Action!";

// Creating a new <p> element and add it inside the #dynamic-content <div>
const newParagraph = document.createElement('p');
newParagraph.innerHTML = "<b>This content was added dynamically using JavaScript.</b>";

// Appending the new <p> element to the dynamic-content div
document.getElementById('dynamic-content').appendChild(newParagraph);
