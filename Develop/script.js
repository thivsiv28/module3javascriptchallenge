// Assignment Code

//adding variables for all the character options

varupperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

varlowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

varnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// var passwordOptions = function () {

//   var userchoice = window.prompt ("How many characters would you like your password to be?");
// }

if (length < 8) {
  alert("Password length must be 8 characters minimum.")
}

if (length > 128) {
  alert("Password length must be less than 128 characters")
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

