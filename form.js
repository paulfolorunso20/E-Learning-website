// form
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get value from input
  //trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
 

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, " Oops! Username cannot be blank");
  }else if (usernameValue.length < 8 || usernameValue.length > 16) {
    setErrorFor(username, "Username should be minimum of 8 and maximum of 16 characters");
  }else {
    // add success class
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, " Oops! Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email address");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .from-control 
  const small = formControl.querySelector('small');
  
  // add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
 
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
