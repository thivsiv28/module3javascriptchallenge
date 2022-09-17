// Assignment Code

//adding variables for all the character options

const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const specialCharacters = ["$", "%", "&", "*", "#", ">"];


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", promptPasswordLength);


// function for getting length prompt
function promptPasswordLength () {

  const passwordLength = prompt("How many characters would you like your password to be, please pick a number from 8 - 128 characters?");
  if (passwordLength < 8) {
    alert("Password length must be 8 characters minimum.");
    promptPasswordLength ();
  }
  
  else if (passwordLength > 128) {
    alert("Password length must be less than 128 characters");
    promptPasswordLength ();
  }

 else if (isNaN(passwordLength) == true) {

  alert ("Enter a valid number please!");
  promptPasswordLength ();

 }

  else { 
    promptUpperCase ({passwordLength});
  }
}

// function for uppercase letters prompt
function promptUpperCase ({passwordLength}) {
  const wantUpperCase = prompt("Would you like upper case letters? (yes/no?)");
  let isUpperCase = false;
  if (wantUpperCase == "yes") {
    isUpperCase=true;
  }
  
  promptLowerCase({passwordLength, isUpperCase});

}

// function for lowercase letters prompt
function promptLowerCase ({passwordLength, isUpperCase})
 {
  const wantLowerCase = prompt("Would you like lower caser letters? (yes/no?)");

  let isLowerCase = false;
  if (wantLowerCase == "yes") {
    isLowerCase=true;
  }

  promptNumbers({passwordLength, isLowerCase, isUpperCase})
}

//function for numbers prompt
function promptNumbers ({passwordLength, isLowerCase, isUpperCase})
{
  const wantNumbers = prompt("Would you like numbers? (yes/no?)");
  let isNumbers = false;
  if (wantNumbers == "yes") {
    isNumbers=true;
  }

  promptSpecialCharacters({passwordLength, isLowerCase, isNumbers, isUpperCase})
}

//function for specialcharacters prompt
function promptSpecialCharacters ({passwordLength, isLowerCase, isNumbers, isUpperCase,})
{
  const wantSpecialCharacters = prompt("Would you like special characters? (yes/no?)");

  let isSpecialCharacters = false;
  if(wantSpecialCharacters == "yes") {
    isSpecialCharacters=true;
  }

  writePassword ({passwordLength, isLowerCase, isNumbers, isUpperCase, isSpecialCharacters});
}




// Write password to the #password input

function writePassword({passwordLength, isLowerCase, isNumbers, isUpperCase, isSpecialCharacters})
 {
  var password = generatePassword({passwordLength, isLowerCase, isNumbers, isUpperCase, isSpecialCharacters});
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

//determining based off the users choice and how many cateogories of characters they picked, the final password
function generatePassword({passwordLength, isLowerCase, isNumbers, isUpperCase, isSpecialCharacters})
{
  let chunks = 0;
  let lowerCasePass = "";
  let upperCasePass = "";
  let numberPass="";
  let specialCharPass ="";

  if (isLowerCase == true) {
  lowerCasePass = generateSimplePass (passwordLength,lowerLetters);
    chunks= chunks+1;
  }

  if(isNumbers == true) {
    numberPass = generateSimplePass (passwordLength,numbers);
    chunks= chunks+1;
  }

  if(isUpperCase == true) {
    upperCasePass = generateSimplePass (passwordLength,upperLetters);
    chunks= chunks+1;
  }

  if(isSpecialCharacters == true) {
    specialCharPass = generateSimplePass (passwordLength,specialCharacters);
    chunks= chunks+1;
  }
 
  if (chunks ==0) {
    alert ("You must enter yes for at lease one criteria");
    return "Click Generate Password button below to try again" ;
  }

  let chunkLength = passwordLength/chunks;
  let chunkRemainder= passwordLength%chunks;
  let randomPassword= "";

  randomPassword=randomPassword + lowerCasePass.substring(0,chunkLength);
  randomPassword=randomPassword + upperCasePass.substring(0,chunkLength);
  randomPassword=randomPassword + numberPass.substring(0,chunkLength);
  randomPassword=randomPassword + specialCharPass.substring(0,chunkLength);
randomPassword=randomPassword + randomPassword.substring (0,chunkRemainder);

  return randomPassword;

}

//determining how many characters length and letters there will be of each
function generateSimplePass (passwordLength, candidateLetters) {

  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++)
  { 
    let index = Math.floor(Math.random() * candidateLetters.length);
    let character = candidateLetters[index];
    randomPassword = randomPassword + character;
  }
  return randomPassword;
}

function showLengthSelector(){
  var lengthSelectorDiv = document.querySelector("#lengthinputcontainer");

  lengthSelectorDiv.style.display = "block";
}


