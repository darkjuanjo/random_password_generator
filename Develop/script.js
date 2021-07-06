// Assignment code here
var user_selection = {
  pass_length: null,
  has_lower: null, // 0 for no, 1 for yes
  has_upper: null,
  has_numeric: null,
  has_special: null,
  set_parameters: function (index, value) {
    switch (index) {
      case 0:
        this.pass_length = value;
        break;
      case 1:
        this.has_lower = value;
        break;
      case 2:
        this.has_upper = value;
        break;
      case 3:
        this.has_numeric = value;
        break;
      case 4:
        this.has_special = value;
        break;
    }
  }
}

var criteria = [
  "Please define password length (min=8,max=128)",
  "Should lowercase characters be used? (0 = no, 1 = yes)",
  "Should uppercase characters be used? (0 = no, 1 = yes)",
  "Should numeric characters be used? (0 = no, 1 = yes)",
  "Should special characters be used? (0 = no, 1 = yes)",

]
//function used to loop through fill out user criteria
// loop iterates through object keys to fill out user response.
function setCriteria() {
  for(let i = 0; i < Object.keys(user_selection).length-1; i++)
    {
      response = prompt(criteria[i]);
      user_selection.set_parameters(i,response);
    }
}


function generatePassword() {
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '0123456789';
  var special = '!"\'@#$%^&*()_+~/*-+?<>,.;=[]/\\`|{} '; 
  setCriteria();
  //var content = [lowercase,uppercase,numeric,special]; 

    let generated = "";
    while(generated.length < user_selection.pass_length)
    {
       var value = Math.floor(Math.random()*4);
       console.log(generated);
       if(value === 0 && user_selection.has_lower == 1)
       {
        generated += lowercase.charAt(Math.floor(Math.random()*lowercase.length));
       }
       if(value === 1 && user_selection.has_upper == 1)
       {
          generated += uppercase.charAt(Math.floor(Math.random()*uppercase.length));
       }
       if(value === 2 && user_selection.has_numeric == 1)
       {
          generated += numeric.charAt(Math.floor(Math.random()*numeric.length));
       }
       if(value === 3 && user_selection.has_special == 1)
       {
          generated += special.charAt(Math.floor(Math.random()*special.length));
       }
    }
    return generated;
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
