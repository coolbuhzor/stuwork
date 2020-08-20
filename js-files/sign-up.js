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
      userName = document.getElementById('username'),
      email = document.getElementById('email'),
      userPassword = document.getElementById('password'),
      SignupButton = document.getElementById('SignupBtn'),
      userNameError = document.querySelector('.usernameError'),
      emailError = document.querySelector('.emailError'),
      passwordError = document.querySelector('.passwordError');
         const confirm = document.getElementById('checkbox');

function setErrorFor(input, message, messageTag) {
  // debugger
  if(input.value.trim() == '' || input.value.trim() == ' ') {
    let formControl = input.parentElement; // .form-control
    //add error message inside small
    messageTag.innerHTML = message;

    //add error class 
    formControl.classList.add('error');
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
  const checkUserName = setErrorFor(userName, 'Username cannot be blank', userNameError),
   checkEmail = setErrorFor(email, 'Email is required', emailError),
   checkPassword = setErrorFor(userPassword, 'Password is required', passwordError);
  

  if(!checkUserName && !checkEmail && !checkPassword){
    console.log("success")
  }
});



userName.addEventListener('input', function () {
  setErrorFor(userName, 'Username cannot be blank', userNameError)
})

email.addEventListener('input', function () {
  setErrorFor(email, 'Email is required', emailError)
})
userPassword.addEventListener('input', function() {
  setErrorFor(userPassword, 'Password is required', passwordError)
})

// form.addEventListener('submit', function(e) {
//    e.preventDefault();

//    if(confirm.checked==false) {
//         document.getElementbyId('checkboxError').style.display = block;
//          return false;
//         }
//   //  if(document.getElementById('checkbox').checked == false) {
//   //    alert('plz check the checkbox field')
//   //  }
// })

        