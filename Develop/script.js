// Assignment Code

//adding variables for all the character options

var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var specialCharacters = ["!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

var allCharacters = "";

var generateBtn = document.querySelector("#generate");

function promptPasswordLength () {

  const passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength < 8) {
    alert("Password length must be 8 characters minimum.");
    promptPasswordLength ();
  }
  
  else if (passwordLength > 128) {
    alert("Password length must be less than 128 characters");
    promptPasswordLength ();
  }

  else {
    promptUpperCase ({passwordLength});
  }

  
}

function promptUpperCase ({passwordLength}) {
  const wantUpperCase = prompt("Would you like Upper case letters? (yes/no)");
  let isUpperCase = false;
  if (wantUpperCase == "yes") {
    isUpperCase=true;

  }
  
  promptLowerCase({passwordLength, isUpperCase});

}

function promptLowerCase ({passwordLength, isUpperCase})
 {
  const wantLowerCase = prompt("Would you like lower caser letters? (yes/no)");

  let isLowerCase = false;
  if (wantLowerCase == "yes") {
    isLowerCase=true;
  }

  promptNumbers({passwordLength, isLowerCase, isUpperCase})

console.log("user selected lower case", isLowerCase, passwordLength, isUpperCase);
 
}

function promptNumbers ({passwordLength, isLowerCase, isUpperCase})
{
  const wantNumbers = prompt("Would you like numbers? (yes/no?)");
  let isNumbers = false;
  if (wantNumbers == "yes") {
    isNumbers=true;
  }

  promptSpecialCharacters({passwordLength, isLowerCase, isNumbers, isUpperCase})
}

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

function generatePassword({passwordLength, isLowerCase, isNumbers, isUpperCase, isSpecialCharacters})
{
  let numberOfCriteria = 0;
  for (let i=0; i<passwordLength; i++)
  {
    pwd += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
  }
  
}

return numberOfCriteria

function showLengthSelector(){
  var lengthSelectorDiv = document.querySelector("#lengthinputcontainer");

  lengthSelectorDiv.style.display = "block";
}
// Add event listener to generate button
generateBtn.addEventListener("click", promptPasswordLength);

