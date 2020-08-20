function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');


togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

//get the values from the inputs
const form = document.getElementById('form'),
      email = document.getElementById('email'),
      userPassword = document.getElementById('password'),
      SignupButton = document.getElementById('SignupBtn'),
      emailError = document.querySelector('.emailError'),
      passwordError = document.querySelector('.passwordError');

function setErrorFor(input, message, messageTag) {
  if(input.value.trim() == '' || input.value.trim() == ' ') {
    let formGroup = input.parentElement; // .form-control
    //add error message inside small
    messageTag.innerHTML = message;

    //add error class 
    formGroup.classList.add('error');
    return true

  }else {
    let formControl = input.parentElement; // .form-control
    //add error message inside small
    messageTag.innerText = '';
    return false

    //add error class 
    formControl.classList.remove('error');
  }
  }


form.addEventListener('submit', function(e) {
  e.preventDefault();
   checkEmail = setErrorFor(email, 'Email is required', emailError),
   checkPassword = setErrorFor(userPassword, 'Password is required', passwordError);
  

  if(!checkEmail && !checkPassword){
    console.log("success")
  }
});

email.addEventListener('input', function () {
  setErrorFor(email, 'Email is required', emailError)
})
userPassword.addEventListener('input', function() {
  setErrorFor(userPassword, 'Password is required', passwordError)
})