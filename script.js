// validation for name
let validateFullName = function () {
  let fullNameTrimmed = document.getElementById("fullName").value.trim();
  console.log(fullNameTrimmed);

  let errorMessage = "";

  const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

  if (fullNameTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Name cannot be empty ';
  } else if (!fullNameTrimmed.match(regex)) {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Invalid name';
  } else {
    errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
  }

  document.getElementById("fullNameError").innerHTML = errorMessage;
};

// for validation of phoneNumber
let validatePhoneNumber = function () {
  let phoneNumberTrimmed = document.getElementById("phoneNumber").value.trim();
  console.log(phoneNumberTrimmed);

  let errorMessage = "";

  const regex = /^((\d{10})|((\d{3})(-)(\d{3})(-)(\d{4}))|((\d{3})(\.)(\d{3})(\.)(\d{4}))|((\d{3})( )(\d{3})( )(\d{4})))$/g;

  if (phoneNumberTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Field cannot be empty ';
  } else if (!phoneNumberTrimmed.match(regex)) {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Invalid format';
  } else {
    errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
  }

  document.getElementById("phoneNumberError").innerHTML = errorMessage;
};
// validation for email 
let validateEmailAddress = function () {
  let emailAddressTrimmed = document.getElementById("emailAddress").value.trim();
  console.log(emailAddressTrimmed);

  let errorMessage = "";

  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (emailAddressTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Field cannot be empty ';
  } else if (!emailAddressTrimmed.match(regex)) {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Invalid email address';
  } else {
    errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
  }

  document.getElementById("emailAddressError").innerHTML = errorMessage;
};
//  password validation
let validatePassword = function () {
  let passwordTrimmed = document.getElementById("password").value.trim();
  // console.log(passwordTrimmed);

  var meter = document.getElementById('password-strength-meter');
  
  let errorMessage = "";


  // Regex for passing password input
  const mediumRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  const weakCharRegex = /^.{8,}$/g;
  const strongCharRegex = /^(?=.*(`|!|@|#|\$|%|\^|&|\*|\(|\)|_|-|\+))(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g

  if (passwordTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Field cannot be empty. ';
  } else if (!passwordTrimmed.match(mediumRegex)) {
    if(passwordTrimmed.match(weakCharRegex))
    {
      errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Weak: Add one upper case, one lower case and one number.';
      meter.value = 1;
    }
    else
    {
      errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Weak: Minimum 8 characters required.';
      meter.value = 1;
    }
  } else {
    // Passing case of passwords
    if(passwordTrimmed.match(strongCharRegex))
    {
      errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i> <span style="color: seagreen;">Strong</span>';
      meter.value = 3;
    }
    else
    {
      errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: #ff6500;"></i> <span style="color: #ff6500;">Medium: Add a special character(`!@#$%^&*()_-+) to make the password strong.</span>';
      meter.value = 2;
    }
  }

  document.getElementById("passwordError").innerHTML = errorMessage;
};