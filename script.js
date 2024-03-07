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
// var playAgain = window.confirm("Play again?");
// console.log (playAgain)




// Assignment code here
//var passwordBtnEl = $('.password-btn');//Removed jquery I found with Chat GPT
//var passwordDisplayEl = $('#password-display');
const alphabet = ("abcdefghijklmnopqrstuvwxyz"); //change arrays to strings
const numbers = ("123456789");

//create captial and lowercase variable
var capitalLetters = alphabet.toUpperCase(); 
var lowercaseLetters = alphabet.toLowerCase();

var possibleCharacters = ("");//establish variables without block scope (to use in multiple functions)
var generateBtn = document.querySelector("#generate");//establish button variable in js from html id

generateBtn.addEventListener("click", capitalPrompt());//add event listener to button click which starts the first function


function capitalPrompt() {
  var capitalAnswer = window.prompt("Does your password require CAPITAL LETTERS? Please answer yes or no."); //creates the first prompt and assigns variable to the user's answer to be used in the function
  capitalAnswer = capitalAnswer.toLowerCase();//converts user response to all lowercase characers to accommodate for any capital characters 

  //established these if...else statements after using the Mimo app to reinterate JS
      if (capitalAnswer === "yes") {
      possibleCharacters = capitalLetters;//to include capital letters in the possible characters used in the password
      console.log (capitalAnswer);
      console.log (possibleCharacters);
    } else if (capitalAnswer === "no") {//nothing is added to the possible characters
      console.log (capitalAnswer);
      console.log (possibleCharacters);
    } else if (capitalAnswer !== "yes" && capitalAnswer !== "no") {
      window.alert("Invalid response.");//if user types anything other than yes or no, they are taken back to the beginning of the function/prompt
      capitalPrompt ();
    }
  }
  
  lowercasePrompt();//calls the next function, lowercasePrompt


function lowercasePrompt () {
  var lowercaseAnswer = window.prompt("Does your password require LOWERCASE LETTERS? Please answer yes or no.");
  lowercaseAnswer = lowercaseAnswer.toLowerCase();

      if (lowercaseAnswer === "yes") {
      possibleCharacters = possibleCharacters.concat(lowercaseLetters);
      console.log (lowercaseAnswer);
      console.log (possibleCharacters);
      } else if (lowercaseAnswer === "no") {
        console.log (lowercaseAnswer);
        console.log (possibleCharacters);
      } else if (lowercaseAnswer !== "yes" && lowercaseAnswer !== "no") {
        window.alert("Invalid response.");
        lowercasePrompt ();
      }
    }

  
  numberPrompt ();//calls the third function

function numberPrompt () {
  var numberAnswer = window.prompt("Does your password require NUMBERS? Please answer yes or no.");
  numberAnswer = numberAnswer.toLowerCase();

      if (numberAnswer === "yes") {
      possibleCharacters = possibleCharacters.concat(numbers);
      console.log (numberAnswer);
      console.log (possibleCharacters);
      } else if (numberAnswer ==="no") {
        console.log (numberAnswer);
        console.log (possibleCharacters);
      } else if (numberAnswer !== "yes" && numberAnswer !== "no") {
        window.alert("Invalid response.");
        numberPrompt ();
      }
    }

lengthPrompt ();//calls the fourth function

function lengthPrompt () {
  var lengthAnswer = window.prompt("How many characters are required in your password? Please enter a number between 12 and 128.");
  var passwordLength = Number(lengthAnswer);//converts the user answer from a string to a number using the Number() method(Resource W3)

    if (passwordLength >= 12 && passwordLength <= 128) {//boolean statement to ensure the user's response to the required character limits
      console.log (lengthAnswer);
    } else if (passwordLength < 12 || passwordLength > 128) {//alerts user if their response is not within the chatacter limits
      window.alert("Invalid response. Password length must be between 12 and 128 characters.");
      lengthPrompt ();
    }
  }

  randomizeCharacters ();//calls the next function to randomize the possible characters

function randomizeCharacters () {//establishes a function to randomize charactersS


  
  for (let i = 0; i <= passwordLength, i++;) {
    const randomCharacters = Math.floor(Math.random() * possibleCharacters.length)//randomizes characters by selecting random integers associated with a character's space on the string of possibleCharacters
  }
  console.log (randomCharacters)
}
// function randomizeCharacters () {
//     randomCharacters = randomizeCharacters (possibleCharacters);
//     for (let i = possibleCharacters.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [possibleCharacters[i], possibleCharacters[j]] = [possibleCharacters[j], possibleCharacters[i]]; // Swap elements at indices i and j
//     }
//     generatePassword;
//   }

//   function generatePassword(passwordLength) {
//     console.log ("passworlength", passwordLength)
//     var pickedPassword = "";
    

//     for (var i = 0; i < passwordLength; i++) {//came across Fisher-Yates Shuffle to shuffle a string, resource: stackoverflow.com but it was unnecessary
//       const random = Math.floor(Math.random() * possibleCharacters.length);
// console.log (random)
// console.log (possibleCharacters[random])
//       pickedPassword += possibleCharacters[random];
//     }
//     console.log (pickedPassword)
//     return pickedPassword
//   }

//   function printPassword() { //used Chat GPT to find how to insert the new password into the element, but it used JQuery
//     var passwordBtnEl = $('.password-btn');
//     button.innerHTML = "18 degrees";
    
// console.log(password);
//   }




// /*function generatePassword(passwordLength, possibleLetters) { //another attempt to randomize characters
//     for (var i=0; i < passwordLength, i++;) {

//     const randomIndex = Math.floor(Math.random() * possibleLetters.length);
//     const randomChar = possibleLetters[randomIndex]
  
//     password = password + randomChar;

    
//   console.log(password);
//   }};*/


// // Assignment code here //I did not use this. I could not reason out how to start with this given code and later I finished the code to successfully meet requirements without it.


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// }
