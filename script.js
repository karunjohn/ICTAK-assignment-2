let validateFullName = function () {
  let fullNameTrimmed = document.getElementById("fullName").value.trim();
  console.log(fullNameTrimmed);
  let errorMessage = "";
  const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  if (fullNameTrimmed === "") {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Name cannot be empty ';
  } else if (!fullNameTrimmed.match(regex)) {
    errorMessage = '<i class="fa-regular fa-circle-xmark"></i> Invalid name';
  } else {
    errorMessage = '<i class="fa-regular fa-circle-check" style="color: seagreen;"></i>';
  }

  document.getElementById("fullNameError").innerHTML = errorMessage;
};
