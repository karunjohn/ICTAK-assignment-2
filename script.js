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

  const regex = /^(\d{10})|((\d{3})(-)(\d{3})(-)(\d{4}))|((\d{3})(\.)(\d{3})(\.)(\d{4}))|((\d{3})( )(\d{3})( )(\d{4}))$/g;

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
