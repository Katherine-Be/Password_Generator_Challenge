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

const alphabet = ("abcdefghijklmnopqrstuvwxyz"); //change arrays to strings
const numbers = ("123456789");

//create captial and lowercase variable
var capitalLetters = alphabet.toUpperCase(); 
var lowercaseLetters = alphabet.toLowerCase();

var possibleCharacters = ("");//establish variables without block scope (to use in multiple functions)
var generateBtn = document.querySelector("#generate");//establish button variable in js from html id
var passwordField = document.querySelector("#password");//establishes a variable to insert the password into the html after it is generated

generateBtn.addEventListener("click", capitalPrompt);//assigns captialPrompt to activate when the button is clicked



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
    }lowercasePrompt();//calls the next function, lowercasePrompt. Moved function calls after discussing placement with tutor after discussing why the lowercase prompt kept popping up first
  }  

  


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
      }  numberPrompt ();//calls the third function
    }

  

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
      }lengthPrompt ();//calls the fourth function
    }


function lengthPrompt () {
  var lengthAnswer = window.prompt("How many characters are required in your password? Please enter a number between 12 and 128.");
  passwordLength = Number(lengthAnswer);//converts the user answer from a string to a number using the Number() method(Resource W3)

    if (passwordLength >= 12 && passwordLength <= 128) {//boolean statement to ensure the user's response to the required character limits
      console.log (lengthAnswer);
    } else if (passwordLength < 12 || passwordLength > 128) {//alerts user if their response is not within the character limits
      window.alert("Invalid response. Password length must be between 12 and 128 characters.");
      lengthPrompt ();
    }randomizeCharacters ();//calls the next function to randomize the possible characters
  }


function randomizeCharacters () {//establishes a function to randomize characters
  let password = ("");//creates empty string for password

  for (let i = 0; i <= passwordLength; i++) {//establishes parameters to limit the number of integers assigned to the possible characters. Fixed , and ;
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);//associates integers involved in selecting random characters from string
    password += possibleCharacters[randomIndex];
  }console.log (password);
  passwordField.textContent = (password);//changed the element content to the password
}
