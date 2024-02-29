//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment code here
var passwordBtnEl = $('.password-btn');
var passwordDisplayEl = $('#password-display');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '123456789'

let capitalLetters = alphabet.toUpperCase();
let lowercaseLetters = alphabet.toLowerCase();


function capitalPrompt(){
  var capitalAnswer = window.prompt("Does your password require CAPITAL LETTERS?");

  if (capitalAnswer != null) {
    capitalAnswer = capitalAnswer.toLowerCase();
    
    if (capitalAnswer === "yes") {
      possibleCharacters = capitalLetters.split('');
    }
    else if (capitalAnswer === "no") {
    }
    lowercasePrompt;
  }
   else window.alert("Invalid response");
}

function lowercasePrompt () {
  var lowercaseAnswer = window.prompt("Does your password require LOWERCASE LETTERS?");

  if (lowercaseAnswer != null) {
    lowercaseAnswer = lowercaseAnswer.toLowerCase();

    if (lowercaseAnswer === "yes") {
      possibleCharacters = capitalLetters.concat(lowercaseLetters.split(''));
    }
    else if (lowercaseAnswer === "no") {
    }
    numberPrompt;
  }
   else window.alert("Invalid response");
}


function numberPrompt () {
  var numberAnswer = window.prompt("Does your password require NUMBERS?");

  if (numberAnswer != null) {
    numberAnswer = numberAnswer.toLowerCase();
    generatePassword;

    if (numberAnswer === "yes") {
      possibleCharacters = capitalLetters.concat(lowercaseLetters.split(''), numbers.split(''));
    }
    else if (numberAnswer === "no") {
    lengthPrompt;
  }
   else window.alert("Invalid response");
}

function lengthPrompt () {
  var lengthAnswer = window.prompt("How many characters are required in your password?");
  var passwordLength = Number(lengthAnswer);
}
 
function generatePassword(passwordLength, possibleLetters) { 
  for (var i=0; i < passwordLength, i++;)
  var randomProperty = function (object) {
    var keys = Object.keys(object);
    return object[keys[Math.floor(keys.length * Math.random())]];
  };

console.log(capitalAnswer);


/*var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {


function generatePassword(passwordLength, possibleLetters) { 
    for (var i=0; i < passwordLength, i++;) {

    const randomIndex = Math.floor(Math.random() * possibleLetters.length);
    const randomChar = possibleLetters[randomIndex]
  
    password = password + randomChar;

    
  console.log(password);
  }};*/








