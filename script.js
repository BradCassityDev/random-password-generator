// Generate Password Function
var generatePassword = function() {
  // establishing allowed character arrays
  const lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppderCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numericValues = [0,1,2,3,4,5,6,7,8,9];
  const specialChars = ['!','"','#','$','&','%','^',"'",'(',')','*','+','-','.','<','>','?','/','[',']','{','}','|','~','_'];
  var includedCharacters = [];
  var generatedPass = '';
  var passLength = 0;
  
  // Password Length
  while(isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(window.prompt("What length would you like the password to be? Must be between 8 and 128 characters."));
  }

  // Include Lowercase?
  var includeLower = window.confirm("Would you like lowercase characters to be included?");
  if(includeLower) {includedCharacters = includedCharacters.concat(lowerCaseLetters);}
  
  // Include Uppercase?
  var includeUpper = window.confirm("Would you like uppercase characters to be included?");
  if(includeUpper) {includedCharacters = includedCharacters.concat(uppderCaseLetters);}

  // Include Numeric?
  var includeNumeric = window.confirm("Would you like numeric values to be included?");
  if(includeNumeric) {includedCharacters = includedCharacters.concat(numericValues);}

  // Include Special Characters? 
  var includeSpecial = window.confirm("Would you like special characters to be included?");
  if(includeSpecial) {includedCharacters = includedCharacters.concat(specialChars);}

 


  // return the generated password
  return generatedPass;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
