let signupButton = document.getElementById("signup-button");

let validationStates = {
  fullName: false,
  phoneNumber: false,
  emailAddress: false,
  password: false,
};

let enableSubmitIfAllValid = function () {
  if (
    validationStates.fullName &&
    validationStates.phoneNumber &&
    validationStates.emailAddress &&
    validationStates.password
  ) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};

// validation for name
let validateFullName = function () {
  let fullNameTrimmed = document.getElementById("fullName").value.trim();
  console.log(fullNameTrimmed);

  let errorMessage = "";

  const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;

  if (fullNameTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Name cannot be empty ';
    validationStates.fullName = false;
    signupButton.disabled = true;
  } else if (!fullNameTrimmed.match(regex)) {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Invalid name';
    validationStates.fullName = false;
    signupButton.disabled = true;
  } else {
    errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
    validationStates.fullName = true;
    enableSubmitIfAllValid();
  }

  document.getElementById("fullNameError").innerHTML = errorMessage;
};

// for validation of phoneNumber
let validatePhoneNumber = function () {
  let phoneNumberTrimmed = document.getElementById("phoneNumber").value.trim();
  console.log(phoneNumberTrimmed);

  let errorMessage = "";

  const regex =
    /^((\d{10})|((\d{3})(-)(\d{3})(-)(\d{4}))|((\d{3})(\.)(\d{3})(\.)(\d{4}))|((\d{3})( )(\d{3})( )(\d{4})))$/g;

  if (phoneNumberTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Field cannot be empty ';
    validationStates.phoneNumber = false;
    signupButton.disabled = true;
  } else if (!phoneNumberTrimmed.match(regex)) {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Invalid format';
    validationStates.phoneNumber = false;
    signupButton.disabled = true;
  } else {
    errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
    validationStates.phoneNumber = true;
    enableSubmitIfAllValid();
  }

  document.getElementById("phoneNumberError").innerHTML = errorMessage;
};
// validation for email
let validateEmailAddress = function () {
  let emailAddressTrimmed = document
    .getElementById("emailAddress")
    .value.trim();
  console.log(emailAddressTrimmed);

  let errorMessage = "";

  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (emailAddressTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Field cannot be empty ';
    validationStates.emailAddress = false;
    signupButton.disabled = true;
  } else if (!emailAddressTrimmed.match(regex)) {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Invalid email address';
    validationStates.emailAddress = false;
    signupButton.disabled = true;
  } else {
    errorMessage =
      '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
    validationStates.emailAddress = true;
    enableSubmitIfAllValid();
  }

  document.getElementById("emailAddressError").innerHTML = errorMessage;
};
//  password validation
let validatePassword = function () {
  let passwordTrimmed = document.getElementById("password").value.trim();
  // console.log(passwordTrimmed);

  var meter = document.getElementById("password-strength-meter");

  let errorMessage = "";

  // Regex for passing password input
  const mediumRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  const weakCharRegex = /^.{8,}$/g;
  const strongCharRegex =
    /^(?=.*(`|!|@|#|\$|%|\^|&|\*|\(|\)|_|-|\+))(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

  if (passwordTrimmed === "") {
    errorMessage =
      '<i class="fa-regular fa-circle-xmark"></i> Field cannot be empty. ';
    validationStates.password = false;
    signupButton.disabled = true;
  } else if (!passwordTrimmed.match(mediumRegex)) {
    signupButton.disabled = true;
    validationStates.password = false;
    if (passwordTrimmed.match(weakCharRegex)) {
      errorMessage =
        '<i class="fa-regular fa-circle-xmark"></i> Weak: Add one upper case, one lower case and one number.';
      meter.value = 1;
    } else {
      errorMessage =
        '<i class="fa-regular fa-circle-xmark"></i> Weak: Minimum 8 characters required.';
      meter.value = 1;
    }
  } else {
    // Passing case of passwords
    validationStates.password = true;
    enableSubmitIfAllValid();
    if (passwordTrimmed.match(strongCharRegex)) {
      errorMessage =
        '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i> <span style="color: seagreen;">Strong</span>';
      meter.value = 3;
    } else {
      errorMessage =
        '<i class="fa-regular fa-circle-check" style="color: #ff6500;"></i> <span style="color: #ff6500;">Medium: Add a special character(`!@#$%^&*()_-+) to make the password strong.</span>';
      meter.value = 2;
    }
  }

  document.getElementById("passwordError").innerHTML = errorMessage;
};
