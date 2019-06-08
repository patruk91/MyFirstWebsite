function isFilled() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value;
  console.log(name.length);
  console.log(email);
  if (name.length > 0 && email.length > 0 && message.length > 0) {
    console.log("OK");
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = true;
  }
}

function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if(!checkName(name)) {
    alert("Name: " + name + " is incorrect. Capital letter at beginning, without numbers")
  } else if (!checkEmail(email)) {
    alert("E-mail is incorrect " + email)
  }else {
    alert("Message has been sent. Thank you!")
  }
}

function checkName(name) {
  return /^[A-Z]+[a-z]+((\s+[A-Z]+([a-z]+)?)?)+$/.test(name);
}

function checkEmail(email) {
  return /[^\.][A-Z0-9a-z_%+-.]+@[A-Z0-9a-z]+\.[A-Za-z]{2,}/.test(email);
}
